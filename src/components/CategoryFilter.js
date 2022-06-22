import React, {useState} from "react";
import { CATEGORIES } from "../data";

function CategoryFilter(props) {

  
  
// const [selectCat, setSelectCat] = useState("All")

  function handleCaSelectBtn(cat){
   
    props.setCategorySelected(cat)
  };




  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
     
      {props.categories.map((category, index) => <button className={props.categorySelected === category? "selected" : ""} onClick= {() => handleCaSelectBtn(category)} key={index}>{category}</button>)}
    
    
        
    </div>
  );
}

export default CategoryFilter;
