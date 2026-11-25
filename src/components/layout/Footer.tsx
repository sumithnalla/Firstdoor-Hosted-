import { Link } from "wouter";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Projects", href: "/properties" },
      { label: "Services", href: "/services" },
      { label: "Investment Guidance", href: "/e-flats" },
      {
        label: "Market Updates",
        href: "https://wa.me/918008113094?text=Hi%2C%20I%20visited%20FirstDoor.in%20to%20Explore%20Premium%20Real%20Estate%20Opportunities%20in%20Hyderabad.%20Assist%20me%20with%20the%20best%20projects%20and%20investment%20deals.",
        external: true,
      },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Call Now", href: "tel:8008113094" },
      { label: "Email Us", href: "mailto:info@firstdoor.in" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#f5f7f8] text-slate-950">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:gap-10 lg:grid-cols-[1.5fr_repeat(2,minmax(0,1fr))] lg:gap-14">
          <div className="max-w-sm col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="flex w-fit items-center"
              data-testid="link-footer-home"
            >
              <img src="/logo.png" alt="FirstDoor Logo" className="h-16 w-auto mr-2" />
              <span className="text-xl font-bold">
                First<span className="text-accent">Door</span>
              </span>
            </Link>
            <p className="mt-5 text-sm leading-7 text-slate-500">
              Hyderabad's Trusted Real Estate Partner for Verified Homes, Clear Advice, and Confident Property Decisions.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase text-slate-400">
              RERA-verified guidance
            </p>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={`${column.title} footer links`}>
              <h3 className="text-xs font-bold uppercase text-slate-950">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3.5">
                {column.links.map((link) => {
                  const className =
                    "text-sm text-slate-500 transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30";
                  const testId = `link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`;
                  const isExternal = Boolean(link.external);
                  const isDirectAction =
                    link.href.startsWith("tel:") || link.href.startsWith("mailto:");

                  return (
                    <li key={`${column.title}-${link.label}`}>
                      {isExternal || isDirectAction ? (
                        <a
                          href={link.href}
                          className={className}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          data-testid={testId}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className={className}
                          data-testid={testId}
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 sm:mt-14">
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-slate-400">
              &copy; {new Date().getFullYear()} FirstDoor Realty. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/firstdoor.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors duration-200 hover:text-primary"
                aria-label="Facebook"
              >
                <FaFacebookF size={22} />
              </a>

              <a
                href="https://www.instagram.com/firstdoor.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors duration-200 hover:text-primary"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="https://www.linkedin.com/company/firstdoordotin/?viewAsMember=tru"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors duration-200 hover:text-primary"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={22} />
              </a>

              <a
                href="https://youtube.com/@firstdoordotin?si=eDcYowLEx_ptozdn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors duration-200 hover:text-primary"
                aria-label="YouTube"
              >
                <FaYoutube size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
