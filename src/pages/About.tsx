import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerMarquee from "@/components/PartnerMarquee";
import { motion } from "framer-motion";
import { Target, Eye, Users, Lightbulb, Heart, Star, Award } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";
import aboutOffice from "@/assets/about-office.png";

const coreValues = [
  { icon: Users, label: "Teamwork" },
  { icon: Lightbulb, label: "Innovation and Creativity" },
  { icon: Heart, label: "Client Focus and Customer Satisfaction" },
  { icon: Star, label: "Loyalty to All" },
  { icon: Award, label: "Professionalism in Service Delivery" },
];

const setsApart = [
  {
    title: "Expertise",
    text: "Our team consists of seasoned professionals with a diverse range of skills, ensuring that we can meet the unique needs of each client.",
  },
  {
    title: "Client-Centric Approach",
    text: "We believe in forging lasting partnerships with our clients. Your success is our success, and we are committed to understanding your business goals and challenges intimately.",
  },
  {
    title: "Innovation at the Core",
    text: "Technology is constantly evolving, and so are we. We stay at the forefront of industry trends to bring you innovative solutions that position your business for success.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15" style={{ backgroundImage: `url(${aboutBg})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div className="relative container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Who We Are</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] text-balance max-w-3xl">About TICL</h1>
          </motion.div>
        </div>
      </section>

      {/* About text */}
      <section className="py-20 section-divider">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              TICL (Tosel Infrastructure and Communication Limited) understands that technology leaders are constantly required to deliver desired business outcomes within limited resources and in the face of a dynamic technology and economic landscape. We understand. So, we built a business to help you deliver expertise to navigate these complexities and deliver positive outcomes for your business.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              We are born from a team of seasoned technology professionals, bringing global expertise with experience in global and local market nuances to strategically deliver the best business outcomes. Our access to game-changing technology can move your organization ahead quickly.
            </p>
            <div className="relative rounded-2xl overflow-hidden aspect-video mt-8 shadow-lg">
              <img src={aboutOffice} alt="TICL team collaborating" className="w-full h-full object-cover" />
            </div>
            <div className="bento-card mt-6">
              <p className="text-primary font-mono text-xs tracking-widest uppercase mb-3">Bridging The Gap</p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                At TICL, we are driven by our mandate to help technology leaders "bridge the gap" in today's evolving business environment. We have invested in industry-leading solutions as well as partnered with some of the world's leading Original Equipment Manufacturers (OEMs) and Independent Software Vendors (ISVs).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 section-divider">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bento-card">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To remain true to our vision of empowering humanity through technology via deep expertise and practice excellence, doing so with minimal adverse impact on the environment.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="bento-card">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To leverage technology and sustainability practices for business to drive human progress.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 section-divider">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12">
            <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Our Foundation</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em]">Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((v, i) => (
              <motion.div key={v.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="bento-card text-center">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <p className="text-sm font-medium">{v.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 section-divider">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-12">
            <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Our Edge</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em]">What Sets Us Apart</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {setsApart.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="bento-card">
                <span className="text-primary font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-semibold mt-3 mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PartnerMarquee />
      <Footer />
    </div>
  );
};

export default About;
