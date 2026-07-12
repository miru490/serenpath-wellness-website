const colors = [
  {
    name: "Warm Sand",
    hex: "#FAF7F2",
    className: "bg-[#FAF7F2]",
  },
  {
    name: "Soft Clay",
    hex: "#A98467",
    className: "bg-[#A98467]",
  },
  {
    name: "Sage Calm",
    hex: "#8FAF9F",
    className: "bg-[#8FAF9F]",
  },
  {
    name: "Deep Earth",
    hex: "#2F2A26",
    className: "bg-[#2F2A26]",
  },
];

export function BrandPalette() {
  return (
    <section
      className="section-padding mx-auto max-w-6xl px-5 md:px-6"
      aria-labelledby="brand-system-title"
    >
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#a98467]">
            Brand System
          </p>

          <h2
            id="brand-system-title"
            className="font-display text-5xl font-semibold leading-tight tracking-tight md:text-6xl"
          >
            A soft visual identity for a calm service brand
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#6f625a]">
            This section is included to show the basic brand direction behind
            the website concept: warm neutrals, natural clay, and muted sage for
            a grounded wellness feel.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {colors.map((color) => (
            <div
              key={color.hex}
              className="rounded-[1.5rem] border border-[#e8ddd2] bg-white/60 p-4"
            >
              <div
                className={`h-28 rounded-[1rem] ${color.className}`}
                aria-hidden="true"
              />
              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="font-semibold">{color.name}</p>
                <p className="text-sm text-[#6f625a]">{color.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}