import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const INVESTOR_PORTAL_URL = "https://sponsor.avestorinc.com/decadescapital";

const opportunitySubnav = [
  { category: "current" as const, label: "Current Investments" },
  { category: "closed" as const, label: "Closed Investments" },
  { category: "operations" as const, label: "Hotels Under Operations" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [oppsOpen, setOppsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <img src={logo} alt="Decades Capital Group" className="h-10 md:h-11 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link
            to="/"
            className="relative text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors"
            activeProps={{ className: "text-primary" }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="relative text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors"
            activeProps={{ className: "text-primary" }}
            activeOptions={{ exact: true }}
          >
            About Us
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOppsOpen(true)}
            onMouseLeave={() => setOppsOpen(false)}
          >
            <Link
              to="/opportunities"
              search={{}}
              className="relative text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors inline-flex items-center gap-1"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: false }}
            >
              Opportunities
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 4l3 3 3-3" />
              </svg>
            </Link>
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-300 ${
                oppsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <div className="bg-background/95 backdrop-blur-xl border border-border/60 rounded-sm py-3 min-w-[240px] shadow-2xl">
                {opportunitySubnav.map((s) => (
                  <Link
                    key={s.category}
                    to="/opportunities"
                    search={{ category: s.category }}
                    onClick={() => setOppsOpen(false)}
                    className="block px-5 py-2.5 text-sm text-foreground/85 hover:text-primary hover:bg-card/50 transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/contact"
            className="relative text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors"
            activeProps={{ className: "text-primary" }}
            activeOptions={{ exact: true }}
          >
            Contact
          </Link>

          <a
            href={INVESTOR_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs tracking-[0.2em] uppercase font-medium text-primary-foreground transition-all hover:scale-[1.03]"
            style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
          >
            Investor Portal
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden text-foreground p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        } bg-background/95 backdrop-blur-xl border-t border-border/60`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          <Link to="/" onClick={() => setOpen(false)} className="text-base text-foreground/85 hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
            Home
          </Link>
          <Link to="/about-us" onClick={() => setOpen(false)} className="text-base text-foreground/85 hover:text-primary" activeProps={{ className: "text-primary" }}>
            About Us
          </Link>
          <Link to="/opportunities" search={{}} onClick={() => setOpen(false)} className="text-base text-foreground/85 hover:text-primary">
            Opportunities
          </Link>
          <div className="flex flex-col gap-2 pl-4 border-l border-border/60">
            {opportunitySubnav.map((s) => (
              <Link
                key={s.category}
                to="/opportunities"
                search={{ category: s.category }}
                onClick={() => setOpen(false)}
                className="text-sm text-foreground/70 hover:text-primary"
              >
                {s.label}
              </Link>
            ))}
          </div>
          <Link to="/contact" onClick={() => setOpen(false)} className="text-base text-foreground/85 hover:text-primary" activeProps={{ className: "text-primary" }}>
            Contact
          </Link>
          <a
            href={INVESTOR_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs tracking-[0.2em] uppercase font-medium text-primary-foreground"
            style={{ background: "var(--gradient-gold)" }}
          >
            Investor Portal
          </a>
          <a href="tel:+16789787222" className="text-sm text-foreground/70 hover:text-primary">
            (678) 978-7222
          </a>
        </div>
      </div>
    </header>
  );
}
