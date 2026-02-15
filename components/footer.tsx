import Link from "next/link"
import { Facebook, Twitter, Mail, MapPin, Phone, Heart, Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-indigo-700 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo, description and contact info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative h-12 w-12">
                <Image
                  src="/assets/angavu-logo.svg"
                  alt="Kesho Angavu - Brighter Tomorrow"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold">KESHO ANGAVU</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Empowering out-of-school youth in Tanzania since 2020 through skills, 
              health, and economic opportunities. Building brighter tomorrows, today.
            </p>
            
            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>P.O. Box 65007, Dar es Salaam, Tanzania</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+255 757 346 979 (Daniel) / +255 755 059 155 (Ezekiel)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@keshoangavu.org</span>
              </div>
            </div>
            
            <div className="flex gap-3 pt-2">
              <div className="bg-gray-800 rounded-full px-3 py-1.5 text-xs font-medium text-gray-300 border border-gray-700">
                TUCASA MUHAS Initiative
              </div>
              <div className="bg-gray-800 rounded-full px-3 py-1.5 text-xs font-medium text-gray-300 border border-gray-700">
                Youth-Led
              </div>
            </div>
          </div>

          {/* Programs & Impact */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Programs</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/programs/entrepreneurship" className="hover:underline text-gray-300 hover:text-white transition-colors">Entrepreneurship Training</Link></li>
                <li><Link href="/programs/financial" className="hover:underline text-gray-300 hover:text-white transition-colors">Financial Literacy</Link></li>
                <li><Link href="/programs/digital" className="hover:underline text-gray-300 hover:text-white transition-colors">Digital Empowerment</Link></li>
                <li><Link href="/programs/health" className="hover:underline text-gray-300 hover:text-white transition-colors">Health & Wellness</Link></li>
                <li><Link href="/programs/mentorship" className="hover:underline text-gray-300 hover:text-white transition-colors">Mentorship & Inspiration</Link></li>
                <li><Link href="/programs/outreach" className="hover:underline text-gray-300 hover:text-white transition-colors">Community Outreach</Link></li>
              </ul>
            </div>
          </div>

          {/* About & Connect */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">About</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/about" className="hover:underline text-gray-300 hover:text-white transition-colors">Our Mission</Link></li>
                <li><Link href="/team" className="hover:underline text-gray-300 hover:text-white transition-colors">Our Team</Link></li>
                <li><Link href="/impact" className="hover:underline text-gray-300 hover:text-white transition-colors">Impact Stories</Link></li>
                <li><Link href="/testimonials" className="hover:underline text-gray-300 hover:text-white transition-colors">Testimonials</Link></li>
                <li><Link href="/contact" className="hover:underline text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Connect</h3>
              <ul className="space-y-3 text-sm">
                <li><Link href="/get-involved" className="hover:underline text-gray-300 hover:text-white transition-colors">Get Involved</Link></li>
                <li><Link href="/volunteer" className="hover:underline text-gray-300 hover:text-white transition-colors">Volunteer</Link></li>
                <li><Link href="/mentor" className="hover:underline text-gray-300 hover:text-white transition-colors">Become a Mentor</Link></li>
                <li><Link href="/partner" className="hover:underline text-gray-300 hover:text-white transition-colors">Partner With Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-3 text-white">Follow the Journey</h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to receive stories of transformation and updates from our Youth Center of Excellence.
            </p>
            <form className="space-y-3">
              <Input
                type="text"
                placeholder="First Name*"
                className="bg-gray-800 text-white border-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-primary"
              />
              <Input
                type="text"
                placeholder="Last Name*"
                className="bg-gray-800 text-white border-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-primary"
              />
              <Input
                type="email"
                placeholder="Email*"
                className="bg-gray-800 text-white border-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-primary"
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
              >
                SUBSCRIBE
              </Button>
            </form>
            
            {/* Impact Stats Mini */}
            <div className="flex items-center justify-between mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-center">
                <div className="text-xl font-bold text-white">1000+</div>
                <div className="text-xs text-gray-400">Youth</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">5+</div>
                <div className="text-xs text-gray-400">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">3</div>
                <div className="text-xs text-gray-400">Awards</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-white">2</div>
                <div className="text-xs text-gray-400">Regions</div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-6">
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-300" />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-300" />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors" aria-label="Email">
                <Mail className="h-5 w-5 text-gray-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Kesho Angavu — TUCASA MUHAS. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/privacy" className="hover:text-white hover:underline">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white hover:underline">Terms of Use</Link>
              <Link href="/contact" className="hover:text-white hover:underline">Contact</Link>
              <Link href="/blog" className="hover:text-white hover:underline">Blog</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}