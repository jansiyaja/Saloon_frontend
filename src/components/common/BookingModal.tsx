import React, { useState, useEffect } from "react";
import { CheckCircle, AlertTriangle } from "lucide-react"; // Importing icons

interface BookingModalProps {
  service: { name: string; price?: string };
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ service, onClose }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [additionalOptions, setAdditionalOptions] = useState("");
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const allTimeSlots = ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"];

  useEffect(() => {
    if (selectedDate) {
      const bookedSlots = JSON.parse(localStorage.getItem("bookings") || "{}");
      const bookedTimes = bookedSlots[service.name]?.[selectedDate] || [];
      const filteredTimes = allTimeSlots.filter((time) => !bookedTimes.includes(time));
      setAvailableTimes(filteredTimes);
    }
  }, [selectedDate, service.name]);

  const handleConfirmBooking = () => {
    if (!selectedDate || !selectedTime) {
      showToastMessage("Please select a date and time.", false);
      return;
    }

    const existingBookings = JSON.parse(localStorage.getItem("bookings") || "{}");

    if (!existingBookings[service.name]) {
      existingBookings[service.name] = {};
    }

    if (!existingBookings[service.name][selectedDate]) {
      existingBookings[service.name][selectedDate] = [];
    }

    existingBookings[service.name][selectedDate].push(selectedTime);
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    showToastMessage(`Booking confirmed for ${service.name} on ${selectedDate} at ${selectedTime}`, true);
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  const showToastMessage = (message: string, success: boolean) => {
    setToastMessage(message);
    setIsSuccess(success);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-amber-300 p-6 rounded-xl shadow-2xl w-96 relative">
        <h2 className="text-2xl font-bold mb-4">{service.name}</h2>

     
        <label className="block text-sm mb-1">Select Date:</label>
        <input
          type="date"
          className="w-full p-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400 mb-4"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />

    
        <label className="block text-sm mb-1">Select Time Slot:</label>
        <select
          className="w-full p-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400 mb-4"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <option value="">Select Time</option>
          {availableTimes.length > 0 ? (
            availableTimes.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))
          ) : (
            <option disabled>No slots available</option>
          )}
        </select>

      
        <label className="block text-sm mb-1">Additional Options:</label>
        <textarea
          className="w-full p-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400 mb-4"
          placeholder="Enter any extra requirements..."
          value={additionalOptions}
          onChange={(e) => setAdditionalOptions(e.target.value)}
        />

      
        {service.price && <p className="text-lg text-amber-400 font-semibold mb-3">Price: {service.price}</p>}
        <div className="flex justify-between">
          <button
            className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-all duration-200"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-amber-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-amber-600 transition-all duration-200"
            onClick={handleConfirmBooking}
          >
            Confirm Booking
          </button>
        </div>
      </div>

    
      {showToast && (
        <div
          className={`fixed bottom-5 right-5 px-6 py-3 rounded-lg shadow-xl text-white flex items-center gap-3 transition-all duration-300 ${
            isSuccess ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {isSuccess ? <CheckCircle size={20} /> : <AlertTriangle size={20} />}
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default BookingModal;
