
---

## 📘 `server/README.md` (Backend)

```md
# Server – Backend API

This folder contains the backend API for the Admission Consultancy Website.

## 🚀 Tech Stack
- Node.js
- Serverless Functions (Vercel)
- MongoDB (Database)

## 🎯 Purpose
- Receive enquiry / counselling forms from frontend
- Store leads securely in database
- Enable future admin or CRM integration

## 📂 Key Responsibilities
- Handle form submissions
- Validate and sanitize user input
- Store lead data
- Send notifications (email / WhatsApp – future scope)

## 🔌 API Overview
| Method | Endpoint     | Description           |
|------- |------------- |---------------------- |
| POST   | /api/leads   | Save new lead         |
| GET    | /api/leads   | Fetch leads (admin)  |

## ☁️ Deployment
- Platform: **Vercel (Serverless)**
- APIs exposed via `/api/*` routes
- Environment variables stored securely

## ▶️ Run Locally
```bash
npm install
npm run dev
