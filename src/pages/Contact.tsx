import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">Get In Touch</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-[-0.04em]">Contact Us</h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {[
                { icon: Phone, label: "Call Us", value: "+234 (811)-393-7041", href: "tel:+2348113937041" },
                { icon: Mail, label: "Email Us", value: "contact@ticl.info", href: "mailto:contact@ticl.info" },
              ].map((c) => (
                <a key={c.label} href={c.href} className="bento-card flex items-start gap-4 !p-6">
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{c.label}</p>
                    <p className="font-medium text-sm">{c.value}</p>
                  </div>
                </a>
              ))}
              <div className="bento-card flex items-start gap-4 !p-6">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Visit Us</p>
                  <p className="font-medium text-sm">Plot 29 Block 10A, Gedegede Road, Ikota, Lekki, Eti-Osa L.G.A, Lagos State.</p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="bento-card !p-8 md:!p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                      <Send className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. We'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">First Name *</label>
                        <input required className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Last Name *</label>
                        <input required className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Phone Number *</label>
                      <input required type="tel" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Email Address</label>
                      <input type="email" className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Tell Us How We Can Help *</label>
                      <textarea required rows={5} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 resize-none" />
                    </div>
                    <button type="submit" className="btn-solid-cyan w-full flex items-center justify-center gap-2">
                      Submit <ArrowIcon />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

export default Contact;
