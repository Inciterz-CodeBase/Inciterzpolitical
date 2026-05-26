import { useState } from "react";
import { X } from "lucide-react";

export function LeadPopup({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New growth enquiry from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nHi INCITERZ, let's talk growth.`;
    window.location.href = `mailto:connect@inciterz.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-lg overflow-hidden rounded-2xl bg-[image:var(--gradient-royal)] p-6 text-primary-foreground shadow-2xl sm:p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 sm:right-4 sm:top-4 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-primary-foreground transition-colors hover:bg-white/20"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <h3 className="pr-10 font-display text-xl sm:text-2xl font-bold md:text-3xl">
          Hold On! Let's Talk Growth
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-primary-foreground/80">
          Fill out the following form and we will get back to you in the next 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
          {[
            { key: "name", label: "Name", type: "text" },
            { key: "email", label: "Email", type: "email" },
            { key: "phone", label: "Phone Number", type: "tel" },
          ].map((f) => (
            <div key={f.key}>
              <label className="block text-xs font-medium text-primary-foreground/80">
                {f.label}
              </label>
              <input
                required
                type={f.type}
                maxLength={120}
                value={form[f.key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                className="mt-1 w-full border-0 border-b border-primary-foreground/40 bg-transparent py-2 text-primary-foreground outline-none focus:border-primary-foreground"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full rounded-lg bg-white py-4 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
          >
            Spark a conversation
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-primary-foreground/80">
          Prefer email?{" "}
          <a href="mailto:connect@inciterz.com" className="font-semibold text-primary-foreground">
            connect@inciterz.com
          </a>
        </p>
      </div>
    </div>
  );
}
