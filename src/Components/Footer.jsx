import React from 'react'
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className='bg-(--darkblack) text-(--white) p-4 '>

            <div className=' mx-auto flex flex-col md:flex-row justify-center  gap-10 md:gap-10 mt-10'>

                <div>
                    <img src='https://atrixitsolutions.com/wp-content/uploads/2024/07/ais-logo.png' className='w-30 ' />
                    <div className='mt-5'>
                        <h5 className='text-(--blue)  text-xl font-bold'>Address</h5>
                        <p className='w-96'>PLOT C – 203 , PHASE – 8 B, MOHALI, MOHALI, SAS Nagar , 26-Punjab, 91-INDIA, 160070</p>
                    </div>
                    <div className='mt-5'>
                        <h5 className='text-(--blue)  text-xl font-bold'>Email</h5>
                        <p>info@atrixitsolutions.com</p>
                    </div>

                    <div className='mt-5'>
                        <h5 className='text-(--white) underline decoration-1 text-xl font-bold'>Social Just You Connected Us!</h5>
                        <ul>
                            <li className="flex relative  mt-3    space-x-4 z-10">
                                <div className="border border-(--black) bg-(--black) p-2 rounded-full transition-colors text-2xl cursor-pointer">
                                    <FaFacebookF />
                                </div>
                                <div className="border border-(--black) bg-(--black) p-2 rounded-full transition-colors text-2xl cursor-pointer">
                                    <FaXTwitter />
                                </div>
                                <div className="border border-(--black) bg-(--black) p-2 rounded-full transition-colors text-2xl cursor-pointer">
                                    <FaLinkedinIn />
                                </div>
                                <div className="border border-(--black) bg-(--black) p-2 rounded-full transition-colors text-2xl cursor-pointer">
                                    <FaInstagram />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>




                <ul className="flex flex-col space-y-3">
                    <h4 className="text-2xl  inline-block font-bold underline decoration-2">Our Services</h4>
                    <li className=" transition-colors cursor-pointer">3D Animation</li>
                    <li className=" transition-colors cursor-pointer">CRM Development</li>
                    <li className=" transition-colors cursor-pointer">Web Development</li>
                    <li className=" transition-colors cursor-pointer">  MLM Software</li>
                    <li className=" transition-colors cursor-pointer">Graphic Designing</li>
                    <li className=" transition-colors cursor-pointer">Metaverse Development</li>
                    <li className=" transition-colors cursor-pointer">Banking Software Development</li>
                    <li className=" transition-colors cursor-pointer">Digital Marketing</li>
                    <li className=" transition-colors cursor-pointer">App Development</li>
                    <li className=" transition-colors cursor-pointer">UI/UX Design & Development</li>
                </ul>
                <ul className="flex flex-col space-y-3 mt-10">
                    <li className=" transition-colors cursor-pointer">Salesforce Development</li>
                    <li className=" transition-colors cursor-pointer">AI Development</li>
                    <li className=" transition-colors cursor-pointer">Software Development</li>
                    <li className=" transition-colors cursor-pointer">IoT Development</li>
                    <li className=" transition-colors cursor-pointer">Hire Developers</li>
                    <li className=" transition-colors cursor-pointer">Real Estate App Development</li>
                    <li className=" transition-colors cursor-pointer">SAP Business One</li>
                    <li className=" transition-colors cursor-pointer">AEM Development</li>
                    <li className=" transition-colors cursor-pointer">Unity 3D Game Development</li>
                    <li className=" transition-colors cursor-pointer">VFX Studio</li>
                </ul>


                <ul className="flex flex-col space-y-3 ">
                    <h4 className="text-2xl  inline-block font-bold underline decoration-2">Quick Links</h4>

                    <li className=" transition-colors cursor-pointer">Home</li>
                    <li className=" transition-colors cursor-pointer">About Us</li>
                    <li className=" transition-colors cursor-pointer">Our Blog</li>
                    <li className=" transition-colors cursor-pointer">Our Portfolio</li>
                    <li className=" transition-colors cursor-pointer">FAQ</li>
                    <li className=" transition-colors cursor-pointer">Career</li>
                    <li className=" transition-colors cursor-pointer">Contact Us</li>

                </ul>

                <ul className="flex flex-col space-y-3  w-full max-w-[400px]">
                    <h4 className="text-3xl  inline-block font-bold ">We are dedicated to find the right solution for you.</h4>

                    <li className=" transition-colors cursor-pointer underline decoration-2 font-bold text-xl flex items-center gap-1 mt-8">Get in Touch <RxArrowTopRight className='text-2xl' /></li>


                </ul>
            </div>

            <div className="text-center mt-20 border-t border-(--white) pt-6  container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
                <p>© Copyright 2025. Atrix IT Solutions | All Right Reserved.</p>
                <ul className='flex justify-end items-center gap-3'>
                    <li className='border-r pr-4 space-y-2'>Support Policy</li>
                    <li className='border-r pr-4 space-y-2'>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
