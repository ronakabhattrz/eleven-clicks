"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-[#4F8EF7]/5 via-[#8B5CF6]/5 to-[#06B6D4]/5" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="glass border border-white/8 rounded-3xl px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                  {s.value}
                </p>
                <p className="text-sm text-white/50">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
