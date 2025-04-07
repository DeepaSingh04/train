import { useState, useEffect } from "react";
import "./SeatGrid.css";

const SeatGrid = ({ seats, onSeatSelect, selectedSeats = [], maxSeats = 7 }) => {
  const [seatsByRow, setSeatsByRow] = useState({});

  useEffect(() => {
    // Group seats by row
    const groupedSeats = {};
    seats.forEach((seat) => {
      if (!groupedSeats[seat.rowNumber]) {
        groupedSeats[seat.rowNumber] = [];
      }
      groupedSeats[seat.rowNumber].push(seat);
    });

    // Sort seats within each row
    Object.keys(groupedSeats).forEach((rowNum) => {
      groupedSeats[rowNum].sort((a, b) => a.seatNumber - b.seatNumber);
    });

    setSeatsByRow(groupedSeats);
  }, [seats]);

  const handleSeatClick = (seat) => {
    if (seat.isBooked) return;
    
    if (selectedSeats.includes(seat.seatNumber)) {
      onSeatSelect(selectedSeats.filter(num => num !== seat.seatNumber));
    } else {
      if (selectedSeats.length < maxSeats) {
        onSeatSelect([...selectedSeats, seat.seatNumber]);
      }
    }
  };

  const getSeatClass = (seat) => {
    let classes = ['seat-grid-seat'];
    
    if (seat.isBooked) {
      classes.push('seat-grid-booked');
    } else if (selectedSeats.includes(seat.seatNumber)) {
      classes.push('seat-grid-selected');
    } else {
      classes.push('seat-grid-available');
    }

    return classes.join(' ');
  };

  return (
    <div className="seat-grid">
      <div className="seat-grid-header">
        <h2 className="seat-grid-title">Select Your Seats</h2>
        <div className="seat-grid-indicators">
          <div className="seat-grid-indicator">
            <span className="seat-grid-indicator-box seat-grid-indicator-available"></span>
            <span className="seat-grid-indicator-text">Available</span>
          </div>
          <div className="seat-grid-indicator">
            <span className="seat-grid-indicator-box seat-grid-indicator-selected"></span>
            <span className="seat-grid-indicator-text">Selected</span>
          </div>
          <div className="seat-grid-indicator">
            <span className="seat-grid-indicator-box seat-grid-indicator-booked"></span>
            <span className="seat-grid-indicator-text">Booked</span>
          </div>
        </div>
      </div>

      <div className="train-carriage">
        <div className="carriage-front"></div>
        <div className="seat-grid-container">
          {Object.keys(seatsByRow)
            .sort((a, b) => Number(a) - Number(b))
            .map((rowNum) => (
              <div key={rowNum} className="seat-grid-row">
                <div className="seat-grid-row-number">Row {rowNum}</div>
                <div className="seat-grid-seats">
                  {seatsByRow[rowNum].map((seat) => (
                    <div
                      key={seat.seatNumber}
                      className={getSeatClass(seat)}
                      onClick={() => handleSeatClick(seat)}
                      title={`Seat ${seat.seatNumber} - ${
                        seat.isBooked ? "Booked" : "Available"
                      }`}
                    >
                      {seat.seatNumber}
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
        <div className="carriage-back"></div>
      </div>

      <div className="seat-grid-footer">
        <div className="seat-grid-summary">
          <span>Selected Seats: {selectedSeats.length}</span>
          <span>Maximum Seats: {maxSeats}</span>
        </div>
      </div>
    </div>
  );
};

export default SeatGrid;
