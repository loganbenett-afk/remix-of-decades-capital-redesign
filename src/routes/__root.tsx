import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageTransition } from "@/components/PageTransition";

import appCss from "../styles.css?url";

const SITE_URL = "https://decadescapitalgroup.com";

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Decades Capital Group",
  description:
    "Premier hotel investments offering growth equity and 10–12% income-fund returns for accredited investors.",
  url: SITE_URL,
  telephone: "+1-678-978-7222",
  email: "contact@decadescapitalgroup.com",
  areaServed: "United States",
  serviceType: "Hotel Investment",
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl text-primary">404</h1>
        <h2 className="mt-4 text-2xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-xs tracking-[0.2em] uppercase font-medium text-primary-foreground"
            style={{ background: "var(--gradient-gold)" }}
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1a1d24" },
      { title: "Decades Capital Group | Hotel Investments for Generational Wealth" },
      {
        name: "description",
        content:
          "Premier hotel investments with growth equity and 10–12% income-fund returns. Investor-first hospitality opportunities backed by Hilton, Marriott, Hyatt & IHG.",
      },
      { name: "keywords", content: "hotel investments, real estate, accredited investor, hospitality fund, passive income, Decades Capital Group" },
      { name: "author", content: "Decades Capital Group" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Decades Capital Group" },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "format-detection", content: "telephone=yes" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORG_JSONLD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <SiteHeader />
      <main className="pt-20">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <SiteFooter />
    </>
  );
}
