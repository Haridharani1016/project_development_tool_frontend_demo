// TasksPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const TasksPage = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content (60%) */}
      <div className="flex-1 p-8 overflow-auto" style={{flexBasis: '60%'}}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900 mb-2">Project Title</h1>
              <p className="text-gray-600">Project description goes here. A brief overview of the project objectives and scope.</p>
            </div>
            <Link 
              to="/projects" 
              className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
            >
              ← Back to Projects
            </Link>
          </div>

          {/* Tasks Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <table className="w-full">
              <thead className="border-b border-gray-100">
                <tr>
                  <th className="text-left py-4 px-6 text-gray-600 font-medium">Task Name</th>
                  <th className="text-left py-4 px-6 text-gray-600 font-medium">Assigned To</th>
                  <th className="text-left py-4 px-6 text-gray-600 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((task) => (
                  <tr key={task} className="hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                    <td className="py-4 px-6 text-gray-900">Task {task}</td>
                    <td className="py-4 px-6 text-gray-600">John Doe</td>
                    <td className="py-4 px-6">
                      <span className="inline-block px-3 py-1 rounded-full text-sm bg-indigo-50 text-indigo-600">
                        In Progress
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Members Sidebar (40%) */}
      <div className="w-full p-8 bg-white border-l border-gray-100" style={{flexBasis: '40%'}}>
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-semibold text-gray-900">Team Members</h2>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Invite Member
            </button>
          </div>

          {/* Members List */}
          <div className="space-y-4">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center mr-4">
                  JD
                </div>
                <div>
                  <h3 className="text-gray-900 font-medium">John Doe</h3>
                  <p className="text-gray-600 text-sm">Developer</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksPage;