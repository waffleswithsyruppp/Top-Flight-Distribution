import Link from "next/link";

const features = [
  {
    title: "Unlimited Releases",
    description:
      "Upload singles, EPs, and albums without limiting your creative output.",
    icon: "♫",
  },
  {
    title: "Worldwide Distribution",
    description:
      "Prepare releases for delivery to Spotify, Apple Music, TikTok, YouTube Music, and more.",
    icon: "◎",
  },
  {
    title: "Royalty Tracking",
    description:
      "View earnings, statements, balances, and payout activity from one dashboard.",
    icon: "$",
  },
  {
    title: "Release Scheduling",
    description:
      "Choose release dates, organize campaigns, and manage your catalog efficiently.",
    icon: "◷",
  },
  {
    title: "Powerful Analytics",
    description:
      "Understand your audience, top releases, stores, countries, and growth over time.",
    icon: "↗",
  },
  {
    title: "Label Management",
    description:
      "Manage multiple artists, releases, collaborators, and royalty splits in one place.",
    icon: "✦",
  },
];

const plans = [
  {
    name: "Artist",
    price: "$19.99",
    period: "/ year",
    description: "For independent artists building their catalog.",
    features: [
      "Unlimited single uploads",
      "Release status tracking",
      "Basic analytics",
      "Artist dashboard",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Artist Pro",
    price: "$49.99",
    period: "/ year",
    description: "For serious artists who want more control.",
    features: [
      "Unlimited singles, EPs, and albums",
      "Advanced analytics",
      "Royalty reporting",
      "Release scheduling",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Label",
    price: "$149",
    period: "/ year",
    description: "For labels managing multiple artists.",
    features: [
      "Multiple artist profiles",
      "Team access",
      "Royalty splits",
      "Admin tools",
      "Dedicated support",
    ],
    highlighted: false,
  },
];

const faqs = [
  {
    question: "What is Top Flight Distribution?",
    answer:
      "Top Flight Distribution is a music-management and distribution platform for independent artists and labels. It is designed to help users prepare releases, manage metadata, monitor release status, track royalties, and organize their catalog.",
  },
  {
    question: "Can I upload singles, EPs, and albums?",
    answer:
      "Yes. The platform is being built to support singles, EPs, and full albums, including artwork, audio files, credits, release dates, and other required metadata.",
  },
  {
    question: "Do I keep ownership of my music?",
    answer:
      "Yes. Artists retain ownership of their music unless a separate written agreement with Top Flight Music LLC states otherwise.",
  },
  {
    question: "Will my music automatically go to streaming platforms?",
    answer:
      "Direct delivery to streaming platforms requires an approved distribution provider or direct agreements with those services. The platform will be built to connect with a distribution partner.",
  },
  {
    question: "Can record labels use the platform?",
    answer:
      "Yes. The Label plan is designed for teams managing multiple artists, releases, collaborators, and royalty information.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 text-sm font-black text-[#D4AF37]">
              TF
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-white sm:text-base">
                Top Flight
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                Distribution
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <Link
              href="#features"
              className="transition hover:text-[#D4AF37]"
            >
              Features
            </Link>

            <Link
              href="#pricing"
              className="transition hover:text-[#D4AF37]"
            >
              Pricing
            </Link>

            <Link
              href="#support"
              className="transition hover:text-[#D4AF37]"
            >
              Support
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden rounded-full px-4 py-2 text-sm font-semibold text-white/80 transition hover:text-[#D4AF37] sm:inline-flex"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="rounded-full bg-[#D4AF37] px-5 py-2.5 text-sm font-black text-black transition hover:bg-[#ecd16a]"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-16 px-5 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Built for independent artists and labels
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-[92px]">
              Music Distribution{" "}
              <span className="text-[#D4AF37]">Without Limits</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60 sm:text-xl">
              Distribute your music worldwide, manage releases, organize
              metadata, and track royalties from one powerful dashboard built
              for independent creators.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 font-black text-black transition hover:-translate-y-0.5 hover:bg-[#ecd16a]"
              >
                Start Distributing
              </Link>

              <Link
                href="#pricing"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 px-8 font-bold text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
              >
                View Pricing
              </Link>
            </div>

            <p className="mt-6 text-sm text-white/40">
              Create your artist account and begin building your release
              catalog.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-[40px] bg-[#D4AF37]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#171717] to-[#080808] p-5 shadow-2xl">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Artist Dashboard
                  </p>
                  <h2 className="mt-1 text-xl font-bold">Welcome back</h2>
                </div>

                <div className="h-10 w-10 rounded-full bg-[#D4AF37]" />
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["Releases", "12"],
                  ["Streams", "284K"],
                  ["Royalties", "$3,842"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="text-xs uppercase tracking-wider text-white/40">
                      {label}
                    </p>
                    <p className="mt-3 text-2xl font-black text-[#D4AF37]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">Performance Overview</p>
                    <p className="text-xs text-white/40">Last 30 days</p>
                  </div>

                  <span className="rounded-full bg-[#D4AF37]/15 px-3 py-1 text-xs font-bold text-[#D4AF37]">
                    +28.4%
                  </span>
                </div>

                <div className="flex h-40 items-end gap-2">
                  {[30, 48, 36, 65, 52, 78, 60, 88, 72, 96, 82, 100].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-[#8e721e] to-[#D4AF37]"
                        style={{ height: `${height}%` }}
                      />
                    ),
                  )}
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-5">
                <p className="text-xs uppercase tracking-widest text-[#D4AF37]">
                  Latest Release
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#4e3b05]" />
                  <div>
                    <p className="font-black">Flight Mode</p>
                    <p className="text-sm text-white/50">
                      Approved for distribution
                    </p>
                  </div>
                  <span className="ml-auto rounded-full border border-[#D4AF37]/40 px-3 py-1 text-xs text-[#D4AF37]">
                    Approved
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-12 text-center sm:grid-cols-3 lg:px-8">
          <div>
            <p className="text-4xl font-black text-[#D4AF37]">150+</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/40">
              Stores and platforms
            </p>
          </div>

          <div>
            <p className="text-4xl font-black text-[#D4AF37]">99.9%</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/40">
              Platform uptime target
            </p>
          </div>

          <div>
            <p className="text-4xl font-black text-[#D4AF37]">24/7</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/40">
              Catalog access
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#D4AF37]">
            Platform Features
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            Everything you need to move your music forward.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/55">
            Manage your release process through one secure system built for
            artists, managers, and labels.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-7 transition duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50"
            >
              <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-xl font-black text-[#D4AF37]">
                {feature.icon}
              </div>

              <h3 className="text-xl font-black">{feature.title}</h3>

              <p className="mt-4 leading-7 text-white/50">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className="border-y border-white/10 bg-[#070707]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#D4AF37]">
              Pricing
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
              Choose the plan built for your climb.
            </h2>

            <p className="mt-6 text-lg text-white/55">
              Start with the tools you need now and upgrade as your catalog
              grows.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative rounded-[30px] border p-8 ${
                  plan.highlighted
                    ? "border-[#D4AF37] bg-[#D4AF37]/10"
                    : "border-white/10 bg-white/[0.035]"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute right-6 top-6 rounded-full bg-[#D4AF37] px-3 py-1 text-xs font-black uppercase tracking-wider text-black">
                    Most Popular
                  </span>
                )}

                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#D4AF37]">
                  {plan.name}
                </p>

                <div className="mt-7 flex items-end gap-2">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="pb-1 text-white/40">{plan.period}</span>
                </div>

                <p className="mt-5 min-h-12 text-white/50">
                  {plan.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-white/70"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D4AF37]/15 text-xs text-[#D4AF37]">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/signup"
                  className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-4 font-black transition ${
                    plan.highlighted
                      ? "bg-[#D4AF37] text-black hover:bg-[#ecd16a]"
                      : "border border-white/15 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  }`}
                >
                  Choose {plan.name}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="mx-auto max-w-5xl px-5 py-24 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#D4AF37]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            Everything you should know.
          </h2>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6"
            >
              <summary className="cursor-pointer list-none pr-8 text-lg font-bold">
                {faq.question}
              </summary>

              <p className="mt-4 max-w-3xl leading-7 text-white/50">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px] border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/20 via-[#181304] to-black px-6 py-16 text-center sm:px-12">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#D4AF37]/20 blur-[100px]" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#D4AF37]">
              Your next release starts here
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
              Take your music to a higher level.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">
              Join Top Flight Distribution and manage your catalog through one
              premium platform.
            </p>

            <Link
              href="/signup"
              className="mt-9 inline-flex min-h-14 items-center justify-center rounded-full bg-[#D4AF37] px-8 font-black text-black transition hover:bg-[#ecd16a]"
            >
              Create Your Account
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050505]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 lg:px-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] font-black text-black">
                TF
              </div>

              <div>
                <p className="font-black uppercase tracking-[0.14em]">
                  Top Flight Distribution
                </p>
                <p className="mt-1 text-xs text-white/40">
                  Powered by Top Flight Music LLC
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-white/45">
              A modern music-management and distribution platform created for
              independent artists, labels, and creative teams.
            </p>
          </div>

          <div>
            <h3 className="font-black text-[#D4AF37]">Platform</h3>
            <div className="mt-5 grid gap-3 text-sm text-white/50">
              <Link href="#features" className="hover:text-white">
                Features
              </Link>
              <Link href="#pricing" className="hover:text-white">
                Pricing
              </Link>
              <Link href="/login" className="hover:text-white">
                Artist Login
              </Link>
              <Link href="/signup" className="hover:text-white">
                Create Account
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-black text-[#D4AF37]">Company</h3>
            <div className="mt-5 grid gap-3 text-sm text-white/50">
              <Link href="#" className="hover:text-white">
                About
              </Link>
              <Link href="#" className="hover:text-white">
                Contact
              </Link>
              <Link href="#" className="hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <p>© 2026 Top Flight Music LLC. All rights reserved.</p>
            <p>
              Streaming-platform delivery requires an approved distribution
              provider.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}