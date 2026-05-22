import { createFileRoute, Link } from "@tanstack/react-router";
import founder from "@/assets/founder.jpg";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us | Decades Capital Group — Hotel Investment Sponsors" },
      {
        name: "description",
        content:
          "Decades of hands-on hotel ownership and operations. Transparent, investor-first hospitality investments backed by relationships with Hilton, Marriott, Hyatt, and IHG.",
      },
      { property: "og:title", content: "About Decades Capital Group" },
      {
        property: "og:description",
        content:
          "Decades of hotel ownership and operations expertise. Investor-first hospitality investments aligned with your goals.",
      },
      { name: "twitter:title", content: "About Decades Capital Group" },
      { name: "twitter:description", content: "Decades of hotel ownership and operations expertise." },
    ],
  }),
  component: AboutPage,
});

const partnerPoints = [
  "Transparent deal structures with no excessive fees",
  "Decades of hands-on hotel ownership and operations experience",
  "Strong relationships with leading hospitality brands including Hilton, Marriott, Hyatt, and IHG",
  "Proven ability to reposition underperforming properties and deliver above-market returns",
  "Investor-first approach: we invest alongside our partners",
];

function AboutPage() {
  return (
    <>
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">About Us</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            Elevating wealth through{" "}
            <span className="italic text-primary">hospitality.</span>
          </h1>
          <p className="mt-8 text-lg text-foreground/75 leading-relaxed">
            At Decades Capital Group, we open the doors to premier hotel investments through two
            proven strategies designed to meet the unique goals of modern investors.
          </p>
        </div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <figure>
              <div
                className="aspect-[4/5] overflow-hidden rounded-sm"
                style={{ boxShadow: "var(--shadow-elegant)" }}
              >
                <img
                  src={founder}
                  alt="Shariq Vastani, Managing Partner of Decades Capital Group"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-4 text-xs tracking-[0.2em] uppercase text-foreground/70 text-center">
                Shariq Vastani, Managing Partner of Decades Capital Group
              </figcaption>
            </figure>
            <div className="absolute -bottom-8 -left-8 hidden md:block w-40 h-40 border border-primary/40" />
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Our Story</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight">
              Investor-first by <span className="italic text-primary">design.</span>
            </h2>
            <p className="text-foreground/75 leading-relaxed mb-6">
              We understand that every investor has different goals. That's why we provide both
              high-upside growth opportunities and steady income-producing assets—so your capital
              always works the way you want it to.
            </p>
            <p className="text-foreground/75 leading-relaxed">
              By offering both growth and income opportunities, we give investors the freedom to align
              their capital with their lifestyle, risk profile, and financial objectives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-card/40 border-y border-border/60">
        <div className="container mx-auto px-6 max-w-4xl">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Why Decades</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-12">
            Why partner with us.
          </h2>
          <ul className="space-y-6">
            {partnerPoints.map((p, i) => (
              <li key={p} className="flex gap-6 border-b border-border/60 pb-6">
                <span className="text-primary text-sm tracking-[0.2em] w-12 shrink-0">
                  0{i + 1}
                </span>
                <span className="text-lg text-foreground/85">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-28 md:py-36 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl mb-6">
            Ready to <span className="italic text-primary">connect?</span>
          </h2>
          <p className="text-foreground/75 mb-10">
            Speak directly with our team to learn how hospitality fits into your portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-xs tracking-[0.25em] uppercase font-medium text-primary-foreground"
              style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              Get In Touch
            </Link>
            <a
              href="tel:+16789787222"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-xs tracking-[0.25em] uppercase font-medium text-foreground border border-foreground/25 hover:border-primary hover:text-primary"
            >
              (678) 978-7222
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
