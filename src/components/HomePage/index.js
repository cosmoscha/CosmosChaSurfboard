import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage =()=> {
    const navigate=useNavigate();
    
    return (
        <div>
            <button onClick={()=> navigate('/agenda')}> Create your agenda</button>         
        </div>
    )

}

export default HomePage;

