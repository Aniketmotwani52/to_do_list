import React, { useState } from "react";

function App()
{
  
  const [newTask, setNewTask] = useState("");
  const [tasks, addNewTask] = useState([]);
  
  function handleNewTask(event)
  {
    console.log(event.target.value);
    const newValue = event.target.value;
    setNewTask(newValue);
  }

  function handleList()
  {
    addNewTask((prevTasks) => {return[...prevTasks,newTask]});
    setNewTask("");
  }

  return(
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" placeholder="Add your Task" onChange={handleNewTask} value={newTask}></input>
        <button onClick={handleList}>
          <span> Add </span>
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((currentTask,index) => {
            return (<li key={index}>{currentTask}</li>);
          })}        
        </ul>
      </div>
    </div>
  );
}

export default App;
