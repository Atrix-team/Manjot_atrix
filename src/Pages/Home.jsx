// import React from 'react';

// const Home = () => {
//   return (
//     <div className="relative w-full h-[400px]">

//       
//       <img
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZT0qh99IVOiZ1NdoCsrP4_mSQzuAFRBVzw&s"
//         className="w-full h-full object-cover"
//         alt="Background"
//       />

//       
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
{/* <div className=" bgbody"></div>


            <div className="absolute  bg-black opacity-50"></div> */}
//    
//       <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-center">
//         <h3 className="text-2xl font-semibold text-white">QPIOWEFGBiuq;b</h3>
//       </div>
//     </div>
//   );
// }

// export default Home;




import React from 'react';
import './home.css';
import '../CSS/tying.css';
import ParticleEffect from '../Components/ParticleEffect';
import TypewriterEffect from '../Components/TyingWriter';


const Home = () => {


    return (
        <>
            <div className="relative w-full text-(--whitelight) hero_section " >
                <div className='pointer-events-none absolute inset-0 h-full'>
                    <ParticleEffect />
                </div>
                <div className='flex justify-center items-center min-h-screen py-46 '>
                    <div className="text-center relative">
                        <h1 className=" text-(--whitelight) mt-5 text-6xl md:text-8xl lg:text-9xl  ">
                            <div className='relative inline-block'>
                                <div className='font-bold tracking-wider '>We deliver</div>
                                <div className="absolute bottom-[4%] -right-[20%] text-center z-20 animateFromTop moveWithMouse ">
                                    <p className='bg-(--white) text-(--black) border  font-body border-transparent rounded-4xl px-8 py-1 text-2xl -rotate-7 font-bold'>
                                        Marketing
                                    </p>
                                </div>
                            </div>

                            <div className='flex items-center justify-center text-center'>
                                <div className='relative inline-block'>
                                    <div className='font-bold  tracking-wider'>personal  </div>
                                    <div className="absolute top-[0%] left-[0%]  text-center z-20 animateFromTop moveWithMouse ">
                                        <p className='bg-(--green) text-(--black) font-body border border-transparent rounded-4xl px-8 py-1 text-2xl rotate-5 font-bold'>
                                            Web Development
                                        </p>
                                    </div>
                                </div>
                                <div className="relative typewiter-wraper ml-10 text-5xl w-[45rem] h-[75px] font-normal rounded-full px-16 mt- font-body ">
                                    <TypewriterEffect
                                        text="    innovative, growing, creative "
                                        speed={170}
                                        deleteSpeed={100}
                                        delay={150}
                                        className=" "
                                    />
                                </div>
                            </div>
                            
                            <div className='relative inline-block'>
                                <div className='font-bold tracking-wider'> solutions</div>
                                <div className="absolute bottom-[10%] -left-[30%] ] text-center z-20 animateFromTop moveWithMouse">
                                    <p className='bg-(--blue) text-(--black) border font-body border-transparent rounded-4xl px-8 py-1 text-2xl rotate-12 font-bold'>
                                        Brand Identity
                                    </p>
                                </div>
                            </div>
                        </h1>

                        <div className=" text-center z-20  flex justify-center">
                            <p className='text-(--white)  px-10 py-2 text-xl mt-12 font-semibold w-[100%]  max-w-[950px]'>
                                Founded with a passion for innovation, our team of young talents brings a fresh perspective to the world of IT and beyond, offering unique and creative solutions tailored to meet the evolving needs of our clients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
