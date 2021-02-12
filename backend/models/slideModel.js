import mongoose from 'mongoose'

const slideSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
})

const Slide = mongoose.model('Slide', slideSchema)

export default Slide
