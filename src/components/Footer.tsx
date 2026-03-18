import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-2">
              <img src="/logo.png" alt="TICL Logo" className="h-14 object-contain" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              A leading provider of comprehensive IT consulting services, specializing in cloud solutions architecture, infrastructure architecture and delivery, and managed services.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">Useful Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "About TICL", to: "/about" },
                { label: "Our Services", to: "/offerings" },
                { label: "Our OEM Partners", to: "/about#partners" },
                { label: "Contact Us", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">About Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="tel:+2348113937041" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono">
                  +234 (811)-393-7041
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="mailto:contact@ticl.info" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  contact@ticl.info
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Plot 29 Block 10A, Gedegede Road, Ikota, Lekki, Eti-Osa L.G.A, Lagos State.
                </span>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">Subscribe Now</h4>
            <p className="text-sm text-muted-foreground mb-4">Don't miss our future updates! Get Subscribed Today!</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-background border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
              />
              <button type="submit" className="btn-solid-cyan !px-4 !py-2.5 flex items-center gap-1">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            ©{new Date().getFullYear()} Tosel Infrastructure and Communication Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
