import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const [displayed, setDisplayed] = useState(children);
  const [stage, setStage] = useState<"in" | "out">("in");
  const [key, setKey] = useState(pathname);

  useEffect(() => {
    if (pathname === key) return;
    setStage("out");
    const t = setTimeout(() => {
      setDisplayed(children);
      setKey(pathname);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      setStage("in");
    }, 220);
    return () => clearTimeout(t);
  }, [pathname, children, key]);

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        stage === "in" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      {displayed}
    </div>
  );
}
