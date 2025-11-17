"use client";

import { useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeInUp } from "@/lib/variants";

const testimonials = [
  {
    name: "Michael Scott",
    role: "CEO, TechStartup Inc.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop",
    content: "Working with Bridge Digital was an absolute game-changer for our business. They delivered a stunning web application that exceeded all our expectations. The attention to detail and technical expertise is unmatched!",
    rating: 5,
  },
  {
    name: "Jessica Martinez",
    role: "Founder, HealthFit App",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format&fit=crop",
    content: "The mobile app they built for us is phenomenal. User engagement increased by 200% within the first month. Their team understood our vision perfectly and brought it to life with incredible polish.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "CTO, E-Commerce Solutions",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop",
    content: "Bridge Digital transformed our outdated platform into a modern, fast, and beautiful e-commerce experience. Our conversion rates doubled, and customers love the new interface. Highly recommended!",
    rating: 5,
  },
  {
    name: "Amanda White",
    role: "Product Manager, FinTech Co.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop",
    content: "Professional, responsive, and incredibly talented. They delivered our project on time and within budget while maintaining the highest quality standards. We couldn't be happier with the results.",
    rating: 5,
  },
  {
    name: "Robert Chang",
    role: "VP of Engineering, DataFlow",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop",
    content: "The technical depth and problem-solving skills of this team are exceptional. They tackled complex challenges with ease and delivered a robust, scalable solution that powers our entire business.",
    rating: 5,
  },
];

export function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-20 lg:py-32 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 dot-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

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
            className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what our clients have to say about
            working with us.
          </motion.p>
        </motion.div>

        {/* Carousel */}
        <div className="relative" ref={ref}>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4"
                >
                  <GlassCard className="h-full p-8">
                    {/* Quote Icon */}
                    <Quote className="w-10 h-10 text-blue-400/30 mb-4" />

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-gray-300 leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/10">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full glass-strong flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full glass-strong flex items-center justify-center text-white hover:bg-white/20 transition-all hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
