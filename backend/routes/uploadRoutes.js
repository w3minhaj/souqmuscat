import path from 'path'
import express from 'express'
import multer from 'multer'
import { v4 as uuid } from 'uuid'
const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '../uploads/')
  },
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${uuid()}${path.extname(file.originalname)}`)
  },
})

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only!')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

router.post('/', upload.array('image', 12), (req, res) => {
  res.send(`/${req.files.map((file) => file.filename)}`)
})

export default router
