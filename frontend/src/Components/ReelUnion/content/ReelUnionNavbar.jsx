import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../../assets/Images/reel-union/reel-union-logo.png";

// Define your nav links in one place
const navOptions = [
    { label: "Home", to: "/reelunion" },
    { label: "Purpose", to: "/reelunion/creator-onboarding" },
    { label: "How It Works", to: "/reelunion/about" },
    { label: "Join Us", to: "/reelunion/about" },
];

const ReelUnionNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="h-16 border-b border-zinc-200 bg-white relative">
            <div className="w-11/12 mx-auto h-full flex justify-between items-center">
                {/* Logo */}
                <div>
                    <img src={logo} alt="Reel Union Logo" className="h-10" />
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-5 text-neutral-600">
                    <ul className="flex space-x-5">
                        {navOptions.map((nav) => (
                            <li key={nav.label} className="hover:text-neutral-900">
                                <Link to={nav.to}>{nav.label}</Link>
                            </li>
                        ))}
                    </ul>

                    <Link
                        to={"/creator-onboarding"}
                        className="bg-gray1 text-white px-4 py-1 rounded-md hover:scale-105 transition-transform duration-300"
                    >
                        Apply Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-2xl"
                >
                    {menuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="absolute top-16 left-0 w-full bg-white text-sm shadow-md md:hidden z-50"
                    >
                        <ul className="flex flex-col items-start py-4 text-neutral-700 w-11/12 mx-auto">
                            {navOptions.map((nav) => (
                                <li key={nav.label}>
                                    <Link
                                        to={nav.to}
                                        onClick={() => setMenuOpen(false)} // Close menu on click
                                        className="py-2 block hover:text-neutral-900 w-full"
                                    >
                                        {nav.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="w-full mt-2">
                                <Link
                                    to={"/creator-onboarding"}
                                    onClick={() => setMenuOpen(false)}
                                    className="w-full block text-center bg-black text-white py-1 rounded-md"
                                >
                                    Apply Now
                                </Link>
                            </li>

                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ReelUnionNavbar;
