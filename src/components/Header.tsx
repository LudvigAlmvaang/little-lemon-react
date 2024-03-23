const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between">
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#menu" className="hover:underline">Menu</a></li>
          <li><a href="#reservations" className="hover:underline">Reservations</a></li>
          <li><a href="#login" className="hover:underline">Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;