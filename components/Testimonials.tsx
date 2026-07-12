import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding mx-auto max-w-6xl px-5 md:px-6">
      <div className="max-w-3xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#a98467]">
          Testimonials
        </p>

        <h2 className="font-display text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          Words from clients
        </h2>

        <p className="mt-5 text-lg leading-8 text-[#6f625a]">
          This section demonstrates how client feedback can be presented in a
          calm and trustworthy layout.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.quote}
            className="rounded-[1.7rem] border border-[#e8ddd2] bg-white/60 p-8"
          >
            <div className="mb-6 text-5xl leading-none text-[#d6c3b1]">“</div>

            <p className="text-lg leading-8 text-[#4a4038]">
              {testimonial.quote}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#d6c3b1]" />
              <div>
                <p className="text-sm font-semibold text-[#2f2a26]">
                  {testimonial.name}
                </p>
                <p className="text-xs text-[#8a7a70]">Placeholder testimonial</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}