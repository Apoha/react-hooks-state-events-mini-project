import React, {useState} from "react";
import Task from "./Task"



function TaskList(TASKS ) {

  const[deleteBtn, setDeleteBtn] = useState(false)


function handleDeleteBtn(){
setDeleteBtn((deleteBtn) => !deleteBtn)
}

  const tasksList= TASKS.map((task) => (
      
    <Task 
    key={task.text} 
    text={task.text} 
    category={task.category}
    deleteBtn ={deleteBtn}
    handleDeleteBtn ={handleDeleteBtn}
    />))




  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
     {tasksList}
     
    </div>
  );
}

export default TaskList;
