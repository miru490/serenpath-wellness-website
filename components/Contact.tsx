export function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#2f2a26] px-5 text-white md:px-6">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#d6c3b1]">
            Contact
          </p>

          <h2 className="font-display text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
            Start with a gentle conversation
          </h2>

          <p id="contact-description" className="mt-6 max-w-lg text-lg leading-8 text-[#e8ddd2]">
            Share a little about what you are looking for. The form is designed
            to help the practitioner understand your situation before suggesting
            the most suitable next step.
          </p>

          <div className="mt-10 grid gap-4 text-sm text-[#d6c3b1]">
            <p>✓ Good for new client inquiries</p>
            <p>✓ Supports multiple service types</p>
            <p>✓ Designed for online wellness sessions</p>
            <p>✓ Form UI ready for backend integration</p>
          </div>
        </div>

        <form
          aria-describedby="contact-description form-note"
          className="rounded-[1.8rem] bg-[#faf7f2] p-6 text-[#2f2a26] shadow-2xl shadow-black/20 md:p-8"
        >
          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold">Name</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  className="rounded-xl border border-[#e8ddd2] bg-white px-4 py-3 outline-none transition focus:border-[#a98467] focus:ring-4 focus:ring-[#a98467]/10"
                  placeholder="Your name"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-semibold">Email</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="rounded-xl border border-[#e8ddd2] bg-white px-4 py-3 outline-none transition focus:border-[#a98467] focus:ring-4 focus:ring-[#a98467]/10"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-sm font-semibold">Service Interest</span>
              <select
                name="service"
                className="rounded-xl border border-[#e8ddd2] bg-white px-4 py-3 outline-none transition focus:border-[#a98467] focus:ring-4 focus:ring-[#a98467]/10"
              >
                <option>Not sure yet</option>
                <option>Mindset Coaching</option>
                <option>Intuitive Energy Healing</option>
                <option>Clarity Session</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold">
                What best describes your current situation?
              </span>
              <select
                name="situation"
                className="rounded-xl border border-[#e8ddd2] bg-white px-4 py-3 outline-none transition focus:border-[#a98467] focus:ring-4 focus:ring-[#a98467]/10"
              >
                <option>I feel stuck or unclear</option>
                <option>I feel emotionally overwhelmed</option>
                <option>I am looking for personal growth support</option>
                <option>I am exploring energy healing</option>
                <option>I am not sure yet</option>
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold">Message</span>
              <textarea
                name="message"
                rows={5}
                className="resize-none rounded-xl border border-[#e8ddd2] bg-white px-4 py-3 outline-none transition focus:border-[#a98467] focus:ring-4 focus:ring-[#a98467]/10"
                placeholder="Tell me what you are hoping to receive support with..."
              />
            </label>

            <button
              type="button"
              className="rounded-full bg-[#2f2a26] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#4a4038]"
            >
              Send Message
            </button>

            <p id="form-note" className="text-center text-xs leading-5 text-[#8a7a70]">
              This is a front-end form UI prepared for future backend or booking
              system integration.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}