import React, { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import "../CSS/one.css";



const OurSolution = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const children = document.querySelectorAll(".blurb-item");
            const circleWrapper = document.getElementById("circle-wrapper");

            if (!circleWrapper) return;

            let totalProgress = 0;
            let activesStep = 0;

            children.forEach((child, index) => {
                const rect = child.getBoundingClientRect();
                const sectionTop = rect.top;
                const sectionBottom = rect.bottom;
                const windowHeight = window.innerHeight;

                // Check if the section is in the viewport
                if (sectionTop <= windowHeight / 2 && sectionBottom >= windowHeight / 2) {
                    // Calculate the progress within the current step
                    const stepProgress = ((windowHeight / 2 - sectionTop) / (sectionBottom - sectionTop)) * 100;
                    totalProgress = index * 25 + (stepProgress / 4); // 25% per step
                    activesStep = index ;
                }
            });

            // Increment progress by 5% for each scroll step
            const roundedProgress = Math.floor(totalProgress / 5) * 5;
            setProgress(roundedProgress);

            // Update the active step
            setActiveStep(activesStep);

            // Update the circle border
            circleWrapper.style.setProperty('--progress', `${roundedProgress}%`);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="bg-(--darkblack) text-(--whitelight) py-30 relative">
            <div className="flex justify-center">
                <h2 className="text-6xl font-bold w-96 text-end tracking-wider">Our Solution Process</h2>
                <div className='w-full max-w-[500px] mx-10 mt-24'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477 65">
                        <path fill="#2f2f2f" d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM475 3L475.255 3.42984L476.82 2.5H475V3ZM438.668 65L441.872 60.197L436.111 59.8239L438.668 65ZM3 3.5H475V2.5H3V3.5ZM474.745 2.57016C459.928 11.3742 441.341 27.8789 438.461 60.47L439.457 60.5581C442.3 28.3895 460.613 12.1303 475.255 3.42984L474.745 2.57016Z"></path>
                    </svg>
                </div>
                <p className='w-86 items-end text-(--gray) font-bold mt-24'>
                    Digital agencies can vary in size and specialization. Some may focus on specific niches, such as healthcare or e-commerce, while others may offer a comprehensive.
                </p>
            </div>

            <div id="circle-sec" className='flex justify-center gap-40 items-start relative mt-20 pb-[700px]'>
                <div className='sticky top-20 flex items-center sticky-section'>
                    <div className='border-3 border-(--gray) h-72 w-72 rounded-full text-gray relative'>
                        <div
                            id="circle-wrapper"
                            className='inner-section circle-wrapper h-66 w-66 rounded-full flex items-center justify-center'
                            // style={{ '--progress': `${progress}%` }}
                        >
                            <div className='absolute text-center'>
                                <div className='text-2xl font-bold'>Step</div>
                                <div className='text-5xl font-bold'>{activeStep }/4</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='border-l border-(--gray) relative'>
                    <div className="w-full max-w-[600px] pl-30 z-50 ">
                        <div className=''>
                            {blurbContent.map((item, index) => (
                                <div key={index} className="blurb-item pb-20 bg-(--darkblack) sticky top-20">
                                    <img src={item.image} alt={item.title} className='filter invert brightness-0 contrast-100 mb-8' />
                                    <h1 className='text-4xl font-bold mb-8'>{item.title}</h1>
                                    <p className='mb-5 text-(--gray)'>{item.description}</p>
                                    <ul>
                                        {item.additionalText.map((text, idx) => (
                                            <li className='flex gap-2 items-center text-(--gray)' key={idx}>
                                                <FiPlus /> {text}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurSolution;



const blurbContent = [
    {
        image: "https://atrixitsolutions.com/wp-content/uploads/2024/08/icon1.svg",
        title: "Discovery and Consultation.",
        description: "Understand the client's goals, challenges, and requirements through initial meetings and consultations.",
        additionalText: ["Client Meeting", "Needs Assessment", "Strategic Planning"]
    },
    {
        image: "https://atrixitsolutions.com/wp-content/uploads/2024/08/icon2.svg",
        title: "Design and Architecture.",
        description: "If applicable, create a user-centric design for software interfaces, websites, or applications.",
        additionalText: ["Wireframing", "Design Mockups", "Implementation."]
    },
    {
        image: "https://atrixitsolutions.com/wp-content/uploads/2024/08/icon3.svg",
        title: "Development.",
        description: "Understand the client's goals, challenges, and requirements through initial meetings and consultations.",
        additionalText: ["Testing Plans.", "Bug Fixing.", "Agile Development."]
    },
    {
        image: "https://atrixitsolutions.com/wp-content/uploads/2024/08/icon4.svg",
        title: "Documentation & Launch.",
        description: "Understand the client's goals, challenges, and requirements through initial meetings and consultations.",
        additionalText: ["Testing Plans.", "Bug Fixing.", "Agile Development.", "Agile Development."]
    },
  

];


// import React, { useState, useEffect } from 'react';
// import { FiPlus } from 'react-icons/fi';



// const OurSolution = () => {
//     const [activeStep, setActiveStep] = useState(0);
//     const [progress, setProgress] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             const contentSections = document.querySelectorAll('.blurb-item');
//             const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
//             const scrollPosition = window.scrollY;

//             // Calculate the progress for each step
//             contentSections.forEach((section, index) => {
//                 const rect = section.getBoundingClientRect();
//                 const sectionTop = rect.top + window.scrollY;
//                 const sectionBottom = rect.bottom + window.scrollY;

//                 if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
//                     // Calculate the progress within the current step
//                     const stepProgress = ((scrollPosition - sectionTop) / (sectionBottom - sectionTop)) * 100;
//                     const totalProgress = index * 25 + (stepProgress / 4); // 25% per step
//                     setActiveStep(index);
//                     setProgress(totalProgress);
//                 }
//             });
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div className="bg-(--darkblack) text-(--whitelight) py-30 relative">
//             <div className="flex justify-center">
//                 <h2 className="text-6xl font-bold w-96 text-end tracking-wider">Our Solution Process</h2>
//                 <div className='w-full max-w-[500px] mx-10 mt-24'>
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477 65">
//                         <path fill="#2f2f2f" d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM475 3L475.255 3.42984L476.82 2.5H475V3ZM438.668 65L441.872 60.197L436.111 59.8239L438.668 65ZM3 3.5H475V2.5H3V3.5ZM474.745 2.57016C459.928 11.3742 441.341 27.8789 438.461 60.47L439.457 60.5581C442.3 28.3895 460.613 12.1303 475.255 3.42984L474.745 2.57016Z"></path>
//                     </svg>
//                 </div>
//                 <p className='w-86 items-end text-(--gray) font-bold mt-24'>
//                     Digital agencies can vary in size and specialization. Some may focus on specific niches, such as healthcare or e-commerce, while others may offer a comprehensive.
//                 </p>
//             </div>

//             <div className='flex justify-center gap-40 items-start relative mt-20 pb-[700px]'>
//                 <div className='sticky top-20 flex items-center sticky-section'>
//                     <div className='border-3 border-(--gray) h-72 w-72 rounded-full text-gray relative'>
//                         <div
//                             className='inner-section h-60 w-60 rounded-full flex items-center justify-center'
//                             style={{ '--progress': `${progress}%`, '--gray': '#2f2f2f' }}
//                         >
//                             <div className='absolute text-center pl-9 pt-7'>
//                                 <div className='text-2xl font-bold'>Step</div>
//                                 <div className='text-5xl font-bold'>{activeStep + 1}/4</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='border-l border-(--gray) relative'>
//                     <div className="w-full max-w-[600px] pl-30 z-50 ">
//                         <div className=''>
//                             {blurbContent.map((item, index) => (
//                                 <div key={index} className="blurb-item pb-20 bg-(--darkblack) sticky top-20">
//                                     <img src={item.image} alt={item.title} className='filter invert brightness-0 contrast-100 mb-8' />
//                                     <h1 className='text-4xl font-bold mb-8'>{item.title}</h1>
//                                     <p className='mb-5 text-(--gray)'>{item.description}</p>
//                                     <ul>
//                                         {item.additionalText.map((text, idx) => (
//                                             <li className='flex gap-2 items-center text-(--gray)' key={idx}>
//                                                 <FiPlus /> {text}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default OurSolution;