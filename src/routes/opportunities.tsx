import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import tropicana1 from "@/assets/tropicana1.jpg";
import tropicana2 from "@/assets/tropicana2.jpg";
import tropicana3 from "@/assets/tropicana3.jpg";
import courtyard1 from "@/assets/courtyard1.jpg";
import courtyard2 from "@/assets/courtyard2.jpg";
import courtyard3 from "@/assets/courtyard3.jpg";
import marriottColumbus from "@/assets/marriott-columbus.jpg";

type Category = "current" | "closed" | "operations";

export const Route = createFileRoute("/opportunities")({
  validateSearch: (search: Record<string, unknown>): { category?: Category } => {
    const c = search.category;
    if (c === "closed" || c === "operations" || c === "current") {
      return { category: c };
    }
    return {};
  },
  head: () => ({
    meta: [
      { title: "Hotel Investment Opportunities | Decades Capital Group" },
      {
        name: "description",
        content:
          "Browse current and closed hotel investments and operating properties — branded assets across Marriott, Hilton, IHG and more.",
      },
      { property: "og:title", content: "Featured Hotel Investments | Decades Capital Group" },
      {
        property: "og:description",
        content:
          "Current investments, closed deals, and hotels under operation across the United States.",
      },
    ],
  }),
  component: OpportunitiesPage,
});

type Property = {
  name: string;
  status?: string;
  images?: string[];
  details: [string, string][];
};

const currentInvestments: Property[] = [
  {
    name: "Marriott Downtown Columbus — Columbus, OH",
    status: "Coming Soon",
    images: [marriottColumbus],
    details: [
      ["Location", "50 South Front Street, Columbus, OH 43215"],
      ["Brand", "Columbus Downtown By Marriott"],
      ["Room Count", "230"],
      ["Investment Hold Period", "3 – 5 Years"],
      [
        "Amenities",
        "Marriott Greatroom Lobby, M Club Lounge, Fitness Center, Courtyard / Outdoor Gathering Area, Ballroom & Meeting Spaces, Conference Rooms, Restaurant & Bar Areas, Upgraded Guestrooms and Suites, Presidential Suite, Modern Corridors and Guest Floors",
      ],
    ],
  },
  {
    name: "LivSmart Studios by Hilton — Mobile, AL",
    details: [
      ["Location", "Satchel Paige Drive, Mobile, AL 36606"],
      ["Brand", "LivSmart Studios by Hilton"],
      ["Room Count", "105"],
      ["Investment Hold Period", "3 – 5 Years"],
      [
        "Amenities",
        "Fully-equipped kitchens, breakfast & retail, fitness center, outdoor spaces, guest laundry, food delivery station, patio with barbeque area",
      ],
    ],
  },
  {
    name: "Home2 Suites by Hilton — Tampa, FL",
    status: "Closed",
    details: [
      ["Location", "Tampa, Florida"],
      ["Brand", "Home2 Suites by Hilton"],
      ["Room Count", "106 Rooms"],
      [
        "Amenities",
        "Connecting rooms, hot breakfast, digital key, in-room kitchen, EV charging, streaming entertainment, outdoor pool, fitness center, pet-friendly rooms, cribs, business center",
      ],
    ],
  },
  {
    name: "Motel 6 — Tropicana, Las Vegas, NV",
    images: [tropicana1, tropicana2, tropicana3],
    details: [
      ["Location", "Las Vegas, NV"],
      ["Brand", "Motel 6"],
      ["Units", "307"],
      ["Current Status", "Operational"],
      ["Hold Period", "3 – 5 years"],
      ["Amenities", "Outdoor pool"],
    ],
  },
];

