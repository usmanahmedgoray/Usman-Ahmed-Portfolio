import connectToDatabase from "@/db/db";
import Article from "@/models/article.model";

export default async function handler(req, res) {
  await connectToDatabase();
  if (req.method === "POST") {
    try {
      const { title, image, summary, url, readingDuration } = req.body;
      const newArticle = await Article.create({
        title,
        image,
        summary,
        url,
        readingDuration,
      });
      res.status(201).json(newArticle);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
