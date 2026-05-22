import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import founder from "@/assets/founder.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Decades Capital Group | Hotel Investments for Generational Wealth" },
      {
        name: "description",
        content:
          "Build generational wealth through premier hotel investments. Choose growth equity (20–30% target IRR) or income fund (10–12% monthly distributions) — backed by Hilton, Marriott, Hyatt & IHG.",
      },
      { property: "og:title", content: "Decades Capital Group | Premier Hotel Investments" },
      {
        property: "og:description",
        content:
          "Growth equity and 10–12% income-fund returns from operational, branded hotel assets. Investor-first hospitality investing.",
      },
      { property: "og:image", content: "https://decadescapitalgroup.com/wp-content/uploads/2025/09/7-scaled.jpg" },
      { name: "twitter:title", content: "Decades Capital Group | Premier Hotel Investments" },
      { name: "twitter:description", content: "Growth equity and 10–12% monthly income from branded, operational hotels." },
      { name: "twitter:image", content: "https://decadescapitalgroup.com/wp-content/uploads/2025/09/7-scaled.jpg" },
    ],
  }),
  component: HomePage,
});

const benefits = [
  { title: "Long-Term Value", body: "Hotels appreciate in value while producing consistent income—offering both growth and cash flow." },
  { title: "Consistent Daily Revenue", body: "Unlike many real estate classes, hotels generate income every single day through multiple revenue channels." },
  { title: "Tax Efficiency", body: "Hospitality investments can offer substantial tax benefits including depreciation, bonus depreciation, and deductible expenses." },
  { title: "Portfolio Diversification", body: "Hotels respond to different economic cycles than traditional stocks and bonds, reducing overall portfolio risk." },
  { title: "Multiple Revenue Drivers", body: "Room sales, food & beverage, meetings, events, and retail all contribute to resilient income streams." },
  { title: "Dynamic Market Flexibility", body: "Room pricing can be adjusted daily, allowing hotels to maximize earnings during peak demand." },
  { title: "Inflation Protection", body: "Hotel rates naturally rise alongside inflation, helping preserve the real value of invested capital." },
  { title: "Travel Industry Growth", body: "As global travel continues to expand post-pandemic, hospitality assets are positioned for exceptional long-term demand." },
];

const steps = [
  "Book a private call with Decades Capital Group",
  "Complete the investor qualification process",
  "Allocate capital into the right strategy for your goals",
  "Monitor returns through transparent reporting",
  "Reinvest, compound, and grow wealth",
];

