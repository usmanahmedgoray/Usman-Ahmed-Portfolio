import connectToDatabase from "@/db/db";
import Article from "@/models/article.model";
import mongoose from "mongoose";

// Ensure DB connection is established once during the app lifecycle
let isConnected = false;

export default async function handler(req, res) {
  try {
    if (!isConnected) {
      await connectToDatabase();
      isConnected = true;
    }

    const { id } = req.query;

    // Check if ID is valid for all methods requiring it
    if (!id || !mongoose.isValidObjectId(id)) {
      return res.status(400).json({ msg: "Invalid or missing ID" });
    }

    switch (req.method) {
      case "GET":
        await handleGetRequest(id, res);
        break;
      case "PUT":
        await handlePutRequest(id, req.body, res);
        break;
      case "DELETE":
        await handleDeleteRequest(id, res);
        break;
      default:
        res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
        res.status(405).json({ msg: `Method ${req.method} Not Allowed` });
    }
  } catch (error) {
    console.error("Server Error:", error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

const handleGetRequest = async (id, res) => {
  try {
    // Use lean for performance
    const article = await Article.findById(id).lean(); 
    if (!article) return res.status(404).json({ msg: "Article not found" });
    res.json(article);
  } catch (error) {
    throw new Error("Error fetching article");
  }
};

const handlePutRequest = async (id, data, res) => {
  try {
    const article = await Article.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    if (!article) return res.status(404).json({ msg: "Article not found" });
    res.json(article);
  } catch (error) {
    throw new Error("Error updating article");
  }
};

const handleDeleteRequest = async (id, res) => {
  try {
    const article = await Article.findByIdAndDelete(id);
    if (!article) return res.status(404).json({ msg: "Article not found" });
    res.json(article);
  } catch (error) {
    throw new Error("Error deleting article");
  }
};
