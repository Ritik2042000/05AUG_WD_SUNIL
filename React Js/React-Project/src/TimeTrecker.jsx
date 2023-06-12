// import React from 'react';
import React, { useState } from 'react';

const TimeTrecker = () => {



    const [projectName, setProjectName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission and save project
        // You can use a state management library or local storage to store the project data
    };

    return (
        <div>
            <h1>Create a Project</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Project Name"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                />
                <button type="submit">Create Project</button>
            </form>
        </div>
    );
}



export default TimeTrecker;