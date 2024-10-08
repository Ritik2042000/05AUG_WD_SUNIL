'use client'

import { useState } from "react";

const Ticket = () => {

    const [selectedSeats, setSelectedSeats] = useState([]);
    const [error, setError] = useState('');


    const seats = [
        {
            category: 'Vip',
            rows: [
                [1, 2, 3, 4, 5], // row 1
                [1, 2, 3, 4, 5], // row 2
                [1, 2, 3, 4, 5], // row 3
                [1, 2, 3, 4, 5], // row 4
                [1, 2, 3, 4, 5], // row 5
            ],
        },
        {
            category: 'General',
            rows: [
                [1, 2, 3, 4, 5, 6], // row 1
                [1, 2, 3, 4, 5, 6], // row 2
                [1, 2, 3, 4, 5, 6], // row 3
                [1, 2, 3, 4, 5, 6], // row 4
                [1, 2, 3, 4, 5, 6], // row 5
                [1, 2, 3, 4, 5, 6], // row 6
            ],
        },
        {
            category: 'Economy',
            rows: [
                [1, 2, 3, 4, 5, 6, 7, 8], // row 1
                [1, 2, 3, 4, 5, 6, 7, 8], // row 2
                [1, 2, 3, 4, 5, 6, 7, 8], // row 3
                [1, 2, 3, 4, 5, 6, 7, 8], // row 4
                [1, 2, 3, 4, 5, 6, 7, 8], // row 5
                [1, 2, 3, 4, 5, 6, 7, 8], // row 6
                [1, 2, 3, 4, 5, 6, 7, 8], // row 7
                [1, 2, 3, 4, 5, 6, 7, 8], // row 8
            ],
        },
    ];

    // Function to handle seat selection
    const toggleSeatSelection = (category, rowIndex, seatNumber) => {
        const seatKey = `${category}-Row${rowIndex + 1}-Seat${seatNumber}`;
        console.log(seatKey,'detalis');
        console.log(selectedSeats,'state of seats');
        

        // Check if the seat is already selected
        if (selectedSeats.includes(seatKey)) {
            setSelectedSeats((prev) => prev.filter((seat) => seat !== seatKey)); // Deselect seat
        } else {
            if (selectedSeats.length <= 5) {
                setSelectedSeats((prev) => [...prev, seatKey]); // Select seat
                setError(''); // Clear error
            } else {
                setError('Limit is 5 seats!'); // Show error if more than 5
            }
        }
    };

    // Function to handle confirm button
    const confirmTickets = () => {
        if (selectedSeats.length > 0) {
            alert(`You have selected the following seats:\n${selectedSeats.join('\n')}`);
        } else {
            setError('Please select at least one seat.');
        }
        setSelectedSeats([])
    };


    return (
        <div className="container mx-auto py-8">
            {seats.map((section, index) => (
                <div key={index} className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-700">{section.category} Section</h2>
                    <div className="space-y-4">
                        {section.rows.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className="flex items-center justify-center space-x-2"

                            >
                                <span className="font-semibold text-lg text-gray-600">Row {rowIndex + 1}:</span>
                                <div className="flex space-x-2">
                                    {row.map((seat) => {
                                        const seatKey = `${section.category}-Row${rowIndex + 1}-Seat${seat}`;
                                        const isSelected = selectedSeats.includes(seatKey);
                                        return (
                                            <div
                                                key={seat}
                                                onClick={() => toggleSeatSelection(section.category, rowIndex, seat)}
                                                className={`w-10 h-10 flex items-center justify-center cursor-pointer rounded ${isSelected
                                                    ? 'bg-green-500 text-white' // Selected seat styling
                                                    : 'bg-blue-500 text-white'
                                                    }`}
                                            >
                                                {seat}
                                            </div>
                                        );
                                    })}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {/* Error Message */}
            {error && <div className="text-red-500 font-semibold mb-4">{error}</div>}

            {/* Confirm Button */}
            {selectedSeats.length > 0 && (
                <button
                    className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                    onClick={confirmTickets}
                >
                    Confirm Tickets
                </button>
            )}
        </div>
    );
};


export default Ticket;