# Flask-React Record App

This is a simple full-stack application built with Flask (backend) and React (frontend). The app allows users to insert and retrieve records (such as names or messages) via a web interface.

## Project Overview
- **Backend**: Flask API that handles the insertion and retrieval of records in memory.
- **Frontend**: React UI for interacting with the backend API (insert a record and fetch the last inserted record).

## Prerequisites
- **Python 3.x** and `pip`
- **Node.js** and `npm`
- **Git** (to clone the repository)

## Assumptions
- You have Python 3.x installed on your machine.
- You have Node.js installed for the React application.
- You are familiar with basic terminal commands to navigate directories and run commands.

---

## Steps to Run the Application

### 1. Clone the Repository
First, clone the GitHub repository to your local machine

### 2. Backend (Flask) Setup
Navigate to the backend directory and set up a virtual environment.
```jsx
cd backend
python -m venv venv            # For Mac/Linux - python3 -m venv venv
venv\Scripts\activate          # For Mac/Linux - source venv/bin/activate
pip install -r req.txt
python app.py
```
The Flask backend will now be running at http://127.0.0.1:5000.

### 2. Frontend (React) Setup
Open a new terminal window or tab, then navigate to the frontend directory.
```jsx
cd frontend
npm install  # Install frontend dependencies
npm start    # Run the React development server
```

**The React frontend will now be running at http://localhost:3000**
