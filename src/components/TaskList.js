import React, {useState} from "react";


import Task from "./Task"



function TaskList ({tasks}) {

  const[taskToDelete, setTaskToDelete ] = useState(tasks)


function handleDeleteBtn(taskName){
  const deleteTask = taskToDelete.filter(({text}) => { 
  
  return  text !== taskName 
  } 
  );
     
console.log(deleteTask)
// console.log(index)



    setTaskToDelete((deleteTask))
}


  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index)=> <Task key={index} text={task.text} category={task.category} handleDeleteBtn={handleDeleteBtn}
              />)}
    </div>
  );
}

export default TaskList;
