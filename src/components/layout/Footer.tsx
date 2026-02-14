
import { Shield, Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-10 bg-black/20 backdrop-blur-sm border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <Shield className="w-8 h-8 text-purple-500" />
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-['Orbitron']">
                        gopwnit
                    </span>
                </div>

                <div className="flex justify-center gap-6 mb-8 text-slate-400">
                    <a href="#" className="hover:text-purple-400 transition-colors"><Github className="w-5 h-5" /></a>
                    <a href="#" className="hover:text-cyan-400 transition-colors"><Twitter className="w-5 h-5" /></a>
                    <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
                </div>

                <p className="text-slate-600 text-xs mt-2">
                    &copy; {new Date().getFullYear()} gopwnit. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
