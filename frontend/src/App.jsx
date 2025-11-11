import { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import DeveloperForm from './components/DeveloperForm';
import DeveloperList from './components/DeveloperList';
import SearchFilter from './components/SearchFilter';
import axios from 'axios';
import './App.css';

// Use environment variable for API URL, fallback to localhost for development
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function App() {
  const [developers, setDevelopers] = useState([]);
  const [filteredDevelopers, setFilteredDevelopers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  // Fetch developers from API
  const fetchDevelopers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/developers`);
      if (response.data.success) {
        setDevelopers(response.data.data);
        setFilteredDevelopers(response.data.data);
      }
    } catch (error) {
      toast.error('Failed to fetch developers');
      console.error('Error fetching developers:', error);
    } finally {
      setLoading(false);
    }
  };

  // Add new developer
  const addDeveloper = async (developerData) => {
    try {
      const response = await axios.post(`${API_URL}/developers`, developerData);
      if (response.data.success) {
        toast.success('Developer added successfully!');
        fetchDevelopers();
        return true;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to add developer');
      console.error('Error adding developer:', error);
      return false;
    }
  };

  // Filter developers based on search term and role
  useEffect(() => {
    let filtered = developers;

    // Filter by role
    if (roleFilter !== 'All') {
      filtered = filtered.filter(dev => dev.role === roleFilter);
    }

    // Filter by search term (name or tech stack)
    if (searchTerm.trim()) {
      filtered = filtered.filter(dev => {
        const searchLower = searchTerm.toLowerCase();
        return (
          dev.name.toLowerCase().includes(searchLower) ||
          dev.techStack.toLowerCase().includes(searchLower)
        );
      });
    }

    setFilteredDevelopers(filtered);
  }, [searchTerm, roleFilter, developers]);

  useEffect(() => {
    fetchDevelopers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Toaster position="top-right" />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Developer Directory
          </h1>
          <p className="text-gray-600 text-lg">
            Manage and explore our talented developer community
          </p>
        </div>

        {/* Add Developer Form */}
        <div className="mb-8">
          <DeveloperForm onAddDeveloper={addDeveloper} />
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <SearchFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            roleFilter={roleFilter}
            setRoleFilter={setRoleFilter}
          />
        </div>

        {/* Developer List */}
        <DeveloperList
          developers={filteredDevelopers}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default App;
