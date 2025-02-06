Unit Converter - Frontend

This is the frontend of the Unit Converter web application built with React.js and Tailwind CSS. The app allows users to convert between different units (e.g., meters to kilometers, Celsius to Fahrenheit) and view their conversion history.

🚀 Features

Input a value and select input/output units.

Convert values instantly with a Convert button.

View conversion history fetched from the backend.

Responsive UI with Tailwind CSS.

🛠 Tech Stack

React.js (Frontend Framework)

Axios (API Calls)

Tailwind CSS (Styling)

📌 Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/sindhu-rajesh/unit-converter-frontend.git
cd unit-converter-frontend

2️⃣ Install dependencies

npm install

3️⃣ Start the application

npm start

This will start the app at http://localhost:5173.

🔗 Backend API Connection

The frontend connects to a Node.js + Express + MongoDB backend.

GET /api/history → Fetch conversion history

POST /api/convert → Convert units and save history

📡 API Base URL

Modify src/config.js (if needed) to set the backend URL:

export const API_BASE_URL = "http://localhost:52025";

📂 Project Structure

unit-converter-frontend/
│── src/
│   ├── components/
│   │   ├── Converter.js  # Main unit converter component
│   ├── App.js            # Main app file
│   ├── index.js          # React entry point
│── public/
│── package.json         # Project dependencies
│── tailwind.config.js   # Tailwind CSS setup
│── README.md            # Documentation

🎯 Usage

Enter a number in the input field.

Select input and output units.

Click Convert to see the converted value.

Click View History to check previous conversions.

📌 Example Conversions

Input Value

Input Unit

Output Unit

Converted Value

1000

meter

kilometer

1

32

Fahrenheit

Celsius

0





🚀 Happy Coding! 🎯

