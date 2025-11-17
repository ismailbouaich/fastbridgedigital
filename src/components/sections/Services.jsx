"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Smartphone, Palette, Rocket, Database, Cloud } from "lucide-react";
import { GlassCard, GlassCardHeader, GlassCardContent } from "@/components/ui/GlassCard";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/variants";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js. Scalable, fast, and SEO-optimized.",
    features: ["React & Next.js", "Progressive Web Apps", "E-commerce Solutions", "API Integration"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.",
    features: ["React Native", "iOS & Android", "App Store Deployment", "Real-time Features"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed with user experience at the forefront. From wireframes to final designs.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Robust server-side solutions with secure APIs, database design, and cloud infrastructure.",
    features: ["RESTful APIs", "Database Design", "Authentication", "Performance Optimization"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Deploy and scale your applications with modern cloud infrastructure and DevOps practices.",
    features: ["AWS & Azure", "CI/CD Pipelines", "Docker & Kubernetes", "Monitoring"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Rocket,
    title: "MVP Development",
    description: "Rapid prototyping and MVP development to validate your ideas and get to market faster.",
    features: ["Quick Turnaround", "Agile Methodology", "Market Validation", "Iterative Development"],
    color: "from-orange-500 to-red-500",
  },
];

export function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            What We <span className="text-gradient">Do Best</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            From concept to deployment, we provide end-to-end development services
            that bring your vision to life.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={staggerItem}>
                <GlassCard hover className="h-full p-8 group">
                  {/* Icon with Gradient */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-linear ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-linear ${service.color}`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Glow Effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-2xl -z-10"
                    style={{
                      background: `linear-gradient(135deg, ${
                        service.color.includes('blue-500') ? '#3b82f6' :
                        service.color.includes('purple-500') ? '#a855f7' :
                        service.color.includes('pink-500') ? '#ec4899' :
                        service.color.includes('green-500') ? '#10b981' :
                        service.color.includes('orange-500') ? '#f97316' :
                        '#06b6d4'
                      }, transparent)`
                    }}
                  ></div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
