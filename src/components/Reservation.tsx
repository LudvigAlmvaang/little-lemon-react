import { useState } from 'react';

interface ReservationProps {
    trigger: boolean;
    children: React.ReactNode;
    onClose: () => void;
  }

  function Reservation(props: ReservationProps) {
    const [show, setShow] = useState(props.trigger);

    function handleClick() {
      props.onClose();
      setShow(false);
    }

    return (
      <div className="">
        <div className="">
          <button className="">close</button>
          {props.children}
        </div>
      </div>
    );
  }

  export default Reservation;