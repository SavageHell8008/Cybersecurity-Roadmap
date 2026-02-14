
import { motion } from 'framer-motion';


const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto flex flex-col justify-center items-center text-center">
            <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 px-6 sm:px-16">
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>

                <div className="text-left w-full z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 font-['Orbitron']">
                            Build your <span className="text-[#915eff]">Cybersecurity Path</span>
                        </h1>
                        <p className="mt-2 text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
                            Master the art of <span className="text-[#915eff]">Ethical Hacking</span> <br className="sm:block hidden" />
                            and <span className="text-[#915eff]">Penetration Testing</span>
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="mt-10 flex flex-wrap gap-4"
                    >
                        <a
                            href="#fundamentals"
                            className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all hover:scale-105"
                        >
                            Start Learning
                        </a>
                        <a
                            href="#certifications"
                            className="px-8 py-3 rounded-xl bg-transparent border border-white/20 text-white font-bold hover:bg-white/10 transition-all hover:scale-105"
                        >
                            View Certifications
                        </a>
                    </motion.div>
                </div>
            </div>

            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#fundamentals">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
