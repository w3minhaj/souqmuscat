import mongoose from 'mongoose'

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  nameInArabic: {
    type: String,
    required: true,
    unique: true,
  },
})

const Category = mongoose.model('Category', categorySchema)

export default Category
