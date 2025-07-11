import img from '../../assets/Images/services/seo1.jpg';

const ListBox = ({ section }) => {
    if (!section || !section.subSections) return null; // Ensure data exists

    return (
        <div className="md:my-28 flex flex-col md:flex-row gap-8 items-center ">
            {/* Left Section: Headline + Description + Checklist */}
            <div className="md:w-1/2 h-full ">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-Switzer-Regular mb-6 text-black md:text-start text-center leading-tight">
                    {section.heading}
                </h2>

                {section.subSections[0].subDescription.find(desc => desc.type === "content") && (
                    <p className="text-gray-600 mb-6 max-w-xl text-lg">
                        {section.subSections[0].subDescription.find(desc => desc.type === "content").content}
                    </p>
                )}

                <ul className="space-y-4 border-t border-gray-300 pt-6 text-lg">
                    {section?.subSections[0]?.subDescription
                        .filter(desc => desc.type === "list")
                        .map((desc, index, arr) => (
                            <li
                                key={index}
                                className={`${index !== arr.length - 1 ? "border-b border-gray-300 pb-6" : ""}`}
                            >
                                {desc.content}
                            </li>
                        ))}
                </ul>
            </div>

            {/* Right Section: Image */}
            <div className="md:w-1/2 flex justify-center md:justify-end items-stretch h-full">
                <div className="h-full max-h-[90vh] flex items-center rounded-xl overflow-hidden shadow-lg w-full max-w-xl">
                    <img
                        src={section.image || img}
                        alt="Desk setup with laptop and accessories"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>

    );
};

export default ListBox;