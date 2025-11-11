# Quick Start Guide

## ⚡ Get Started in 3 Minutes

### Step 1: Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

### Step 2: Start Both Servers

**Terminal 1 - Backend (Port 5000):**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend (Port 5173):**
```bash
cd frontend
npm run dev
```

### Step 3: Open Your Browser

Navigate to: **http://localhost:5173**

That's it! 🎉

## 📱 Using the App

### Add a Developer
1. Fill out the form at the top
2. Click "Add Developer"
3. See a success toast notification

### Search Developers
- Type in the search box to find by name or technology
- Use the role dropdown to filter by Frontend/Backend/Full-Stack

### View Details
- See all developers in beautiful cards
- Each card shows name, role, tech stack, and experience

## 🔧 Troubleshooting

### Backend not starting?
- Make sure port 5000 is available
- Check if Node.js is installed: `node --version`

### Frontend not loading?
- Clear browser cache
- Check if port 5173 is available
- Restart the frontend server

### Can't add developers?
- Make sure backend is running first
- Check browser console for errors
- Verify backend URL in `frontend/src/App.jsx`

## 📝 Next Steps

1. **Test the app** - Add some developers and try filtering
2. **Customize** - Modify colors, add features
3. **Deploy** - See DEPLOYMENT.md for hosting options

## 🚀 Deployment Checklist

- [ ] Test all features locally
- [ ] Push code to GitHub
- [ ] Deploy backend (Render/Railway/Heroku)
- [ ] Update frontend API URL
- [ ] Deploy frontend (Vercel/Netlify)
- [ ] Test production app
- [ ] Share link with intern@talrn.com

---

Need help? Check the full README.md for detailed documentation.
