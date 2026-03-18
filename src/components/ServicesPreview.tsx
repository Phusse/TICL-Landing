import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import serviceConsulting from "@/assets/service-consulting.png";
import serviceCloud from "@/assets/service-cloud.png";
import serviceInfra from "@/assets/service-infrastructure.png";
import serviceManaged from "@/assets/service-managed.png";

const services = [
  {
    title: "IT Consulting Services",
    text: "Navigate the complexities of technology with our strategic guidance and tailored solutions.",
    image: serviceConsulting,
  },
  {
    title: "Cloud Solutions Architecture",
    text: "Embark on your innovation journey with our expertise in private, public, and hybrid cloud environments.",
    image: serviceCloud,
  },
  {
    title: "Infrastructure Architecture & Delivery",
    text: "Build a strong foundation for your business with our comprehensive infrastructure services.",
    image: serviceInfra,
  },
  {
    title: "Managed Services",
    text: "Let you focus on your core business while we take care of your technology infrastructure.",
    image: serviceManaged,
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 md:py-32 blend-to-navy">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em]">Our Offerings</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to="/offerings" className="group block bento-card !p-0 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-primary text-xs font-medium group-hover:gap-2 transition-all duration-200">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
