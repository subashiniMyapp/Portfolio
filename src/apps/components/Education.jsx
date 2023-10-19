import React from "react";
export function Education(){
  return(
    <section className=" pt-100 pb-50 block">
       <div className=' container mx-auto px-4'>
                <div className=' grid  sm:grid-cols-3 grid-cols-1'>
                    <div className=' col-span-1  px-4'>
                        <div className=' before:h-10 before:w-50 before:rounded mb-5 before:block before:bg-yellow before:mb-5'>
                            <h3 className=' text-3xl tracking-wide'>
                                <strong>Education</strong>
                            </h3>
                            <h6 className=' text-textcolor text-sm tracking-1'>
                                <strong>ACADEMIC CAREER</strong>
                            </h6>
                        </div>
                    </div>
                    <div className=' col-span-2 px-4'>
                        <div className='  text-text-color '>
                            <div className=" mb-12">
                                <h4>
                                   <strong>BACHELOR DEGREE IN COMPUTER SCIENCE</strong> 
                                </h4>
                                <h5 className=" text-yellow">
                                    <strong>KCSAM - CUDDALORE</strong>
                                </h5>
                                <h6 className=" mt-2">GRADUATED IN MAY 2016(3 YEARS)</h6>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
    </section>
  )
}