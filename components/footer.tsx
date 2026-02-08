import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 100 100"
                className="h-12 w-12 text-primary-foreground"
                fill="currentColor"
              >
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="3" />
                <path d="M50 15 C30 15 20 30 20 45 C20 60 35 75 50 85 C65 75 80 60 80 45 C80 30 70 15 50 15" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M35 50 L50 35 L65 50 M50 35 L50 65" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="text-xl font-bold">ADRA</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              The Adventist Development and Relief Agency (ADRA) is a global humanitarian
              organization serving humanity so all may live as God intended.
            </p>
            <p className="text-sm text-primary-foreground/80">
              ADRA is certified or a member of these bodies
            </p>
            <div className="flex gap-2">
              <div className="bg-primary-foreground rounded px-2 py-1 text-xs text-primary font-semibold">
                CHS Alliance
              </div>
              <div className="bg-primary-foreground rounded px-2 py-1 text-xs text-primary font-semibold">
                4-Star Charity
              </div>
            </div>
          </div>

          {/* Give & Engage */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Give</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/give" className="hover:underline text-primary-foreground/80">Current Appeal</Link></li>
                <li><Link href="/give" className="hover:underline text-primary-foreground/80">Emergency</Link></li>
                <li><Link href="/give" className="hover:underline text-primary-foreground/80">Give Monthly</Link></li>
                <li><Link href="/give" className="hover:underline text-primary-foreground/80">Gift Catalog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Engage</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/get-involved" className="hover:underline text-primary-foreground/80">Programs</Link></li>
                <li><Link href="/get-involved" className="hover:underline text-primary-foreground/80">ADRA Connections</Link></li>
                <li><Link href="/get-involved" className="hover:underline text-primary-foreground/80">Community Hub</Link></li>
              </ul>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/get-involved" className="hover:underline text-primary-foreground/80">Get involved</Link></li>
              <li><Link href="/impact" className="hover:underline text-primary-foreground/80">Impact</Link></li>
              <li><Link href="/leadership" className="hover:underline text-primary-foreground/80">About</Link></li>
            </ul>
          </div>

          {/* Newsletter signup */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Impact Starts Here</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Be the first to know about our relief efforts, initiatives, and opportunities to take action.
            </p>
            <form className="space-y-3">
              <Input
                type="text"
                placeholder="First Name*"
                className="bg-primary-foreground text-foreground border-0"
              />
              <Input
                type="text"
                placeholder="Last Name*"
                className="bg-primary-foreground text-foreground border-0"
              />
              <Input
                type="email"
                placeholder="Email*"
                className="bg-primary-foreground text-foreground border-0"
              />
              <Button
                type="submit"
                variant="outline"
                className="w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                SIGN UP
              </Button>
            </form>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="hover:opacity-80" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:opacity-80" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:opacity-80" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:opacity-80" aria-label="YouTube">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>&copy; ADRA International 2026</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#" className="hover:underline">Supporter Portal</Link>
              <span className="hidden md:inline">|</span>
              <Link href="#" className="hover:underline">Fundraising</Link>
              <span className="hidden md:inline">|</span>
              <Link href="#" className="hover:underline">Our Policies</Link>
              <span className="hidden md:inline">|</span>
              <Link href="/contact" className="hover:underline">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
