import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

import exercisesRoutes from "./routes/exercises.js";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());

app.use("/exercises", exercisesRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Homepage.");
});

app.listen(PORT, () =>
  console.log(`Server running on port: https://localhost:${PORT}`),
);
