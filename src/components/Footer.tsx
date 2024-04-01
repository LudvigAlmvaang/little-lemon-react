import img8 from '../assets/images/logo-footer.png';

const Footer = () => {
  return (
    <div className="grid min-h-[500px] text-black justify-items-center items-center bg-[rgb(237,239,238)]">
      <div className="grid min-h-[500px] lg:grid-cols-4 lg:w-[872px] text-black justify-items-center items-center">
        <img src={img8} alt="Img8" className="h-[250px] w-[150px] object-contain"/>
        <p>Footer section 2</p>
        <p>Footer section 3</p>
        <p>Footer section 4</p>
      </div>
  </div>
  );
};

export default Footer