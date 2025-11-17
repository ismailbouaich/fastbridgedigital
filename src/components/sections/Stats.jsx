"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TrendingUp, Users, Award, Zap } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/variants";

const stats = [
  {
    icon: TrendingUp,
    value: 150,
    suffix: "+",
    label: "Projects Completed",
    color: "text-blue-400",
  },
  {
    icon: Users,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    color: "text-purple-400",
  },
  {
    icon: Award,
    value: 50,
    suffix: "+",
    label: "Happy Clients",
    color: "text-pink-400",
  },
  {
    icon: Zap,
    value: 5,
    suffix: "+",
    label: "Years Experience",
    color: "text-cyan-400",
  },
];

function Counter({ value, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      const startTime = Date.now();
      const startValue = 0;
      const endValue = value;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

        setCount(current);

        if (progress < 1) {
          countRef.current = requestAnimationFrame(animate);
        }
      };

      countRef.current = requestAnimationFrame(animate);

      return () => {
        if (countRef.current) {
          cancelAnimationFrame(countRef.current);
        }
      };
    }
  }, [inView, value, duration, hasAnimated]);

  return <span ref={ref}>{count}</span>;
}

export function Stats() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="py-20 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="relative group"
              >
                {/* Glass Card */}
                <div className="glass p-8 rounded-2xl text-center transition-all duration-300 hover:bg-white/10 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>

                  {/* Value */}
                  <div className="text-5xl font-bold text-white mb-2">
                    <Counter value={stat.value} />
                    <span className={stat.color}>{stat.suffix}</span>
                  </div>

                  {/* Label */}
                  <p className="text-gray-400 text-sm font-medium">{stat.label}</p>

                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                    style={{
                      background: `radial-gradient(circle at center, ${
                        stat.color.includes('blue') ? '#3b82f6' :
                        stat.color.includes('purple') ? '#a855f7' :
                        stat.color.includes('pink') ? '#ec4899' :
                        '#06b6d4'
                      }40, transparent 70%)`
                    }}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
