# Environment Configuration

## Frontend Environment Variables

Create a `.env` file in the `frontend` directory:

```env
# API URL - Update this when deploying
VITE_API_URL=http://localhost:5000
```

### For Production:
```env
VITE_API_URL=https://your-backend-url.onrender.com
```

## Backend Environment Variables (Optional)

Create a `.env` file in the `backend` directory:

```env
# Server Port
PORT=5000

# Node Environment
NODE_ENV=development
```

### For Production:
```env
PORT=5000
NODE_ENV=production
```

## Using Environment Variables

### Frontend (App.jsx)
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
```

### Backend (server.js)
```javascript
const PORT = process.env.PORT || 5000;
```

## Important Notes

1. **Never commit .env files to Git** - They're already in .gitignore
2. **Environment variables in Vite must start with VITE_**
3. **Restart servers after changing .env files**
4. **Set environment variables in your hosting platform's dashboard**

## Platform-Specific Setup

### Vercel (Frontend)
1. Go to Project Settings → Environment Variables
2. Add: `VITE_API_URL` = `https://your-backend.onrender.com`

### Render (Backend)
1. Go to Environment → Add Environment Variable
2. Add: `PORT` = `5000` (usually auto-set)
3. Add: `NODE_ENV` = `production`

### Netlify (Frontend)
1. Site settings → Build & deploy → Environment
2. Add: `VITE_API_URL` = `https://your-backend.onrender.com`
