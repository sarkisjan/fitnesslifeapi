# 🏋️ FitnessLife RESTful API

A scalable, production-grade RESTful API built with **Node.js** and **Express**, engineered to parse, filter, and serve structured datasets for over 1,200 fitness routines. The architecture utilizes modern ES6 syntax and is securely deployed in a live containerized environment on **Render**.

🌐 **Live Deployment Root URL:** [https://onrender.com](https://onrender.com)

---

## 🛠️ Architecture & Tech Stack

- **Runtime Environment:** Node.js
- **Backend Framework:** Express.js
- **Data Processing Logic:** Custom ES6 pipelines (`Object.fromEntries`, `.reduce()`, `.filter()`, `.map()`) mapping database payloads dynamically.
- **Middleware Layers:**
  - `cors`: Enabled Cross-Origin Resource Sharing for seamless frontend integration (e.g., React Apps).
  - `body-parser`: Formatted incoming request bodies directly into manageable JSON tokens.
  - `express.static`: Configured static folder pipeline serving media streaming assets cleanly.
- **Hosting Platform:** Render Cloud Infrastructure

---

## 📖 Global Core Endpoints Reference

### 1. Root Welcome Route

Verifies the running operational status of the hosted cloud server environment.

- **URL:** `/`
- **Method:** `GET`
- **Success Response:** `200 OK`
- **Payload Format:** Text string (`Hello from Homepage.`)
- **Live Test:** `https://onrender.com/`

---

## 🦾 Exercises Routing Sandbox Engine

_Note: Every endpoint within this section is nested under the main `/exercises` group middleware configuration routing pipeline._

### 2. Fetch All Exercises Dataset

Extracts and streams down the entire collection mapping out every individual exercise object tracking data available in the data matrices.

- **URL:** `/exercises`
- **Method:** `GET`
- **Success Response:** `200 OK`
- **Returns:** `Array<Object>` (Complete Exercises JSON array)
- **Live Link:** `https://onrender.com/exercises`

### 3. Extract Unique Body Parts Collection

Scans records arrays dynamically and returns an optimized array containing only unique targeted body parts tracking labels.

- **URL:** `/exercises/bodyPartList`
- **Method:** `GET`
- **Success Response:** `200 OK`
- **Returns:** `Array<String>` (e.g., `["back", "cardio", "chest", "lower arms", "waist"]`)
- **Live Link:** `https://onrender.com/exercises/bodyPartList`

### 4. Extract Unique Equipment Categories Collection

Compiles a unique array mapping every fitness gear item or equipment criteria variant recorded inside the backend dataset.

- **URL:** `/exercises/equipmentList`
- **Method:** `GET`
- **Success Response:** `200 OK`
- **Returns:** `Array<String>` (e.g., `["barbell", "dumbbell", "body weight", "cable", "stability ball"]`)
- **Live Link:** `https://onrender.com/exercises/equipmentList`

### 5. Extract Unique Primary Muscles Target Tags

Aggregates and delivers a distinct unique collection array detailing all main targeted biological muscle tracking properties.

- **URL:** `/exercises/primaryMusclesList`
- **Method:** `GET`
- **Success Response:** `200 OK`
- **Returns:** `Array<String>` (e.g., `["biceps", "delts", "pectorals", "lats", "quads"]`)
- **Live Link:** `https://onrender.com/exercises/primaryMusclesList`

### 6. Fetch Equipment Affiliate E-Commerce Matrix

Filters database array loops dynamically, omits null entries, and forms a clean data object tracking properties using the format `{ equipment_name: amazon_affiliate_link }`.

- **URL:** `/exercises/amazonLinksList`
- **Method:** `GET`
- **Success Response:** `200 OK`
- **Returns:** `Object` (e.g., `{ "dumbbell": "https://amazon.com...", "barbell": "https://amazon.com..." }`)
- **Live Link:** `https://onrender.com/exercises/amazonLinksList`

---

## 🔍 Parameterized Dynamic Filtering Engines

### 7. Lookup Specific Item by Target ID

- **URL:** `/exercises/id/:id`
- **Method:** `GET`
- **Params:** `:id` (The exact unique string tracking string code assigned to the exercise asset)
- **Returns:** `Array<Object>` (An array containing the target matched object)
- **Example Link:** `https://onrender.com/exercises/id/0001`

### 8. Full-Text Query Lookup by Routine Name

- **URL:** `/exercises/name/:name`
- **Method:** `GET`
- **Params:** `:name` (Partial or full string matching dynamic exercise naming labels query bounds)
- **Returns:** `Array<Object>` (Collection of all exercises bearing names that include the parameter string)
- **Example Link:** `https://onrender.com/exercises/name/press`

### 9. Query Filter by Primary Muscle System

- **URL:** `/exercises/primaryMuscles/:primaryMuscles`
- **Method:** `GET`
- **Params:** `:primaryMuscles` (Target primary muscle group lookup query string value)
- **Returns:** `Array<Object>`
- **Example Link:** `https://onrender.com/exercises/primaryMuscles/biceps`

### 10. Query Filter by Equipment Requirement

- **URL:** `/exercises/equipment/:equipment`
- **Method:** `GET`
- **Params:** `:equipment` (Specific equipment name text keyword tracking filter argument)
- **Returns:** `Array<Object>`
- **Example Link:** `https://onrender.com/exercises/equipment/dumbbell`

### 11. Query Filter by Target Body Part Division

- **URL:** `/exercises/bodyPart/:bodyPart`
- **Method:** `GET`
- **Params:** `:bodyPart` (Specific physiological body part context criteria target)
- **Returns:** `Array<Object>`
- **Example Link:** `https://onrender.com/exercises/bodyPart/chest`
