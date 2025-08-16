import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/reel-union/reel-union-logo.png';

const ReelUnionNavbar = () => {
    return (
        <div className='py-4 max-h-20 border-b border-zinc-200'>
            <div className='w-11/12 mx-auto flex justify-between items-center'>
                <div>
                    <img src={logo} alt="Reel Union Logo" className='h-10' />
                </div>

                <div className='flex items-center gap-5'>
                    <ul className='flex space-x-5'>
                    <li>
                        <Link to="/reelunion">Home</Link>
                    </li>
                    <li>
                        <Link to="/reelunion/creator-onboarding">Creator Onboarding</Link>
                    </li>
                    <li>
                        <Link to="/reelunion/about">About</Link>
                    </li>
                </ul>

                <Link
                    to={'/creator-onboarding'}
                    className='bg-gray1 text-white px-4 py-1 rounded-md hover:scale-105 transition-transform duration-300'
                >
                    Apply Now
                </Link>
                </div>
            </div>
        </div>
    )
}

export default ReelUnionNavbar