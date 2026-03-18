import { motion } from "framer-motion";
import { Award, Lightbulb, Heart } from "lucide-react";

const experts = [
  {
    icon: Award,
    title: "Expertise That Drives Success",
    text: "We bring a proven track record of helping businesses harness the power of technology to drive success, growth, and innovation.",
  },
  {
    icon: Lightbulb,
    title: "Innovation at the Core",
    text: "We stay abreast of the latest technological trends, ensuring that our clients benefit from cutting-edge solutions.",
  },
  {
    icon: Heart,
    title: "Dedication to Your Success",
    text: "We take the time to understand your unique challenges, goals, and vision. Our commitment goes beyond providing services.",
  },
];

const ExpertsSection = () => {
  return (
    <section className="py-24 md:py-32 blend-from-accent">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em]">
            Experts Behind Every Choice We Make For You
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="bento-card group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
