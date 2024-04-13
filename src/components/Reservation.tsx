import { useState } from 'react';

interface ReservationProps {
  showPopup?: boolean;
  onClose: () => void;
}

function Reservation({ showPopup = false, onClose }) {
  return (
    <>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Lorem Ipsum</h2>
            <p className="text-lg text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortor  arcu. Curabitur vitae eros iaculis velit ultrices suscipit. Curabitur.
            </p>
            <button onClick={onClose} className="bg-[#F4CE14] text-black w-[200px] h-[45px] drop-shadow rounded-2xl border border-black hover:bg-[rgb(237,239,238)] hover:text-[rgb(73,94,87)]">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Reservation;