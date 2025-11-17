"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/variants";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "web",
    description: "A modern e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Fitness Tracking App",
    category: "mobile",
    description: "Mobile app for tracking workouts, nutrition, and progress with AI-powered recommendations.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&auto=format&fit=crop",
    tags: ["React Native", "Firebase", "TensorFlow"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Project Management Tool",
    category: "web",
    description: "Collaborative project management platform with kanban boards, time tracking, and team analytics.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Food Delivery App",
    category: "mobile",
    description: "On-demand food delivery app with real-time tracking, multiple payment options, and ratings.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop",
    tags: ["React Native", "Express", "Socket.io"],
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Real Estate Platform",
    category: "web",
    description: "Property listing platform with virtual tours, mortgage calculator, and agent matching.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
    tags: ["Next.js", "Prisma", "Google Maps API"],
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Social Media App",
    category: "mobile",
    description: "Social networking app with stories, messaging, and AI-powered content recommendations.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop",
    tags: ["React Native", "GraphQL", "Redis"],
    link: "#",
    github: "#",
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile Apps" },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold mb-4"
          >
            Our Portfolio
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Explore our latest work and see how we've helped businesses transform their digital presence.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "glass-strong text-white shadow-lg"
                  : "glass text-gray-400 hover:text-white hover:bg-white/10"
              )}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="group relative glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant={project.category === "web" ? "primary" : "secondary"}>
                      {project.category === "web" ? "Web" : "Mobile"}
                    </Badge>
                  </div>

                  {/* Hover Overlay with Links */}
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full glass-strong flex items-center justify-center text-white hover:scale-110 transition-transform"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full glass-strong flex items-center justify-center text-white hover:scale-110 transition-transform"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
