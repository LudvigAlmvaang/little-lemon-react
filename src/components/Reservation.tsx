import { useState } from 'react';

interface ReservationProps {
  showPopup?: boolean;
  onClose: () => void;
}

const Reservation: React.FC<ReservationProps> = ({ showPopup = false, onClose }) => {
  const [timeSlot, setTimeSlot] = useState('');
  const [occasion, setOccasion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [people, setPeople] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
  }

  return (
    <>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Table Reservation</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="block text-lg mb-2">Name:</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="block w-full h-10 px-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-black" placeholder="Enter Name" />

              <label htmlFor="email" className="block text-lg mb-2">Email Address:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block w-full h-10 px-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-black" placeholder="Enter Email Address" />

              <label htmlFor="phone" className="block text-lg mb-2">Phone Number:</label>
              <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="block w-full h-10 px-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-black" placeholder="Enter Phone Number" />

              <label htmlFor="people" className="block text-lg mb-2">Number of People:</label>
              <input type="number" id="people" value={people} onChange={(e) => setPeople(e.target.value)} className="block w-full h-10 px-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-black" placeholder="Enter Number of People" />

              <label htmlFor="date" className="block text-lg mb-2">Date:</label>
              <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="block w-full h-10 px-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-black" />

              <label htmlFor="timeSlot" className="block text-lg mb-2">Time Slot:</label>
              <select id="timeSlot" value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} className="block w-full h-10 px-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-black">
                <option value="">Select Time Slot</option>
                <option value="11:00">11:00</option>
                <option value="13:00">13:00</option>
                <option value="15:00">15:00</option>
                <option value="17:00">17:00</option>
                <option value="19:00">19:00</option>
              </select>
  
              <label htmlFor="occasion" className="block text-lg mb-2">Occasion:</label>
              <input type="text" id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} className="block w-full h-10 px-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-black" placeholder="Enter Occasion" />
  
              <button type="submit" onClick={onClose} className="bg-[#F4CE14] text-black w-[200px] h-[45px] drop-shadow rounded-2xl border border-black hover:bg-[rgb(237,239,238)] hover:text-[rgb(73,94,87)]">
                Reserve
              </button>
              <button onClick={onClose} className="bg-[#F4CE14] text-black w-[200px] h-[45px] drop-shadow rounded-2xl border border-black hover:bg-[rgb(237,239,238)] hover:text-[rgb(73,94,87)]">
                Close
              </button>
            </form>
          </div>
        </div>
      )}
      </>
  )
}
  export default Reservation;