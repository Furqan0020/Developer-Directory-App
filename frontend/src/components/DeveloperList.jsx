const DeveloperCard = ({ developer }) => {
  const techArray = developer.techStack.split(',').map(tech => tech.trim());
  
  const roleColors = {
    'Frontend': 'bg-blue-100 text-blue-800',
    'Backend': 'bg-green-100 text-green-800',
    'Full-Stack': 'bg-purple-100 text-purple-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {developer.name}
          </h3>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${roleColors[developer.role]}`}>
            {developer.role}
          </span>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-blue-600">
            {developer.experience}
          </p>
          <p className="text-xs text-gray-500">years</p>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {techArray.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const DeveloperList = ({ developers, loading }) => {
  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        <p className="mt-4 text-gray-600">Loading developers...</p>
      </div>
    );
  }

  if (developers.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-12 text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <h3 className="mt-2 text-lg font-medium text-gray-900">No developers found</h3>
        <p className="mt-1 text-gray-500">
          Get started by adding a new developer above.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-4 text-center">
        <p className="text-gray-600">
          Showing <span className="font-semibold text-blue-600">{developers.length}</span> developer{developers.length !== 1 ? 's' : ''}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {developers.map((developer) => (
          <DeveloperCard key={developer.id} developer={developer} />
        ))}
      </div>
    </div>
  );
};

export default DeveloperList;
