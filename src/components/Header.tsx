import logo from '../assets/images/Logo.svg';

const Header = () => {
  return (
    <header className="bg-white text-black h-[200px] grid place-items-center">
      <nav className="w-[860px] h-[85px]">
        <div className="flex items-center justify-between">
          <img src={logo} alt="logo" className="h-[85px]" />
          <ul className="flex font-karla font-bold text-[#333333] text-xl space-x-8">
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