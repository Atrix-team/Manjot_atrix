// import React from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// const LogoSlider = () => {
//   const Logoimage = [
//     { id: 1, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo1.png' },
//     { id: 2, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo2.png' },
//     { id: 3, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo3.png' },
//     { id: 4, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo4.png' },
//     { id: 5, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo5.png' },
//     { id: 6, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo6.png' },
//     { id: 7, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo7.png' },
//     { id: 8, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo8.png' },
//     { id: 9, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo9.png' },
//     { id: 10, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo10.png' },
//     { id: 11, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo11.png' },
//     { id: 12, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo12.png' },
//     { id: 13, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo13.png' },
//     { id: 14, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo14.png' },
//     { id: 15, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo15.png' },
//     { id: 16, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo16.png' },
//   ];


//     const settings = {
//       dots: false,
//       infinite: true,
//       slidesToShow: 16,
//       slidesToScroll: 1,
//       autoplay: true,
//       speed: 2000,
//       autoplaySpeed: 2000,
//       cssEase: "linear",
//       arrows:false
//     };
//   return (
//     <div className='w-full bg-(--black) text-(--white) py-12'>
//      
//       <div className='w-full gap-20 '>
//       <Slider {...settings}>
//         {Logoimage.map((image) => (
//           <div key={image.id} className='px-8'>
//             <img src={image.img} alt={`Logo ${image.id}`} className=' filter grayscale-100 brightness-100 h-auto w-32' />
//           </div>
//         ))}
       
//   </Slider>
//       </div>
//     </div>
    
//   );
// };

// export default LogoSlider;



import React from 'react';
import './LogoSlider.css'

const LogoSlider = () => {
  const Logoimage = [
    { id: 1, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo1.png' },
    { id: 2, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo2.png' },
    { id: 3, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo3.png' },
    { id: 4, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo4.png' },
    { id: 5, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo5.png' },
    { id: 6, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo6.png' },
    { id: 7, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo7.png' },
    { id: 8, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo8.png' },
    { id: 9, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo9.png' },
    { id: 10, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo10.png' },
    { id: 11, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo11.png' },
    { id: 12, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo12.png' },
    { id: 13, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo13.png' },
    { id: 14, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo14.png' },
    { id: 15, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo15.png' },
    { id: 16, img: 'https://elfsight.com/assets/logo-showcase/test-data/logo16.png' },
  ];

  return (
    <div className=' '>
  <h6 className='flex justify-center items-center mb-10 font-bold text-(--gray) '>OVER 1K+ SOFTWARE BUSINESSES GROWING WITH Atrix IT Solutions</h6>
    
    <div className='marquee-2'>
      
      <div className='marquee-content'>
        {Logoimage.map((image) => (
          <div key={image.id} className='marquee-img'>
            <img src={image.img} alt={`Logo ${image.id}`} />
          </div>
        ))}
      
        </div>
        <div  className='marquee-content'>
        {Logoimage.map((image) => (
          <div key={`${image.id}-copy`} className='marquee-img'>
            <img src={image.img} alt={`Logo ${image.id}`} />
          </div>
        ))}
          
      </div>
    </div>
    </div>
  );
};

export default LogoSlider;