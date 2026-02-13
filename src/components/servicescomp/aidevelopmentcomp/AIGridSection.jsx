const AIGridSection = ({ listData, textData }) => {
    return (
        <div className="py-8 text-white">
            <div>
                {textData.map((section, index) => (
                    <div className="mb-10 text-center" key={index}>
                        <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-white">
                            {section.heading}
                        </h2>
                        <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            {section.subtext}
                        </p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {listData.map((section, index) => {
                    const IconComponent = section.icon;
                    return (
                        <div
                            key={index}
                            className="group relative p-5 rounded-2xl bg-[#080808] border border-white/5 transition-all duration-500 hover:border-white/50 hover:-translate-y-2"
                        >
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                                    {IconComponent && <IconComponent className="w-7 h-7" />}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300">
                                    {section.heading}
                                </h3>

                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    {section.para}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AIGridSection;
