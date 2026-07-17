import { faqs } from "@/data/faqs";

export function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="section-padding bg-[#f3ece4] px-5 md:px-6"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6b52]">
            FAQ
          </p>

          <h2
            id="faq-title"
            className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
          >
            Common questions before reaching out
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#6f625a]">
            A simple FAQ section reduces uncertainty and helps visitors decide
            whether to reach out without feeling rushed.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-[1.5rem] border border-[#e0d4c7] bg-[#faf7f2]/75 p-6"
            >
              <h3 className="text-lg font-semibold text-[#2f2a26]">
                {faq.question}
              </h3>

              <p className="mt-3 leading-7 text-[#6f625a]">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}