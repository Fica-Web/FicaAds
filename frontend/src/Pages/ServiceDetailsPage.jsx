import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import services from '../data/services';
import AboutBanner from '../Components/About/AboutBanner';

const ServiceDetailsPage = () => {
    const { id } = useParams();
    const service = services.find(service => service.id === id);

    if (!service) {
        return <div className="w-full h-screen flex justify-center items-center">Service not found</div>;
    }
    return (
        <div>
            <NavBar />
            <AboutBanner />
            <div className='w-11/12 mx-auto my-20'>
                Service Detail page
                <h1 className="text-3xl font-bold">title: {service.title}</h1>
                <p className="mt-4">Description{service.details}</p>   
            </div> 
        </div>
    )
}

export default ServiceDetailsPage;
