import React from 'react';
import { useParams } from 'react-router-dom';
import services from '../data/services';
import ServiceHero from '../Components/services/ServiceHero';
import ServiceContentListing from '../Components/services/ServiceContentListing';
import ThinkCreateDominate from '../Components/services/FourBoxes';

const ServiceDetailsPage = () => {
    const { id } = useParams();
    const service = services.find(service => service.id === id);

    if (!service) {
        return <div className="w-full h-screen flex justify-center items-center">Service not found</div>;
    }
    return (
        <div>
            <ServiceHero service={service} />
            <ServiceContentListing service={service} />
            <ThinkCreateDominate />
            {/* <GridBox /> */}
        </div>
    )
}

export default ServiceDetailsPage;
