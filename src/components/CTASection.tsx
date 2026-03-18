import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={ctaBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>
      <div className="relative container mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Ready to Transform?</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em] text-balance max-w-2xl mx-auto text-primary-foreground">
            Enterprise Infrastructure. Global Connectivity.
          </h2>
          <p className="mt-6 text-primary-foreground/70 text-lg max-w-xl mx-auto text-pretty">
            TICL provides the architectural backbone for modern communication, from Cloud Architecture to Managed IT Services.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/offerings" className="btn-solid-cyan flex items-center gap-2">
              Explore Services <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="relative px-6 py-2.5 rounded-lg font-medium text-sm tracking-wide border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-200">Get in Touch</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
