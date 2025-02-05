import React, { useState } from "react";

const conversionFactors = {
    meter: { kilometer: 0.001, meter: 1, centimeter: 100 },
    kilometer: { meter: 1000, kilometer: 1, centimeter: 100000 },
    centimeter: { meter: 0.01, kilometer: 0.00001, centimeter: 1 },
    celsius: { fahrenheit: (value) => (value * 9/5) + 32, celsius: (value) => value },
    fahrenheit: { celsius: (value) => (value - 32) * 5/9, fahrenheit: (value) => value },
};

const Converter = ({ addToHistory }) => {
    const [fromUnit, setFromUnit] = useState("meter");
    const [toUnit, setToUnit] = useState("kilometer");
    const [value, setValue] = useState("");
    const [result, setResult] = useState(null);

    const handleConvert = () => {
        if (!value || isNaN(value)) {
            alert("Please enter a valid number");
            return;
        }

        let convertedValue;
        if (typeof conversionFactors[fromUnit][toUnit] === "function") {
            convertedValue = conversionFactors[fromUnit][toUnit](parseFloat(value));
        } else {
            convertedValue = parseFloat(value) * conversionFactors[fromUnit][toUnit];
        }

        setResult(convertedValue);
        addToHistory({ fromUnit, toUnit, value, result: convertedValue });
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Unit Converter</h2>
            <input
                type="number"
                className="w-full p-2 border rounded mb-3"
                placeholder="Enter value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <div className="flex justify-between mb-3">
                <select className="p-2 border rounded w-1/2 mr-2" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                    {Object.keys(conversionFactors).map((unit) => (
                        <option key={unit} value={unit}>{unit}</option>
                    ))}
                </select>
                <select className="p-2 border rounded w-1/2 ml-2" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                    {Object.keys(conversionFactors).map((unit) => (
                        <option key={unit} value={unit}>{unit}</option>
                    ))}
                </select>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600" onClick={handleConvert}>
                Convert
            </button>
            {result !== null && (
                <div className="mt-3 p-3 bg-green-100 text-green-700 rounded text-center">
                    <strong>Converted Value:</strong> {result} {toUnit}
                </div>
            )}
        </div>
    );
};

export default Converter;
