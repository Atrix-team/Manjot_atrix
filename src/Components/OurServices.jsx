// import React from 'react'
// import Button from './Button';
// import { FaGamepad, FaBuilding, FaPaintBrush, FaFilm, FaMagic } from 'react-icons/fa';
// import '../CSS/One.css'
// const OurServices = () => {

//     return (
//         <div className='relative ' style={{ backgroundImage: "url(https://atrixitsolutions.com/wp-content/uploads/2024/07/40978.jpg)", width: "100%", height: "auto" }}>

//             <div className=' absolute inset-0 bg-(--darkblack) opacity-90'></div>

//             <div className='flex justify-center text-(--whitelight) w-full   py-5  gap-20'>
//                 <div className='relative inline-block  max-w-[400px] '>
//                     <h6 className='font-bold  text-(--gray) '> Our Services</h6>
//                     <h1 className='text-6xl font-bold  '>WE PROVIDE
//                         Smart Solution</h1>
//                 </div>
//                 <div className='relative flex max-w-[440px] justify-center items-center '>
//                     <p>Offer a wide range of services to help businesses establish and enhance their online presence..</p>
//                 </div>

//                 <div className='relative flex items-end'>
//                     <Button mybtn={"View All Services"} />
//                 </div>
//             </div>


//             <div className="flex flex-col items-center p-5 ">
//                 <div className='relative inline-block'>
//                 {services.map((service) => (
//                     <div key={service.id} className="service-item flex items-center w-full max-w-6xl border-t border-l border-r  border-(--gray)  px-6">
//                         <div className="flex items-center justify-center text-(--gray)  border-r border-(--gray) w-1/10 h-44">
//                         <div>
//                         <p className='bg-(--navbarUlbgcolor) px-1  w-6.5 rounded-sm z-0 font-bold -top-3 -left-6 relative opacity-20'>{service.id}</p>
//                             <div className='mr-6 mb-5  h-14 w-14'>{service.icon}</div>
//                         </div>
//                         </div>
//                         <h3 className="text-4xl font-bold p-5 text-(--whitelight)  w-1/4 ">{service.title}</h3>
//                         <p className=" p-6 text-(--gray) text-xl w-1/2 font-body">{service.description}</p>
//                         <div className='flex justify-center items-center ml-3'>
//                             <Button mybtn={"Learn More"} />
//                         </div>

//                     </div>
//                 ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default OurServices;


// const services = [
//     {
//         id: "01",
//         icon:<svg className=" "  xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">   <path d="m24,6.928v13.072h-11.5v3h5v1H6.5v-1h5v-3H0V4.5c0-1.379,1.122-2.5,2.5-2.5h12.98c-.253.295-.54.631-.856,1H2.5c-.827,0-1.5.673-1.5,1.5v14.5h22v-10.993l1-1.079Zm-12.749,3.094C19.058.891,19.093.855,19.11.838c1.118-1.115,2.936-1.113,4.052.002,1.114,1.117,1.114,2.936,0,4.052l-8.185,8.828c-.116,1.826-1.623,3.281-3.478,3.281h-5.59l.097-.582c.043-.257,1.086-6.16,5.244-6.396Zm2.749,3.478c0-1.379-1.122-2.5-2.5-2.5-2.834,0-4.018,3.569-4.378,5h4.378c1.378,0,2.5-1.121,2.5-2.5Zm.814-1.073l2.066-2.229c-.332-1.186-1.371-2.057-2.606-2.172-.641.749-1.261,1.475-1.817,2.125,1.117.321,1.998,1.176,2.357,2.277Zm.208-5.276c1.162.313,2.125,1.134,2.617,2.229l4.803-5.18c.737-.741.737-1.925.012-2.653-.724-.725-1.908-.727-2.637,0-.069.08-2.435,2.846-4.795,5.606Z"></path> </svg>,
//         // icon: <FaGamepad className="h-12 w-12" />,
//         title: "Graphic Designing",
//         description: "Graphic designing involves creating visual content to communicate messages through typography, imagery, color, and layout, enhancing brand identity and engaging audiences across various media.",
//     },
//     {
//         id: "02",
//         icon: <FaBuilding className="h-12 w-12" />,
//         title: "3D Animation",
//         description: "3D animation involves creating moving images in a three-dimensional digital environment, bringing characters, objects, and scenes to life with realistic textures, lighting, and motion.",
//     },
//     {
//         id: "03",
//         icon: <FaMagic className="h-12 w-12" />,
//         title: "VFX Studio",
//         description: "A VFX studio creates visual effects for films, TV, games, and advertisements, using digital tools and techniques to enhance or create imagery that can't be achieved through live-action filming alone.",
//     },
//     {
//         id: "04",
//         icon: <FaPaintBrush className="h-12 w-12" />,
//         title: "SAP Business One",
//         description: "SAP Business One ERP is an integrated software solution designed for small and medium-sized enterprises to manage business processes including finance, sales, inventory, and operations in a single system.",
//     },
//     {
//         id: "05",
//         icon: <FaFilm className="h-12 w-12 border-b" />,
//         title: "CRM Development",
//         description: "CRM development creates software enabling businesses to manage customer relationships, streamline sales processes, and enhance service through data organization, automation, and analytics.",
//     },

