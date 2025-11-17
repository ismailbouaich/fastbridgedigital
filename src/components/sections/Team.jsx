"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Twitter } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/variants";

const team = [
  {
    name: "Alex Johnson",
    role: "Co-Founder & Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
    bio: "Full-stack developer with 8+ years of experience in building scalable web applications.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Chen",
    role: "Co-Founder & Design Lead",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
    bio: "UX/UI designer passionate about creating beautiful and intuitive digital experiences.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Marcus Williams",
    role: "Senior Mobile Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
    bio: "Mobile development expert specializing in React Native and iOS/Android native apps.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "Backend Architect",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop",
    bio: "Backend specialist with expertise in microservices, cloud infrastructure, and databases.",
    social: {
      twitter: "#",
      linkedin: "#",
      github: "#",
    },
  },
];

export function Team() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="team" className="py-20 lg:py-32 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

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
            className="inline-block px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-semibold mb-4"
          >
            Our Team
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Meet the <span className="text-gradient">Experts</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Our talented team of developers and designers are passionate about creating
            exceptional digital experiences.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div key={member.name} variants={staggerItem}>
              <GlassCard hover className="h-full group">
                {/* Profile Image */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Social Links on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full glass-strong flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full glass-strong flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full glass-strong flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gradient transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-purple-400 mb-3 font-medium">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                  style={{
                    background: `radial-gradient(circle at center, #a855f740, transparent 70%)`
                  }}
                ></div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
