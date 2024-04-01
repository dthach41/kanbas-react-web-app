import React, { useState } from "react";

function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";

    const [todo, setTodo] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });



    return (
        <div>
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a href={API}>
                Get Todos
            </a>

            <h4>Retrieving an Item from an Array by ID</h4>
            <input type="number" value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: parseInt(e.target.value)
                })} />
            <a href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>

            <h3>Filtering Array Items</h3>
            <a href={`${API}?completed=true`} className="btn btn-primary">
                Get Completed Todos
            </a>

            <h3>Creating new Items in an Array</h3>
            <a href={`${API}/create`} className="btn btn-primary">
                Create Todo
            </a>

            <h3>Deleting from an Array</h3>
            <a href={`${API}/${todo.id}/delete`} className="btn btn-danger">
                Delete Todo with ID = {todo.id}
            </a>


            <h2>Working with Arrays</h2>
            <input type="number" value={todo.id}
                onChange={(e) => setTodo({
                    ...todo, id: parseInt(e.target.value)
                })} />
            <input type="text" value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })} />
            <h3>Updating an Item in an Array</h3>
            <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary">
                Update Title to {todo.title}
            </a>


            <h3>Updating Todo's 'Completed' Property </h3>
            {/* clicking this btn updates the completed property */}
            <a href={`${API}/${todo.id}/completed/${todo.completed}`} className="btn btn-primary" style={{marginRight:'10px'}}>
                Update Todo's 'Completed' Property
            </a>
            <input type="checkbox" checked={todo.completed}
                onChange={(e)=> setTodo({
                    ...todo,
                    completed: !todo.completed
                })}>
            </input>


            <h3>Updating Todo's Description</h3>
            <a href={`${API}/${todo.id}/description/${todo.description}`} className="btn btn-primary"
             style={{ marginBottom: '10px' }}>
                Update Module Description
            </a>
            <br/>
            <textarea value={todo.description}
                onChange={(e) => setTodo({
                    ...todo,
                    description: e.target.value
                })}>

            </textarea>




            

            
        </div>
    );
}
export default WorkingWithArrays;