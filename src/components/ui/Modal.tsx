
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import type { RoadmapTopic } from '../../data/roadmapData';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: RoadmapTopic | null;
}

const Modal = ({ isOpen, onClose, data }: ModalProps) => {
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
                        className="absolute inset-0 bg-black/80"
                    />

                    <motion.div
                        layoutId={`card-${data.id}`}
                        className="relative w-full max-w-2xl bg-[#1d1836] border border-purple-500/30 rounded-2xl p-6 shadow-2xl overflow-hidden"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                            mass: 0.5, // Lightweight feel
                            opacity: { duration: 0.2 }
                        }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>

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
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
