
import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../layout/SectionWrapper';
import { roadmapData } from '../../data/roadmapData';
import type { RoadmapTopic } from '../../data/roadmapData';
import Modal from '../ui/Modal';

const Roadmap = () => {
    const [selectedTopic, setSelectedTopic] = useState<RoadmapTopic | null>(null);

    // Group data by category
    const categories = Array.from(new Set(roadmapData.map(item => item.category)));

    // Custom order
    const categoryOrder = ['IT Fundamentals', 'Development', 'Security', 'Cloud', 'Validation', 'Practice'];
    categories.sort((a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b));

    const getCategoryId = (cat: string) => {
        switch (cat) {
            case 'IT Fundamentals': return 'fundamentals';
            case 'Development': return 'programming';
            case 'Security': return 'security';
            case 'Cloud': return 'cloud';
            case 'Validation': return 'certifications';
            case 'Practice': return 'practice';
            default: return cat.toLowerCase().replace(/\s+/g, '-');
        }
    };

    return (
        <>
            <SectionWrapper id="roadmap" className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
                        Comprehensive Path
                    </p>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] font-['Orbitron']">
                        Cybersecurity Roadmap
                    </h2>
                    <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                        Click on any node to explore detailed topics, tools, and resources.
                    </p>
                </motion.div>

                <div className="space-y-20">
                    {categories.map((category, catIndex) => (
                        <div key={category} id={getCategoryId(category)} className="scroll-mt-24">
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.1 }}
                                className="text-2xl font-bold text-white mb-8 border-l-4 border-purple-500 pl-4 font-['Orbitron']"
                            >
                                {category}
                            </motion.h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {roadmapData
                                    .filter(item => item.category === category)
                                    .map((item, index) => (
                                        <motion.div
                                            layoutId={`card-${item.id}`}
                                            key={item.id}
                                            onClick={() => {
                                                if (item.title === "CTF Platforms") {
                                                    window.location.href = "https://gopwnit.com";
                                                } else {
                                                    setSelectedTopic(item);
                                                }
                                            }}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: index * 0.05 }}
                                            whileHover={{ scale: 1.03, y: -5 }}
                                            className="bg-[#151030] p-6 rounded-2xl border border-slate-700 cursor-pointer group hover:bg-[#1d1836] hover:border-purple-500/50 transition-all shadow-lg"
                                        >
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="p-3 rounded-full bg-slate-800 group-hover:bg-purple-500/20 transition-colors">
                                                    <item.icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
                                                </div>
                                                <h4 className="text-xl font-bold text-white font-['Orbitron'] group-hover:text-purple-300 transition-colors">
                                                    {item.title}
                                                </h4>
                                            </div>
                                            <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                                                {item.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {item.subTopics.slice(0, 3).map((sub, i) => (
                                                    <span key={i} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                                                        {sub.title}
                                                    </span>
                                                ))}
                                                {item.subTopics.length > 3 && (
                                                    <span className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                                                        +{item.subTopics.length - 3} more
                                                    </span>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            <Modal
                isOpen={!!selectedTopic}
                onClose={() => setSelectedTopic(null)}
                data={selectedTopic}
            />
        </>
    );
};

export default Roadmap;
