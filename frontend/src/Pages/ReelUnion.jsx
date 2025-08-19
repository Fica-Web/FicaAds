import ReelUnionNavbar from '../Components/ReelUnion/content/ReelUnionNavbar';
import CreatorOnboardingForm from '../Components/ReelUnion/CreatorOnboarding/CreatorOnboardingForm';
import ReelUnionHero from '../Components/ReelUnion/content/ReelUnionHero';
import Purpose from '../Components/ReelUnion/content/Purpose';
import HowItWorks from '../Components/ReelUnion/content/HowItWorks';
import WhatYouGet from '../Components/ReelUnion/content/WhatYouGet';
import WhoCanJoin from '../Components/ReelUnion/content/WhoCanJoin';
import Join from '../Components/ReelUnion/content/Join';

const ReelUnion = () => {
    return (
        <div className=''>
            <ReelUnionNavbar />
            <ReelUnionHero />
            <Purpose />
            <HowItWorks />
            <WhatYouGet />
            <WhoCanJoin />
            <Join />
            <CreatorOnboardingForm />
        </div>
    )
}

export default ReelUnion;