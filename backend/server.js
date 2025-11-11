import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Data file path
const DATA_FILE = path.join(__dirname, 'developers.json');

// Initialize data file if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
}

// Helper function to read developers from file
const readDevelopers = () => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading developers:', error);
    return [];
  }
};

// Helper function to write developers to file
const writeDevelopers = (developers) => {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(developers, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing developers:', error);
    return false;
  }
};

// GET /developers - Get all developers
app.get('/developers', (req, res) => {
  try {
    const developers = readDevelopers();
    res.status(200).json({
      success: true,
      count: developers.length,
      data: developers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching developers',
      error: error.message
    });
  }
});

// POST /developers - Add a new developer
app.post('/developers', (req, res) => {
  try {
    const { name, role, techStack, experience } = req.body;

    // Validation
    if (!name || !role || !techStack || experience === undefined) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, role, techStack, experience'
      });
    }

    // Validate role
    const validRoles = ['Frontend', 'Backend', 'Full-Stack'];
    if (!validRoles.includes(role)) {
      return res.status(400).json({
        success: false,
        message: 'Role must be one of: Frontend, Backend, Full-Stack'
      });
    }

    // Validate experience
    if (isNaN(experience) || experience < 0) {
      return res.status(400).json({
        success: false,
        message: 'Experience must be a non-negative number'
      });
    }

    const developers = readDevelopers();
    
    const newDeveloper = {
      id: Date.now().toString(),
      name: name.trim(),
      role,
      techStack: techStack.trim(),
      experience: parseFloat(experience),
      createdAt: new Date().toISOString()
    };

    developers.push(newDeveloper);
    
    if (writeDevelopers(developers)) {
      res.status(201).json({
        success: true,
        message: 'Developer added successfully',
        data: newDeveloper
      });
    } else {
      throw new Error('Failed to save developer');
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error adding developer',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Developer Directory API is running'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