// ];


import React, { useEffect } from "react";
import Service1 from "../assets/ServicesImage/service-1.png";
import Service2 from '../assets/ServicesImage/service-2.png';
import Service3 from "../assets/ServicesImage/service-3.png";
import Service4 from "../assets/ServicesImage/service-4.png";
import Service5 from "../assets/ServicesImage/service-5.png";
import Service6 from "../assets/ServicesImage/service-6.png";
import Service7 from "../assets/ServicesImage/service-7.png";
import "../CSS/one.css"
import { FaUser } from "react-icons/fa";

const services = [
    // w-[35px] h-[35px] bg-gradient-to-r from-[#1a8ef7] to-[#14624b] rounded-full translate-y-2 mr-1
  {
    id: 1,
    image: Service1,
    icon:<FaUser />,
    title: "UI-UX Design",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 2,
    image: Service2,
    icon:<FaUser />,
    title: "Mobile Apps",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 3,
    image: Service3,
    icon:<FaUser />,
    title: "Backend Development",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 4,
    image: Service4,
    icon:<FaUser />,
    title: "Frontend Development",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 5,
    image: Service5,
    icon:<FaUser />,
    title: "Artificial Intelligence",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 6,
    image: Service6,
    icon:<FaUser />,
    title: "Data Analysis & Data Science",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 7,
    image: Service7,
    icon:<FaUser />,
    title: "Managed Cloud & DevOps",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
];

const OurServices = () => {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".service-card");
      const stickyImages = document.querySelectorAll(".serviceImg");
      const windowHeight = window.innerHeight;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();

        if (rect.top + 100 >= 0 && rect.bottom <= windowHeight ) {
          card.style.opacity = "1";
    //       console.log("Card in view index:", index);
    //   console.log("window height ", rect.top);
    //   console.log("rect top", windowHeight);
          if (stickyImages[index]) {
            stickyImages[index].classList.add("active-img");
          }
        } else {
          card.style.opacity = "0.2";
          if (stickyImages[index]) {
            stickyImages[index].classList.remove("active-img");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" bg-(--darkblack) text-(--whitelight) py-40">
      <div className="max-w-[1400px] mx-auto px-10">
        <h2 className="text-center text-5xl font-bold">Our Services</h2>
        <div className="flex ">
 
          <div className="w-1/2 pr-40   ">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card opacity-30 transition-opacity duration-300 mt-60 first:mt-0"
              >
            
                <h3 className="text-3xl font-bold mt-2.5 ">
                 <span className="inline-block  mr-5"> {service.icon}</span>
                  {service.title}
                </h3>
                <p className="text-md mt-12 text-(--white) leading-8">
                  {service.description}
                </p>
                <div className="flex flex-wrap mt-12">
                  {[
                    "Branding",
                    "Logo Design",
                    "Packaging",
                    "UI/UX Design",
                    "Print Media",
                    "Advertisement",
                  ].map((btn, i) => (
                    <a
                      key={i}
                      href="#"
                      className=" bg-gradient-to-b from-(--black) to-(--black) border border-transparent rounded-full px-6 py-2 mt-2.5 mr-2.5 transition-all duration-300 hover:bg-gradient-to-r hover:from-(--blue) hover:to-(--green) hover:border-transparent"
                    >
                      {btn}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

         
          <div className="w-1/2 relative z-50">
            <div className="sticky top-10 h-60 pl-10">
              {services.map((serviceimg, index) => (
                <img
                  key={serviceimg.id}
                  src={serviceimg.image}
                  alt={serviceimg.title}
                  className="serviceImg absolute left- max-w-[80%] h-auto opacity-0 scale-80 transition-all duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;



