
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Roadmap', href: '#roadmap' },
        { name: 'About Us', href: '#about' },
        { name: 'Profile', href: '#profile' },
        { name: 'Leaderboard', href: '#leaderboard' },
    ];

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
                className={`
                    flex items-center justify-between px-6 py-3
                    w-full max-w-5xl rounded-full
                    backdrop-blur-md border border-white/10
                    transition-all duration-300
                    ${scrolled ? 'bg-black/40 shadow-lg shadow-purple-500/10' : 'bg-black/20'}
                `}
            >
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
                    <div className="relative w-24 h-8">
                        <img
                            src={logo}
                            alt="GPI Logo"
                            className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-transform group-hover:scale-110"
                        />
                    </div>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`
                                text-sm font-medium transition-colors relative group font-['Orbitron'] tracking-wide px-1
                                ${link.name === 'Roadmap' ? 'text-purple-400' : 'text-slate-300 hover:text-white'}
                            `}
                        >
                            {link.name}
                            <span
                                className={`
                                    absolute -bottom-1 left-0 h-0.5 bg-purple-500 transition-all duration-300
                                    ${link.name === 'Roadmap' ? 'w-full shadow-[0_0_8px_rgba(168,85,247,0.5)]' : 'w-0 group-hover:w-full'}
                                `}
                            />
                        </a>
                    ))}
                </div>

                {/* Register Button */}
                <div className="hidden md:block">
                    <a
                        href="#register"
                        className="
                            group flex items-center gap-2 px-6 py-2 rounded-full 
                            bg-black/50 border border-purple-500/30 text-white font-['Orbitron'] text-sm
                            hover:bg-purple-500/10 hover:border-purple-500/80 transition-all duration-300
                            shadow-[0_0_10px_rgba(168,85,247,0.1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]
                        "
                    >
                        Register
                        <ArrowRight className="w-4 h-4 text-purple-500 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-white p-2 hover:text-purple-400 transition-colors"
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        className="absolute top-24 left-4 right-4 bg-[#050816]/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col p-4 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`
                                        block px-4 py-3 rounded-xl transition-colors font-['Orbitron']
                                        ${link.name === 'Roadmap'
                                            ? 'text-purple-400 bg-purple-500/10 border border-purple-500/20'
                                            : 'text-slate-300 hover:text-white hover:bg-white/5'}
                                    `}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#register"
                                className="flex items-center justify-between px-4 py-3 mt-2 text-purple-400 bg-purple-500/10 rounded-xl border border-purple-500/20 font-['Orbitron']"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Register
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
