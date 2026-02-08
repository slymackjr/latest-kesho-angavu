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

const officeHours = [
  { day: "Sunday", hours: "Closed" },
  { day: "Monday", hours: "9:00am-5:30pm EST" },
  { day: "Tuesday", hours: "9:00am-5:30pm EST" },
  { day: "Wednesday", hours: "9:00am-5:30pm EST" },
  { day: "Thursday", hours: "9:00am-5:30pm EST" },
  { day: "Friday", hours: "Closed" },
  { day: "Saturday", hours: "Closed" },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-primary-foreground/80 mb-6">
              Have a question? Check out our Frequently Asked Questions.
            </p>
            <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              GO TO FAQ&apos;S
            </Button>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <p className="text-muted-foreground mb-8">
                  You are important to us and we welcome your support, questions,
                  and feedback. Thank you for your patience as we respond to a high
                  volume of messages and calls every day.
                </p>

                <div className="mb-8">
                  <h2 className="text-xl font-bold text-foreground mb-2">Call Us</h2>
                  <p className="text-muted-foreground">1.800.424.ADRA (2372)</p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground mb-2">Mail A Gift</h2>
                  <p className="text-muted-foreground">12501 Old Columbia Pike</p>
                  <p className="text-muted-foreground">Silver Spring, MD 20904.</p>
                </div>
              </div>

              {/* Right Column - Office Hours */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">Office Hours</h2>
                <div className="space-y-2">
                  {officeHours.map((item) => (
                    <div key={item.day} className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className={item.hours === "Closed" ? "text-muted-foreground" : "text-foreground"}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Email Form Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Email Us</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name*</Label>
                  <Input id="firstName" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name*</Label>
                  <Input id="lastName" required className="mt-1" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email*</Label>
                  <Input id="email" type="email" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" className="mt-1" />
                </div>
              </div>

              <div>
                <Label htmlFor="topic">Topic</Label>
                <Select>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="General Information" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Information</SelectItem>
                    <SelectItem value="donation">Donation Inquiry</SelectItem>
                    <SelectItem value="volunteer">Volunteering</SelectItem>
                    <SelectItem value="careers">Careers</SelectItem>
                    <SelectItem value="media">Media/Press</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={6}
                  placeholder="How can we help you?"
                  className="mt-1"
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6"
                >
                  SUBMIT
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
