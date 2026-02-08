"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect, useCallback } from "react"
import { ChevronDown, ChevronUp, Search, Globe, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  {
    label: "Join the Movement",
    description: "Fuel a Generation of Changemakers",
    descriptionText:
    "Your partnership is the spark that ignites possibility. When you give to Kesho Angavu, you don't just fund a program—you invest in a young person's journey from vulnerability to vision. You provide the tools, training, and mentorship that transform a life, a family, and ultimately, a community in Tanzania.",
    link: { label: "See Options", href: "/give" },
    items: [
      { label: "Current Appeal", href: "/give" },
      { label: "Emergency Response", href: "/give" },
      { label: "Gift Catalog", href: "/give" },
      { label: "Give Monthly", href: "/give" },
      { label: "Planned Giving", href: "/give" },
      { label: "Gift of Stock", href: "/give" },
    ],
    image: "/assets/image3.JPG",
  },
  {
    label: "Join the Circle of Impact",
    description: "Be Part of Their Transformation",
    descriptionText:
    "Do you believe in the power of youth to shape tomorrow? Discover how your passion, skills, and heart for service can directly empower the next generation of Tanzanian leaders. Your involvement creates ripples of change that last a lifetime.",
    link: { label: "Learn How", href: "/get-involved" },
    items: [
      { label: "Join Our Team", href: "/get-involved" },
      { label: "Volunteer", href: "/get-involved" },
      { label: "Community Hub", href: "/get-involved" },
      { label: "Church Emergency Response", href: "/get-involved" },
    ],
    image: "/assets/image4.JPG",
  },
  {
   label: "Measuring Tomorrow, Today",
    description: "Sustainable Change, Tangible Results",
    descriptionText:
    "Our programs are designed for lasting transformation. We work with youth and communities, empowering them not just for today, but to build resilient, self-reliant futures. Every skill learned, every business launched, and every healthy choice made is a step toward a generational shift.",
    link: { label: "See Impact", href: "/impact" },
    items: [
      { label: "Health", href: "/impact" },
      { label: "Education", href: "/impact" },
      { label: "Livelihoods", href: "/impact" },
      { label: "Emergency", href: "/impact" },
    ],
    image: "/assets/image5.JPG",
  },
  {
    label: "Our Genesis",
    description: "Rooted in Faith, Driven by Youth",
    descriptionText:
    "Kesho Angavu ('Brighter Tomorrow') is a youth-led initiative born from TUCASA MUHAS. Our purpose is to serve Tanzania's out-of-school youth, empowering them with skills, health, and hope so every young person can live a life of dignity, purpose, and self-reliance.",
    link: { label: "Our Story", href: "/leadership" },
    items: [
      { label: "Our Leadership", href: "/leadership" },
      { label: "FAQs", href: "/contact" },
      { label: "Contact Us", href: "/contact" },
    ],
    image: "/assets/image2.JPG",
  },
  {
    label: "Stories of Change",
    description: "Witness the Transformation",
    descriptionText:
    "Go beyond the headlines. Here, you'll find the latest narratives of hope, resilience, and impact straight from our Youth Center of Excellence. Follow the journeys, celebrate the milestones, and see how your support is writing a new story for Tanzania's youth.",
    link: { label: "View All", href: "/" },
    items: [
      { label: "News", href: "/" },
      { label: "Stories", href: "/" },
      { label: "Press", href: "/" },
      { label: "Blog", href: "/" },
    ],
    image: "/assets/image1.JPG",
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement>(null)

  const closeDropdown = useCallback(() => {
    setActiveDropdown(null)
    setHoveredItem(null)
  }, [])

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        closeDropdown()
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [closeDropdown])

  // Close dropdown on Escape
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeDropdown()
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [closeDropdown])

  function handleNavClick(label: string) {
    if (activeDropdown === label) {
      closeDropdown()
    } else {
      setActiveDropdown(label)
      const navItem = navItems.find((item) => item.label === label)
      if (navItem && navItem.items.length > 0) {
        setHoveredItem(navItem.items[0].label)
      }
    }
  }

  function handleLinkClick() {
    closeDropdown()
    setMobileMenuOpen(false)
  }

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center" onClick={handleLinkClick}>
            <img 
              src="/assets/angavu-logo.svg" 
              alt="kesho angavu logo" 
              className="h-10 w-10 md:h-12 md:w-12 text-primary" 
            />
            <span className="text-primary font-bold text-xs tracking-wider">KESHOANGAVU</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  onClick={() => handleNavClick(item.label)}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                    activeDropdown === item.label
                      ? "text-primary border-b-2 border-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  {activeDropdown === item.label ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button> */}
            {/* <Button variant="ghost" size="icon" className="hidden md:flex">
              <Globe className="h-5 w-5" />
              <span className="sr-only">Language</span>
            </Button> */}
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
            >
              <Link href="/give" onClick={handleLinkClick}>
                GIVE
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen)
                closeDropdown()
              }}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mega Menu Dropdown - positioned outside container for full width */}
      {activeDropdown && (
        <div className="hidden lg:block absolute left-0 right-0 top-full bg-background border-b border-border shadow-lg z-50">
          <div className="container mx-auto px-4 py-8">
            {navItems
              .filter((item) => item.label === activeDropdown)
              .map((item) => (
                <div key={item.label} className="grid grid-cols-3 gap-8">
                  {/* Left column - Description */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">{item.description}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.descriptionText}</p>
                    <Link
                      href={item.link.href}
                      className="inline-block text-primary font-semibold hover:underline"
                      onClick={handleLinkClick}
                    >
                      {item.link.label}
                    </Link>
                  </div>

                  {/* Middle column - Menu items */}
                  <div className="space-y-0">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className={`block px-4 py-3 text-sm font-medium transition-colors border-b border-border ${
                          hoveredItem === subItem.label
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover:bg-muted"
                        }`}
                        onMouseEnter={() => setHoveredItem(subItem.label)}
                        onClick={handleLinkClick}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>

                  {/* Right column - Image */}
                  <div className="relative h-[280px] rounded-lg overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.label}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border max-h-[80vh] overflow-y-auto bg-background">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => handleNavClick(item.label)}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-foreground"
                >
                  {item.label}
                  {activeDropdown === item.label ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                {activeDropdown === item.label && (
                  <div className="bg-muted/50 pb-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-6 py-2 text-sm text-muted-foreground hover:text-primary"
                        onClick={handleLinkClick}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
