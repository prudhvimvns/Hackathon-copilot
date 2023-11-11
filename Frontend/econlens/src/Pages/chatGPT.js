import React from "react";
import "./chatGPT.css"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ChatGPT = () =>{


    const openChatbotModal = () => {
        // Trigger Bootstrap modal by its ID
        const modal = document.getElementById("chatbotModal");
        if (modal) {
          modal.style.display = "block";
        }
    };

    const closeChatbotModal = () => {
        // Close Bootstrap modal by its ID
        const modal = document.getElementById("chatbotModal");
        if (modal) {
          modal.style.display = "none";
        }
      };
    

    return (
        <div>
            <h1>Chat GPT</h1>


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
                type="button" class="close btn btn-light" className="close" data-dismiss="modal" aria-label="Close" onClick={closeChatbotModal}>
                &times;
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              {/* Your chatbot UI content goes here */}
              <div className="chatbot-container">
                {/* Chatbot messages and input */}
                {/* ... */}

                <div>
                    <div className="chat-history">
                        <div className="message">Hello, how can I help you?</div>
                        <div className="message">This is a response.</div>
                        <div className="message">Hello, how can I help you?</div>
                        <div className="message">This is a response.</div><div className="message">Hello, how can I help you?</div>
                        <div className="message">This is a response.</div><div className="message">Hello, how can I help you?</div>
                        <div className="message">This is a response.</div><div className="message">Hello, how can I help you?</div>
                        <div className="message">This is a response.</div><div className="message">Hello, how can I help you?</div>
                        <div className="message">This is a response.</div><div className="message">Hello, how can I help you?</div>
                        <div className="message">This is a response.</div><div className="message">Hello, how can I help you?</div>
                        <div className="message">This is a response.</div><div className="message">Hello, how can I help you?</div>
                        <div className="message">This is a response.</div><div className="message">Hello, how can I help you?</div>
                        <div className="message">This is a response.</div>
                    </div>
                </div>

                <div className="row userInputClass">
                    <div className="col-lg-10">
                        <input className="margin20" type="text" id="inputTextBox" name="inputTextBox"  placeholder="Type a new Question(eg:- Does my plan cover annual eye exams?)🙋‍♂️" />
                    </div>

                    <div className="submitClass col-lg-2">
                        <button type="button" class="btn btn-primary">Submit</button>
                    </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>



        </div>
    )
}

export default ChatGPT;