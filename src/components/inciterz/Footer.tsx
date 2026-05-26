import { Linkedin, Instagram, Youtube, Facebook, Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/inciterz-logo.png";

const socials = [
  { Icon: Linkedin, href: "https://www.linkedin.com/company/inciterz/posts/?feedView=all", label: "LinkedIn" },
  { Icon: Instagram, href: "https://www.instagram.com/weinciterz/", label: "Instagram" },
  { Icon: Youtube, href: "https://www.youtube.com/channel/UC9xPw_ACPA9hDalwO1kcXuw", label: "YouTube" },
  { Icon: () => <span className="font-bold text-sm">𝕏</span>, href: "https://x.com/WeInciterz", label: "X" },
  { Icon: Facebook, href: "https://www.facebook.com/Inciterz", label: "Facebook" },
  { Icon: MessageCircle, href: "https://api.whatsapp.com/send/?phone=919810200568&text&type=phone_number&app_absent=0", label: "WhatsApp" },
];

const services = ["Research & Intelligence", "Digital Campaigns", "Ground Operations", "War Room", "PR & Media"];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 py-12 sm:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[image:var(--gradient-vibrant)] opacity-60" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[60%] -translate-x-1/2 rounded-full bg-[image:var(--gradient-royal)] opacity-10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="INCITERZ logo" className="h-11 w-11 rounded-lg object-contain" />
              <span className="font-display text-lg font-bold tracking-tight">INCITERZ</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A modern political consulting and campaign management firm - strategy,
              intelligence and execution under one roof. Raghu
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 place-items-center rounded-lg glass transition-all hover:scale-110 hover:bg-[image:var(--gradient-royal)] hover:text-primary-foreground"
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-royal-glow">
              Services
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <a href="/#services" className="text-muted-foreground transition-colors hover:text-foreground">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-royal-glow">
              Company
            </div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link to="/" className="text-muted-foreground transition-colors hover:text-foreground">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground transition-colors hover:text-foreground">About Us</Link></li>
              <li><Link to="/our-process" className="text-muted-foreground transition-colors hover:text-foreground">Our Process</Link></li>
              <li><Link to="/contact" className="text-muted-foreground transition-colors hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 md:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-royal-glow">
              Get in Touch
            </div>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-royal-glow" />
                <a href="mailto:connect@inciterz.com" className="break-all text-muted-foreground hover:text-foreground">
                  connect@inciterz.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-royal-glow" />
                <div className="text-muted-foreground">
                  <div>Sales: <a href="tel:+919810200568" className="hover:text-foreground">+91 9810200568</a></div>
                  <div>Careers: <a href="tel:+918527318585" className="hover:text-foreground">+91 8527318585</a></div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-royal-glow" />
                <span className="text-muted-foreground">
                  3rd Floor, H 146-147, Sector 63, Noida,<br />
                  Gautam Buddha Nagar, U.P., India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground md:flex-row md:text-left">
          <span>© 2026 INCITERZ. All rights reserved.</span>
          <span className="font-medium tracking-wider">CONSULT · CURATE · COMMUNICATE</span>
        </div>
      </div>
    </footer>
  );
}
