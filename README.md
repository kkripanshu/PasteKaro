Pastekaro

Pastekaro is a simple, user-friendly web application that allows users to paste text or code and generate a unique link to access it. The content is view-only, with no authentication required, making it quick and easy to share snippets or notes with others.

Features

Create Paste: Easily paste your text or code and generate a unique URL.
Shareable Link: Get a unique link to share the content with others.
No Authentication: Paste without needing to log in or create an account.
View-Only: The pasted content is only viewable and copyable—no editing allowed.
Simple Interface: Clean and minimalistic design for easy usage.


Tech Stack


Frontend: React, Tailwind CSS, Ant Design
Backend: Node.js, Express
Database: MongoDB (for storing paste content and unique links)
Deployment: Vercel for frontend hosting, Heroku for backend hosting


Installation
Prerequisites
Node.js installed on your machine.
MongoDB for the database (or use a cloud solution like MongoDB Atlas).
Git for version control.


Setup

Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/pastekaro.git
cd pastekaro
Install backend dependencies: Navigate to the backend directory and install dependencies:

bash
Copy
Edit
cd backend
npm install
Set up the backend: Create a .env file in the backend directory with the following variables:

bash
Copy
Edit
PORT=5000
MONGODB_URI=your-mongo-db-uri
Run the backend server:

bash
Copy
Edit
npm start
Install frontend dependencies: Navigate to the frontend directory and install dependencies:

bash
Copy
Edit
cd ../frontend
npm install
Run the frontend:

bash
Copy
Edit
npm start
Open your browser and go to http://localhost:3000 to see the application running.

How It Works
Creating a Paste: Users can type or paste text into the input area and click "Create Paste."
Accessing the Paste: A unique link will be generated, which the user can share. The link will lead to a page where the paste content is displayed in a read-only view.
Deleting Pastes: Pastes will be stored for a certain period or until manually removed. The link will not be editable by the user.
