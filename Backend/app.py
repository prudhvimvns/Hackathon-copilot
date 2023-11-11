from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain.llms import OpenAI
from langchain.utilities import SQLDatabase
from typing import Optional
import os
import tempfile

app = FastAPI()

class ChatRequest(BaseModel):
    openai_api_key: str
    user_input: str
    temperature: float 
    verbose: bool

class Message(BaseModel):
    user: str
    text: str

chat_history = []  # In-memory storage for chat messages

def extract_text_from_pdf(pdf_file):
    try:
        # Implement the PDF extraction logic
        pass
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error extracting text from PDF: {str(e)}")

def chat_with_pdf(text, openai_key, query):
    try:
        os.environ['OPENAI_API_KEY'] = openai_key
        text_splitter = CharacterTextSplitter(
            separator="\n",
            chunk_size=800,
            chunk_overlap=200,
            length_function=len,
        )
        texts = text_splitter.split_text(text)
        embeddings = OpenAIEmbeddings()
        document_search = FAISS.from_texts(texts, embeddings)
        chain = load_qa_chain(OpenAI(), chain_type="stuff")
        docs = document_search.similarity_search(query)
        result = chain.run(input_documents=docs, question=query)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing the PDF: {str(e)}")

@app.post("/chat")
async def chat_with_db(chat_request: ChatRequest):
    try:
        response = chat_with_pdf("Implement logic to get PDF text", chat_request.openai_api_key, chat_request.user_input)

        # Save the chat message to the in-memory storage
        chat_history.append(Message(user="User", text=chat_request.user_input))
        chat_history.append(Message(user="Bot", text=response))

        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")

@app.get("/get_chat_history")
async def get_chat_history():
    return chat_history




# // uvicorn main:app --reload
