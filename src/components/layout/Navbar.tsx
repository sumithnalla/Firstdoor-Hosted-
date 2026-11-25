import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/properties" },
  { label: "E-Flats", href: "/e-flats" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  const isHome = location === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100`}
    >
      <div className="max-w-[1536px] w-full mx-auto px-5 sm:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo - Pushed Left */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center group"
              data-testid="link-logo"
            >
              <img src="/logo.png" alt="FirstDoor Logo" className="h-14 md:h-16 w-auto mr-2" />
              <span className={`text-[26px] md:text-[28px] lg:text-[32px] font-extrabold tracking-tight transition-colors text-foreground`}>
                First<span className="text-accent">Door</span>
              </span>
            </Link>
          </div>

          {/* Navigation - Centered Perfectly */}
          <nav className={`hidden md:flex shrink-0 items-center justify-center gap-1 rounded-full border px-2 py-1.5 transition-all duration-300 bg-white/90 border-gray-200/80 shadow-sm`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`tap-target inline-flex items-center justify-center h-10 px-5 rounded-full text-[14px] font-medium transition-all duration-200 ${location === link.href
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/70 hover:text-foreground hover:bg-gray-100"
                  }`}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Call to Actions - Pushed Right */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:8008113094"
              className={`tap-target flex h-[38px] items-center justify-center gap-1.5 px-4 rounded-full text-[13.5px] font-medium border transition-all duration-200 hover:scale-[1.02] border-gray-200 text-foreground hover:border-primary/50 hover:text-primary`}
              data-testid="button-call-now"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Now
            </a>
            <a
              href="https://chat.whatsapp.com/BlrnRmOoIt07vWPjGvcckj"
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target flex h-[42px] items-center justify-center gap-2 px-5 rounded-full text-[14px] font-semibold bg-primary text-white hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02] shadow-sm"
              data-testid="button-join-community"
            >
              <FaWhatsapp className="w-[18px] h-[18px]" />
              Join Community
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden flex-1 items-center justify-end">
            <button
              className={`tap-target min-h-11 min-w-11 p-2 rounded-xl transition-colors flex items-center justify-center text-foreground hover:bg-gray-100`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`tap-target flex min-h-11 items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${location === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-gray-50"
                    }`}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-100 flex flex-col gap-3 mt-3">
                <a
                  href="tel:8008113094"
                  className="tap-target flex min-h-11 items-center justify-center gap-2 px-4 py-3 rounded-2xl text-sm font-medium border border-gray-200 hover:border-primary/50 hover:text-primary transition-colors"
                  data-testid="button-mobile-call"
                >
                  <Phone className="w-4 h-4" />
                  Call Now: 8008113094
                </a>
                <a
                  href="https://chat.whatsapp.com/BlrnRmOoIt07vWPjGvcckj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-target flex min-h-11 items-center justify-center gap-2 px-4 py-3 rounded-2xl text-sm font-semibold bg-primary text-white shadow-sm"
                  data-testid="button-mobile-community"
                >
                  <FaWhatsapp className="w-5.5 h-5.5" />
                  Join WhatsApp Community
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
