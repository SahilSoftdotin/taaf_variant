import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { company } from "../content";
import { EnquiryForm } from "./EnquiryForm";

export function Contact() {
  return (
    <section id="contact" className="bg-paper px-6 py-24">
      <div className="mx-auto max-w-[88rem]">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm text-black/60">Get in touch</p>
          <h2
            className="text-5xl font-medium leading-none text-black md:text-6xl"
            style={{ letterSpacing: "-0.04em" }}
          >
            Make an enquiry
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-black/60">
            Tell us a little about your situation and we&apos;ll match you with
            the right advisor — no pressure, no jargon.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Details */}
          <div className="flex flex-col gap-3">
            {[
              { icon: Phone, label: company.phone, href: company.phoneHref },
              { icon: Mail, label: company.email, href: `mailto:${company.email}` },
              { icon: MapPin, label: company.address, href: undefined },
              { icon: Clock, label: company.hours, href: undefined },
            ].map((r) => {
              const inner = (
                <div className="flex items-center gap-4 rounded-2xl border border-black/8 bg-white p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-black text-white">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <span className="text-base text-black/80">{r.label}</span>
                </div>
              );
              return r.href ? (
                <a
                  key={r.label}
                  href={r.href}
                  className="transition-opacity hover:opacity-80"
                >
                  {inner}
                </a>
              ) : (
                <div key={r.label}>{inner}</div>
              );
            })}
          </div>

          {/* Enquiry form */}
          <div className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm md:p-8">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
