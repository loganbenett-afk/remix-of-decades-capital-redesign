import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Join Our Investor Network | Decades Capital Group" },
      {
        name: "description",
        content:
          "Get in touch with Decades Capital Group. Call (678) 978-7222 or email contact@decadescapitalgroup.com to join our investor network and access premier hotel investments.",
      },
      { property: "og:title", content: "Join the Decades Capital Group Investor Network" },
      {
        property: "og:description",
        content:
          "Early access to new hotel projects, insider updates, and expert insights for accredited investors.",
      },
      { name: "twitter:title", content: "Join the Decades Capital Group Investor Network" },
      { name: "twitter:description", content: "Early access to premier hotel investment opportunities." },
    ],
  }),
  component: ContactPage,
});

type FormState = {
  first: string;
  last: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState | "accredited", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()0-9\s\-.]{7,}$/;

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [accredited, setAccredited] = useState<"yes" | "no" | "">("");
  const [values, setValues] = useState<FormState>({
    first: "",
    last: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (state: FormState, accred: typeof accredited): FormErrors => {
    const e: FormErrors = {};
    if (!state.first.trim()) e.first = "Required";
    if (!state.last.trim()) e.last = "Required";
    if (!state.email.trim()) e.email = "Required";
    else if (!EMAIL_RE.test(state.email.trim())) e.email = "Enter a valid email";
    if (!state.phone.trim()) e.phone = "Required";
    else if (!PHONE_RE.test(state.phone.trim())) e.phone = "Enter a valid phone number";
    if (!accred) e.accredited = "Please select an option";
    return e;
  };

  const update = (key: keyof FormState, val: string) => {
    setValues((v) => ({ ...v, [key]: val }));
    if (touched[key]) {
      setErrors(validate({ ...values, [key]: val }, accredited));
    }
  };

  const blur = (key: keyof FormState) => {
    setTouched((t) => ({ ...t, [key]: true }));
    setErrors(validate(values, accredited));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(values, accredited);
    setErrors(errs);
    setTouched({
      first: true,
      last: true,
      email: true,
      phone: true,
      accredited: true,
    });
    if (Object.keys(errs).length > 0) {
      const first = document.querySelector<HTMLElement>("[data-error='true']");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <>
      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">Get Started</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            Join our <span className="italic text-primary">investor network.</span>
          </h1>
          <p className="mt-8 text-lg text-foreground/75 leading-relaxed">
            Take the first step toward exploring hotel investment opportunities. Fill out the short
            form and you'll gain early access to new hotel projects, insider updates, and expert
            insights delivered straight to your inbox.
          </p>
        </div>
      </section>

      <section className="pb-28 md:pb-36">
        <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3 bg-card/30 border border-border/80 p-8 md:p-12 transition-all duration-500">
            {submitted ? (
              <div className="py-16 text-center animate-fade-up">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="text-primary text-xs tracking-[0.3em] uppercase mb-3">Thank You</div>
                <h2 className="text-3xl mb-4">We'll be in touch.</h2>
                <p className="text-foreground/75 max-w-md mx-auto">
                  A member of our team will reach out shortly with next steps. In the meantime, feel
                  free to call us directly at{" "}
                  <a href="tel:+16789787222" className="text-primary hover:underline">
                    (678) 978-7222
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field
                    label="First Name"
                    name="first"
                    required
                    value={values.first}
                    error={touched.first ? errors.first : undefined}
                    onChange={(v) => update("first", v)}
                    onBlur={() => blur("first")}
                    autoComplete="given-name"
                  />
                  <Field
                    label="Last Name"
                    name="last"
                    required
                    value={values.last}
                    error={touched.last ? errors.last : undefined}
                    onChange={(v) => update("last", v)}
                    onBlur={() => blur("last")}
                    autoComplete="family-name"
                  />
                </div>
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  required
                  value={values.email}
                  error={touched.email ? errors.email : undefined}
                  onChange={(v) => update("email", v)}
                  onBlur={() => blur("email")}
                  autoComplete="email"
                />
                <Field
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  required
                  value={values.phone}
                  error={touched.phone ? errors.phone : undefined}
                  onChange={(v) => update("phone", v)}
                  onBlur={() => blur("phone")}
                  autoComplete="tel"
                  helper="We'll only call to discuss investment opportunities."
                />

                <div data-error={touched.accredited && !!errors.accredited}>
                  <label className="block text-xs tracking-[0.2em] uppercase text-foreground/60 mb-3">
                    Are you an Accredited Investor? *
                  </label>
                  <div className="flex gap-3">
                    {(["yes", "no"] as const).map((v) => (
                      <button
                        type="button"
                        key={v}
                        onClick={() => {
                          setAccredited(v);
                          setTouched((t) => ({ ...t, accredited: true }));
                          setErrors(validate(values, v));
                        }}
                        aria-pressed={accredited === v}
                        className={`flex-1 py-3 rounded-sm border text-sm tracking-wide uppercase transition-all duration-200 ${
                          accredited === v
                            ? "border-primary text-primary bg-primary/10 shadow-[0_0_0_1px_var(--color-primary)]"
                            : "border-border text-foreground/70 hover:border-foreground/40 hover:bg-card/40"
                        }`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                  {touched.accredited && errors.accredited && (
                    <p className="mt-2 text-xs text-destructive animate-fade-up">{errors.accredited}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs tracking-[0.2em] uppercase text-foreground/60 mb-2">
                    Message <span className="text-foreground/40 normal-case tracking-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell us about your investment goals…"
                    className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-foreground/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-xs tracking-[0.25em] uppercase font-medium text-primary-foreground transition-all hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
                >
                  {submitting ? (
                    <>
                      <span className="h-3 w-3 rounded-full border-2 border-primary-foreground/40 border-t-primary-foreground animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting, you agree to be contacted by Decades Capital Group regarding
                  investment opportunities.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-2 space-y-10">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Give Us A Call</p>
              <h3 className="text-2xl mb-4">Prefer to talk directly?</h3>
              <p className="text-foreground/75 leading-relaxed mb-6">
                We'd love to connect with you. Speak with a member of our team to learn more about
                how hotel investments can fit into your portfolio.
              </p>
              <a
                href="tel:+16789787222"
                className="inline-flex items-center gap-3 text-2xl text-primary hover:text-foreground transition-colors group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform group-hover:rotate-12">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                (678) 978-7222
              </a>
            </div>

            <div className="border-t border-border/60 pt-8">
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Email Us</p>
              <a
                href="mailto:contact@decadescapitalgroup.com"
                className="inline-flex items-center gap-3 text-base text-foreground/85 hover:text-primary transition-colors break-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                contact@decadescapitalgroup.com
              </a>
            </div>

            <div className="border-t border-border/60 pt-8">
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Investor Portal</p>
              <p className="text-sm text-foreground/75 leading-relaxed mb-4">
                Already an investor? Access your portal for documents and reporting.
              </p>
              <a
                href="https://sponsor.avestorinc.com/decadescapital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:opacity-80 transition-opacity"
              >
                Sign in to portal ↗
              </a>
            </div>

            <div className="border-t border-border/60 pt-8">
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Investor Note</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Investment opportunities are available to accredited investors only. Even if you're
                not ready to invest today, joining the network is the best way to stay informed so
                that when the right opportunity arises, you'll be among the first to know.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  value,
  onChange,
  onBlur,
  error,
  helper,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error?: string;
  helper?: string;
  autoComplete?: string;
}) {
  const hasError = !!error;
  return (
    <div data-error={hasError}>
      <label htmlFor={name} className="block text-xs tracking-[0.2em] uppercase text-foreground/60 mb-2">
        {label} {required && "*"}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        autoComplete={autoComplete}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${name}-error` : helper ? `${name}-helper` : undefined}
        className={`w-full bg-background border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:ring-2 transition-all ${
          hasError
            ? "border-destructive focus:border-destructive focus:ring-destructive/30"
            : "border-border focus:border-primary focus:ring-primary/30"
        }`}
      />
      {hasError ? (
        <p id={`${name}-error`} className="mt-2 text-xs text-destructive animate-fade-up">
          {error}
        </p>
      ) : helper ? (
        <p id={`${name}-helper`} className="mt-2 text-xs text-muted-foreground">
          {helper}
        </p>
      ) : null}
    </div>
  );
}
