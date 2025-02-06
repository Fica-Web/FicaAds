import React from 'react'
import rabith from "../../assets/Images/DSCF5655.jpg";
import shabil from "../../assets/Images/shabil.jpg";
import sanal from "../../assets/Images/DSCF5630.jpg";
import abhi from "../../assets/Images/abhinand.jpg";
import shibin from "../../assets/Images/DSCF5689.jpg";
import adithyan from "../../assets/Images/adithyan.jpg";
import muhsin from "../../assets/Images/muhsin.jpg";
import naseeb from "../../assets/Images/naseeb.jpg";
import ajmal from "../../assets/Images/ajmal.jpg";
import nehala from "../../assets/Images/nehala.jpg";
import shifana from "../../assets/Images/shifana.jpg";
import surumiyah from "../../assets/Images/surumiyah.jpg";
import vishnu from "../../assets/Images/vishnu.jpg";


const teams = [
    {id:1, name:"Muhammed Rabith",position:"CEO",image:rabith},
    {id:11, name:"Shifana",position:"HR Executive",image:shifana},
    {id:6, name:"Adithyan",position:"Digital Marketing Lead",image:adithyan},
    {id:2, name:"Shibin Raj",position:"Graphic Designer",image:shibin},
    {id:3, name:"Muhammed Shabil",position:"Junior Graphic Designer",image:shabil},
    {id:4, name:"Sanal Balakrishnan",position:"Cinematographer",image:sanal},
    {id:5, name:"Abhinand KK",position:"Video Editor",image:abhi},
    {id:9, name:"Muhammed Ajmal",position:"Web Developer",image:ajmal},
    {id:13, name:"Vishnu Raj",position:"Content Creator",image:vishnu},
    {id:7, name:"Muhsin VK",position:"Digital Marketing Executive",image:muhsin},
    {id:8, name:"Naseeb Ali",position:"Performance Marketing Executive",image:naseeb},
    {id:10, name:"Nehala",position:"Web Developer",image:nehala},
    {id:12, name:"Surumiya Farwi",position:"HR Recruiter",image:surumiyah},
]

export const Team = () => {
  return (
    <div className='mt-28 lg:mt-40 animate-fade-up duration-1000'>
      <div className='w-11/12 mx-auto'>
        <h1 className='text-2xl uppercase font-Switzer-Medium md:text-4xl lg:text-5xl'>Meet the team</h1>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-11/12 mx-auto">

        {teams.map((item) => (
          <div
            key={item.id}
            className="bg-white   overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.position}
              className="w-full h-96 2xl:h-124 object-cover rounded-xl"
              
            />
            <div className="p-4">
              <h2 className="text-lg  font-Switzer-Medium text-gray1">{item.name}</h2>
              <h2 className="text-lg  font-Switzer-Medium text-gray3">{item.position}</h2>
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}
