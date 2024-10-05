import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  summary: { type: String, required: true },
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  readingDuration: { type: String, required: true },
});
// Check if the model already exists in mongoose.models
const Article = mongoose.models.Article || mongoose.model('Article', articleSchema);
export default Article;
