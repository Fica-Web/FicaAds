import React from 'react';
import img1 from "../../assets/Images/about2.jpg";
import img2 from "../../assets/Images/experimentation.jpg";
import img3 from "../../assets/Images/Event2.webp";

const AboutHero = () => {
    const products = [
        { id: "1", image: img1, title: "Research", details: "The first step in defining project objectives involves gathering information from interviews, audits and research." },
        { id: "2", image: img2, title: "Experimentation", details: "In this phase we will define how your organization wishes to be perceived by consumers. What makes it unique?" },
        { id: "3", image: img3, title: "Implementation", details: "Strategic design solutions will be explored based on the research, with multiple options presented and the chosen one further developed." }
    ];

    return (
        <div className='mt-40'>
            <div className='w-11/12 mx-auto  space-y-4 md:space-y-0 md:flex md:space-x-4'>
                {products.map((product) => (
                    <div key={product.id} className='h-119 xl:h-160 lg:w-1/3 xl:w-1/2 relative'>
                        <div className="absolute top-32 space-y-2 lg:top-20 xl:top-56 left-0 w-full h-full  text-white flex flex-col justify-center  p-4 rounded-xl">
                            <h2 className="text-2xl   xl:text-3xl font-Switzer-Medium">{product.title}</h2>
                            <p className="text-sm xl:text-base font-Switzer-Light text-gray">{product.details}</p>
                        </div>
                        <img src={product.image} alt={product.title} className='w-full h-full object-cover rounded-xl' />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutHero;
