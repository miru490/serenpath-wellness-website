export function PortfolioNotice() {
  return (
    <aside
      aria-label="Portfolio project disclosure"
      className="border-b border-[#e8ddd2] bg-[#fffaf4] px-5 py-3 text-[#4a4038] md:px-6"
    >
      <div className="mx-auto max-w-6xl text-sm leading-6">
        <strong className="font-semibold text-[#2f2a26]">
          Portfolio case study:
        </strong>{" "}
        This is a self-directed concept project by Hujin, created to demonstrate
        frontend development, responsive web design, UX structure, and service
        website presentation. SerenPath is not a real wellness practice.
      </div>
    </aside>
  );
}