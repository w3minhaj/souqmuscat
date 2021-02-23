import mongoose from 'mongoose'
import { cities, areas } from '../../shippingAddresses.js'

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
    description: {
      type: String,
      required: true,
    },
    descriptionInArabic: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Category',
    },
    price: {
      type: Number,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    featured: {
      type: Boolean,
      required: true,
      default: false,
    },
    shippingCharge: {
      type: [
        {
          area: {
            type: String,
            enum: areas,
            required: true,
          },
          city: {
            type: String,
            enum: cities,
            required: true,
          },
          price: {
            type: Number,
            required: true,
            default: 0,
          },
        },
      ],
      required: true,
    },
    stock: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
