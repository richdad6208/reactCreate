import express, { Request, Response } from "express";
import "dotenv/config";
import "./db";

const app = express();

const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.get("/api/rating", (req: Request, res: Response) => {
  const { score } = req.body;
  res.status(200).json({ success: true, score: score });
});

app.listen(port, () => {
  console.log(`SERVER ON 🌎 ${port}`);
});
