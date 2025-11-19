"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn, scrollToSection } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navItems = [
  { name: "Home", href: "hero" },
  { name: "Services", href: "services" },
  { name: "Projects", href: "projects" },
  { name: "Team", href: "team" },
  { name: "Testimonials", href: "testimonials" },
  { name: "Contact", href: "contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      // Simple two-state logic: scrolled or not
      const scrollThreshold = 50;
      setIsScrolled(window.scrollY > scrollThreshold);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {!isScrolled ? (
        /* 1️⃣ Full-width header - Top of page */
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10">
          <nav className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20 max-w-7xl mx-auto">
              {/* Logo */}
              <div className="shrink-0">
                <a 
                  href="#hero" 
                  onClick={(e) => { e.preventDefault(); handleNavClick("hero"); }}
                  className="flex items-center gap-2"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">BD</span>
                  </div>
                  <span className="text-xl font-bold text-white hidden sm:block">
                    Bridge<span className="text-gradient">Digital</span>
                  </span>
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.href}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    className={cn(
                      "relative text-sm font-medium transition-colors duration-200",
                      activeSection === item.href
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    )}
                  >
                    {item.name}
                    {activeSection === item.href && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                ))}
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleNavClick("contact")}
                >
                  Get Started
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </header>
      ) : (
        /* 2️⃣ Compact header - Scrolled state, attached to top */
        <motion.nav
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-1/2 -translate-x-1/2 z-50 glass-strong rounded-t-none rounded-b-3xl shadow-2xl px-8 border border-white/20"
          style={{ maxWidth: 'fit-content' }}
        >
          <div className="flex items-center gap-6 h-14">
            {/* Logo */}
            <div className="shrink-0">
              <a 
                href="#hero" 
                onClick={(e) => { e.preventDefault(); handleNavClick("hero"); }}
                className="flex items-center gap-2"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">BD</span>
                </div>
                <span className="text-lg font-bold text-white hidden sm:block">
                  Bridge<span className="text-gradient">Digital</span>
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className={cn(
                    "relative text-sm font-medium transition-colors duration-200 whitespace-nowrap",
                    activeSection === item.href
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  )}
                >
                  {item.name}
                  {activeSection === item.href && (
                    <motion.div
                      layoutId="activeSectionScrolled"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleNavClick("contact")}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.nav>
      )}

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-40 w-full sm:w-80 glass-strong lg:hidden"
          >
            <div className="flex flex-col h-full pt-20 px-6">
              <nav className="flex-1 flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    href={`#${item.href}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                    className={cn(
                      "px-4 py-3 rounded-lg text-lg font-medium transition-all",
                      activeSection === item.href
                        ? "bg-white/10 text-white"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pb-8"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => handleNavClick("contact")}
                >
                  Get Started
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
