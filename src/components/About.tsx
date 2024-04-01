import img6 from '../assets/images/restaurant chef B.jpg';
import img7 from '../assets/images/Mario and Adrian A_cropped.jpg';

const About = () => {
  return (
  <div className="grid min-h-[700px] text-black justify-items-center items-center">
    <div className="grid min-h-[700px] lg:grid-cols-2 lg:w-[872px] text-black justify-items-center items-center">
      <div className="grid w-[310px] lg:[justify-self:start] lg:gap-4">
        <div>
          <h1 className="text-[rgb(73,94,87)] font-markazi text-6xl">Little Lemon</h1>
          <h2 className="font-markazi text-4xl">Chicago</h2>
          </div>
          <div className="max-h-[207px] w-[375px]"><p className="font-karla text-lg text-justify font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu finibus  ligula. Phasellus eget venenatis lacus. Nam sed sodales lectus. In et  varius dolor, non consectetur risus. Fusce commodo mattis urna sit amet  scelerisque. Mauris ut maximus ligula. In semper ullamcorper ante ac  ultrices. Proin dui.</p></div>
      </div>
      <div className="grid w-[410px] h-[444px]">
        <img src={img6} alt="Img6" className="h-[350px] w-[250px] object-cover object-center border border-[#333333] drop-shadow [grid-row:1] [grid-column:1] [justify-self:start] self-end"/>
        <img src={img7} alt="Img7" className="h-[350px] w-[250px] object-cover object-center border border-[#333333] drop-shadow [grid-row:1] [grid-column:1] [justify-self:end] self-start"/>
      </div>
    </div>
  </div>
  );
};

export default About