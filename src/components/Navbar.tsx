import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Who We Are", to: "/about" },
  { label: "Our Offerings", to: "/offerings" },
  { label: "Contact Us", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 glass-nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="TICL Logo" className="h-10 md:h-12 object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors duration-200 ${location.pathname === l.to
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+2348113937041" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" />
            <span className="font-mono text-xs">+234 (811)-393-7041</span>
          </a>
          <Link to="/contact" className="btn-solid-cyan !py-2 !px-5">Contact Us</Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground p-2">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-base font-medium py-2 ${location.pathname === l.to ? "text-primary" : "text-muted-foreground"
                  }`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-solid-cyan text-center mt-2">Contact Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
