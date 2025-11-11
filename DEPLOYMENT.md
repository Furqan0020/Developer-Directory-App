# Developer Directory App - Deployment Guide

## Quick Start

### Local Development

**Terminal 1 - Backend:**
```bash
cd backend
npm install
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm install
npm run dev
```

Access the app at: `http://localhost:5173`

## Deployment Options

### Option 1: Vercel + Render (Recommended)

#### Backend (Render.com - Free)
1. Push code to GitHub
2. Go to [Render.com](https://render.com)
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name:** developer-directory-backend
   - **Root Directory:** backend
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free
6. Click "Create Web Service"
7. Copy your backend URL (e.g., https://your-app.onrender.com)

#### Frontend (Vercel - Free)
1. Go to [Vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** frontend
   - **Build Command:** `npm run build`
   - **Output Directory:** dist
4. Add Environment Variable:
   - **Name:** `VITE_API_URL`
   - **Value:** Your Render backend URL
5. Update `frontend/src/App.jsx`:
   ```javascript
   const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
   ```
6. Deploy!

### Option 2: Railway (Free Tier)

1. Go to [Railway.app](https://railway.app)
2. Create new project from GitHub repo
3. Deploy both backend and frontend
4. Set environment variables as needed

### Option 3: Netlify + Heroku

Similar process to Vercel + Render combination.

## Important Notes

- Make sure to update CORS settings in backend if needed
- Backend free tier may sleep after inactivity (first request may be slow)
- Keep your API URL updated in frontend after deployment

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=https://your-backend-url.com
```

### Backend (.env) - Optional
```
PORT=5000
NODE_ENV=production
```
