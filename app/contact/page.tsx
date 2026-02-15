"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageCircle, Heart, Target, Users } from "lucide-react"
import Link from "next/link"

const officeHours = [
  { day: "Monday", hours: "9:00am - 5:00pm EAT" },
  { day: "Tuesday", hours: "9:00am - 5:00pm EAT" },
  { day: "Wednesday", hours: "9:00am - 5:00pm EAT" },
  { day: "Thursday", hours: "9:00am - 5:00pm EAT" },
  { day: "Friday", hours: "9:00am - 1:00pm EAT" },
  { day: "Saturday", hours: "Closed" },
  { day: "Sunday", hours: "Closed" },
]

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["Daniel: +255 757 346 979", "Ezekiel: +255 755 059 155"],
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@keshoangavu.org"],
    action: "Send Email",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["P.O. Box 65007", "Dar es Salaam, Tanzania"],
    action: "Get Directions",
  },
]

const faqItems = [
  {
    question: "How can I become a mentor?",
    answer: "We're always looking for passionate individuals to mentor our youth. Visit our Get Involved page or contact us directly to start the process.",
  },
  {
    question: "Where do my donations go?",
    answer: "100% of donations directly support our youth empowerment programs including skills training, health education, and mentorship initiatives.",
  },
  {
    question: "Can I volunteer if I'm not in Tanzania?",
    answer: "Yes! We welcome virtual volunteers for skills training, mentorship, and program support. Contact us to discuss how you can contribute remotely.",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#303F9F] text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-xs font-semibold mb-4">
              GET IN TOUCH
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">We'd Love to Hear From You</h1>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Whether you have questions about our programs, want to support our mission, 
              or are ready to get involved—reach out to us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#303F9F] transition-colors"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                SEND A MESSAGE
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#303F9F] transition-colors"
                onClick={() => document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                VIEW FAQS
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Methods Cards */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method) => (
                <div key={method.title} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-[#303F9F]/10 rounded-lg flex items-center justify-center mb-4">
                    <method.icon className="h-6 w-6 text-[#303F9F]" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h2>
                  <div className="space-y-1 mb-4">
                    {method.details.map((detail) => (
                      <p key={detail} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                  <Button 
                    variant="link" 
                    className="text-[#303F9F] p-0 hover:underline"
                    onClick={() => {
                      if (method.title === "Call Us") {
                        window.location.href = "tel:+255757346979"
                      } else if (method.title === "Email Us") {
                        window.location.href = "mailto:info@keshoangavu.org"
                      } else if (method.title === "Visit Us") {
                        window.open("https://maps.google.com/?q=Dar+es+Salaam+Tanzania", "_blank")
                      }
                    }}
                  >
                    {method.action} →
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info & Hours Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Message */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Connect With Us</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  You are important to us. Whether you're a potential mentor, partner, donor, 
                  or someone looking to learn more about our work, we welcome your questions 
                  and feedback. Our team strives to respond to all inquiries within 2-3 business days.
                </p>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6">
                  <div className="flex items-start gap-3 mb-4">
                    <Heart className="h-5 w-5 text-[#303F9F] shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Want to become a mentor?</span> We're especially looking for individuals with skills in business, technology, health, and education.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="h-5 w-5 text-[#303F9F] shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Interested in partnering?</span> Organizations and churches can collaborate with us to sponsor training cohorts or provide internship opportunities.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Link href="/get-involved" className="text-[#303F9F] font-medium hover:underline inline-flex items-center gap-1">
                    Learn About Mentorship
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Right Column - Office Hours */}
              <div>
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-5 w-5 text-[#303F9F]" />
                    <h2 className="text-xl font-bold text-gray-900">Office Hours (EAT)</h2>
                  </div>
                  <div className="space-y-2">
                    {officeHours.map((item) => (
                      <div key={item.day} className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-gray-600">{item.day}</span>
                        <span className={item.hours === "Closed" ? "text-gray-400" : "text-gray-900 font-medium"}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    * East Africa Time (EAT) — UTC+3
                  </p>
                </div>
                
                <div className="mt-4 bg-[#303F9F]/5 p-4 rounded-lg border border-[#303F9F]/10">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Need immediate assistance?</span> For urgent matters, please call our program coordinators directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Email Form Section */}
        <section id="contact-form" className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Send Us a Message</h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-md">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Smith" required className="mt-1" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+255..." className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="topic">Topic *</Label>
                  <Select required>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Information</SelectItem>
                      <SelectItem value="mentorship">Mentorship Inquiry</SelectItem>
                      <SelectItem value="volunteer">Volunteering</SelectItem>
                      <SelectItem value="donation">Donation Support</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="program">Program Information</SelectItem>
                      <SelectItem value="media">Media/Press</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us how we can help..."
                    required
                    className="mt-1"
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-[#303F9F] hover:bg-[#303F9F]/90 text-white px-12 py-6 rounded-lg font-semibold"
                  >
                    SEND MESSAGE
                  </Button>
                </div>
                
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to receive communications from Kesho Angavu. 
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-8">
              <div className="inline-block px-3 py-1 bg-[#303F9F]/10 rounded-full text-[#303F9F] text-xs font-semibold mb-3">
                FREQUENTLY ASKED QUESTIONS
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Quick Answers</h2>
              <p className="text-gray-600">
                Find answers to common questions about our work and how you can get involved.
              </p>
            </div>
            
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                    <MessageCircle className="h-4 w-4 text-[#303F9F] shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-sm text-gray-600 pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-3">Still have questions?</p>
              <Button 
                variant="outline" 
                className="border-[#303F9F] text-[#303F9F] hover:bg-[#303F9F] hover:text-white transition-colors"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us Directly
              </Button>
            </div>
          </div>
        </section>

        {/* Map/Location Section (Optional) */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-gray-100 h-[300px] rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-[#303F9F] mx-auto mb-2" />
                  <p className="text-gray-700 font-medium">Kesho Angavu — Dar es Salaam, Tanzania</p>
                  <p className="text-sm text-gray-500">P.O. Box 65007</p>
                  <Button 
                    variant="link" 
                    className="text-[#303F9F] mt-2"
                    onClick={() => window.open("https://maps.google.com/?q=Dar+es+Salaam+Tanzania", "_blank")}
                  >
                    Get Directions →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
