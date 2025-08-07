import React from 'react';
import { useParams } from 'react-router-dom';
import services from '../data/services';
import ServiceHero from '../Components/services/ServiceHero';
import ServiceContentListing from '../Components/services/ServiceContentListing';

const ServiceDetailsPage = () => {
    const { slug } = useParams();
    const service = services.find(service => service.slug === slug);

    if (!service) {
        return <div className="w-full h-screen flex justify-center items-center">Service not found</div>;
    }
    return (
        <div>
            <ServiceHero service={service} />
            <ServiceContentListing service={service} />
            {/* <GridBox /> */}
        </div>
    )
}

export default ServiceDetailsPage;
