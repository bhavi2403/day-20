import React from "react";

function TaskList({tasks}) {
 
    return(
        <div style={{margin:"10px 0"}}>
            <h3>Task List</h3>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );

}

export default TaskList;