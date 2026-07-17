const items = [
  {
    value: "Private",
    label: "One-on-one support",
  },
  {
    value: "Online",
    label: "Remote session ready",
  },
  {
    value: "Gentle",
    label: "Calm, supportive flow",
  },
  {
    value: "Clear",
    label: "Simple next steps",
  },
];

export function TrustStrip() {
  return (
    <section
      className="mx-auto max-w-6xl px-5 pb-10 md:px-6 md:pb-16"
      aria-label="Service trust highlights"
    >
      <div className="grid grid-cols-2 gap-4 rounded-[1.7rem] border border-[#e8ddd2] bg-white/55 p-4 shadow-xl shadow-[#2f2a26]/5 backdrop-blur md:grid-cols-4 md:p-6">
        {items.map((item) => (
          <div key={item.value} className="rounded-2xl bg-[#faf7f2]/70 p-4 md:p-5">
            <p className="font-display text-2xl font-semibold text-[#2f2a26] md:text-3xl">
              {item.value}
            </p>
            <p className="mt-1 text-sm text-[#6f625a]">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}