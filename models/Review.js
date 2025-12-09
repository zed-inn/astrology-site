import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
  name: String,
  rating: Number, // 1 to 5
  comment: String,
  approved: { type: Boolean, default: false },
});

export default mongoose.models.Review || mongoose.model("Review", ReviewSchema);
