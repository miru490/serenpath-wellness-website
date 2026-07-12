import { BrandMark } from "@/components/BrandMark";

export function Footer() {
  return (
    <footer className="bg-[#241f1b] px-5 py-10 text-white md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <BrandMark light />
          <p className="mt-4 max-w-md text-sm leading-6 text-[#d6c3b1]">
            A calming wellness website concept for mindset coaching and
            intuitive healing.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-[#d6c3b1]">
          <a href="#" className="transition hover:text-white">
            Instagram
          </a>
          <a href="#" className="transition hover:text-white">
            Facebook
          </a>
          <a href="#" className="transition hover:text-white">
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}