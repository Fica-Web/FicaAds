import { LuVideo, LuTrendingUp, LuUser, LuCamera, LuShare2, LuAward, LuCheckCircle } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";

const contentArray = [
    {
        icon: LuVideo,
        title: 'Professional Campaigns',
        description: 'Feature in high-quality reels and campaigns for established brands',
        benefits: [
            'Professional production',
            'Brand partnerships',
            'Portfolio building',
        ],
    },
    {
        icon: LuTrendingUp,
        title: 'Growth Opportunities',
        description: 'Develop as a face, influencer, or creative contributor in the industry',
        benefits: [
            'Personal branding',
            'Skill development',
            'Industry connections',
        ],
    },
    {
        icon: LuUser,
        title: 'Expert Mentorship',
        description: "Get direction and feedback from HOF's experienced creative leads",
        benefits: [
            'Creative guidance',
            'Industry insights',
            'Career development',
        ],
    },
    {
        icon: LuCamera,
        title: 'Free Production Access',
        description: 'Access to professional shoot setups, camera gear, and post-production',
        benefits: [
            'Studio access',
            'Equipment included',
            'Post-production support',
        ],
    },
    {
        icon: LuShare2,
        title: 'Revenue Sharing',
        description: 'Long-term creators benefit from our revenue-sharing models',
        benefits: [
            'Fair compensation',
            'Growth bonuses',
            'Partnership opportunities',
        ],
    },
    {
        icon: LuAward,
        title: 'Recognition & Credit',
        description: 'Get proper recognition and credit in all published work',
        benefits: [
            'Portfolio credits',
            'Social media tags',
            'Industry recognition',
        ],
    },
]

const WhatYouGet = () => {
    return (
        <div className='w-full bg-adminGray/50 py-12 lg:py-24'>
            <div className='w-11/12 mx-auto text-center flex flex-col justify-center items-center gap-6'>
                <h2 className='text-2xl lg:text-4xl font-bold font-Switzer-Medium'>
                    What You Get
                </h2>
                <p className='max-w-2xl text-neutral-600 text-base lg:text-lg'>
                    Join The Reel Union and unlock opportunities for growth, recognition, and meaningful creative work.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {contentArray.map((item) => (
                        <SingleGet
                            key={item.title}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            benefits={item.benefits}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const SingleGet = ({ icon: Icon, title, description, benefits }) => {
    return (
        <div className='flex flex-col items-start justify-start gap-4 border border-neutral-200 p-6 bg-white rounded-2xl'>
            {/* Icon */}
            <div className='bg-adminGray p-2 text-2xl rounded-full'>
                <Icon />
            </div>
            
            {/* Title */}
            <h3 className="font-semibold text-lg">
                {title}
            </h3>
            
            {/* Description */}
            <p className="text-neutral-600 text-start text-sm">
                {description}
            </p>

            {/* Benefits */}
            <ul className="flex flex-col gap-2 mt-2">
                {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-neutral-700">
                        <LuCheckCircle className="text-green-500 text-sm" />
                        {benefit}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WhatYouGet;