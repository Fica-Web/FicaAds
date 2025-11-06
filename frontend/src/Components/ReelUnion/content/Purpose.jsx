import { LuUsers, LuHeart, LuTrendingUp, LuTarget } from "react-icons/lu";

const purposeArray = [
    {
        icon: LuUsers,
        title: 'Bring Creators Together',
        description: 'Unite passionate creators under one roof to form a powerful collaborative community.'
    },
    {
        icon: LuHeart,
        title: 'Power Brand Stories',
        description: 'Use unique styles, voices & talents to create authentic brand narratives that resonate.'
    },
    {
        icon: LuTrendingUp,
        title: 'Provide Real Growth',
        description: 'Offer genuine income opportunities, visibility, and professional development to creators.'
    },
    {
        icon: LuTarget,
        title: 'Humanized Ecosystem',
        description: 'Build a flexible, respectful environment that values creative expression and personal growth.'
    },
]

const Purpose = () => {
    return (
        <div className='w-full bg-adminGray/50 py-12 lg:py-24'>
            <div className='w-11/12 mx-auto text-center flex flex-col justify-center items-center gap-6'>
                <h2 className='text-2xl lg:text-4xl font-bold font-Switzer-Medium'>
                    Our Purpose
                </h2>
                <p className='max-w-2xl text-neutral-700 text-base lg:text-lg'>
                    The Reel Union exists to create a thriving ecosystem where creativity meets opportunity, and where every creator can make a meaningful impact.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {purposeArray.map((purpose) => (
                        <SinglePurpose
                            key={purpose.title}
                            icon={purpose.icon}
                            title={purpose.title}
                            description={purpose.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

const SinglePurpose = ({ icon: Icon, title, description }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-5 border border-neutral-200 p-6 bg-white rounded-2xl'>
            <div className='bg-adminGray p-3 text-xl rounded-full'>
                <Icon />
            </div>
            <h3 className="font-semibold">
                {title}
            </h3>
            <p className="text-neutral-600">
                {description}
            </p>
        </div>
    )
}

export default Purpose