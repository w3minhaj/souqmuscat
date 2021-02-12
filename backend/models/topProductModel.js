import mongoose from 'mongoose'

const topProductSchema = mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Product',
  },
})

const TopProduct = mongoose.model('TopProduct', topProductSchema)

export default TopProduct
