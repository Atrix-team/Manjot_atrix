import React, { useEffect } from "react";
import Asset1 from "../assets/ServicesIcons/Asset 1.svg";
import Asset2 from "../assets/ServicesIcons/Asset 2.svg";
import Asset3 from "../assets/ServicesIcons/Asset 3.svg";
import Asset4 from "../assets/ServicesIcons/Asset 4.svg";
import Asset5 from "../assets/ServicesIcons/Asset 5.svg";
import Asset6 from "../assets/ServicesIcons/Asset 6.svg";
import Asset7 from "../assets/ServicesIcons/Asset 7.svg";
import Asset9 from "../assets/ServicesImage/Asset 9.svg";
import Asset10 from "../assets/ServicesImage/Asset 10.svg";
import Asset11 from "../assets/ServicesImage/Asset 11.svg";
import Asset12 from "../assets/ServicesImage/Asset 12.svg";
import Asset13 from "../assets/ServicesImage/Asset 13.svg";
// import Asset14 from "../assets/ServicesImage/Asset 14.svg";
import Asset15 from "../assets/ServicesImage/Asset 15.svg";

import graphic from "../assets/ServicesImage/graphic.svg";
import dev from "../assets/ServicesImage/dev .svg";
import log from "../assets/ServicesImage/log.svg";
import marketing from "../assets/ServicesImage/marketing .svg"
import "../CSS/one.css";
import Button from "./Button";


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
    image: dev,
    icon: Asset2,
    title: "Mobile Apps",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 3,
    image: log,
    icon: Asset3,
    title: "Backend Development",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 4,
    image: marketing,
    icon: Asset4,
    title: "Frontend Development",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 5,
    image: Asset12,
    icon: Asset5,
    title: "Artificial Intelligence",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 6,
    image: Asset13,
    icon: Asset6,
    title: "Data Analysis & Data Science",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 7,
    image: Asset11,
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

        if (rect.top <= windowHeight / 2   && rect.bottom >= windowHeight / 2 ) {
          card.style.opacity = "1";
          if (stickyImages[index]) {
            stickyImages[index].classList.add("active-img");
            stickyImages[index].style.opacity = "1";
            // stickyImages[index].style.transform = "translate(-30%, -30%) ";
          }
        } else {
          card.style.opacity = "0.2";
          if (stickyImages[index]) {
            stickyImages[index].classList.remove("active-img");
            stickyImages[index].style.opacity = "0";
            // stickyImages[index].style.transform = "translate(-50%, -50%) ";
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="Services-section  text-(--whitelight) ">

      <div className="container mx-auto  max-w-[1280px] w-[90%]">
        <div className=" py-14 md:py-32 ">
        
        <div className="md:flex flex-wrap justify-start gap-10 ">
        <h2 className=" text-4xl md:text-6xl font-bold">Our Services</h2>


                    <div className='w-full max-w-[450px] mt-14'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477 65">
                            <path fill="#2f2f2f" d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM475 3L475.255 3.42984L476.82 2.5H475V3ZM438.668 65L441.872 60.197L436.111 59.8239L438.668 65ZM3 3.5H475V2.5H3V3.5ZM474.745 2.57016C459.928 11.3742 441.341 27.8789 438.461 60.47L439.457 60.5581C442.3 28.3895 460.613 12.1303 475.255 3.42984L474.745 2.57016Z"></path>
                        </svg>
                    </div>
                    <div className='mt-1  md:text-end'>
                        <div className=' flex md:justify-end'>
                            <Button className="" mybtn={"View All Services"} />
                        </div>
                        <p className='md:w-86 text-gray font-bold mt-4'>
                            Offer a wide range of services to help businesses establish and enhance their online presence.
                        </p>
                    </div>
                </div>
        
        <div className="flex flex-col md:flex-row   gap-10  mt-10  md:mt-20 ">

          <div className="w-full md:w-1/2  ">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card opacity-30 transition-opacity duration-300 mt-20 md:mt-40 first:mt-0 "
              >
                <div className="flex justify-center items-center pb-5">
                 <img   key={service.id}
                  src={service.image}
                  alt={service.title} 
                  className="md:hidden flex h-80 w-auto"
                  />
                  </div>
                <div className="flex  items-center gap-3 ">
                  <div className="min-w-12 h-12 relative flex justify-center items-center bg-gradient-to-r from-(--blue) to-(--green) rounded-full translate-y-2 mr-1">
                  <img src={service.icon} className="w-6 h-6 filter grayscale-100 brightness-800" />
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

          <div className="w-1/2  relative md:block   hidden  ">
            <div className="sticky top-[20vh]  w-[75%] min-h-[400px] ">
              {services.map((serviceimg, index) => (
                <img
                  key={serviceimg.id}
                  src={serviceimg.image}
                  alt={serviceimg.title}
               className="serviceImg absolute z-10 left-1/4  h-full w-full opacity-0 transition-all duration-200"
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