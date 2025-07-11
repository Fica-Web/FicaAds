const GridBox = ({ section }) => {
    if (!section || !section.subSections) return null;

    return (
        <div className="md:my-28 my-12">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-Switzer-Regular mb-4 text-black md:text-start text-center leading-tight">
                {section.heading}
            </h2>

            {/* Optional Description */}
            {section.description && (
                <p className="text-lg text-gray-700 ">
                    {section.description}
                </p>
            )}

            {/* Grid of Advantage Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {section.subSections.map((sub, index) => (
                    <div
                        key={index}
                        className="p-8 border border-gray1 rounded-2xl bg-white"
                    >
                        <h3 className="text-xl font-bold text-black mb-6 text-center">
                            {sub.subHeading}
                        </h3>

                        <ul
                            className={`text-lg space-y-4 text-gray1 pl-6 ${sub.subDescription.length === 1 ? 'list-none' : 'list-disc list-outside'
                                }`}
                        >
                            {sub.subDescription.map((desc, i) => (
                                <li key={i}>
                                    {desc.content}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GridBox;