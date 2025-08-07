import React, { useState } from "react";
import { Link } from "react-router-dom";
import services from '../../data/services';
// update path if different

const SingleService = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedService = services[selectedIndex];
  // console.log('servicedata', services);
  // console.log("selectedService:", selectedService);

  const formatIndex = (index) => {
    return (index + 1).toString().padStart(2, "0");
  };

  return (
    <div>
      {/* DESKTOP: Image left, list right */}
      <div className="hidden lg:flex justify-between gap-20 w-full">
        {/* LEFT: Image + details */}
        <Link
          to={`/services/${selectedService.slug}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="block group lg:w-1/2"
        >
          <div className="flex flex-col items-start ">
            <img
              src={selectedService.image}
              alt={selectedService.title}
              className="w-full h-auto lg:max-h-80 rounded-lg object-cover mb-5"
            />
            <p className="text-[#0C0C0C] font-Switzer-Light font-thin lg:text-lg">
              {selectedService.details}
            </p>
          </div>
        </Link>

        {/* RIGHT: Selectable list */}
        <div className="flex flex-col gap-7 lg:w-1/2 ">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setSelectedIndex(index)}
              /* ↓ added `group` so nested items can use `group-hover:` */
              className="group text-left lg:text-[28px] font-semibold px-4 py-3 rounded-md transition-all duration-300"
            >
              <div className="leading-none" style={{ lineHeight: "0.25px" }}>
                {/* --- Number --- */}
                <span
                  className={`
              block text-xl font-Switzer-Medium tracking-widest transition-all duration-300
              ${index === selectedIndex
                      ? "text-[#0C0C0C]"
                      : "text-[#0C0C0C]/50 group-hover:translate-x-0.5 group-hover:text-[#0C0C0C]"
                    }
            `}
                >
                  {formatIndex(index)}
                </span>

                {/* --- Title (linked when active) --- */}
                {index === selectedIndex ? (
                  <Link
                    to={`/services/${service.slug}`}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    <span
                      className={`
                  block lg:text-[28px] font-Switzer-Medium font-medium pl-10
                  transition-all duration-300
                  text-[#0C0C0C]
                `}
                    >
                      {service.title}
                    </span>
                  </Link>
                ) : (
                  <span
                    className={`
                block lg:text-[28px] font-Switzer-Medium font-medium pl-10
                transition-all duration-300
                text-[#0C0C0C]/50 group-hover:translate-x-1 group-hover:text-[#0C0C0C]
              `}
                  >
                    {service.title}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* MOBILE/TABLET: Only Right List + Dynamic Details */}
      <div className="lg:hidden ">
        {services.map((service, index) => (
          <div key={service.id} className="mb-4  ">
            <button
              onClick={() => setSelectedIndex(index)}
              className="w-full text-left text-xl font-medium mb-1"
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  className={`text-base font-Switzer-Medium font-medium tracking-widest leading-[1] ${index === selectedIndex ? "text-[#0C0C0C]" : "text-[#0C0C0C]/50"
                    }`}
                >
                  {formatIndex(index)}
                </span>

                {index === selectedIndex ? (
                  <Link
                    to={`/services/${service.slug}`}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="-mt-4"
                  >
                    <span className="text-base font-Switzer-Medium font-medium pl-7 text-[#0C0C0C] -mt-1 leading-[1.1] ">
                      {service.title}
                    </span>
                  </Link>
                ) : (
                  <span className="text-base font-Switzer-Medium font-medium pl-7 text-[#0C0C0C]/50 -mt-2 leading-[1.1]">
                    {service.title}
                  </span>
                )}
              </div>

            </button>

            {/* Show selected service details below its title */}
            {index === selectedIndex && (
              <Link
                to={`/services/${service.slug}`}
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                <p className="mt-2 text-xs text-justify font-Switzer-Medium font-light ">
                  {service.details}
                </p>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleService;