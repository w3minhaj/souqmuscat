import mongoose from 'mongoose'
import { cities, areas } from '../../shippingAddresses.js'

const offerProductSchema = mongoose.Schema(
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
    expireAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

offerProductSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 })

const OfferProduct = mongoose.model('OfferProduct', offerProductSchema)

export default OfferProduct
