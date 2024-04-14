import placeholder from '../assets/images/placeholder_profile.jpg';
import star from '../assets/images/filled-star.png';

const reviews = [
  {
    name: "Ludvig",
    review: "I like this Restaurant :) It's almost as good as McD's."
  },
  {
    name: "Jakob",
    review: "The food is edible."
  },
  {
    name: "Emil",
    review: "5/5! No cap!"
  },
  {
    name: "Viktor",
    review: "This is the best place since Munchie's went out of business."
  }
];

const Testimonials = () => {
  return (
    <div className="grid min-h-[500px] text-black justify-items-center items-center">
      <div className="grid min-h-[500px] sm:max-lg:grid-rows-2 lg:grid-cols-4 lg:w-[872px] text-black justify-items-center items-center">
       <h2 className="font-markazi text-5xl lg:[grid-column:1/-1]">Testimonials</h2>

       {reviews.map((review, index) => (
         <div key={index} className="grid lg:grid-rows-3 border-[8px] border-[rgb(237,239,238)] rounded overflow-hidden shadow-lg w-[200px] h-[200px] bg-[rgb(237,239,238)]">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
            <img src={star} key={i} alt="star" className="grid w-[20px] h-[20px]"></img>
            ))}
          </div>
          <div className="grid grid-cols-2">
            <img src={placeholder} alt="placeholder" className="w-[60px] h-[60px] border border-[#333333] drop-shadow"></img>
            <p>{review.name}</p>
           </div>
           <p className="grid [grid-column:1/-1] text-gray-700 font-karla text-[14px]">{review.review}</p>
         </div>
       ))}

      </div>
    </div>
  );
};

export default Testimonials