const closedInvestments: Property[] = [
  {
    name: "Courtyard by Marriott — Plano, TX",
    images: [courtyard1, courtyard2, courtyard3],
    details: [
      ["Location", "6840 Dallas Pkwy, Plano, TX 75024"],
      ["Brand", "Courtyard by Marriott"],
      ["Room Count", "156 Rooms"],
      [
        "Amenities",
        "Modern rooms, ergonomic workstations, free Wi-Fi, The Bistro, fitness center, outdoor pool, flexible meeting spaces, walking distance to Shops at Legacy West",
      ],
    ],
  },
  {
    name: "Homewood Suites by Hilton — Celebration, FL",
    details: [
      ["Location", "190 Celebration Blvd, Kissimmee, FL 34747"],
      ["Brand", "Homewood Suites by Hilton"],
      ["Room Count", "128 Rooms"],
      [
        "Amenities",
        "Breakfast dining area, 750 sqft of meeting space, outdoor pool & whirlpool, fitness room, dog park, half court, business center, market pantry, guest laundry",
      ],
    ],
  },
  {
    name: "Homewood Suites by Hilton — Jackson, MS",
    details: [
      ["Location", "2815 North State Street, Jackson, MS 39216"],
      ["Brand", "Homewood Suites by Hilton"],
      ["Room Count", "125 Rooms"],
      [
        "Amenities",
        "Big lobby, leased restaurant & bar/lounge, business center, 1,568 sqft meeting space, indoor pool & hot tub, fitness center, guest pantry, guest laundry, EV chargers",
      ],
    ],
  },
  {
    name: "Hampton Inn by Hilton — Redmond, OR",
    details: [
      ["Location", "3901 Southwest 21st Street, Redmond, OR 97756"],
      ["Brand", "Hampton by Hilton"],
      ["Room Count", "100 Rooms"],
      [
        "Amenities",
        "Meeting space, indoor pool, fitness room, complimentary breakfast, guest laundry, business center",
      ],
    ],
  },
  {
    name: "Tru by Hilton — Ridgeland, MS",
    details: [
      ["Location", "243 East County Line Road, Ridgeland, MS 39157"],
      ["Brand", "Tru by Hilton"],
      ["Room Count", "101 Rooms"],
      [
        "Amenities",
        "Complimentary hot breakfast, free parking, free Wi-Fi, fitness center, pet-friendly rooms, outdoor pool, board room",
      ],
    ],
  },
  {
    name: "Tru by Hilton — Titusville, FL",
    details: [
      ["Location", "3550 Wonder Dr, Titusville, FL 32780"],
      ["Brand", "Tru by Hilton"],
      ["Room Count", "105 Rooms"],
      ["Amenities", "Outdoor pool, board room, fitness center, standard amenities"],
    ],
  },
  {
    name: "Home2 Suites by Hilton — Biloxi, MS",
    details: [
      ["Location", "612 Beach Blvd, Biloxi, MS 39530"],
      ["Brand", "Home2 Suites by Hilton"],
      ["Room Count", "101 Rooms"],
      [
        "Amenities",
        "Outdoor pool, board room, complimentary breakfast, fitness center, outdoor patio, guest laundry",
      ],
    ],
  },
  {
    name: "Home2 Suites by Hilton — Bend, OR",
    details: [
      ["Location", "21241 NE Livingston Dr, Bend, OR"],
      ["Brand", "Home2 Suites by Hilton"],
      ["Room Count", "115 Rooms"],
      [
        "Amenities",
        "Pet friendly, indoor pool, fitness room, complimentary breakfast, business center, meeting space",
      ],
    ],
  },
  {
    name: "Home2 Suites by Hilton — Titusville, FL",
    details: [
      ["Location", "4837 Helen Hauser Blvd, Titusville, FL"],
      ["Brand", "Home2 Suites by Hilton"],
      ["Room Count", "112 Rooms"],
      [
        "Amenities",
        "Breakfast dining area, outdoor pool, fitness room, meeting space, guest laundry, lobby workspace, market pantry",
      ],
    ],
  },
  {
    name: "Candlewood Suites by IHG — Mobile, AL",
    details: [
      ["Location", "1545 Satchel Paige Dr, Mobile, AL"],
      ["Brand", "Candlewood Suites by IHG"],
      ["Room Count", "100 Rooms"],
      [
        "Amenities",
        "Pool area, pet friendly, fitness room, sweet shop, guest laundry, barbeque area, outdoor patio",
      ],
    ],
  },
  {
    name: "Holiday Inn Express by IHG — Fairhope, AL",
    details: [
      ["Location", "19751 Greeno Rd, Fairhope, AL 36532"],
      ["Brand", "Holiday Inn Express by IHG"],
      ["Room Count", "87 Rooms"],
      [
        "Amenities",
        "Outdoor pool, business center, complimentary breakfast, guest laundry, fitness center",
      ],
    ],
  },
  {
    name: "Holiday Inn Express by IHG — Ridgeland, MS",
    details: [
      ["Location", "555 W Ridgeland Ave, Ridgeland, MS 39157"],
      ["Brand", "Holiday Inn Express by IHG"],
      ["Room Count", "105 Rooms"],
      [
        "Amenities",
        "Complimentary breakfast, fitness center, business center, outdoor pool, board room",
      ],
    ],
  },
  {
    name: "Holiday Inn Express by IHG — Redmond, OR",
    details: [
      ["Location", "4051 SW 21st St, Redmond, OR 97756"],
      ["Brand", "Holiday Inn Express by IHG"],
      ["Room Count", "96 Rooms"],
      [
        "Amenities",
        "Indoor swimming pool, fitness center, market pantry, laundry, lobby workstation",
      ],
    ],
  },
  {
    name: "Staybridge Suites by IHG — Flowood, MS",
    details: [
      ["Location", "2620 Lakeland Drive, Flowood, MS 39232"],
      ["Brand", "Staybridge Suites by IHG"],
      ["Room Count", "110 Rooms"],
      [
        "Amenities",
        "In-room workspaces, high-speed internet, 24-hour business center, complimentary breakfast, outdoor firepits, patio with barbecue grills, fitness center, guest laundry, heated indoor pool",
      ],
    ],
  },
  {
    name: "Hotel Rain — Boutique Hotel, Gulf Shores, AL",
    details: [
      ["Location", "1557 Gulf Shores Pkwy, Gulf Shores, AL"],
      ["Brand", "Hotel Rain Upper Upscale Boutique"],
      ["Room Count", "105 Rooms"],
      [
        "Amenities",
        "Fine-dining restaurant, upscale bar & lounge, spa & wellness center, fitness center, outdoor pool, board room",
      ],
    ],
  },
  {
    name: "TownePlace Suites by Marriott — Gulf Shores, AL",
    details: [
      ["Location", "1557 Gulf Shores Parkway, Gulf Shores, AL 36542"],
      ["Brand", "TownePlace Suites by Marriott"],
      ["Room Count", "96 Rooms"],
      [
        "Amenities",
        "Breakfast dining area, outdoor pool, fitness room, lobby workstation, market pantry, guest laundry, outdoor patio, barbeque area, fire pit",
      ],
    ],
  },
  {
    name: "WoodSpring Suites by Choice — Pearl, MS",
    details: [
      ["Location", "2 Mac And Bones Blvd, Pearl, MS 39208"],
      ["Brand", "WoodSpring Suites"],
      ["Room Count", "128 Rooms"],
      [
        "Amenities",
        "Breakfast dining area, 750 sqft of meeting space, outdoor pool, pet-friendly rooms",
      ],
    ],
  },
];

