# Developer Directory App

A full-stack web application for managing and exploring a directory of developers. Built with React, Node.js, Express, and Tailwind CSS.

## 🚀 Features

- ✨ Add new developers with name, role, tech stack, and experience
- 🔍 Search developers by name or technology
- 🎯 Filter developers by role (Frontend/Backend/Full-Stack)
- 📱 Fully responsive design
- ✅ Form validation with error messages
- 🎉 Toast notifications for success/error feedback
- 💾 Data persistence using JSON file storage

## 🛠️ Tech Stack

### Frontend
- **React** - UI library with functional components and hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Beautiful toast notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **CORS** - Cross-origin resource sharing
- **File System (fs)** - JSON file-based data storage

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd "Developer Directory App"
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the backend server
npm start
```

The backend server will run on `http://localhost:5000`

**Note:** For development with auto-restart, you can use:
```bash
npm run dev
```

### 3. Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
Developer Directory App/
├── backend/
│   ├── server.js           # Express server and API endpoints
│   ├── developers.json     # Data storage file
│   ├── package.json        # Backend dependencies
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── DeveloperForm.jsx    # Form to add developers
│   │   │   ├── DeveloperList.jsx    # Display list of developers
│   │   │   └── SearchFilter.jsx     # Search and filter component
│   │   ├── App.jsx                  # Main application component
│   │   ├── main.jsx                 # Application entry point
│   │   └── index.css                # Tailwind CSS imports
│   ├── package.json                 # Frontend dependencies
│   ├── tailwind.config.js           # Tailwind configuration
│   ├── vite.config.js               # Vite configuration
│   └── index.html
│
└── README.md
```

## 🔌 API Endpoints

### GET /developers
Retrieve all developers from the directory.

**Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": "1699123456789",
      "name": "John Doe",
      "role": "Full-Stack",
      "techStack": "React, Node.js, MongoDB",
      "experience": 3.5,
      "createdAt": "2025-11-11T10:30:00.000Z"
    }
  ]
}
```

### POST /developers
Add a new developer to the directory.

**Request Body:**
```json
{
  "name": "Jane Smith",
  "role": "Frontend",
  "techStack": "React, TypeScript, Tailwind",
  "experience": 2
}
```

**Response:**
```json
{
  "success": true,
  "message": "Developer added successfully",
  "data": {
    "id": "1699123456790",
    "name": "Jane Smith",
    "role": "Frontend",
    "techStack": "React, TypeScript, Tailwind",
    "experience": 2,
    "createdAt": "2025-11-11T10:35:00.000Z"
  }
}
```

## 🎨 Features Breakdown

### Form Validation
- Required field validation
- Number validation for experience
- Role dropdown with predefined options
- Real-time error display

### Search & Filter
- Search by developer name or tech stack
- Filter by role (Frontend, Backend, Full-Stack)
- Active filters display with clear buttons
- Real-time filtering

### Responsive Design
- Mobile-first approach
- Grid layout adapts to screen size
- Touch-friendly interface

## 🚢 Deployment

### Backend Deployment (e.g., Render, Railway)
1. Push your code to GitHub
2. Create a new web service
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Set environment variables if needed

### Frontend Deployment (e.g., Vercel, Netlify)
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder
3. Update API_URL in App.jsx to your backend URL

## 📝 Usage

1. **Adding a Developer:**
   - Fill in all required fields in the form
   - Select role from dropdown
   - Enter tech stack as comma-separated values
   - Click "Add Developer"

2. **Searching:**
   - Type in the search box to filter by name or technology
   - Results update in real-time

3. **Filtering:**
   - Select a role from the filter dropdown
   - Combine with search for refined results

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📧 Contact

For any queries regarding this project, please contact: intern@talrn.com

## 📄 License

This project is open source and available under the MIT License.

---

**Developed as part of Talrn.com Internship Selection Task**
