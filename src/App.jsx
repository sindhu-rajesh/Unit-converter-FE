import  { useState } from "react";
import Converter from "./components/Converter";
import History from "./components/History";

function App() {
    const [history, setHistory] = useState([]);
    const [showHistory, setShowHistory] = useState(false);

    const addToHistory = (conversion) => {
        setHistory([conversion, ...history].slice(0, 5)); // Store only last 5 conversions
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
            <Converter addToHistory={addToHistory} />
            <button 
                className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                onClick={() => setShowHistory(!showHistory)}
            >
                {showHistory ? "Hide History" : "View History"}
            </button>
            {showHistory && <History history={history} />}
        </div>
    );
}

export default App;

