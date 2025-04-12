# 🧠 AI Email Generator

A full-stack AI-powered email generator built with the MERN stack and **Google Gemini 2.0 Flash API**. Generate professional, personalized emails at the click of a button!

---

## 🚀 Features

- 🔥 Generates professional emails using **Gemini AI** (Google Generative AI)
- 🌐 Built with the **MERN Stack** (Express, React, Node)
- 🎨 **Beautiful UI** with **Tailwind CSS**
- ⚡ **Axios-powered** API calls from frontend to backend
- ✨ Dynamic button with **loading state**
- 📦 **Environment variable support** with `dotenv` for backend API keys

---

## 🧠 Tech Stack

| Tech        | Description                                    |
|-------------|------------------------------------------------|
| **Frontend** | React, Vite, Axios, Tailwind CSS               |
| **Backend**  | Node.js, Express.js, Google Generative AI      |
| **AI API**   | **Gemini 2.0 Flash** via `@google/generative-ai` |

---

## 📂 Project Structure

ai_email_generator/
├── client/          # Frontend - React + Tailwind
│   ├── public/      # Public assets (e.g., images, favicon, etc.)
│   ├── src/         # React components and assets
│   │   ├── components/  # React components
│   │   ├── App.jsx   # Main component
│   │   └── index.js  # Entry point for React
│   ├── vite.config.js  # Vite configuration file
│   └── .env          # Environment variables for frontend
│
├── server/          # Backend - Express + AI service
│   ├── src/
│   │   ├── controllers/  # Logic for handling API requests
│   │   ├── routes/       # API route definitions (e.g., /api/generate/email)
│   │   └── services/     # Service to interact with Gemini AI API
│   ├── app.js           # Main backend application file
│   └── .env             # Environment variables (API keys, etc.)
│
├── README.md        # Project documentation
