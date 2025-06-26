import React, { useState } from "react";
import { Link } from "react-router-dom";
import services from '../../data/services';
// update path if different

const SingleService = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedService = services[selectedIndex];
  console.log('servicedata', services);
  console.log("selectedService:", selectedService);


  const formatIndex = (index) => {
    return (index + 1).toString().padStart(2, "0");
  };


  return (
    <div>
    <div className="hidden lg:flex  justify-between gap-1 w-full ">
      {/* LEFT: Image + Details */}
      <Link
        to={`/services/${selectedService.id}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="block group"
      >
        <div className="flex flex-col items-start lg:w-[739px] ">
          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="w-full h-auto rounded-lg object-cover mb-5"
          />
          {/* <h2 className="text-2xl font-bold text-primary mb-4">{selectedService.title}</h2> */}
          <p className="text-[#0C0C0C] font-Switzer-Medium font-thin lg:text-lg ">{selectedService.details}</p>
        </div>
      </Link>


      <div className="flex flex-col gap-7 lg:w-[600px] ">
        {services.map((service, index) => (
          <button
            key={service.id}
            onClick={() => setSelectedIndex(index)}
            className={`text-left lg:text-[28px] font-semibold px-4 py-3 rounded-md transition-all duration-300`}
          >
            <div className="leading-none" style={{ lineHeight: "0.25px" }}>
              <span
                className={`block text-xl font-Switzer-Medium tracking-widest ${index === selectedIndex ? "text-[#0C0C0C]" : "text-[#0C0C0C]/50"
                  }`}
              >
                {formatIndex(index)}
              </span>
              <span
                className={`block lg:text-[28px] font-Switzer-Medium font-medium pl-10 ${index === selectedIndex ? "text-[#0C0C0C]" : "text-[#0C0C0C]/50"
                  }`}
              >
                {service.title}
              </span>
            </div>
          </button>

        ))}
      </div>
    </div>
     {/* MOBILE/TABLET: Only Right List + Dynamic Details */}
      <div className="lg:hidden ">
        {services.map((service, index) => (
          <div key={service.id} className="mb-6">
            <button
              onClick={() => setSelectedIndex(index)}
              className="w-full text-left text-xl font-medium mb-1"
            >
                <div className="leading-none " style={{ lineHeight: "0.25px" }}>
              <span
                className={`block text-base font-medium tracking-widest ${index === selectedIndex ? "text-[#0C0C0C]" : "text-[#0C0C0C]/50"
                  }`}
              >
                {formatIndex(index)}
              </span>
              <span
                className={`block lg:text-base text-justify font-Switzer-Medium font-medium pl-10 ${index === selectedIndex ? "text-[#0C0C0C]" : "text-[#0C0C0C]/50"
                  }`}
              >
                {service.title}
              </span>
            </div>
            </button>

            {/* Show selected service details below its title */}
            {index === selectedIndex && (
              <p className="mt-2 text-[#0C0C0C] text-base font-light">
                {service.details}
              </p>
            )}
          </div>
        ))}
      </div>
  </div>
  );
};

export default SingleService;