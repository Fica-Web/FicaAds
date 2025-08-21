import { LuUsers, LuCamera } from "react-icons/lu";
import { CiPlay1 } from "react-icons/ci";
import heroImg from '../../../assets/Images/reel-union/hero.jpeg';
import ReusableButton from '../reusable/ReusableButton';

const ReelUnionHero = () => {
    return (
        <div className='w-11/12 mx-auto py-10 flex lg:flex-row flex-col justify-between gap-5'>
            <div className='lg:w-1/2 w-full flex flex-col justify-center gap-8 lg:pr-16'>
                <div className='flex gap-3'>
                    <ReusableButton 
                        icon={LuUsers} 
                        label='Creator Network' 
                        className='bg-neutral-200 text-xs'
                    />
                    <ReusableButton icon={LuCamera} label='House of Fica' />
                </div>

                <h2 className='text-3xl lg:text-6xl font-bold font-Switzer-Medium'>
                    Make Real Impact, One Reel at a Time
                </h2>
                <p className='text-lg text-neutral-600'>
                    Join The Reel Union - a collaborative creator network where passionate storytellers, filmmakers, and artists come together to create compelling content for brands and personal growth.
                </p>

                <div className='flex lg:flex-row flex-col gap-3'>
                    <ReusableButton 
                        label='Join the Movement' 
                        className='bg-black text-white font-semibold text-sm px-6 py-2'
                    />
                    <ReusableButton 
                        icon={CiPlay1} 
                        label='Watch Stories' 
                        className='text-sm '
                    />
                </div>
            <p className='text-neutral-700 text-sm -mt-5'>
                This is not an agency. This is a movement.
            </p>
            </div>

            <div className='lg:w-1/2 w-full'>
                <img src={heroImg} alt="Hero Image" className='rounded-2xl' />
            </div>
        </div>
    )
}

export default ReelUnionHero;