import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  imageUrl: String,
  active: { type: Boolean, default: true },
});

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);
