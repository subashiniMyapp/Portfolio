import React from "react";
import Circular from "./Progressbar"
export function About(){
  return(
    <section className=" pt-100 pb-50 block">
       <div className=' container mx-auto px-4'>
                <div className=' grid  sm:grid-cols-3 grid-cols-1'>
                    <div className=' col-span-1  px-4'>
                        <div className=' before:h-10 before:w-50 before:rounded mb-5 before:block before:bg-yellow before:mb-5'>
                            <h3 className=' text-3xl tracking-wide'>
                                <strong>About me</strong>
                            </h3>
                            <h6 className=' text-textcolor text-sm tracking-1'>
                                <strong>PROFESSIONAL PATH</strong>
                            </h6>
                        </div>
                    </div>
                    <div className=' col-span-2 px-4'>
                        <div className='  text-text-color '>
                            <p className=" mb-12">
                                Hi, I'm Subashini. An experienced PHP web developer based in Tamil Nadu, India. 
                                I have honed my skills to deliver high-quality, efficient, and scalable solutions.
                                My tech stock includes,
                            </p>
                            <Circular/>
                        </div>
                    </div>  
                </div>
            </div>
    </section>
  )
}