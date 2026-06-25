import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { company } from "../content";

export function Contact() {
  return (
    <section id="contact" className="bg-paper px-6 py-24">
      <div className="mx-auto max-w-[88rem]">
        <div className="overflow-hidden rounded-3xl bg-night p-10 md:p-16">
          <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-2">
            <div>
              <h2
                className="text-4xl font-medium leading-tight text-white md:text-5xl"
                style={{ letterSpacing: "-0.03em" }}
              >
                Ready when
                <br />
                you are
              </h2>
              <p className="mt-5 max-w-md text-base text-white/60">
                Book a no-pressure strategy session with a local Central Coast
                advisor who&apos;ll explain everything in plain English.
              </p>
              <a
                href={company.phoneHref}
                className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white py-2 pl-7 pr-2 text-base font-medium text-black transition-colors duration-200 hover:bg-white/90"
              >
                <span>Book a session</span>
                <span className="grid place-items-center rounded-full bg-night p-2 transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="h-5 w-5 text-white" />
                </span>
              </a>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { icon: Phone, label: company.phone, href: company.phoneHref },
                { icon: Mail, label: company.email, href: `mailto:${company.email}` },
                { icon: MapPin, label: company.address, href: undefined },
              ].map((r) => {
                const Inner = (
                  <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-5">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10">
                      <r.icon className="h-5 w-5 text-white" />
                    </span>
                    <span className="text-base text-white/90">{r.label}</span>
                  </div>
                );
                return r.href ? (
                  <a key={r.label} href={r.href} className="transition-opacity hover:opacity-80">
                    {Inner}
                  </a>
                ) : (
                  <div key={r.label}>{Inner}</div>
                );
              })}
              <p className="pl-1 text-sm text-white/40">{company.hours}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
