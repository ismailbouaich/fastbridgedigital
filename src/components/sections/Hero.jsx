"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { scrollToSection } from "@/lib/utils";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#0a0a0a]">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0_0_0/0.05)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.03)_1px,transparent_0)] [background-size:40px_40px]"></div>
      
      {/* Gradient Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-linear-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm text-blue-900 dark:text-blue-300 font-medium">
                Web Design, Development & Digital Marketing
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-[1.1]"
            >
              Creating Digital
              <br />
              Experiences That
              <br />
              <span className="text-blue-600 dark:text-blue-400">Drive Growth</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-xl leading-relaxed"
            >
              A web design, development, and digital marketing agency with a passionate belief in the power of technology to positively transform business practices.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="primary"
                size="xl"
                onClick={() => scrollToSection("contact")}
                className="group"
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => scrollToSection("projects")}
                className="border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                View Our Work
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
            >
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">150+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Project Mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Main Featured Project */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative z-20"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-blue-500 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
                  alt="Featured Project"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Secondary Project - Top Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -top-8 -right-12 w-56 z-10"
            >
              <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-900 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&auto=format&fit=crop"
                  alt="Project 2"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Tertiary Project - Bottom Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-12 -left-16 w-64 z-10"
            >
              <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white dark:border-gray-900 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&auto=format&fit=crop"
                  alt="Project 3"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Bottom Right Accent */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute bottom-4 right-8 w-48 z-10"
            >
              <div className="rounded-xl overflow-hidden shadow-xl border-4 border-purple-500 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&auto=format&fit=crop"
                  alt="Project 4"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Floating Decoration Dots */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
              <div className="absolute top-0 left-0 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute top-1/4 right-0 w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
