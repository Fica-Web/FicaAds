import React from 'react'
import rabith from "../../assets/Images/DSCF5655.jpg"
import shabil from "../../assets/Images/DSCF5662.jpg"
import jaseem from "../../assets/Images/DSCF5620.jpg"
import sanal from "../../assets/Images/DSCF5630.jpg"
import abhi from "../../assets/Images/abhinand.jpg"
import shibin from "../../assets/Images/DSCF5689.jpg"


const teams = [
    {id:1, name:"Muhammed Rbith",position:"CEO",image:rabith},
    {id:2, name:"Shibin Raj",position:"Graphic Designer",image:shibin},
    {id:3, name:"Shabil",position:"Junior Graphic Designer",image:shabil},
    {id:4, name:"Sanal Balakrishnan",position:"Cinematographer",image:sanal},
    {id:5, name:"Abhinand",position:"Editor",image:abhi},
    {id:6, name:"Jaseem",position:"Digital Marketer",image:jaseem},
]

export const Team = () => {
  return (
    <div className='mt-20 animate-fade-up duration-1000'>
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
