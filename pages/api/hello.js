import connectToDatabase from "@/db/db";

export default async function handler(req, res) {
  await connectToDatabase();
  res.json({msg:"Hello"})
}