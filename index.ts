import express from "express";
import cors from "cors";

import { comments, postComments } from "./src";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Server is running");
});
app.get("/comments/:parentId", comments);
app.post("/comments", postComments);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
