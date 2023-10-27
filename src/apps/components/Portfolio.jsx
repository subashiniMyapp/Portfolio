import React, { useEffect, useState } from "react";
import { images , btns } from './DataFilter';
export default function Portfolio() {
    const [filterImages, setFilterImages] = useState(null);
    const [active, setActive] = useState(false);

    useEffect( () =>{
        setFilterImages(images);
    },[]);

    const handleClick = (e) =>{
        // const btnValue =  e.target.data-value;
        const btnValue = e.target.getAttribute('data-value');
        // console.log(btnValue);
        setActive(btnValue);

        const newFilterImages = images.filter( (item) => item.category === btnValue);
        if ( btnValue === "all") {
            setFilterImages(images);
        }else{
            setFilterImages(newFilterImages);
        }
    }


    return(
        <section className=' px-0  pt-28 pb-0 block'>
            <div className=' container mx-auto px-4'>
                <div className=' grid  sm:grid-cols-3 grid-cols-1'>
                    <div className=' col-span-1 px-4'>
                        <div className=' before:h-10 before:w-50 before:rounded mb-5 before:block before:bg-yellow before:mb-5'>
                            <h3 className=' text-3xl tracking-wide'>
                                <strong>Portfolio</strong>
                            </h3>
                            <h6 className=' text-textcolor text-sm tracking-1'>
                                <strong>MY WORK</strong>
                            </h6>
                        </div>
                    </div>
                    <div className=' col-span-2 px-4'>
                        <div className=' mt-60 text-text-color'>
                            {
                                btns.map((item,id) =>{
                                    const {name, value } = item;
                                    return(
                                        <a
                                            onClick={handleClick}
                                            key={id}
                                            data-value ={value}
                                            className={`${
                                                active === value ? "text-yellow" : "" }
                                                mr-5 mt-10 inline-block transition-all cursor-pointer font-Poppins  font-semibold text-sm`}
                                        >
                                        {name}
                                        </a>
                                    );
                                })
                            }
                        </div>
                    </div>  
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-5 md:mt-14 mt-4">
                {filterImages &&
                    filterImages.map((item , id)=>{
                        const {imageUrl,url} = item ;
                        return(
                            <div className='overflow-hidden  group  px-2 shadow-lg'key={id}>
                                <a href={url} className=" cursor-pointer" target="_blank" rel="noopener noreferrer">
                                {/* <p className=" group-hover: opacity-20">uhbfjdnfbjkdfbn</p> */}
                                    <img
                                        className='w-full h-full object-cover cursor-pointer hover:scale-105 transform transition-transform duration-300'
                                        src={imageUrl}
                                        alt='demo-img'
                                    />
                                   
                                </a>
                            </div>
                        );
                    })}
            </div>
        </section>
    )
}