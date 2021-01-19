import mongoose from 'mongoose'

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    nameInArabic: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    },
    description: {
      type: String,
      required: true,
    },
    descriptionInArabic: {
      type: String,
      required: true,
    },
    priceInUSD: {
      type: Number,
      required: true,
      default: 0,
    },
    priceInOMR: {
      type: Number,
      required: true,
      default: 0,
    },
    shippingCharge: {
      type: [
        {
          area: {
            type: String,
            enum: ['area 1', 'area 2', 'area 3'],
          },
          priceInUSD: {
            type: Number,
            required: true,
            default: 0,
          },
          priceInOMR: {
            type: Number,
            required: true,
            default: 0,
          },
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
