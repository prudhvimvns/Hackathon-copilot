import React, {useEffect} from "react";
// import Dashboard from "./dashboard";
import ChatGPT from "./chatGPT";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Dashboard = () => {
    useEffect(() => {
        console.log("Dashboard component mounted."); // Add this line
    }, []);

    const redirectChatgpt =()=>{
        window.location.href ='/chatGPT';
    }


    const openChatbotModal = () => {
        // Trigger Bootstrap modal by its ID
        const modal = document.getElementById("chatbotModal");
        if (modal) {
          modal.style.display = "block";
        }
    };
        

    return(
        <div>
            <h1>Dashboard Page 🔥</h1>  
            <button onClick={redirectChatgpt}>ChatGPT</button>

            <button onClick={openChatbotModal} className="btn btn-primary">
        Open Chatbot
      </button>


{/* Bootstrap Modal */}
<div className="modal" id="chatbotModal">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Chatbot</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              {/* Your chatbot UI content goes here */}
              <div className="chatbot-container">
                {/* Chatbot messages and input */}
                {/* ... */}
              </div>
            </div>
          </div>
        </div>
      </div>



        </div>
    )
}

export default Dashboard;