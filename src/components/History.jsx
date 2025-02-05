//import React from "react";

const History = ({ history }) => {
    return (
        <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-center mb-4">Conversion History</h3>
            {history.length === 0 ? (
                <p className="text-center text-gray-500">No history available</p>
            ) : (
                <ul className="space-y-2">
                    {history.map((entry, index) => (
                        <li key={index} className="p-2 border rounded bg-gray-100">
                            {entry.value} {entry.fromUnit} ➝ {entry.result} {entry.toUnit}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

import PropTypes from 'prop-types';

History.propTypes = {
    history: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number.isRequired,
            fromUnit: PropTypes.string.isRequired,
            result: PropTypes.number.isRequired,
            toUnit: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default History;
