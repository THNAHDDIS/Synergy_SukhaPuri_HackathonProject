import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Project.css';

const Project = () => {
    const { id } = useParams();

    const [documents, setDocuments] = useState([
        { id: 1, projectId: id, name: "Document 1", keywords: ["keyword1", "keyword2"] },
        { id: 2, projectId: id, name: "Document 2", keywords: ["keyword3", "keyword4"] },
        { id: 3, projectId: id, name: "Document 3", keywords: ["keyword5", "keyword6"] },
        { id: 4, projectId: id, name: "Document 4", keywords: ["keyword7", "keyword8"] },
        { id: 5, projectId: id, name: "Document 5", keywords: ["keyword9", "keyword10"] },
        { id: 6, projectId: id, name: "Document 6", keywords: ["keyword11", "keyword12"] },
        { id: 7, projectId: id, name: "Document 7", keywords: ["keyword13", "keyword14"] },
        { id: 8, projectId: id, name: "Document 8", keywords: ["keyword15", "keyword16"] },
        { id: 9, projectId: id, name: "Document 9", keywords: ["keyword17", "keyword18"] },
        { id: 10, projectId: id, name: "Document 10", keywords: ["keyword19", "keyword20"] },
        { id: 11, projectId: id, name: "Document 11", keywords: ["keyword21", "keyword22"] },
        { id: 12, projectId: id, name: "Document 12", keywords: ["keyword23", "keyword24"] },
        { id: 13, projectId: id, name: "Document 13", keywords: ["keyword25", "keyword26"] },
        { id: 14, projectId: id, name: "Document 14", keywords: ["keyword27", "keyword28"] },
        { id: 15, projectId: id, name: "Document 15", keywords: ["keyword29", "keyword30"] },
    ]);

    const [logs, setLogs] = useState([
        { id: 1, projectId: id, date: "2024-02-25", content: "Log 1 content", keywords: ["keyword1", "keyword3"] },
        { id: 2, projectId: id, date: "2024-02-24", content: "Log 2 content", keywords: ["keyword2", "keyword4"] },
        { id: 3, projectId: id, date: "2024-02-23", content: "Log 3 content", keywords: ["keyword5", "keyword6"] },
        { id: 4, projectId: id, date: "2024-02-22", content: "Log 4 content", keywords: ["keyword7", "keyword8"] },
        { id: 5, projectId: id, date: "2024-02-21", content: "Log 5 content", keywords: ["keyword9", "keyword10"] },
        { id: 6, projectId: id, date: "2024-02-20", content: "Log 6 content", keywords: ["keyword11", "keyword12"] },
        { id: 7, projectId: id, date: "2024-02-19", content: "Log 7 content", keywords: ["keyword13", "keyword14"] },
        { id: 8, projectId: id, date: "2024-02-18", content: "Log 8 content", keywords: ["keyword15", "keyword16"] },
        { id: 9, projectId: id, date: "2024-02-17", content: "Log 9 content", keywords: ["keyword17", "keyword18"] },
        { id: 10, projectId: id, date: "2024-02-16", content: "Log 10 content", keywords: ["keyword19", "keyword20"] },
        { id: 11, projectId: id, date: "2024-02-15", content: "Log 11 content", keywords: ["keyword21", "keyword22"] },
        { id: 12, projectId: id, date: "2024-02-14", content: "Log 12 content", keywords: ["keyword23", "keyword24"] },
        { id: 13, projectId: id, date: "2024-02-13", content: "Log 13 content", keywords: ["keyword25", "keyword26"] },
        { id: 14, projectId: id, date: "2024-02-12", content: "Log 14 content", keywords: ["keyword27", "keyword28"] },
        { id: 15, projectId: id, date: "2024-02-11", content: "Log 15 content", keywords: ["keyword29", "keyword30"] },
        { id: 16, projectId: id, date: "2024-02-10", content: "Log 16 content", keywords: ["keyword31", "keyword32"] },
        { id: 17, projectId: id, date: "2024-02-09", content: "Log 17 content", keywords: ["keyword33", "keyword34"] },
        { id: 18, projectId: id, date: "2024-02-08", content: "Log 18 content", keywords: ["keyword35", "keyword36"] },
        { id: 19, projectId: id, date: "2024-02-07", content: "Log 19 content", keywords: ["keyword37", "keyword38"] },
        { id: 20, projectId: id, date: "2024-02-06", content: "Log 20 content", keywords: ["keyword39", "keyword40"] },
    ]);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredDocuments = documents.filter(document =>
        document.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        document.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const filteredLogs = logs.filter(log =>
        log.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        log.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase())) ||
        log.date.includes(searchQuery)
    );

    const handleAddDocument = () => {
        // Add logic for adding new document
        console.log("Add new document");
    };

    const handleAddLog = () => {
        // Add logic for adding new log
        console.log("Add new log");
    };

    return (
        <div className="project-container">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div>

            <div className="content-container">
                <div className="left-panel">
                    <h2>Documents</h2>
                    <button onClick={handleAddDocument}>Add New Document</button>
                    <ul className="document-list">
                        {filteredDocuments.map(document => (
                            <li key={document.id}>{document.name}</li>
                        ))}
                    </ul>
                </div>

                <div className="right-panel">
                    <h2>Daily Logs</h2>
                    <button onClick={handleAddLog}>Add New Log</button>
                    <div className="log-container">
                        {filteredLogs.map(log => (
                            <div key={log.id} className="log">
                                <h3>{log.date}</h3>
                                <p>{log.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
