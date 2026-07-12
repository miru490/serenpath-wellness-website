type BrandMarkProps = {
  light?: boolean;
};

export function BrandMark({ light = false }: BrandMarkProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={[
          "relative flex h-10 w-10 items-center justify-center rounded-full",
          light ? "bg-[#faf7f2]" : "bg-[#2f2a26]",
        ].join(" ")}
      >
        <div
          className={[
            "h-4 w-4 rounded-full border",
            light ? "border-[#2f2a26]" : "border-[#faf7f2]",
          ].join(" ")}
        />
        <div
          className={[
            "absolute h-7 w-7 rounded-full border",
            light ? "border-[#a98467]/60" : "border-[#d6c3b1]/70",
          ].join(" ")}
        />
      </div>

      <div>
        <p
          className={[
            "font-display text-2xl font-semibold leading-none tracking-tight",
            light ? "text-white" : "text-[#2f2a26]",
          ].join(" ")}
        >
          SerenPath
        </p>
        <p
          className={[
            "mt-1 text-[10px] font-semibold uppercase tracking-[0.24em]",
            light ? "text-[#d6c3b1]" : "text-[#a98467]",
          ].join(" ")}
        >
          Wellness Studio
        </p>
      </div>
    </div>
  );
}