import React from 'react'

const OurSolution = () => {
    // const  blurbContent =[
    //     {
    //         image:"https://atrixitsolutions.com/wp-content/uploads/2024/08/icon1.svg",
    //         title:"Discovery and Consultation.",
    //         description:"Understand the client's goals, challenges, and requirements through initial meetings and consultations.",
    //         additionalText = ["Client Meeting", "Needs Assessment", "Strategic Planning"];
    //     },
    //     {
    //         image:"https://atrixitsolutions.com/wp-content/uploads/2024/08/icon1.svg",
    //         title:"Discovery and Consultation.",
    //         description:"Understand the client's goals, challenges, and requirements through initial meetings and consultations.",
    //         additionalText = ["Client Meeting", "Needs Assessment", "Strategic Planning"];
    //     },
    // ]
    return (
        <div className=" bg-(--darkblack) text-(--whitelight) py-30">
            <div className="flex justify-center      ">
                <h2 className=" text-6xl font-bold w-96 text-end">Our Solution Proccess </h2>
                <div className='w-full max-w-[500px]  mx-10 mt-24 '>
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477 65">
                        <path fill="#2f2f2f" d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM475 3L475.255 3.42984L476.82 2.5H475V3ZM438.668 65L441.872 60.197L436.111 59.8239L438.668 65ZM3 3.5H475V2.5H3V3.5ZM474.745 2.57016C459.928 11.3742 441.341 27.8789 438.461 60.47L439.457 60.5581C442.3 28.3895 460.613 12.1303 475.255 3.42984L474.745 2.57016Z"></path>
                    </svg>
                </div>
                <p className='w-86 items-end text-(--gray) font-bold mt-24'>Digital agencies can vary in size and
                    specialization. Some may focus on specific
                    niches, such as healthcare or e-commerce,
                    while others may offer a comprehensive.</p>
            </div>
        </div>
    )
}

export default OurSolution
