import { BrandMark } from "@/components/BrandMark";

const socialPlaceholders = ["Instagram", "Facebook", "YouTube"];

export function Footer() {
  return (
    <footer className="bg-[#241f1b] px-5 py-10 text-white md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <BrandMark light />
          <p className="mt-4 max-w-md text-sm leading-6 text-[#d6c3b1]">
            A self-directed wellness website concept for a fictional mindset coaching
            and intuitive reflection brand.
          </p>
          <p className="mt-3 max-w-md text-xs leading-5 text-[#a99a8d]">
            Self-directed portfolio case study. Not a real wellness practice.
          </p>
        </div>

        <div aria-label="Social media placeholder area for the portfolio demo">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#a99a8d]">
            Social placeholders
          </p>

          <div className="flex flex-wrap gap-3 text-sm text-[#d6c3b1]">
            {socialPlaceholders.map((item) => (
              <span
                key={item}
                aria-label={`${item} placeholder, not an active link`}
                className="rounded-full border border-[#4a4038] px-4 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}