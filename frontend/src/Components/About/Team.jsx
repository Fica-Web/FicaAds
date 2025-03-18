import React, { useState, useEffect } from 'react'
import { getTeamApi } from '../../utils/api/teamApi';

export const Team = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async (params) => {
      const response = await getTeamApi();
      setTeams(response.team)
    }

    fetchTeams()
  }, [])

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
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-96 2xl:h-124 object-cover rounded-xl"
              
            />
            <div className="p-4">
              <h2 className="text-lg  font-Switzer-Medium text-gray1">{item.name}</h2>
              <h2 className="text-lg  font-Switzer-Medium text-gray3">{item.role}</h2>
            </div>
          </div>
        ))}
      </div>


    </div>
  )
}
