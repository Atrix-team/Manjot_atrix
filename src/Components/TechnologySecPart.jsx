import React, { useState } from 'react';
import reacticons from "../assets/TechnologyImage/react.svg"
import nodeicons from "../assets/TechnologyImage/node-js.svg"

const TechnologySecPart = () => {
    const [activeSection, setActiveSection] = useState('frontend');

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    // Dynamically select the data array based on activeSection
    const data = activeSection === 'frontend' ? frontend : backend;

    return (
        <div className='p-20'>
            <style>
                {`
                .icon-ul li:nth-child(1) > div, .icon-ul li:nth-child(6) > div {
                    min-height: 250px;
                }
                `}
            </style>

            <div className='flex justify-center gap-3'>
                <h6
                    className={`bg-(--black) px-5 py-2 text-lg rounded-full font-bold w-32 cursor-pointer relative ${
                        activeSection === 'frontend' ? 'bg-(--blue)' : ''
                    }`}
                    onClick={() => handleSectionChange('frontend')}
                >
                    Front-end
                    {activeSection === 'frontend' && (
                        <span className="absolute left-0 right-0 -bottom-1 mx-auto w-4 h-3 bg-(--blue) rotate-45"></span>
                    )}
                </h6>
                <h6
                    className={`bg-(--black) px-5 py-2 text-lg rounded-full font-bold w-32 cursor-pointer relative ${
                        activeSection === 'backend' ? 'bg-(--blue)' : ''
                    }`}
                    onClick={() => handleSectionChange('backend')}
                >
                    Back-end
                    {activeSection === 'backend' && (
                        <span className="absolute left-0 right-0 -bottom-1 mx-auto w-4 h-3 bg-(--blue) rotate-45"></span>
                    )}
                </h6>
            </div>

            <div className='max-w-[1300px] mx-auto'>
                <ul className='flex flex-wrap items-end justify-center icon-ul'>
                    {data.map((item, index) => (
                        <li key={index} className='flex items-end w-[16.66%] p-[10px]'>
                            <div className='bg-(--black) rounded-lg w-full flex items-center justify-center flex-col min-h-[180px]'>
                                <div className='flex justify-center'>
                                    <img src={item.icons} alt={item.TechnologyName} />
                                </div>
                                <p>{item.TechnologyName}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TechnologySecPart;

// Frontend data
const frontend = [
    {
        icons: reacticons,
        TechnologyName: "React JS"
    },
    {
        icons: reacticons,
        TechnologyName: "React JS"
    },
    {
        icons: reacticons,
        TechnologyName: "React JS"
    },
    {
        icons: reacticons,
        TechnologyName: "React JS"
    },
    {
        icons: reacticons,
        TechnologyName: "React JS"
    },
    {
        icons: reacticons,
        TechnologyName: "React JS"
    },
    {
        icons: reacticons,
        TechnologyName: "React JS"
    },   {
        icons: reacticons,
        TechnologyName: "React JS"
    },   {
        icons: reacticons,
        TechnologyName: "React JS"
    },   {
        icons: reacticons,
        TechnologyName: "React JS"
    },
];

// Backend data
const backend = [
    {
        icons: "https://atrixitsolutions.com/wp-content/uploads/2024/08/node-js.svg",
        TechnologyName: "Node JS"
    },
    {
        icons: "https://atrixitsolutions.com/wp-content/uploads/2024/08/node-js.svg",
        TechnologyName: "Node JS"
    },
    {
        icons: "https://atrixitsolutions.com/wp-content/uploads/2024/08/node-js.svg",
        TechnologyName: "Node JS"
    },
    {
        icons: "https://atrixitsolutions.com/wp-content/uploads/2024/08/node-js.svg",
        TechnologyName: "Node JS"
    },
    {
        icons: "https://atrixitsolutions.com/wp-content/uploads/2024/08/node-js.svg",
        TechnologyName: "Node JS"
    },
    {
        icons: "https://atrixitsolutions.com/wp-content/uploads/2024/08/node-js.svg",
        TechnologyName: "Node JS"
    },
    {
        icons: "https://atrixitsolutions.com/wp-content/uploads/2024/08/node-js.svg",
        TechnologyName: "Node JS"
    },
];