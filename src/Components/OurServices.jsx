import React, { useEffect } from "react";
import Service1 from "../assets/ServicesImage/service-1.png";
import Service2 from '../assets/ServicesImage/service-2.png';
import Service3 from "../assets/ServicesImage/service-3.png";
import Service4 from "../assets/ServicesImage/service-4.png";
import Service5 from "../assets/ServicesImage/service-5.png";
import Service6 from "../assets/ServicesImage/service-6.png";
import Service7 from "../assets/ServicesImage/service-7.png";
import Asset1 from "../assets/ServicesIcons/Asset 1.svg";
import Asset2 from "../assets/ServicesIcons/Asset 2.svg";
import Asset3 from "../assets/ServicesIcons/Asset 3.svg";
import Asset4 from "../assets/ServicesIcons/Asset 4.svg";
import Asset5 from "../assets/ServicesIcons/Asset 5.svg";
import Asset6 from "../assets/ServicesIcons/Asset 6.svg";
import Asset7 from "../assets/ServicesIcons/Asset 7.svg";

import graphic from "../assets/ServicesImage/graphic.svg"
import "../CSS/one.css";


const services = [
  {
    id: 1,
    image: graphic,
    icon: Asset1,
    title: "UI-UX Design",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 2,
    image: Service2,
    icon: Asset2,
    title: "Mobile Apps",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 3,
    image: Service3,
    icon: Asset3,
    title: "Backend Development",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 4,
    image: Service4,
    icon: Asset4,
    title: "Frontend Development",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 5,
    image: Service5,
    icon: Asset5,
    title: "Artificial Intelligence",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 6,
    image: Service6,
    icon: Asset6,
    title: "Data Analysis & Data Science",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 7,
    image: Service7,
    icon: Asset7,
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

        // Check if the card is in the center of the viewport
        if (rect.top <= windowHeight / 2   && rect.bottom >= windowHeight / 2 ) {
          card.style.opacity = "1";
          if (stickyImages[index]) {
            stickyImages[index].classList.add("active-img");
            stickyImages[index].style.opacity = "1";
            stickyImages[index].style.transform = "translate(-30%, -30%) scale(1)";
          }
        } else {
          card.style.opacity = "0.2";
          if (stickyImages[index]) {
            stickyImages[index].classList.remove("active-img");
            stickyImages[index].style.opacity = "0";
            stickyImages[index].style.transform = "translate(-50%, -50%) scale(0.7)";
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-(--darkblack) text-(--whitelight) ">

      <div className="container mx-auto  max-w-[1280px] ">
        <div className="px-5 py-14 md:py-28 ">
        
        <h2 className="text-center text-4xl md:text-6xl font-bold">Our Services</h2>
        
        <div className="flex flex-col md:flex-row   gap-10  mx-5 mt-10  md:mt-28 ">

          {/* Services List (Left Side) */}
          <div className="w-full md:w-1/2  md:px-5">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card opacity-30 transition-opacity duration-300 mt-20 md:mt-40 first:mt-0 "
              >
                 <img   key={service.id}
                  src={service.image}
                  alt={service.title} 
                  className="md:hidden flex "
                  />
                <div className="flex  items-center gap-3 ">
                  <div className="min-w-12 h-12 relative flex justify-center items-center bg-gradient-to-r from-(--blue) to-(--green) rounded-full translate-y-2 mr-1">
                  <img src={service.icon} className="w-8 h-8 filter grayscale-100 brightness-800" />
                    {/* <div className="inline-block ml-2 mt-2 text-2xl">{service.icon}</div> */}
                  </div>
                  <h3 className="text-xl md:text-3xl font-bold mt-4 ">{service.title}</h3>
                </div>
                <p className="text-sm md:text-md mt-6 md:mt-9 text-(--white) leading-7 md:leading-8">
                  {service.description}
                </p>
               
                <div className="flex flex-wrap mt-6 md:mt-10">
                  {[
                    "Branding",
                    "Logo Design",
                    "Packaging",
                    "UI/UX Design",
                    "Print Media",
                    "Advertisement",
                  ].map((btn, i) => (
                    <div
                      key={i}
                      className="custom-gradient rounded-full px-4 py-1 md:px-6 md:py-2 mt-2 mr-2"

                    >
                      {btn}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Images (Right Side) */}
          <div className="w-1/2  relative md:block   hidden  ">
            <div className="sticky top-48 border-t-4">
              {services.map((serviceimg, index) => (
                <img
                  key={serviceimg.id}
                  src={serviceimg.image}
                  alt={serviceimg.title}
               className="serviceImg absolute z-10 max-w-[100%] left-1/4 h-auto opacity-0 scale-70 transition-all duration-200"
                />
              ))}
            </div>
          </div>
     
        </div>
      </div>
    </div>
    </div>
  );
};

export default OurServices;



{/* <div className="w-full md:w-1/2 relative mt-10 md:mt-0">
<div className="sticky top-20 md:top-96 h-96">
  {services.map((serviceimg, index) => (
    <img
      key={serviceimg.id}
      src={serviceimg.image}
      alt={serviceimg.title}
      className="serviceImg absolute z-10 left-1/2 md:left-96 transform -translate-x-1/2 max-w-[90%] md:max-w-[100%] h-auto opacity-0 scale-70 transition-all duration-200"
    />
  ))}
</div>
</div> */}