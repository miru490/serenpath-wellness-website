import { services } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="section-padding mx-auto max-w-6xl px-5 md:px-6">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#a98467]">
            Services
          </p>

          <h2 className="font-display text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
            Choose the support that fits your current season
          </h2>
        </div>

        <p className="max-w-sm text-base leading-7 text-[#6f625a]">
          Each service is presented with a clear purpose, session format, and
          next step so visitors can make a confident inquiry.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="group flex flex-col rounded-[1.7rem] border border-[#e8ddd2] bg-white/60 p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-2xl hover:shadow-[#2f2a26]/10"
          >
            <div className="mb-7 flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a98467]">
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
              <p className="text-sm font-semibold text-[#2f2a26]">Format</p>
              <p className="mt-1 text-sm leading-6 text-[#6f625a]">
                {service.format}
              </p>
            </div>

            <div className="mt-5">
              <p className="text-sm font-semibold text-[#2f2a26]">Best for</p>
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
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#2f2a26] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#4a4038]"
            >
              Ask about this service
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}