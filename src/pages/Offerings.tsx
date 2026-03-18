import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Cloud, Server, Monitor, Settings } from "lucide-react";
import serviceConsulting from "@/assets/service-consulting.png";
import serviceCloud from "@/assets/service-cloud.png";
import serviceInfra from "@/assets/service-infrastructure.png";
import serviceManaged from "@/assets/service-managed.png";

const services = [
  {
    id: "consulting",
    image: serviceConsulting,
    icon: Monitor,
    title: "IT Consulting Services",
    description: "Navigate the complexities of technology with our strategic guidance and tailored solutions. Our IT consulting services are designed to optimize your technology strategy and align it with your business objectives.",
    subs: [
      {
        title: "Portfolio Management",
        items: [
          { label: "Vendor Management", text: "We leverage a consultative approach in implementing strategic sourcing via vendor selection, negotiated contracts, and cost control mechanisms, reducing vendor-related risks, and ensuring excellent service delivery." },
          { label: "Program Management", text: "We leverage robust domain knowledge to deliver a strategically focused, and defined framework with governance across multiple projects, including monitoring, communication and resource management with risk mitigation that provides cost forecasting, actuals and timelines." },
        ],
      },
      {
        title: "Cloud Strategy Consulting",
        items: [
          { label: "Discovery Workshop", text: "Engage key business stakeholders for strategic context, access customer capabilities and baseline customer technologies." },
          { label: "Strategy and Design", text: "Produce high-level architectural design of cloud operating model and strategic adoption approach." },
          { label: "Roadmap Architecture", text: "Articulate short and long-term strategic pursuits, prioritizing key milestones, dependencies, timelines and additional critical success factors." },
        ],
      },
      {
        title: "Data Strategy & Information Management",
        items: [
          { label: "", text: "We help customers architect a data governance program that defines the contexts of availability, usability, integrity, and security of the data used in the organization." },
        ],
      },
    ],
  },
  {
    id: "cloud",
    image: serviceCloud,
    icon: Cloud,
    title: "Cloud Solutions Architecture",
    description: "Embark on your innovation journey with our expertise in private, public, and hybrid cloud environments. From architecture design to application delivery, we empower businesses to get ahead on the innovation curve, leveraging the full potential of cloud computing for service agility, cost optimization, strategic innovation and access to game-changing new technologies.",
    subs: [
      {
        title: "Cloud Environments",
        items: [
          { label: "Private, Public, and Hybrid Clouds", text: "Choose the cloud environment that suits your business goals and accelerate development efforts into the public cloud by employing our premier cloud application modernization team." },
          { label: "Cloud Adoption Framework", text: "Define your Cloud Strategy across Azure, AWS, and GCP via a robust, holistic approach using industry-leading cloud adoption framework." },
          { label: "Cloud Migration", text: "Migrate workloads efficiently and effectively with assessment, planning, migration and integration support from TICL." },
          { label: "App Modernization", text: "Accelerate application transformation for your enterprise. Modernize your applications with container and microservices architecture." },
          { label: "Application Delivery", text: "Our application delivery practice ensures seamless application delivery across diverse cloud environments." },
        ],
      },
    ],
  },
  {
    id: "infrastructure",
    image: serviceInfra,
    icon: Server,
    title: "Modern Infrastructure Architecture and Delivery",
    description: "Build a strong foundation for your business with our comprehensive infrastructure services. Leverage our datacenter experts to design and build end-to-end infrastructure solutions to support your desired business outcomes.",
    subs: [
      {
        title: "Compute & Storage Infrastructure",
        items: [
          { label: "Compute", text: "Commodity Servers, Converged Infrastructure, Hyperconverged Infrastructure, Hybrid cloud integrations, Edge computing, Virtual Desktop Infrastructure." },
          { label: "Storage", text: "Enterprise servers and applications require high-performing storage. A storage assessment with TICL will provide a detailed analysis of your storage solution." },
        ],
      },
      {
        title: "Security & Data Protection",
        items: [
          { label: "Data Protection", text: "Our award-winning approach to database protection and loss prevention gives us an inside edge on the key indicators of compromise (IOC)." },
          { label: "Enterprise Security", text: "Safeguard your organization's valuable data and assets with our end-to-end security solutions." },
          { label: "Information Management", text: "From data storage to governance, integration, archival, and analytics, we provide the tools and expertise needed to unlock the full potential of your data." },
        ],
      },
    ],
  },
  {
    id: "managed",
    image: serviceManaged,
    icon: Settings,
    title: "Managed Services",
    description: "Business leaders are constantly required to continue pushing the bar on innovation with ever-shrinking resources. TICL is here to help you navigate the future.",
    subs: [
      {
        title: "Our Offerings",
        items: [
          { label: "On-premise & Cloud Administration", text: "Our team manages and monitors your on-premise and cloud-based infrastructure. From servers and networks to databases and applications, we ensure optimal performance and availability." },
          { label: "Maintenance Services", text: "We provide routine maintenance and management, handling patching, upgrades, backups, and disaster recovery planning." },
          { label: "Operational Optimization", text: "We partner to optimize processes and work design, platform, tools and personnel to meet your peculiar operational requirement." },
          { label: "Drive Availability", text: "At TICL, we leverage the power of automation as core offerings as well as for smooth IT operations, and quick, proactive resolutions to problems." },
          { label: "Visibility and Control", text: "TICL's managed services offering provides invaluable, real-time insights into performance across your technology platforms." },
          { label: "Security", text: "Protect your assets, guarantee continuity and improve risk management by leveraging global and local intelligence combined with powerful tools, technology." },
        ],
      },
    ],
  },
];

const Offerings = () => {
  const [activeService, setActiveService] = useState("consulting");
  const [openSubs, setOpenSubs] = useState<Record<string, boolean>>({});

  const active = services.find((s) => s.id === activeService)!;

  const toggleSub = (key: string) => {
    setOpenSubs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-primary font-mono text-xs tracking-widest uppercase mb-4">What We Do</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-[-0.04em]">Our Offerings</h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Side nav */}
            <div className="lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-24 space-y-2">
                {services.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setActiveService(s.id); setOpenSubs({}); }}
                    className={`w-full text-left px-5 py-4 rounded-xl flex items-center gap-3 transition-all duration-200 ${activeService === s.id
                        ? "bg-accent border border-primary/20 text-foreground"
                        : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                  >
                    <s.icon className={`w-5 h-5 shrink-0 ${activeService === s.id ? "text-primary" : ""}`} strokeWidth={1.5} />
                    <span className="text-sm font-medium">{s.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-8 xl:col-span-9"
            >
              <div className="bento-card !p-8 md:!p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <active.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-2xl font-bold">{active.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 text-pretty max-w-3xl">{active.description}</p>

                {/* Service image */}
                <div className="relative rounded-xl overflow-hidden aspect-[21/9] mb-8 shadow-md">
                  <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
                </div>

                <div className="space-y-4">
                  {active.subs.map((sub) => {
                    const key = `${activeService}-${sub.title}`;
                    const isOpen = openSubs[key] !== false;
                    return (
                      <div key={key} className="border border-border rounded-xl overflow-hidden">
                        <button
                          onClick={() => toggleSub(key)}
                          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
                        >
                          <span className="font-semibold text-sm">{sub.title}</span>
                          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6 space-y-4 pt-2">
                                {sub.items.map((item, idx) => (
                                  <div key={idx} className="pl-4 border-l-2 border-primary/30">
                                    {item.label && <h4 className="text-sm font-semibold mb-1 text-foreground">{item.label}</h4>}
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offerings;
