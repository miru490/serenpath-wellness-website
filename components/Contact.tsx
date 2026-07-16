export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-padding bg-[#2f2a26] px-5 text-white md:px-6"
    >
      <div className="mx-auto grid min-w-0 max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="min-w-0">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#e8ddd2]">
            Contact
          </p>

          <h2
            id="contact-title"
            className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
          >
            Start with a gentle conversation
          </h2>

          <p id="contact-description" className="mt-6 max-w-lg text-lg leading-8 text-[#e8ddd2]">
            Share only what feels comfortable. The form is designed to make the first
            contact feel clear, calm, and low-pressure before any next step is discussed.
          </p>

          <ul className="mt-10 grid gap-4 text-sm text-[#d6c3b1]">
            {[
              "Low-pressure first inquiry",
              "Clear service interest field",
              "Designed for private online support",
              "Front-end demo ready for future integration",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <form
          aria-describedby="contact-description form-note privacy-note"
          className="min-w-0 rounded-[1.8rem] bg-[#faf7f2] p-6 text-[#2f2a26] shadow-2xl shadow-black/20 md:p-8"
        >
          <div className="grid min-w-0 gap-5">
            <div className="grid min-w-0 gap-5 sm:grid-cols-2">
              <label className="grid min-w-0 gap-2">
                <span className="text-sm font-semibold">Name</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  className="w-full min-w-0 rounded-xl border border-[#e8ddd2] bg-white px-4 py-3 outline-none transition focus:border-[#a98467] focus:ring-4 focus:ring-[#a98467]/10"
                  placeholder="Your name"
                />
              </label>

              <label className="grid min-w-0 gap-2">
                <span className="text-sm font-semibold">Email</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="w-full min-w-0 rounded-xl border border-[#e8ddd2] bg-white px-4 py-3 outline-none transition focus:border-[#a98467] focus:ring-4 focus:ring-[#a98467]/10"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="grid min-w-0 gap-2">
              <span className="text-sm font-semibold">Service interest</span>
              <select
                name="service"
                className="w-full min-w-0 rounded-xl border border-[#e8ddd2] bg-white px-4 py-3 outline-none transition focus:border-[#a98467] focus:ring-4 focus:ring-[#a98467]/10"
              >
                <option>Not sure yet</option>
                <option>Mindset Coaching</option>
                <option>Intuitive Energy Healing</option>
                <option>Clarity Session</option>
              </select>
            </label>

            <label className="grid min-w-0 gap-2">
              <span className="text-sm font-semibold">
                What best describes your current situation?
              </span>
              <select
                name="situation"
                className="w-full min-w-0 rounded-xl border border-[#e8ddd2] bg-white px-4 py-3 outline-none transition focus:border-[#a98467] focus:ring-4 focus:ring-[#a98467]/10"
              >
                <option>I feel stuck or unclear</option>
                <option>I feel emotionally overwhelmed</option>
                <option>I am looking for personal growth support</option>
                <option>I am exploring energy healing</option>
                <option>I am not sure yet</option>
              </select>
            </label>

            <label className="grid min-w-0 gap-2">
              <span className="text-sm font-semibold">Message</span>
              <textarea
                name="message"
                rows={5}
                className="w-full min-w-0 resize-none rounded-xl border border-[#e8ddd2] bg-white px-4 py-3 outline-none transition focus:border-[#a98467] focus:ring-4 focus:ring-[#a98467]/10"
                placeholder="Share whatever feels comfortable to name right now..."
              />
            </label>

            <button
              type="button"
              className="rounded-full bg-[#2f2a26] px-7 py-3.5 text-sm font-semibold text-white transition motion-safe:hover:-translate-y-0.5 hover:bg-[#4a4038]"
            >
              Send a gentle note
            </button>

            <p id="form-note" className="text-center text-sm leading-6 text-[#5f544c]">
              No pressure to have the perfect words. Share only what feels comfortable.
            </p>

            <p id="privacy-note" className="text-center text-xs leading-5 text-[#78685f]">
              Demo note: this front-end form is for portfolio presentation only and does
              not collect, store, or send personal information.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
