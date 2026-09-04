"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInSectionProps = {
    children: ReactNode;
    delay?: number;
};

export function FadeInSection({ children, delay = 0 }: FadeInSectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
}