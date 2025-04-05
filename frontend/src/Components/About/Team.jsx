import React, { useState, useEffect } from 'react';
import { getTeamApi } from '../../utils/api/teamApi';
import Loading from '../Loading/Loading';

export const Team = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await getTeamApi();
        setTeams(response.team);
      } catch (error) {
        console.error('Failed to fetch team:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  return (
    <div className='mt-28 lg:mt-40 animate-fade-up duration-1000'>
      <div className='w-11/12 mx-auto'>
        <h1 className='text-2xl uppercase font-Switzer-Medium md:text-4xl lg:text-5xl'>
          Meet the team
        </h1>
      </div>

      <div className="mt-10 w-11/12 mx-auto min-h-[300px]">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Loading />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teams.map((item) => (
              <div
                key={item._id}
                className="bg-white overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-96 2xl:h-124 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h2 className="text-lg font-Switzer-Medium text-gray1">{item.name}</h2>
                  <h2 className="text-sm font-Switzer-Medium text-gray3">{item.role}</h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};