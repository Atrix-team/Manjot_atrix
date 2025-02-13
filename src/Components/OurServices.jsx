import React from 'react'
import Button from './Button';

const OurServices = () => {
    return (
        <div className='relative' style={{ backgroundImage: "url(https://atrixitsolutions.com/wp-content/uploads/2024/07/40978.jpg)", width: "100%", height: "auto" }}>

            <div className=' absolute inset-0 bg-(--darkblack) opacity-90'></div>

            <div className='flex justify-center text-(--whitelight) w-full   py-5  gap-20'>
                      <div className='relative inline-block  max-w-[400px] '>
                            <h6 className='font-bold  text-(--gray) '> Our Services</h6>
                            <h1 className='text-6xl font-bold  '>WE PROVIDE
                            Smart Solution</h1>
                        </div>
                        <div className='relative flex max-w-[440px] justify-center items-center '>
                            <p>Offer a wide range of services to help businesses establish and enhance their online presence..</p>
                        </div>
                   
                   <div className='relative flex items-end'>
                    <Button  mybtn={"View All Services"}/>
                   </div>
                
            </div>
        </div>
    )
}

export default OurServices;
