import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Landing.css'; // Import CSS file for styling

const Landing = () => {
    // Dummy data for demonstration
    const [projects, setProjects] = useState([
        { name: "Project 1", status: "Active" },
        { name: "Project 2", status: "Active" },
        { name: "Project 3", status: "Active" },
        { name: "Project 4", status: "Active" },
        { name: "Project 5", status: "Active" },
        { name: "Project 6", status: "Active" },
        // Adding more completed projects for demonstration
        { name: "Project 7", status: "Completed" },
        { name: "Project 8", status: "Completed" },
        { name: "Project 9", status: "Completed" },
        { name: "Project 10", status: "Completed" },
        { name: "Project 11", status: "Completed" },
        { name: "Project 12", status: "Completed" },
        { name: "Project 13", status: "Completed" },
        { name: "Project 14", status: "Completed" },
        { name: "Project 15", status: "Completed" },
        { name: "Project 16", status: "Completed" },
        { name: "Project 17", status: "Completed" },
        { name: "Project 18", status: "Completed" },
        { name: "Project 19", status: "Completed" },
        { name: "Project 20", status: "Completed" },
        { name: "Project 21", status: "Completed" },
        { name: "Project 22", status: "Completed" },
        { name: "Project 23", status: "Completed" }
    ]);

    const [searchQuery, setSearchQuery] = useState('');

    // Function to filter projects based on search query
    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Construction Website Dashboard</h1>

            {/* Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for a project..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                <button>Search</button>
            </div>

            {/* Active Projects */}
            <h2>Active Projects</h2>
            <div className="project-grid">
                {filteredProjects.map(project => (
                    project.status === "Active" &&
                    <Link to={`/project/${project.name}`} key={project.name}>
                        <div className="project active">{project.name}</div>
                    </Link>
                ))}
            </div>

            {/* Completed Projects */}
            <h2>Completed Projects</h2>
            <div className="project-grid">
                {filteredProjects.map(project => (
                    project.status === "Completed" &&
                    <Link to={`/project/${project.name}`} key={project.name}>
                        <div className="project completed">{project.name}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Landing;