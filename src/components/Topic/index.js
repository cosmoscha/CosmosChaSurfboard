import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Agenda from "../Agenda";

const Topic = (props) => {
    const navigate=useNavigate();
    {console.log(props.test, "props")}
    return(
        
        <div key={props.id}>
            <button onClick={()=> navigate(`/topic/${props.id}`)}>
                Title: {props.title}
            </button>
            
            <div>Estimated Time: {props.time}</div>
            <div> Description: {props.desc}</div>
        </div>
    )
}

export default Topic