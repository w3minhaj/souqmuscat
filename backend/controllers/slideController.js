import asyncHandler from 'express-async-handler'
import Slide from '../models/slideModel.js'

const addSlide = asyncHandler(async (req, res) => {
  const { image, link } = req.body

  if (image && link) {
    const slide = new Slide({
      image,
      link,
    })

    const createdSlide = await slide.save()

    res.status(201).json(createdSlide)
  } else {
    throw new Error("Can't create slide")
  }
})

const getSlides = asyncHandler(async (req, res) => {
  const slides = await Slide.find({})

  res.json(slides)
})

const deleteSlide = asyncHandler(async (req, res) => {
  const { id } = req.params

  const deletedSlide = await Slide.deleteOne({ _id: id })

  if (!deletedSlide) {
    throw new Error('No slide with this id')
  }

  res.status(204).json(deletedSlide)
})

export { addSlide, getSlides, deleteSlide }
