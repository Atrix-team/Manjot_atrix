import React from 'react'
import about_img from "../../assets/AboutUs/about_img.webp"

const AboutSec = () => {
    return (
        <div className='about-section'>
            <div className="container mx-auto">
                <div className="grid grid-cols-12 ">
                    <div className="col-span-6  ">

                        <div className="grid grid-cols-12 gap-4 ">
                            <div className="col-span-6 space-y-4">
                                <div className=' aspect-[9 / 16]' ><img src={about_img} /> </div>
                                <div><img src={about_img} /> </div>
                            </div>
                            <div className="col-span-6  space-y-4 pt-24">
                                <div><img src={about_img} /> </div>
                                <div><img src={about_img} /> </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-span-6"></div>
                </div>
            </div>

        </div>
    )
}

export default AboutSec


{/* <div className="grid grid-cols-12 gap-4 ">
<div className="col-span-6">
    <div><img src={about_img} /> </div>
    <div><img src={about_img} /> </div>
</div>
<div className="col-span-6">
    <div><img src={about_img} /> </div>
    <div><img src={about_img} /> </div>
</div>
</div> */}