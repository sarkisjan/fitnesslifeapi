import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

import exercisesRoutes from "./routes/exercises.js";

const app = express();
app.use(cors());
app.use(express.static("public"));
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());

app.use("/exercises", exercisesRoutes);

// Render a clean, interactive HTML API directory directly on the root homepage route
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>FitnessLife RESTful API</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #121212;
          color: #e0e0e0;
          padding: 40px;
          max-width: 800px;
          margin: 0 auto;
        }
        h1 { color: #20c4cb; border-bottom: 2px solid #20c4cb; padding-bottom: 10px; }
        h2 { color: #ffffff; margin-top: 30px; font-size: 1.3rem; }
        ul { list-style: none; padding: 0; }
        li { 
          background: rgba(255,255,255,0.03); 
          margin: 10px 0; 
          padding: 12px 18px; 
          border-radius: 6px; 
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .method {
          background-color: #20c4cb;
          color: #000;
          font-weight: bold;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          margin-right: 15px;
        }
        a { color: #00f2fe; text-decoration: none; font-family: monospace; font-size: 1rem; }
        a:hover { text-decoration: underline; }
        .desc { color: rgba(255,255,255,0.6); font-size: 0.9rem; }
      </style>
    </head>
    <body>
      <h1>🏋️ FitnessLife RESTful API Directory</h1>
      <p>Welcome! This backend server parses over 1,200 fitness routines. Click on any live core endpoint below to inspect the real-time JSON payload metadata pipelines:</p>
      
      <h2>Core Aggregation Endpoints</h2>
      <ul>
        <li>
          <div><span class="method">GET</span><a href="/exercises" target="_blank">/exercises</a></div>
          <span class="desc">Fetch All Exercises</span>
        </li>
        <li>
          <div><span class="method">GET</span><a href="/exercises/bodyPartList" target="_blank">/exercises/bodyPartList</a></div>
          <span class="desc">Unique Body Parts List</span>
        </li>
        <li>
          <div><span class="method">GET</span><a href="/exercises/equipmentList" target="_blank">/exercises/equipmentList</a></div>
          <span class="desc">Unique Equipment List</span>
        </li>
        <li>
          <div><span class="method">GET</span><a href="/exercises/primaryMusclesList" target="_blank">/exercises/primaryMusclesList</a></div>
          <span class="desc">Unique Primary Muscles List</span>
        </li>
        <li>
          <div><span class="method">GET</span><a href="/exercises/amazonLinksList" target="_blank">/exercises/amazonLinksList</a></div>
          <span class="desc">Affiliate E-Commerce Mapping</span>
        </li>
      </ul>

      <h2>Example Parameterized Lookup Filters</h2>
      <ul>
        <li>
          <div><span class="method">GET</span><a href="/exercises/id/0001" target="_blank">/exercises/id/0001</a></div>
          <span class="desc">Lookup by Target ID</span>
        </li>
        <li>
          <div><span class="method">GET</span><a href="/exercises/name/press" target="_blank">/exercises/name/press</a></div>
          <span class="desc">Full-Text Search by Name</span>
        </li>
        <li>
          <div><span class="method">GET</span><a href="/exercises/primaryMuscles/biceps" target="_blank">/exercises/primaryMuscles/biceps</a></div>
          <span class="desc">Filter by Primary Muscle</span>
        </li>
      </ul>
    </body>
    </html>
  `);
});

app.listen(PORT, () =>
  console.log(`Server running on port: https://localhost:${PORT}`),
);
