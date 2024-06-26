import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithObjects() {

    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment"

    const [module, setModule] = useState({
        id: 1, name: "Module Name",
        description: "Module's Description",
        course: "Module's Course"
    })
    const MODULE_URL = "http://localhost:4000/a5/module"

    const todos = [
        { id: 1, title: "Task 1", completed: false },
        { id: 2, title: "Task 2", completed: true },
        { id: 3, title: "Task 3", completed: false },
        { id: 4, title: "Task 4", completed: true },
    ];

    const fetchAssignment = async () => {
        const response = await axios.get(`${ASSIGNMENT_URL}`);
        setAssignment(response.data);
    };
    const updateTitle = async () => {
        const response = await axios
            .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
        setAssignment(response.data);
    };
    useEffect(() => {
        fetchAssignment();
    }, []);



    return (
        <div>
            <h3>Working With Objects</h3>

            <h4>Retrieving Objects</h4>
            <a href="http://localhost:4000/a5/assignment">
                Get Assignment
            </a>

            <h4>Retrieving Properties</h4>
            <a href="http://localhost:4000/a5/assignment/title">
                Get Title
            </a>

            <h4>Modifying Properties</h4>
            <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input type="text"
                onChange={(e) => setAssignment({
                    ...assignment,
                    title: e.target.value
                })}
                value={assignment.title} />

            <h4>Testing Retreiving Module Object</h4>
            <a href="http://localhost:4000/a5/module">
                Get Module
            </a>

            <h4>Retreiving Module Name</h4>
            <a href="http://localhost:4000/a5/module/name">
                Get Module's Name
            </a>

            
            <h4>Modifying Module's Property</h4>
            <a href={`${MODULE_URL}/name/${module.name}`}>
                Update Module Name
            </a>
            <input type="text"
                onChange={(e) => setModule({
                    ...module,
                    name: e.target.value
                })}
                value={module.name} />

            <br/>
            <br/>

            <a href={`${MODULE_URL}/description/${module.description}`}>
                Update Module Description
            </a>
            <br/>
            <textarea
                onChange={(e) => setModule({
                    ...module,
                    description: e.target.value
                })}
                value={module.description} />


            <h4>Modifying Assignment's Property</h4>
            <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
                Update Assignment score
            </a>
            <input type="number"
                onChange={(e) => setAssignment({
                    ...assignment,
                    score: parseInt(e.target.value)
                })}
                value={assignment.score} />

            <br/>

            <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>
                Update Assignment Completed
            </a>
            <input type="checkbox"
                onChange={(e) => setAssignment({
                    ...assignment,
                    completed: e.target.checked
                })}
                checked={assignment.completed} />



            
            <h3 style={{marginTop:'35px'}}>Modifying Properties</h3>
            <input onChange={(e) => setAssignment({
                ...assignment, title: e.target.value
            })}
                value={assignment.title} type="text" />
            <button onClick={updateTitle} >
                Update Title to: {assignment.title}
            </button>
            <button onClick={fetchAssignment} >
                Fetch Assignment
            </button>

            
            
        </div>
        
    );
}
export default WorkingWithObjects;