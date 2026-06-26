import { LocationCard } from "./LocationCard";
import { locations } from "../content";

export function Locations() {
  const head = locations[0];
  const mapQuery = encodeURIComponent(`${head.name} ${head.address}`);

  return (
    <section id="locations" className="bg-paper px-6 py-24">
      <div className="mx-auto max-w-[88rem]">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-sm text-black/60">Where to find us</p>
          <h2
            className="text-5xl font-medium leading-none text-black md:text-6xl"
            style={{ letterSpacing: "-0.04em" }}
          >
            Two offices,
            <br />
            one local team
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-black/60">
            Drop in to our Toukley or Newcastle office, or meet remotely —
            whatever suits you best.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {locations.map((l) => (
            <LocationCard
              key={l.name}
              imageUrl={l.image}
              location={l.name}
              address={l.address}
              href={l.mapUrl}
              tag={l.tag}
            />
          ))}

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-sm">
            <iframe
              title={`${head.name} office map`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
