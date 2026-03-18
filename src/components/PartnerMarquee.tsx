import logoDell from "@/assets/logos/dell.png";
import logoVmware from "@/assets/logos/vmware.png";
import logoFortinet from "@/assets/logos/fortinet.png";
import logoVeritas from "@/assets/logos/veritas.png";
import logoTrendmicro from "@/assets/logos/trendmicro.png";
import logoManageengine from "@/assets/logos/manageengine.png";
import logoCisco from "@/assets/logos/cisco.png";
import logoMicrosoft from "@/assets/logos/microsoft.png";
import logoAutomation from "@/assets/logos/automation-anywhere.png";

const partners = [
  { name: "Dell Technologies", logo: logoDell },
  { name: "VMware", logo: logoVmware },
  { name: "Fortinet", logo: logoFortinet },
  { name: "Veritas", logo: logoVeritas },
  { name: "Trend Micro", logo: logoTrendmicro },
  { name: "ManageEngine", logo: logoManageengine },
  { name: "Cisco", logo: logoCisco },
  { name: "Microsoft", logo: logoMicrosoft },
  { name: "Automation Anywhere", logo: logoAutomation },
];

const PartnerMarquee = () => {
  const doubled = [...partners, ...partners];

  return (
    <section className="py-14 md:py-18 blend-to-accent overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 mb-10">
        <p className="text-primary font-mono text-xs tracking-widest uppercase mb-2 text-center">Trusted By Industry Leaders</p>
        <h3 className="text-xl font-semibold text-center text-muted-foreground">Our OEM Partners</h3>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max marquee">
          {doubled.map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 mx-6 md:mx-10 px-6 py-3 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 cursor-default flex items-center gap-3"
            >
              <img src={partner.logo} alt={partner.name} className="h-16 w-16 object-contain" />
              <span className="text-sm md:text-base font-semibold tracking-wide text-foreground whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerMarquee;
