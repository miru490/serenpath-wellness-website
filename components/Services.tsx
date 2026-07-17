import { services } from "@/data/services";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="section-padding mx-auto max-w-6xl px-5 md:px-6"
    >
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6b52]">
            Services
          </p>

          <h2
            id="services-title"
            className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
          >
            Different ways to feel supported
          </h2>
        </div>

        <p className="max-w-sm text-base leading-7 text-[#6f625a]">
          Each option is framed around the visitor’s current state, the kind of support
          offered, and one calm next step without forcing a quick decision.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="group flex flex-col rounded-[1.7rem] border border-[#e8ddd2] bg-white/60 p-6 transition motion-safe:hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-[#2f2a26]/10 md:p-7"
          >
            <div className="mb-7 flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8a6b52]">
                {service.eyebrow}
              </p>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3ece4] text-sm font-semibold text-[#8a6b52]">
                0{index + 1}
              </div>
            </div>

            <h3 className="font-display text-3xl font-semibold leading-tight">
              {service.title}
            </h3>

            <p className="mt-4 leading-7 text-[#6f625a]">
              {service.description}
            </p>

            <div className="mt-6 rounded-2xl bg-[#f8f3ec] p-5">
              <p className="text-sm font-semibold text-[#2f2a26]">Session rhythm</p>
              <p className="mt-1 text-sm leading-6 text-[#6f625a]">
                {service.format}
              </p>
            </div>

            <div className="mt-5">
              <p className="text-sm font-semibold text-[#2f2a26]">When it helps</p>
              <p className="mt-2 text-sm leading-6 text-[#6f625a]">
                {service.idealFor}
              </p>
            </div>

            <ul className="mt-5 grid gap-3">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-[#6f625a]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8faf9f]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#2f2a26] px-6 py-3 text-sm font-semibold text-white transition motion-safe:hover:-translate-y-0.5 hover:bg-[#4a4038]"
            >
              Ask about this option
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}