import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image_url: { type: String, required: true }, // match this with your event data
  cartItems: { type: Object, default: {} }
}, { minimize: false });

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
