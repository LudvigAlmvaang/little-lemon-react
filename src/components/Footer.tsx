import img8 from '../assets/images/logo-footer.png';

const Footer = () => {
  return (
    <footer className="grid min-h-[500px] text-black justify-items-center items-center bg-[rgb(237,239,238)]">
      <div className="grid min-h-[500px] lg:grid-cols-4 lg:w-[872px] text-black justify-items-center items-center">
        <img src={img8} alt="Img8" className="h-[250px] w-[150px] object-contain lg:[justify-self:start]"/>
        <ul className="grid">
          <li className="font-bold">Doormat Navigation</li>
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#menu" className="hover:underline">Menu</a></li>
          <li><a href="#reservations" className="hover:underline">Reservations</a></li>
          <li><a href="#login" className="hover:underline">Login</a></li>
        </ul>
        <ul className="grid">
          <li className="font-bold">Contact</li>
          <li>Address</li>
          <li><a href="#phone" className="hover:underline">Phone number</a></li>
          <li><a href="#email" className="hover:underline">Email</a></li>
        </ul>
        <ul className="grid">
          <li className="font-bold">Social Media Links</li>
          <li><a href="#facebook" className="hover:underline">Facebook</a></li>
          <li><a href="#instagram" className="hover:underline">Instagram</a></li>
          <li><a href="#linkedin" className="hover:underline">Linkedin</a></li>
        </ul>
      </div>
  </footer>
  );
};

export default Footer