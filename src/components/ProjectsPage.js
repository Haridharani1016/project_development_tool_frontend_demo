import React, { useState } from 'react';
import AddProjectModal from './AddProjectModal';
import ProjectCard from './Projectcard';

const ProjectsPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

return (
    <div className="px-12 py-6 w-full">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">All Projects</h1>
            <button
                onClick={() => setModalOpen(true)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
                Create Project
            </button>
        </div>

        <div className="flex gap-6 flex-wrap">

            <ProjectCard projectName = "React App" />

            <ProjectCard projectName = "Node App" />
        </div>

        {/* Modal Component */}
        <AddProjectModal 
            isModalOpen={isModalOpen} 
            closeModal={() => setModalOpen(false)} 
        />
    </div>
);
};

export default ProjectsPage;
