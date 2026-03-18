import { motion } from "framer-motion";
import { Briefcase, Users, Shield, Headphones } from "lucide-react";

const attributes = [
  {
    icon: Briefcase,
    title: "Professional",
    text: "You will find professional help from specialists like never before.",
    span: "md:col-span-2 md:row-span-2",
    large: true,
  },
  {
    icon: Users,
    title: "Teamwork",
    text: "We promise you the best teamwork possible – your business, your ideas combined with our expert advice for success.",
    span: "md:col-span-1",
    large: false,
  },
  {
    icon: Shield,
    title: "Privacy",
    text: "No worries about your privacy. We guarantee 100% security and encryption.",
    span: "md:col-span-1",
    large: false,
  },
  {
    icon: Headphones,
    title: "Support",
    text: "Get helpful support from our customer service team whenever you need it – 24/7.",
    span: "md:col-span-2",
    large: false,
  },
];

const BentoAttributes = () => {
  return (
    <section className="py-24 md:py-32 blend-from-navy">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Core Attributes</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em]">
            Tailored Solutions for Your Unique Needs
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl text-pretty">
            We understand that every business is unique. That's why TICL offers tailored solutions designed specifically for your organization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
          {attributes.map((attr, i) => (
            <motion.div
              key={attr.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`bento-card ${attr.span}`}
            >
              <div className={`rounded-xl bg-accent flex items-center justify-center ${attr.large ? "mb-8 w-16 h-16" : "mb-5 w-12 h-12"}`}>
                <attr.icon className={`text-primary ${attr.large ? "w-8 h-8" : "w-6 h-6"}`} strokeWidth={1.5} />
              </div>
              <h3 className={`font-semibold mb-3 ${attr.large ? "text-2xl" : "text-lg"}`}>{attr.title}</h3>
              <p className={`text-muted-foreground leading-relaxed ${attr.large ? "text-base max-w-md" : "text-sm"}`}>{attr.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoAttributes;
