import React from "react";
export function Experience(){
  return(
    <section className=" pt-100 pb-50 block bg-background">
       <div className=' container mx-auto px-4'>
                <div className=' grid  sm:grid-cols-3 grid-cols-1'>
                    <div className=' col-span-1  px-4'>
                        <div className=' before:h-10 before:w-50 before:rounded mb-5 before:block before:bg-yellow before:mb-5'>
                            <h3 className=' text-3xl tracking-wide text-white'>
                                <strong>Work Experience</strong>
                            </h3>
                            <h6 className=' text-textcolor text-sm tracking-1'>
                                <strong>PREVIOUS JOBS</strong>
                            </h6>
                        </div>
                    </div>
                    <div className=' col-span-2 px-4'>
                        <div className=" text-alltext mb-12">
                                <h4 className=" text-xl	">
                                    <strong>PHP web developer</strong>
                                </h4>
                                <h5 className=" text-yellow">
                                    <strong>AAHA SOLUTIONS</strong>
                                </h5>
                                <h6 className="mt-2.5">MAY 2022 - PRESENT</h6>
                                <p className=" my-7">
                                    I began my developer journey at AAHA Solutions and have grown to a mid-level PHP developer, 
                                    honing my skills and expertise with a focus on open cart educational website and e-commerce website.
                                </p>
                        </div>
                        <div className=' text-alltext mb-12'>
                            <h4 className=" text-xl	">
                                <strong>JUNIOR PHP web developer</strong>
                            </h4>
                            <h5 className=" text-yellow">
                                <strong>VISIONWEB SOFTWARE SOLUTIONS</strong>
                            </h5>
                            <h6 className="mt-2.5">NOVEMBER 2020 - JUNE 2021</h6>
                            <p className=" my-7">
                                I started my developer career journey at visionweb software solutions, 
                                where I had the opportunity to work on intern cum junior developer 
                                and lay the foundation for my expertise as a PHP developer.
                            </p>
                        </div>
                    </div>  
                </div>
            </div>
    </section>
  )
}