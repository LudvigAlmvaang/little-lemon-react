import logo from '../assets/logo-header.png';

const Header = () => {
  return (
    <header className="bg-white text-black h-[200px] grid place-items-center">
      <nav>
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-14 mr-4" />
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#menu" className="hover:underline">Menu</a></li>
            <li><a href="#reservations" className="hover:underline">Reservations</a></li>
            <li><a href="#login" className="hover:underline">Login</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;