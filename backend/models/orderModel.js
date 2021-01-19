import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
  {
    orderItems: {
      type: [
        {
          name: { type: String, required: true },
          qty: { type: Number, required: true },
          images: { type: [String], required: true },
          priceInUSD: { type: Number, required: true },
          priceInOMR: { type: Number, required: true },
          shippingPriceInUSD: { type: Number, required: true },
          shippingPriceInOMR: { type: Number, required: true },
          product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Product',
          },
        },
      ],
      required: true,
    },
    mobileNo: {
      type: String,
      required: true,
    },
    mobileNo2: {
      type: String,
    },
    email: {
      type: String,
    },
    shippingAddress: {
      type: String,
      enum: ['area 1', 'area 2', 'area 3'],
    },
    totalPriceInUSD: {
      type: Number,
      required: true,
    },
    totalPriceInOMR: {
      type: Number,
      required: true,
    },
    totalShippingPriceInUSD: {
      type: Number,
      required: true,
      default: 0,
    },
    totalShippingPriceInOMR: {
      type: Number,
      required: true,
      default: 0,
    },
    // shippingAddress: {
    //   address: { type: String, required: true },
    //   city: { type: String, required: true },
    //   postalCode: { type: String, required: true },
    //   country: { type: String, required: true },
    // },
    // paymentMethod: {
    //   type: String,
    //   required: true,
    // },
    // paymentResult: {
    //   id: { type: String },
    //   status: { type: String },
    //   update_time: { type: String },
    //   email_address: { type: String },
    // },
    // shippingPrice: {
    //   type: Number,
    //   required: true,
    //   default: 0.0,
    // },
    // totalPrice: {
    //   type: Number,
    //   required: true,
    //   default: 0.0,
    // },
    // isDelivered: {
    //   type: Boolean,
    //   required: true,
    //   default: false,
    // },
    // deliveredAt: {
    //   type: Date,
    // },
  },
  {
    timestamps: true,
  }
)

const Order = mongoose.model('Order', orderSchema)

export default Order
