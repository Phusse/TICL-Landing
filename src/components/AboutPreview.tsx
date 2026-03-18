import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import aboutOffice from "@/assets/about-office.png";

const AboutPreview = () => {
  return (
    <section className="py-24 md:py-32 blend-accent">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">About TICL</p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-[-0.03em] text-balance">
              Premier IT Consulting<br />Services
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty max-w-lg">
              As a premier provider of IT consulting services, TICL optimizes technology infrastructure for businesses. Specializing in cloud solutions, infrastructure delivery, and managed services, we navigate the digital landscape, ensuring excellence in every solution.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all duration-200">
              Learn more about our company <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
            className="space-y-4"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg">
              <img src={aboutOffice} alt="TICL team reviewing analytics" className="w-full h-full object-cover" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "6+", label: "OEMs" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label} className="bento-card text-center !p-4">
                  <span className="block text-xl md:text-2xl font-bold text-primary font-mono">{stat.value}</span>
                  <span className="block mt-1 text-xs text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
