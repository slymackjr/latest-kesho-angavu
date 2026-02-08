import Link from "next/link"

export function MissionSection() {
  return (
    <section className="py-12 md:py-16 text-center">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-6">
          <svg
            viewBox="0 0 100 100"
            className="h-16 w-16 mx-auto text-primary"
            fill="currentColor"
          >
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M50 15 C30 15 20 30 20 45 C20 60 35 75 50 85 C65 75 80 60 80 45 C80 30 70 15 50 15" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M35 50 L50 35 L65 50 M50 35 L50 65" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
          We believe in a world free from poverty
        </h2>
        <p className="text-muted-foreground mb-6">
          Since 1984, we&apos;ve been serving humanity so all may live as God intended.
          <br />
          Here&apos;s what that looked like in 2024.
        </p>
        <Link
          href="/leadership"
          className="text-primary font-semibold hover:underline"
        >
          Our Story
        </Link>
      </div>
    </section>
  )
}
