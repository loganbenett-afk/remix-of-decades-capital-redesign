import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/30 mt-32">
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src={logo} alt="Decades Capital Group" className="h-12 w-auto mb-6" />
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Building generational wealth through premier hotel investments. Transparent
            structures, hands-on operating experience, and investor-aligned outcomes.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase text-primary mb-4">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="text-foreground/80 hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about-us" className="text-foreground/80 hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/opportunities" search={{}} className="text-foreground/80 hover:text-primary transition-colors">Opportunities</Link></li>
            <li><Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link></li>
            <li>
              <a
                href="https://sponsor.avestorinc.com/decadescapital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:opacity-80 transition-opacity"
              >
                Investor Portal ↗
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase text-primary mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li>
              <a href="tel:+16789787222" className="hover:text-primary transition-colors">
                (678) 978-7222
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@decadescapitalgroup.com"
                className="hover:text-primary transition-colors break-all"
              >
                contact@decadescapitalgroup.com
              </a>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Investor inquiries
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="container mx-auto px-6 py-6 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Decades Capital Group. All rights reserved.</p>
          <p>Investment opportunities available to accredited investors only.</p>
        </div>
      </div>
    </footer>
  );
}
