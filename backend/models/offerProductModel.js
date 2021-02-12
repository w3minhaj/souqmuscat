import mongoose from 'mongoose'

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
            enum: ['area 1', 'area 2', 'area 3'],
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
  },
  {
    timestamps: true,
  }
)

const OfferProduct = mongoose.model('OfferProduct', offerProductSchema)

export default OfferProduct
