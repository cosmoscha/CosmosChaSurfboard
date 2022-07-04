import React, { useEffect, useState, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Topic from "../Topic";

 let topicArray = [
    { id: 1, title: "Daily Scrum", time: "30 min", desc: "daily meeting for scrum" },
    { id: 2, title: "Aha Board", time: "5 min", desc: "brief overview of Aha board" }, 
    {id: 3, title: "High Impact Issues", time: "60 min", desc: "go over high impact issues" }
]


const Agenda =()=> {
    const navigate=useNavigate();
    const [topics, setTopics] = useState(topicArray)
    const [loaded, setLoaded] = useState(true)

    const removeAgenda = (index) => {
        setTopics((topics) => topics.filter((_, i) => i !== index))
    }

    const addAgenda = (entry) => {
        setTopics((topics) => topics.concat(entry))
    }

    console.log(topics, "topics")
    useEffect(()=> {
        setLoaded(true)
},[])
    if(!loaded) {
        return null
    }
    return loaded && topics ? (
        <div>
            {console.log(topics, "topics within")}
            agenda
                {topics.map((val,index) => (
                    // <div key={val.id}>
                    //     <button onClick={()=> navigate(`/topic/${val.id}`)}>
                    //         {val.title}
                    //     </button>
                    //     <div>Estimated Time: {val.time}</div>
                    //     <div> Description: {val.desc}</div>
                        
                    // </div>
                    <div>
                    <Topic 
                    id={val.id}
                    title={val.title}
                    time={val.time}
                    desc={val.desc}
                    test="hey"
                    />
                    <button onClick={()=> removeAgenda(index)}>remove</button>
                    </div>
                   
                ))}
            {/* <button onClick={()=> addAgenda({title: "High Impact Issues", time: "60 min", desc: "go over high impact issues"})}> add </button> */}
            <button onClick={()=> navigate(`/topic/${topics.length + 1}`)}> add </button>
        </div>
    ) : null;
}

export default Agenda;