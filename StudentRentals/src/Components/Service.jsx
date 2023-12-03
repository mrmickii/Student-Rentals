import React from "react";
import "../CSS/Service.css"

function Service(props){
  return(
    <>
    <div className="card">
      <box-icon 
        name={props.svg} 
        size='lg' >
      </box-icon>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
    </>
  )
}

export default Service