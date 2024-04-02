import img2 from '../assets/images/greek salad.jpg';
import img3 from '../assets/images/bruchetta.svg';
import img4 from '../assets/images/lemon dessert.jpg';

const Highlights = () => {
  return (
    <div className="grid min-h-[600px] text-black justify-items-center items-center">
      <div className="grid min-h-[600px] lg:grid-cols-3 lg:w-[872px] text-black justify-items-center items-center">
        <h2 className="font-markazi text-5xl lg:col-span-2 lg:[justify-self:start]">This weeks specials!</h2>
        <button className="lg:[grid-column:3] lg:[justify-self:end] bg-[#F4CE14] text-black w-[200px] h-[60px] drop-shadow rounded-2xl border border-black hover:bg-[rgb(237,239,238)] hover:text-[rgb(73,94,87)]">Online Menu</button>
        <div className="grid lg:[justify-self:start] max-w-sm rounded overflow-hidden shadow-lg w-[260px] bg-[rgb(237,239,238)]">
          <img src={img2} alt="Img2" className="w-full h-[160px] object-cover object-center"></img>
          <div className="px-6 py-4">
            <div className="font-markazi font-bold text-2xl mb-2">Greek Salad</div>
            <p className="text-gray-700 font-karla text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortor  arcu. Curabitur vitae eros iaculis velit ultrices suscipit. Curabitur.</p>
            <a href="#delivery" className="font-karla hover:underline">Order a delivery →</a>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg w-[260px] bg-[rgb(237,239,238)]">
          <img src={img3} alt="Img3" className="w-full h-[160px] object-cover object-center"></img>
          <div className="px-6 py-4">
            <div className="font-markazi font-bold text-2xl mb-2">Bruchetta</div>
            <p className="text-gray-700 font-karla text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortor  arcu. Curabitur vitae eros iaculis velit ultrices suscipit. Curabitur.</p>
            <a href="#delivery" className="font-karla hover:underline">Order a delivery →</a>
          </div>
        </div>
        <div className="lg:[justify-self:end] max-w-sm rounded overflow-hidden shadow-lg w-[260px] bg-[rgb(237,239,238)]">
          <img src={img4} alt="Img4" className="w-full h-[160px] object-cover object-center"></img>
          <div className="px-6 py-4">
            <div className="font-markazi font-bold text-2xl mb-2">Lemon Dessert</div>
            <p className="text-gray-700 font-karla text-[12px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu tortor  arcu. Curabitur vitae eros iaculis velit ultrices suscipit. Curabitur.</p>
            <a href="#delivery" className="font-karla hover:underline">Order a delivery →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights