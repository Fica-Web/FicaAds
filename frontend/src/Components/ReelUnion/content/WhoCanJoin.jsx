import { LuUser, LuVideo, LuFilm, LuHeart, LuPen, LuCamera, LuBrush } from "react-icons/lu";
import image from '../../../assets/Images/reel-union/team.jpeg';

const roles = [
    { icon: LuUser, title: "Actors", desc: "Bring stories to life" },
    { icon: LuUser, title: "Models", desc: "Visual storytelling" },
    { icon: LuFilm, title: "Filmmakers", desc: "Behind the camera" },
    { icon: LuVideo, title: "Editors", desc: "Post-production magic" },
    { icon: LuHeart, title: "Influencers", desc: "Social media presence" },
    { icon: LuPen, title: "Writers", desc: "Craft compelling narratives" },
    { icon: LuCamera, title: "Photographers", desc: "Capture moments" },
    { icon: LuBrush, title: "Set Designers", desc: "Create environments" },
];

const values = [
    "Passion for storytelling",
    "Creative mindset",
    "Collaborative spirit",
    "Growth mindset",
];

const WhoCanJoin = () => {
    return (
        <div className="w-11/12 mx-auto flex lg:flex-row flex-col gap-10 py-12 lg:py-24">
            {/* Left Side */}
            <div className="lg:w-1/2 w-full flex flex-col gap-6">
                <h2 className="text-2xl lg:text-4xl font-bold font-Switzer-Medium">
                    Who Can Join?
                </h2>
                <p className="text-neutral-600 text-base lg:text-lg">
                    We welcome creators from all backgrounds and experience levels. Your passion and intent matter more than your follower count.
                </p>

                {/* Role Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {roles.map((role) => (
                        <SingleBox
                            key={role.title}
                            icon={role.icon}
                            title={role.title}
                            desc={role.desc}
                        />
                    ))}
                </div>

                {/* What We Value */}
                <div className="bg-neutral-100 p-5 rounded-xl my-6">
                    <h3 className="font-semibold mb-3">What We Value</h3>
                    <div className="flex flex-wrap gap-3">
                        {values.map((val) => (
                            <span
                                key={val}
                                className="bg-white border border-neutral-200 px-3 py-1 rounded-md text-sm text-neutral-700 shadow-sm"
                            >
                                {val}
                            </span>
                        ))}
                        <p className="text-neutral-600">
                            Age, experience, or fame doesn't matter. Only intent does.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="lg:w-1/2 w-full flex justify-center">
                <img
                    src={image}
                    alt="Team"
                    className="object-cover w-full rounded-2xl shadow-md"
                />
            </div>
        </div>
    );
};

const SingleBox = ({ icon: Icon, title, desc }) => {
    return (
        <div className="flex items-start gap-3 border border-neutral-200 rounded-xl p-4 hover:shadow-md transition">
            <div className="text-xl text-neutral-700 bg-adminGray flex items-center p-3 rounded-full">
                <Icon />
            </div>
            <div>
                <h4 className="font-semibold">{title}</h4>
                <p className="text-sm text-neutral-600">{desc}</p>
            </div>
        </div>
    );
};

export default WhoCanJoin;