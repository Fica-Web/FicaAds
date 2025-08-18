import React from 'react';
import ReelUnionNavbar from '../Components/ReelUnion/content/ReelUnionNavbar';
import CreatorOnboardingForm from '../Components/ReelUnion/CreatorOnboarding/CreatorOnboardingForm';
import ReelUnionHero from '../Components/ReelUnion/content/ReelUnionHero';

const ReelUnion = () => {
    return (
        <div className=''>
            <ReelUnionNavbar />
            <ReelUnionHero />
            <CreatorOnboardingForm />
        </div>
    )
}

export default ReelUnion;