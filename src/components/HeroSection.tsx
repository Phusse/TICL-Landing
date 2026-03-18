import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BG image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />

      {/* Animated Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-sky-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />

      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />

      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-24 pb-20">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-primary font-mono text-sm tracking-widest uppercase mb-6"
          >
            Tosel Infrastructure and Communication Limited
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight md:leading-snug tracking-[-0.04em] text-balance text-foreground"
          >
            <span className="block mb-2 md:mb-4">Bridging</span>
            <span className="text-primary block">The Gap</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty"
          >
            Discover innovative IT solutions tailored to fuel your business growth, efficiency, and innovation. At TICL, we're committed to delivering exceptional IT consulting, cloud solutions architecture, infrastructure delivery, and managed services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link to="/offerings" className="btn-solid-cyan flex items-center gap-2">
              Our Services <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-ghost-cyan">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