const operationsHotels: Property[] = [
  { name: "WoodSpring Suites by Choice — Pearl, MS", details: [["Status", "In Operation"]] },
  { name: "Staybridge Suites by IHG — Flowood, MS", details: [["Status", "In Operation"]] },
  {
    name: "Homewood Suites by Hilton — Fondren, MS Medical District",
    details: [["Status", "In Operation"]],
  },
  { name: "Home2 Suites by Hilton — Bend, OR", details: [["Status", "In Operation"]] },
  { name: "Holiday Inn Express by IHG — Fairhope, AL", details: [["Status", "In Operation"]] },
  { name: "Holiday Inn Express by IHG — Ridgeland, MS", details: [["Status", "In Operation"]] },
  { name: "Hampton Inn by Hilton — Redmond, OR", details: [["Status", "In Operation"]] },
  { name: "Tru by Hilton — Ridgeland, MS", details: [["Status", "In Operation"]] },
  { name: "Candlewood Suites by IHG — Mobile, AL", details: [["Status", "In Operation"]] },
];

const tabs: { id: Category; label: string }[] = [
  { id: "current", label: "Current Investments" },
  { id: "closed", label: "Closed Investments" },
  { id: "operations", label: "Hotels Under Operations" },
];

function OpportunitiesPage() {
  const { category } = Route.useSearch();
  const [active, setActive] = useState<Category>(category ?? "current");

  useEffect(() => {
    setActive(category ?? "current");
  }, [category]);

  const list =
    active === "current"
      ? currentInvestments
      : active === "closed"
        ? closedInvestments
        : operationsHotels;

  return (
    <>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">Opportunities</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            Featured <span className="italic text-primary">opportunities.</span>
          </h1>
          <p className="mt-8 text-lg text-foreground/75 leading-relaxed">
            A curated portfolio of branded hotel assets across the United States.
          </p>
        </div>
      </section>

      <div className="sticky top-16 z-30 bg-background/85 backdrop-blur-xl border-y border-border/60">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 md:gap-8 py-4">
            {tabs.map((t) => (
              <Link
                key={t.id}
                to="/opportunities"
                search={{ category: t.id }}
                onClick={() => setActive(t.id)}
                className={`text-xs md:text-sm tracking-[0.2em] uppercase px-4 py-2 rounded-full transition-all ${
                  active === t.id
                    ? "text-primary-foreground"
                    : "text-foreground/70 hover:text-primary"
                }`}
                style={
                  active === t.id
                    ? { background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }
                    : undefined
                }
              >
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          {active === "operations" ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {list.map((p) => (
                <div
                  key={p.name}
                  className="border border-border/60 rounded-sm p-6 bg-card/40 hover:border-primary/60 transition-colors"
                >
                  <p className="text-xs tracking-[0.25em] uppercase text-primary mb-3">
                    In Operation
                  </p>
                  <h3 className="text-xl leading-snug">{p.name}</h3>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-20 max-w-6xl mx-auto">
              {list.map((p, idx) => (
                <PropertyCard key={p.name} property={p} reversed={idx % 2 === 1} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 md:py-32 bg-card/40 border-y border-border/60 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl mb-6">
            Want to <span className="italic text-primary">explore more?</span>
          </h2>
          <p className="text-foreground/75 mb-10">
            Join our investor network for early access to new hotel projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-xs tracking-[0.25em] uppercase font-medium text-primary-foreground"
              style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              Request Investor Access
            </Link>
            <a
              href="tel:+16789787222"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-xs tracking-[0.25em] uppercase font-medium text-foreground border border-foreground/25 hover:border-primary hover:text-primary"
            >
              Call (678) 978-7222
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function PropertyCard({ property, reversed }: { property: Property; reversed: boolean }) {
  const [active, setActive] = useState(0);
  const hasImages = property.images && property.images.length > 0;

  return (
    <div
      className={`grid ${hasImages ? "md:grid-cols-2" : "md:grid-cols-1"} gap-12 items-center ${
        reversed && hasImages ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {hasImages && (
        <div>
          <div
            className="aspect-[4/3] overflow-hidden rounded-sm mb-4"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <img
              src={property.images![active]}
              alt={property.name}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
          {property.images!.length > 1 && (
            <div className="grid grid-cols-3 gap-4">
              {property.images!.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`aspect-[4/3] overflow-hidden rounded-sm transition-all ${
                    i === active ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <div>
        {property.status && (
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">{property.status}</p>
        )}
        <h2 className="text-3xl md:text-4xl mb-8 leading-tight">{property.name}</h2>
        <dl className="divide-y divide-border/60 border-y border-border/60">
          {property.details.map(([k, v]) => (
            <div key={k} className="grid grid-cols-3 py-4 gap-4">
              <dt className="text-xs tracking-[0.2em] uppercase text-foreground/60 col-span-1">
                {k}
              </dt>
              <dd className="text-sm text-foreground/90 col-span-2">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
