import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/inciterz-logo.png";
import { LeadPopup } from "./LeadPopup";

const links: { to: string; label: string; hash?: boolean }[] = [
  { to: "/", label: "Home" },
  { to: "/our-process", label: "Our Process" },
  { to: "/#services", label: "Services", hash: true },
  { to: "/about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <nav
            className={`flex items-center justify-between rounded-2xl px-4 py-2.5 sm:px-5 sm:py-3 transition-all ${
              scrolled ? "glass-strong shadow-card" : "glass"
            }`}
          >
            <Link to="/" className="flex items-center gap-2 min-w-0">
              <img src={logo} alt="INCITERZ logo" className="h-9 w-9 shrink-0 rounded-lg object-contain sm:h-10 sm:w-10" />
              <span className="font-display text-base sm:text-lg font-bold tracking-tight">INCITERZ</span>
            </Link>

            <ul className="hidden items-center gap-8 md:flex">
              {links.map((l) => (
                <li key={l.to}>
                  {l.hash ? (
                    <a href={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {l.label}
                    </a>
                  ) : (
                    <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>

            <button
              onClick={() => setPopup(true)}
              className="hidden rounded-lg bg-[image:var(--gradient-royal)] px-4 py-2 text-sm font-medium text-primary-foreground shadow-royal transition-transform hover:scale-[1.03] md:inline-flex"
            >
              Let's Talk
            </button>

            <button
              className="md:hidden grid h-10 w-10 shrink-0 place-items-center rounded-lg text-foreground transition-colors hover:bg-accent"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>

          {open && (
            <div className="mt-2 rounded-2xl glass-strong p-4 md:hidden animate-fade-in">
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.to}>
                    {l.hash ? (
                      <a href={l.to} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                        {l.label}
                      </a>
                    ) : (
                      <Link to={l.to} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
                <li>
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <button
                onClick={() => {
                  setOpen(false);
                  setPopup(true);
                }}
                className="mt-3 inline-flex w-full justify-center rounded-lg bg-[image:var(--gradient-royal)] px-4 py-3 text-sm font-semibold text-primary-foreground shadow-royal"
              >
                Let's Talk
              </button>
            </div>
          )}
        </div>
      </header>
      <LeadPopup open={popup} onClose={() => setPopup(false)} />
    </>
  );
}
