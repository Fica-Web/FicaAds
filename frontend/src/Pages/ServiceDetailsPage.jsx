import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../Components/NavBar/NavBar';
import services from '../data/services';
import ServiceHero from '../Components/services/ServiceHero';
import ServiceContentListing from '../Components/services/ServiceContentListing';

const ServiceDetailsPage = () => {
    const { id } = useParams();
    const service = services.find(service => service.id === id);

    if (!service) {
        return <div className="w-full h-screen flex justify-center items-center">Service not found</div>;
    }
    return (
        <div>
            <NavBar />
            <ServiceHero service={service} />
            <ServiceContentListing service={service} />
        </div>
    )
}

export default ServiceDetailsPage;
