import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Header() {
    return (
     <header className>
      <div className='md:container md:mx-auto pr-4 pl-4  top-10 left-0 right-0 z-100 absolute'>
        <div className= "bg-yellow rounded p-7 text-alltext">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div className='col-span-1 relative'>
                    <div className='flex items-center'>
                        <ion-icon name="location-outline" size="large"></ion-icon>
                        <div className='ml-5  break-all'>
                          <h5 className=' text-sm font-normal'>Tamil Nadu</h5>
                          <h5 className=' text-sm font-normal'>India</h5> 
                        </div>
                    </div>
                  </div>
                  <div className='col-span-1 relative'>
                    <div className=' flex items-center'>
                        <ion-icon name="call-outline" size="large"></ion-icon>
                        <div className='ml-5  break-all'>
                          <h5 className='text-sm font-normal'>9597282738 , 9487255703</h5>
                          <h6 className='text-xs tracking-tight'>MIN - FRI,10AM - 7PM</h6>
                        </div>
                    </div>
                  </div>
                  <div className='col-span-1 relative'>
                    <div className=' flex items-center'>
                    <ion-icon name="chatbox-outline" size="large"></ion-icon>
                        <div className=' ml-5  break-all'>
                          <h5 className=' text-sm font-normal'>subhashinivelaytham@gmail.com</h5>
                          <h6 className='tracking-tight text-xs'>REPLY IN 24 HOURS</h6>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
        <a href="#" className=' float-right  mt-7 text-alltext bg-yellow leading-5 cursor-pointer px-7 py-2.5 rounded transition duration-700 ease-in-out 
                         hover: transform 
                       hover:-translate-y-1.5 hover:scale-120'>Download CV
        </a>
      </div>
     </header>
    )
  }
