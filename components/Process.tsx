const steps = [
  {
    title: "Connect",
    description:
      "Begin with a calm conversation about where you are and what kind of support you are looking for.",
  },
  {
    title: "Reflect",
    description:
      "Explore recurring thoughts, emotional patterns, and areas where you may feel blocked or disconnected.",
  },
  {
    title: "Realign",
    description:
      "Leave with a clearer sense of direction, practical reflections, and a softer path forward.",
  },
];

export function Process() {
  return (
    <section
      aria-labelledby="process-title"
      className="section-padding bg-[#f3ece4] px-5 md:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#8a6b52]">
            Process
          </p>

          <h2
            id="process-title"
            className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
          >
            A simple and supportive process
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative overflow-hidden rounded-[1.7rem] bg-[#faf7f2] p-8"
            >
              <div aria-hidden="true"
                className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#d6c3b1]/40" />

              <div className="relative z-10">
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#2f2a26] text-sm font-semibold text-white">
                  {index + 1}
                </div>

                <h3 className="font-display text-3xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-[#6f625a]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}