const partnerPoints = [
  "Transparent deal structures with no excessive fees",
  "Decades of hands-on hotel ownership and operations experience",
  "Strong relationships with leading hospitality brands including Hilton, Marriott, Hyatt, and IHG",
  "Proven ability to reposition underperforming properties and deliver above-market returns",
  "Investor-first approach: we invest alongside our partners",
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-20 h-screen min-h-[680px] w-full overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="w-full h-full object-cover animate-slow-zoom" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>

        <div className="relative z-10 px-6 max-w-4xl animate-fade-up">
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-primary mb-6">
            Decades Capital Group
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.05]">
            Building generational wealth through{" "}
            <span className="italic text-primary">hotel investments.</span>
          </h1>
          <p className="mt-8 text-base md:text-lg text-foreground/75 max-w-2xl mx-auto leading-relaxed">
            Premier hospitality opportunities for investors who want their capital to multiply over time
            and deliver predictable monthly income.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/opportunities"
              search={{}}
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-xs tracking-[0.25em] uppercase font-medium text-primary-foreground transition-all hover:scale-[1.02]"
              style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              Explore Opportunities
            </Link>
            <a
              href="tel:+16789787222"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-xs tracking-[0.25em] uppercase font-medium text-foreground border border-foreground/25 hover:border-primary hover:text-primary transition-all"
            >
              Call Us
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-foreground/50 text-xs tracking-widest">
          <span className="block w-px h-12 bg-foreground/30 mx-auto mb-3" />
          SCROLL
        </div>
      </section>

      {/* ELEVATING WEALTH */}
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              className="aspect-[4/5] overflow-hidden rounded-sm"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <img src={founder} alt="Hotel hospitality" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 hidden md:block w-40 h-40 border border-primary/40" />
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Our Approach</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              Elevating wealth through <span className="italic text-primary">hospitality.</span>
            </h2>
            <p className="text-foreground/75 leading-relaxed mb-8">
              At Decades Capital Group, we open the doors to premier hotel investments through two
              proven strategies designed to meet the unique goals of modern investors.
            </p>

            <div className="space-y-6 border-l border-primary/40 pl-6">
              <div>
                <h3 className="text-xl text-primary mb-2">Growth Equity Model</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  We specialize in developing new hotel properties in high-demand markets. These
                  projects are built for long-term value creation, equity growth, and significant tax
                  advantages—ideal for investors who want wealth to multiply over time.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-primary mb-2">Income Fund Model</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  We acquire and operate branded, stabilized hotel properties that generate immediate
                  returns. Investors receive <strong className="text-foreground">10–12% annualized
                  distributions</strong>, paid monthly, with investments secured by income-producing assets.
                </p>
              </div>
            </div>

            <p className="text-foreground/75 leading-relaxed mt-8">
              By offering both growth and income opportunities, we give investors the freedom to align
              their capital with their lifestyle, risk profile, and financial objectives.
            </p>
          </div>
        </div>
      </section>

      {/* WHY HOTELS */}
      <section className="py-28 md:py-36 bg-card/40 border-y border-border/60">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Why Hotels</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              An asset class built for{" "}
              <span className="italic text-primary">resilience & growth.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="bg-background p-8 hover:bg-card transition-colors group"
              >
                <div className="text-primary text-xs tracking-widest mb-3">
                  0{i + 1}
                </div>
                <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">
                  {b.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT MODELS */}
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Strategies</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              Our <span className="italic text-primary">investment models.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ModelCard
              tag="Growth Equity"
              title="Long-Term Growth Strategy"
              intro="Participate in ground-up hotel development in high-opportunity markets."
              best="Investors focused on wealth building and tax efficiency."
              points={[
                "Strong equity upside from market appreciation and value creation",
                "Investor-aligned structures with no hidden waterfalls",
                "Targeted IRRs of 20–30%",
                "Significant tax advantages through depreciation and cost segregation",
                "Typical hold period: 3–5 years",
              ]}
            />
            <ModelCard
              tag="Income Fund"
              title="Immediate Income Strategy"
              intro="Acquire stabilized hotels with strong brand backing and operational history."
              best="Investors seeking predictable monthly income and capital protection."
              points={[
                "10–12% preferred annual returns",
                "Monthly direct deposits (marketed as quarterly for simplicity)",
                "No development or stabilization risks",
                "Low leverage, strong cash-flowing properties",
                "Typical hold period: 2–3 years",
              ]}
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-28 md:py-36 bg-card/40 border-y border-border/60">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Process</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              How it <span className="italic text-primary">works.</span>
            </h2>
          </div>

          <ol className="space-y-px bg-border/60">
            {steps.map((s, i) => (
              <li
                key={i}
                className="bg-background flex flex-col md:flex-row md:items-center gap-6 p-8 hover:bg-card transition-colors"
              >
                <div className="text-primary text-sm tracking-[0.3em] md:w-32 shrink-0">
                  STEP {i + 1}
                </div>
                <div className="text-lg md:text-xl text-foreground/90">{s}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Why Decades</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
              Why partner with{" "}
              <span className="italic text-primary">Decades Capital Group.</span>
            </h2>
            <ul className="space-y-4 mb-8">
              {partnerPoints.map((p) => (
                <li key={p} className="flex gap-3 text-foreground/80">
                  <span className="text-primary mt-2 shrink-0">—</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground/75 leading-relaxed mb-8">
              At Decades Capital Group, we understand that every investor has different goals.
              That's why we provide both high-upside growth opportunities and steady income-producing
              assets—so your capital always works the way you want it to.
            </p>
            <a
              href="tel:+16789787222"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-xs tracking-[0.25em] uppercase font-medium text-primary-foreground transition-all hover:scale-[1.02]"
              style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              Call Us
            </a>
          </div>

          <div className="relative">
            <div
              className="aspect-square overflow-hidden rounded-sm"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            >
              <img src={founder} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA / GET STARTED */}
      <section className="py-28 md:py-36 bg-card/40 border-y border-border/60">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Get Started</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
            Join our <span className="italic text-primary">investor network.</span>
          </h2>
          <p className="text-foreground/75 leading-relaxed mb-6">
            Take the first step toward exploring hotel investment opportunities by joining our
            exclusive Investor Network. Fill out the short form and gain early access to new hotel
            projects, insider updates, and expert insights delivered straight to your inbox. Even if
            you're not ready to invest today, this is the best way to stay informed and connected so
            that when the right opportunity arises, you'll be among the first to know.
          </p>
          <p className="text-foreground/75 leading-relaxed mb-10">
            Prefer to talk directly? Call us at <a className="text-primary" href="tel:+16789787222">(678) 978-7222</a> and
            speak with a member of our team to learn more about how hotel investments can fit into
            your portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-xs tracking-[0.25em] uppercase font-medium text-primary-foreground transition-all hover:scale-[1.02]"
              style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              Join Investor Network
            </Link>
            <a
              href="tel:+16789787222"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-xs tracking-[0.25em] uppercase font-medium text-foreground border border-foreground/25 hover:border-primary hover:text-primary transition-all"
            >
              Call (678) 978-7222
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ModelCard({
  tag,
  title,
  intro,
  points,
  best,
}: {
  tag: string;
  title: string;
  intro: string;
  points: string[];
  best: string;
}) {
  return (
    <div className="border border-border/80 p-10 bg-card/30 hover:border-primary/60 transition-colors">
      <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">{tag}</p>
      <h3 className="text-3xl mb-4">{title}</h3>
      <p className="text-foreground/75 mb-8">{intro}</p>
      <p className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-3">Key Benefits</p>
      <ul className="space-y-3 mb-8">
        {points.map((p) => (
          <li key={p} className="flex gap-3 text-sm text-foreground/85">
            <span className="text-primary mt-1.5 shrink-0">•</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <div className="border-t border-border/60 pt-6">
        <p className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-2">Best For</p>
        <p className="text-sm text-foreground/85">{best}</p>
      </div>
    </div>
  );
}
