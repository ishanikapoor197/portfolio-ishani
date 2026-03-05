// import express from "express";
// import { createServer as createViteServer } from "vite";
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// async function startServer() {
//   const app = express();
//   const PORT = process.env.PORT || 3000;

//   app.use(express.json());

//   // API Routes
//   app.get("/api/resume", (req, res) => {
//     try {
//       const resumePath = path.join(__dirname, "src", "data", "resume.json");
//       const resumeData = fs.readFileSync(resumePath, "utf-8");
//       res.json(JSON.parse(resumeData));
//     } catch (error) {
//       console.error("Error reading resume data:", error);
//       res.status(500).json({ error: "Failed to load resume data" });
//     }
//   });

//   app.post("/api/contact", (req, res) => {
//     const { name, email, message } = req.body;
//     console.log(`Contact form submission:`, { name, email, message });
//     // In a real app, you'd send an email or save to a database
//     res.json({ success: true, message: "Message received!" });
//   });

//   // Vite middleware for development
//   if (process.env.NODE_ENV !== "production") {
//     const vite = await createViteServer({
//       server: { middlewareMode: true },
//       appType: "spa",
//     });
//     app.use(vite.middlewares);
//   } else {
//     // Production static serving
//     app.use(express.static(path.join(__dirname, "dist")));
//     app.get("*", (req, res) => {
//       res.sendFile(path.join(__dirname, "dist", "index.html"));
//     });
//   }

//   app.listen(PORT, "0.0.0.0", () => {
//     console.log(`Server running on http://localhost:${PORT}`);
//   });
// }

// startServer();
import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/resume", (req, res) => {
    try {
      const resumePath = path.join(__dirname, "src", "data", "resume.json");
      const resumeData = fs.readFileSync(resumePath, "utf-8");
      res.json(JSON.parse(resumeData));
    } catch (error) {
      console.error("Error reading resume data:", error);
      res.status(500).json({ error: "Failed to load resume data" });
    }
  });

  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    console.log("Contact form:", { name, email, message });

    res.json({
      success: true,
      message: "Message received!",
    });
  });

  // Development (Vite middleware)
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });

    app.use(vite.middlewares);
  } else {
    // Production build
    app.use(express.static(path.join(__dirname, "dist")));

    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();