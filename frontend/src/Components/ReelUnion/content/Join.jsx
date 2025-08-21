import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ReusableButton from "../reusable/ReusableButton";

const Join = () => {
    return (
        <div className='w-full bg-adminGray/50 py-12 lg:py-24 flex flex-col gap-5 items-center px-3'>
            <h2 className='text-2xl lg:text-4xl font-bold font-Switzer-Medium'>
                Ready to Make Real Impact?
            </h2>
            <p className='max-w-2xl text-neutral-600 text-base lg:text-lg text-center'>
                Join The Reel Union today and become part of a movement that's transforming creative collaboration.
            </p>
            <div className="flex gap-3">
                <ReusableButton
                    label='Apply to Join'
                    to="/reel-union/onboarding"
                    className='bg-black hover:bg-black/70 text-white font-semibold text-sm px-6 py-2'
                />
                <ReusableButton
                    label='Learn More'
                    
                />
            </div>
        </div>
    )
}

export default Join