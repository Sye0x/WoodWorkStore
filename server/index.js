import cors from "cors";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
