import React, {useEffect} from "react";
// import Dashboard from "./dashboard";

const Dashboard = () => {
    useEffect(() => {
        console.log("Dashboard component mounted."); // Add this line
    }, []);

    return(
        <div>
            <h1>Dashboard Page 🔥</h1>  
        </div>
    )
}

export default Dashboard;