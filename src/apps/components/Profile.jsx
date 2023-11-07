import React from 'react';
import bgimage from "../../assets/images/new.jpg";
import profileimg from "../../assets/images/profile-2.jpg";


export default function Profile() {
   return (
        <section  className="bg-cover z-1  relative pt-350px md:pt-200px sm:pt-250px"
        style={{ backgroundImage: `url(${bgimage})` }}>
            <div className='container mx-auto relative px-4'>
                <div className='grid grid-cols-1 md:grid-cols-6 sm:grid-cols-4'>
                    <div className=' col-span-1 px-4'></div>
                    <div className=' md:col-start-2 sm:col-span-4 col-span-2'>
                        <div className='text-center bg-alltext sm:px-5 sm:mt-28 px-2 pt-5 pb-0 -mx-4 break-all'>
                              <div className='relative  m-auto  overflow-hidden rounded-full sm:h-52 sm:w-52 sm:-top-28 sm:-mb-16 mb-3 top-0 w-4/5 h-auto'>
                                <img src={profileimg}  className='w-full m-0 p-0  align-middle'/>
                              </div>      
                              <div className='font-Poppins text-new leading-4 font-semibold'>
                                <strong className='uppercase'>subashini </strong>
                              </div>
                              <h4 className=' text-yellow text-xl  mt-3'>PHP Developer</h4>
                              <ul className='my-8'>
                                <li className='mt-1'>
                                    <strong>BORN : </strong>
                                    May 14, 1996
                                </li>
                                <li className=' mt-1'>
                                    <strong>EMAIL : </strong>
                                    subhashinivelaytham@gmail.com
                                </li>
                                <li className=' mt-1'>
                                    <strong>MARITAL STATUS : </strong>
                                    Un married
                                </li>
                              </ul>
                              <ul className=' m-0 p-0'>
                                <li className=' m-0 p-0 inline-block'>
                                    <a href="www.linkedin.com/in/subha-velaytham-6baa241ba" 
                                    className=' bg-socialicon  hover:bg-yellow text-alltext inline-block no-underline 
                                                p-0 cursor-pointer h-9 w-9 leading-10 rounded-need overflow-hidden 
                                                z-1 relative mx-1 mb-1 mt-0 transition-all duration-0.2 ease-in-out
                                                transform hover:scale-110'>
                                        <ion-icon name="logo-linkedin" size=""  className=' cursor-pointer'></ion-icon>
                                    </a>
                                </li>
                                <li className=' m-0 p-0 inline-block '>
                                    <a href="#" className=' bg-socialicon  hover:bg-yellow text-alltext inline-block no-underline 
                                                            p-0 cursor-pointer h-9 w-9 leading-10  rounded-need overflow-hidden z-1 
                                                            relative mx-1 mb-1 mt-0 transition-all duration-0.2 ease-in-out
                                                            transform hover:scale-110'>
                                        <ion-icon name="logo-instagram" size="" className =' cursor-pointer'></ion-icon>
                                    </a>
                                </li>
                              </ul>
                        </div>
                    </div>
                    <div className='col-span-1'></div>
                </div>

            </div>
        </section>
   )
}
