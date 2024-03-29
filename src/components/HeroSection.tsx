import img1 from '../assets/images/restauranfood.jpg';

const HeroSection = () => {
  return (
    <div className="grid lg:grid-cols-2 min-h-[400px] bg-[rgb(73,94,87)] text-[#EDEFEE] justify-items-center items-center">
        <div className="max-w-[310px]">
          <h1 className="text-[#F4CE14] font-markazi text-6xl">Little Lemon</h1>
          <h2 className="font-markazi text-4xl">Chicago</h2>
          <p className="font-karla text-lg text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortor  arcu. Curabitur vitae eros iaculis velit ultrices suscipit. Curabitur.</p>
          <button className="bg-[#F4CE14] text-black w-[200px] h-[45px] py-2 px-4 drop-shadow rounded-2xl border border-black hover:bg-[rgb(237,239,238)] hover:text-[rgb(73,94,87)]  ">Reserve Table</button>
        </div>
        <img src={img1} alt="Img1" className="h-[310px] w-[310px] object-cover object-center rounded-2xl border border-[#333333] drop-shadow"/>
    </div>
  );
};

export default HeroSection