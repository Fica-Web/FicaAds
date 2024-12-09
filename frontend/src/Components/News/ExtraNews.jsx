import React, { useState } from 'react';

const ExtraNews = () => {
    const [activeService, setActiveService] = useState(null);

    const services = [
        {
            id: '1',
            title: 'Unlikability Could Be Your Brand Secret Weapon',
            details:
                "Sometimes, the first step in getting a consumer to love your brand is to ask, 'Why don’t they like it in the first place?",
            link: 'https://www.adweek.com/brand-marketing/unlikability-could-be-your-brands-secret-weapon/'
        },
        {
            id: '2',
            title: 'Why D2C Brands Must Rethink Digital ad Spends ',
            details:
                "The leaky funnel: Why D2C brands must rethink digital ad spend and why agencies need to wake up and smell the coffe",
            link: 'https://www.livemint.com/industry/advertising/the-leaky-funnel-why-d2c-brands-must-rethink-digital-ad-spend-and-why-agencies-need-to-wake-up-and-smell-the-coffee-11732812647817.html',
        },
        {
            id: '3',
            title: 'Digital advertisers need to think beyond Google ',
            details:
                'Digital advertisers need to think beyond Google',
            link: 'https://www.livemint.com/industry/advertising/google-doj-antitrust-case-digital-advertising-ad-tech-adsense-doubleclick-auctions-open-internet-11731581860655.html',
        },
        {
            id: '4',
            title: 'Campaign trail. Ads ooze Diwali fervour',
            details:
                'Ads this month are full of festive flavour - the Pujo hangover continues even as Diwali sentiments blast off.',
            link: 'https://www.thehindubusinessline.com/catalyst/ads-ooze-diwali-fervour/article68775984.ece',
        },
        {
            id: '5',
            title: 'A new approach to build your personal brand',
            details:'For better or worse, in todays world everyone is a brand. Whether you are applying for a job, asking for a promotion, or writing a dating profile, your success will depend on getting other to organize your value',
            link: 'https://hbr.org/2023/05/a-new-approach-to-building-your-personal-brand',
        },
        {
            id: '6',
            title: 'Branding in the age of social media',
            details:'Social media was supposed to usher in a golden age of branding. But things didnt turn out that way.',
            link: 'https://hbr.org/2023/05/a-new-approach-to-building-your-personal-brand',
        },
    ];

    const toggleService = (id) => {
        setActiveService((prev) => (prev === id ? null : id));
    };

    return (
        <div className="mb-20">
            <div className="w-11/12 mx-auto">
                <div className="mt-20 space-y-6 md:space-y-0 md:flex">
                    <div className="md:w-1/2">
                        <h2 className="font-Switzer-Medium text-gray3 text-sm uppercase  xl:text-xl">Archive</h2>
                    </div>
                    <div className="md:w-1/2">
                        <div>
                            {services.map((service) => (
                                <div key={service.id} className="mb-4">
                                    <div
                                        className="flex justify-between items-center cursor-pointer"
                                        onClick={() => toggleService(service.id)}
                                    >
                                        <h3 className="text-xl font-Switzer-Medium xl:text-2xl">{service.title}</h3>
                                        <span className="text-xl xl:text-2xl">
                                            {activeService === service.id ? '-' : '+'}
                                        </span>
                                    </div>
                                    {activeService === service.id && (
                                        <div className="mt-2">
                                            <p className="text-gray-700 font-Switzer-Light">{service.details}</p>
                                            <a
                                                href={service.link}
                                                className="text-blue-500 underline mt-2 block"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                View More
                                            </a>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraNews;
