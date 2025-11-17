"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input, Textarea, Label } from "@/components/ui/Input";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/variants";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form data:", data);
    setIsSubmitting(false);
    setSubmitStatus("success");
    reset();

    // Clear success message after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>

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
            Get in Touch
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Let's Build Something <span className="text-gradient">Amazing</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Have a project in mind? We'd love to hear about it. Get in touch and let's
            turn your vision into reality.
          </motion.p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInLeft}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-400 mb-8">
                Fill out the form or reach out to us directly. We typically respond
                within 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <GlassCard className="p-6 flex items-start gap-4 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <a
                    href="mailto:hello@bridgedigital.com"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    hello@bridgedigital.com
                  </a>
                </div>
              </GlassCard>

              <GlassCard className="p-6 flex items-start gap-4 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </GlassCard>

              <GlassCard className="p-6 flex items-start gap-4 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Office</h4>
                  <p className="text-gray-400">
                    123 Tech Street, Suite 456
                    <br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </GlassCard>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInRight}
          >
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    {...register("name")}
                    className={errors.name ? "border-red-500" : ""}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={errors.email ? "border-red-500" : ""}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    {...register("subject")}
                    className={errors.subject ? "border-red-500" : ""}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    className={errors.message ? "border-red-500" : ""}
                    placeholder="Tell us about your project..."
                    rows={5}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                    <p className="text-green-400 text-sm">
                      Thank you! Your message has been sent successfully. We'll get back
                      to you soon.
                    </p>
                  </motion.div>
                )}
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
