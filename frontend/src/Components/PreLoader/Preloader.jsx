// import React, { useEffect } from "react";
// import gsap from "gsap";
// // import "./styles.css"; // Use if Tailwind is insufficient for specific styles

// const Preloader = () => {
//   useEffect(() => {
//     const counter3 = document.querySelector(".counter-3");

//     for (let i = 0; i < 2; i++) {
//       for (let j = 0; j < 10; j++) {
//         const div = document.createElement("div");
//         div.className = "num";
//         div.textContent = j;
//         counter3.appendChild(div);
//       }
//     }

//     const finalDiv = document.createElement("div");
//     finalDiv.className = "num";
//     finalDiv.textContent = "0";
//     counter3.appendChild(finalDiv);

//     const animate = (counter, duration, delay = 0) => {
//       const numHeight = counter.querySelector(".num").clientHeight;
//       const totalDistance =
//         (counter.querySelectorAll(".num").length - 1) * numHeight;

//       gsap.to(counter, {
//         y: -totalDistance,
//         duration,
//         delay,
//         ease: "power2.inOut",
//       });
//     };

//     animate(counter3, 5);
//     animate(document.querySelector(".counter-2"), 6);
//     animate(document.querySelector(".counter-1"), 2, 4);

//     gsap.to(".digit", {
//       top: "-150px",
//       stagger: {
//         amount: 0.25,
//       },
//       delay: 6,
//       duration: 1,
//       ease: "power4.inOut",
//     });

//     gsap.from(".loader-1", {
//       width: 0,
//       duration: 6,
//       ease: "power2.inOut",
//     });

//     gsap.from(".loader-2", {
//       width: 0,
//       delay: 1.9,
//       duration: 2,
//       ease: "power2.inOut",
//     });

//     gsap.to(".loader", {
//       background: "none",
//       delay: 6,
//       duration: 0.1,
//     });

//     gsap.to(".loader-1", {
//       rotate: 90,
//       y: -50,
//       duration: 0.5,
//       delay: 6,
//     });

//     gsap.to(".loader-2", {
//       x: -75,
//       y: 75,
//       duration: 0.5,
//     });

//     gsap.to(".loader", {
//       scale: 40,
//       duration: 1,
//       delay: 7,
//       ease: "power2.inOut",
//     });

//     gsap.to(".loader", {
//       rotate: 45,
//       y: 500,
//       x: 2000,
//       duration: 1,
//       delay: 7,
//       ease: "power2.inOut",
//     });

//     gsap.to(".loading-screen", {
//       opacity: 0,
//       duration: 0.5,
//       delay: 7.5,
//       ease: "power1.inOut",
//     });

//     gsap.to("h1", 1.5, {
//       delay: 7,
//       y: -80,
//       ease: "power4.inOut",
//       stagger: {
//         amount: 0.1,
//       },
//     });
//   }, []);

//   return (
//     <div className="relative h-screen w-screen">
//       {/* Loading Screen */}
//       <div className="loading-screen fixed inset-0 bg-black text-white">
//         <div className="loader flex gap-0 absolute top-1/2 left-1/2 w-72 h-12 transform -translate-x-1/2 -translate-y-1/2 bg-gray-700">
//           <div className="loader-1 bar w-48 bg-white"></div>
//           <div className="loader-2 bar w-24 bg-white"></div>
//         </div>
//         <div className="counter absolute left-12 bottom-12 flex text-7xl">
//           <div className="counter-1 digit relative top-[-4px]"></div>
//           <div className="counter-2 digit relative top-[-4px]"></div>
//           <div className="counter-3 digit relative top-[-4px]"></div>
//         </div>
//       </div>

//       {/* Website Content */}
//       <div className="website-content flex justify-center items-center h-full">
//         <div className="header relative">
//           <div className="h1 flex">
//             <h1 className="text-6xl text-center relative top-20 mx-2 uppercase font-light">Lusion</h1>
//             <h1 className="text-6xl text-center relative top-20 mx-2 uppercase font-light">Preloader</h1>
//           </div>
//           <div className="header-revealer absolute top-0 left-0 w-full h-full">
//             <div className="bg-white absolute top-20 left-0 w-full h-full"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Preloader;