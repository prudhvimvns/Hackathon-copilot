import React, {useEffect} from "react";
// import Dashboard from "./dashboard";
import ChatGPT from "./chatGPT";


const Dashboard = () => {
    useEffect(() => {
        console.log("Dashboard component mounted."); // Add this line
    }, []);

    const redirectChatgpt =()=>{
        window.location.href ='/chatGPT';
    }

    return(
        <div>
            <h1>Dashboard Page 🔥</h1>  
            <button onClick={redirectChatgpt}>ChatGPT</button>
        </div>
    )
}

export default Dashboard;