
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ArrowLeft, ExternalLink } from 'lucide-react';
import type { RoadmapTopic, RoadmapItem } from '../../data/roadmapData';
import { useState, useEffect } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: RoadmapTopic | null;
}

const Modal = ({ isOpen, onClose, data }: ModalProps) => {
    const [selectedItem, setSelectedItem] = useState<RoadmapItem | null>(null);

    // Reset selection when modal closes or data changes
    useEffect(() => {
        if (!isOpen) setSelectedItem(null);
    }, [isOpen, data]);

    if (!data) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    <motion.div
                        layoutId={`card-${data.id}`}
                        className="relative w-full max-w-2xl bg-[#1d1836] border border-purple-500/30 rounded-2xl p-6 shadow-2xl overflow-hidden min-h-[400px] flex flex-col"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                            mass: 0.5
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 z-10 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>

                        <AnimatePresence mode="wait">
                            {selectedItem ? (
                                // Detailed View
                                <motion.div
                                    key="detail"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="flex flex-col h-full"
                                >
                                    <button
                                        onClick={() => setSelectedItem(null)}
                                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-4 w-fit"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        Back to {data.title}
                                    </button>

                                    <h3 className="text-2xl font-bold text-white mb-4 font-['Orbitron']">{selectedItem.name}</h3>

                                    <div className="prose prose-invert max-w-none flex-grow overflow-y-auto custom-scrollbar pr-2">
                                        <p className="text-slate-300 leading-relaxed text-lg mb-6">
                                            {selectedItem.description}
                                        </p>

                                        {selectedItem.resources && selectedItem.resources.length > 0 && (
                                            <div className="mt-8">
                                                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                                    <ExternalLink className="w-4 h-4 text-purple-500" />
                                                    Resources
                                                </h4>
                                                <ul className="space-y-2">
                                                    {selectedItem.resources.map((res, idx) => (
                                                        <li key={idx}>
                                                            <a
                                                                href={res.url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 hover:border-purple-500/30 border border-transparent transition-all group"
                                                            >
                                                                <span className="text-purple-400 text-sm font-medium px-2 py-0.5 rounded bg-purple-500/10 uppercase tracking-wider">
                                                                    {res.type}
                                                                </span>
                                                                <span className="text-slate-200 group-hover:text-purple-300 transition-colors">
                                                                    {res.title}
                                                                </span>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ) : (
                                // List View
                                <motion.div
                                    key="list"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 rounded-xl bg-purple-500/20">
                                            <data.icon className="w-8 h-8 text-purple-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-['Orbitron'] text-white">{data.title}</h3>
                                            <p className="text-purple-300 text-sm">{data.category}</p>
                                        </div>
                                    </div>

                                    <p className="text-slate-300 mb-6 leading-relaxed">
                                        {data.description}
                                    </p>

                                    <div className="grid gap-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                                        {data.subTopics.map((sub, idx) => (
                                            <div key={idx} className="bg-black/20 rounded-xl p-4 border border-white/5">
                                                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                                    <ChevronRight className="w-4 h-4 text-purple-500" />
                                                    {sub.title}
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {sub.items.map((item, i) => (
                                                        <button
                                                            key={i}
                                                            onClick={() => setSelectedItem(item)}
                                                            className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:bg-purple-500/30 hover:border-purple-500/50 transition-all cursor-pointer"
                                                        >
                                                            {item.name}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
