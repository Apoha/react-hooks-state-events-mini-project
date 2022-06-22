import React from "react";

function NewTaskForm(props) {
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
          {props.categories.filter((category) => <option>{category}</option>)}
      
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
