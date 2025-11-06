import { LuUsers, LuDollarSign, LuTrendingUp, LuCalendar } from "react-icons/lu";
import image from '../../../assets/Images/reel-union/camera-man.jpeg';

const worksArray = [
    {
        icon: LuUsers,
        title: 'Community-First Approach',
        description: "Everyone interested in content creation can join. You don't need a large following, just the right mindset and passion for storytelling.",
        buttonText: 'Just the right mindset',
    },
    {
        icon: LuCalendar,
        title: 'Shoot-Based Collaboration',
        description: "We plan brand & creator shoots based on member availability. It's flexible, project-based, and respectful of your time and schedule.",
        buttonText: 'Flexible & respectful',
    },
    {
        icon: LuDollarSign,
        title: 'Revenue & Recognition',
        description: "Contributors are credited, paid fairly, and considered for long-term collaborations across HOF brands like Fica Ad Innovations and Tender Halwa.",
        buttonText: 'Fair compensation',
    },
    {
        icon: LuTrendingUp,
        title: 'Platform Growth',
        description: "Reel Union is creator-owned. From branded channels to YouTube revenue share and influencer campaigns - you grow as we grow.",
        buttonText: 'Shared success',
    },
]

const HowItWorks = () => {
    return (
        <div className='w-11/12 mx-auto text-center py-12 lg:py-24 flex flex-col justify-center items-center lg:gap-6 gap-3'>
            <h2 className='text-2xl lg:text-4xl font-bold font-Switzer-Medium'>
                How It Works
            </h2>
            <p className='max-w-2xl text-neutral-600 text-base lg:text-lg mb-5'>
                Our streamlined process ensures every creator can contribute meaningfully while maintaining flexibility and creative freedom.
            </p>
            <div className='flex lg:flex-row flex-col gap-5 w-full'>
                <div className='lg:w-7/12 w-full lg:pr-10 flex flex-col justify-center gap-8'>
                    {worksArray.map((item, index) => (
                        <SingleWork 
                            key={item.title}
                            index={index}
                            item={item}
                        />
                    ))}
                </div>
                <div className='lg:w-5/12 w-full '>
                    <img src={image} alt="" className='object-cover w-full lg:max-h-[90vh] max-h-[60vh] rounded-2xl' />
                </div>
            </div>
        </div>
    )
}

const SingleWork = ({ item, index }) => {
    const Icon = item.icon;
    return (
        <div className='flex gap-5 w-full'>
            <div className="h-fit lg:px-4 lg:py-3 px-2 py-1.5 rounded-full bg-black text-white font-bold lg:text-base text-sm">
                0{index + 1}
            </div>

            <div className="flex flex-col gap-2 text-start">
                <div className="flex items-center gap-2 font-semibold lg:text-base text-sm">
                    <Icon />
                    <h3>
                        { item.title }
                    </h3>
                </div>
                <p className="text-neutral-600 lg:text-base text-sm">
                    { item.description }
                </p>
                <div className="w-fit bg-adminGray px-2 py-1 rounded-md text-xs font-semibold">
                    { item.buttonText }
                </div>
            </div>
        </div>
    )
}

export default HowItWorks