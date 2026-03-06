import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  try {
    // Clear old sample projects and reseed with real ones
    const existingProjects = await storage.getProjects();
    const isStale = existingProjects.some(p =>
      p.title === "Predictive Maintenance for IoT" ||
      p.title === "NLP Customer Sentiment Analysis" ||
      p.title === "Computer Vision Defect Detection"
    );

    if (existingProjects.length === 0 || isStale) {
      // Delete old projects by recreating — simplest approach is to just insert if empty
      if (existingProjects.length === 0) {
        await storage.createProject({
          title: "AlphaScope AI — Stock Analysis Engine",
          description: "Full-stack agentic AI prototype with dual-signal recommendations separating hold/sell guidance from buy/wait entry signals. Engineered a three-layer scoring pipeline using fundamental metrics, technical indicators (RSI, MACD, Bollinger Bands), and FinBERT NLP sentiment on financial news. Integrated Groq Llama 3.3 narratives and a RAG chat interface.",
          imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
          tags: ["Python", "LLM", "RAG", "FinBERT", "Streamlit", "Groq"],
          githubUrl: "https://github.com/aryamaniboruah",
          liveUrl: "https://github.com/aryamaniboruah"
        });

        await storage.createProject({
          title: "Clinical Trial Navigator",
          description: "NLP-powered trial discovery engine matching patients to breast cancer trials using a three-layer pipeline: semantic search via sentence-transformer embeddings in ChromaDB, clinical NER with spaCy, and rule-based scoring. Composite relevance scores with LLM-generated clinician-friendly explanations and RAG chat.",
          imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
          tags: ["NLP", "RAG", "ChromaDB", "spaCy", "HuggingFace", "LLM"],
          githubUrl: "https://github.com/aryamaniboruah",
          liveUrl: "https://github.com/aryamaniboruah"
        });

        await storage.createProject({
          title: "Customer LTV Intelligence Platform",
          description: "End-to-end analytics pipeline on 93,000 e-commerce customers predicting lifetime value from 12 RFM and behavioral features — identified and removed 4 leaky features to ensure generalizability. Delivered a 4-tab Streamlit dashboard with live single-customer scoring, bulk batch prediction, automated data drift alerts, and a model registry — translating outputs into High/Mid/Low value tier classifications.",
          imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
          tags: ["Python", "ML", "Streamlit", "RFM", "XGBoost", "Data Drift"],
          githubUrl: "https://github.com/aryamaniboruah",
          liveUrl: "https://advertiser-ltv-predictor-7ds5ekxqzymugz4m5qpqci.streamlit.app/"
        });

        await storage.createProject({
          title: "Ad Creative Fatigue Detector",
          description: "Engineered 10+ behavioral signals from raw ad engagement time-series data — including CTR decay rates, impression velocity, and rolling engagement drop ratios — to detect when creatives lose effectiveness. Integrated SHAP explainability to surface top fatigue drivers per creative, deployed as a live Streamlit dashboard with batch scoring and per-prediction attribution.",
          imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
          tags: ["Python", "SHAP", "Streamlit", "Time-Series", "Ad Tech", "XGBoost"],
          githubUrl: "https://github.com/aryamaniboruah",
          liveUrl: "https://ad-creative-fatigue-detector-x48vy2qn6pt8nfqwxtnr82.streamlit.app/"
        });

        console.log("Database seeded with real projects.");
      }
    }
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed the database on startup
  seedDatabase();

  app.get(api.projects.list.path, async (req, res) => {
    try {
      const allProjects = await storage.getProjects();
      res.json(allProjects);
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get(api.projects.get.path, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(404).json({ message: "Project not found" });
      }
      const project = await storage.getProject(id);
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      res.json(project);
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
