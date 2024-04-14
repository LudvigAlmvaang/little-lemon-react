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
            <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
              <label htmlFor="res-date">Choose date</label>
              <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />

              <label htmlFor="res-time">Choose time</label>
              <select id="res-time" value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
              </select>

              <label htmlFor="guests">Number of guests</label>
              <input type="number" placeholder="1" min="1" max="10" id="guests" value={people} onChange={(e) => setPeople(e.target.value)} />

              <label htmlFor="occasion">Occasion</label>
              <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>

              <input type="submit" value="Make Your reservation" onClick={onClose} />
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