import connectToDatabase from "@/db/db";
import Article from "@/models/article.model";

export default async function handler(req, res) {
  await connectToDatabase();
  if (req.method === "GET") {
    const articles = await Article.find();
    res.json(articles);
  }
}
