import mongoose from 'mongoose'
// Table Schema

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  discription: { type: String, required: false },
  price: { type: Number, required: true },
  previousprice: { type: Number, required: true },
  category: { type: String, required: true },
  imgUrl: { type: String, required: true },
});

export const products = mongoose.model("Product", ProductSchema);