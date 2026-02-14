
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const SectionWrapper = ({ children, id, className }: { children: ReactNode; id: string; className?: string }) => {
    return (
        <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0, transition: { type: 'spring', duration: 1.25, delay: 0.1 } },
            }}
            id={id}
            className={`relative z-0 mx-auto max-w-7xl px-6 sm:px-16 py-10 ${className}`}
        >
            <span className="hash-span" id={id}>
                &nbsp;
            </span>
            {children}
        </motion.section>
    );
};

export default SectionWrapper;
