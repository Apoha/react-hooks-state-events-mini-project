import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App(text, category) {

const [tasks, setTasks] = useState(TASKS)

const [categorySelected, setCategorySelected] = useState("All")



const taskToDisplay = tasks.filter((task) => {
    
  if (categorySelected === "All") return true;

  return task.category === categorySelected;

});




  return (
    <div className="App">
      <h2>My tasks</h2>
    
     <CategoryFilter categories={CATEGORIES} categorySelected={categorySelected} setCategorySelected={setCategorySelected}/>
      <NewTaskForm categories = {CATEGORIES}/>

      
      <TaskList text={text} caterory={category} tasks={taskToDisplay} />
      

      
    </div>
  );
}

export default App;
