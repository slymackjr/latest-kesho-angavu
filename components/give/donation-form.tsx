"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Heart, Target, Users, Sparkles } from "lucide-react"

const donationAmounts = [25000, 50000, 100000, 250000] // TZS amounts

export function DonationForm() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time")
  const [selectedAmount, setSelectedAmount] = useState(25000)
  const [customAmount, setCustomAmount] = useState("")
  const [isHonorGift, setIsHonorGift] = useState(false)
  const [isOrganizationGift, setIsOrganizationGift] = useState(false)
  const [receiveUpdates, setReceiveUpdates] = useState(true)
  const [giftDesignation, setGiftDesignation] = useState("general")
  const [currency, setCurrency] = useState<"TZS" | "USD">("TZS")

  const displayAmount = customAmount ? Number.parseFloat(customAmount) || 0 : selectedAmount

  return (
    <form className="space-y-6">
      {/* Currency toggle (TZS/USD for international donors) */}
      <div className="flex justify-end">
        <div className="flex rounded-lg overflow-hidden border border-border w-fit">
          <button
            type="button"
            onClick={() => setCurrency("TZS")}
            className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
              currency === "TZS"
                ? "bg-[#303F9F] text-white"
                : "bg-background text-foreground hover:bg-muted"
            }`}
          >
            TZS
          </button>
          <button
            type="button"
            onClick={() => setCurrency("USD")}
            className={`px-3 py-1.5 text-xs font-semibold transition-colors ${
              currency === "USD"
                ? "bg-[#303F9F] text-white"
                : "bg-background text-foreground hover:bg-muted"
            }`}
          >
            USD
          </button>
        </div>
      </div>

      {/* Frequency toggle */}
      <div className="flex rounded-lg overflow-hidden border border-border">
        <button
          type="button"
          onClick={() => setFrequency("one-time")}
          className={`flex-1 py-3 px-4 text-sm font-semibold transition-colors ${
            frequency === "one-time"
              ? "bg-[#303F9F] text-white"
              : "bg-background text-foreground hover:bg-muted"
          }`}
        >
          ONE TIME
        </button>
        <button
          type="button"
          onClick={() => setFrequency("monthly")}
          className={`flex-1 py-3 px-4 text-sm font-semibold transition-colors ${
            frequency === "monthly"
              ? "bg-[#303F9F] text-white"
              : "bg-background text-foreground hover:bg-muted"
          }`}
        >
          MONTHLY
        </button>
      </div>

      {frequency === "monthly" && (
        <div className="bg-[#303F9F]/10 p-4 rounded-lg border border-[#303F9F]/20">
          <p className="text-sm text-[#303F9F] font-medium flex items-center gap-2">
            <Heart className="h-4 w-4" />
            A monthly gift provides sustainable, long-term support for a youth's entire journey through our programs.
          </p>
        </div>
      )}

      {/* Amount selection - TZS */}
      {currency === "TZS" && (
        <>
          <div className="grid grid-cols-2 gap-3">
            {donationAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => {
                  setSelectedAmount(amount)
                  setCustomAmount("")
                }}
                className={`py-3 px-4 rounded-lg text-sm font-semibold border transition-colors ${
                  selectedAmount === amount && !customAmount
                    ? "bg-[#303F9F] text-white border-[#303F9F]"
                    : "bg-background text-foreground border-border hover:border-[#303F9F]"
                }`}
              >
                {amount.toLocaleString()} TZS
              </button>
            ))}
          </div>

          {/* Custom amount TZS */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">TZS</span>
            <Input
              type="number"
              placeholder="OTHER AMOUNT"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="pl-14"
            />
          </div>
        </>
      )}

      {/* Amount selection - USD (for international donors) */}
      {currency === "USD" && (
        <>
          <div className="grid grid-cols-2 gap-3">
            {donationAmounts.map((amount) => {
              const usdAmount = Math.round(amount / 2500) // Approximate conversion
              return (
                <button
                  key={amount}
                  type="button"
                  onClick={() => {
                    setSelectedAmount(amount)
                    setCustomAmount("")
                  }}
                  className={`py-3 px-4 rounded-lg text-sm font-semibold border transition-colors ${
                    selectedAmount === amount && !customAmount
                      ? "bg-[#303F9F] text-white border-[#303F9F]"
                      : "bg-background text-foreground border-border hover:border-[#303F9F]"
                  }`}
                >
                  ${usdAmount} USD
                </button>
              )
            })}
          </div>

          {/* Custom amount USD */}
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input
              type="number"
              placeholder="OTHER AMOUNT"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="pl-7"
            />
          </div>
        </>
      )}

      {/* Gift Designation */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Direct your gift to:</Label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setGiftDesignation("general")}
            className={`p-3 rounded-lg border text-left transition-colors ${
              giftDesignation === "general"
                ? "bg-[#303F9F]/10 border-[#303F9F]"
                : "bg-background border-border hover:border-[#303F9F]/50"
            }`}
          >
            <div className="flex items-start gap-2">
              <Heart className={`h-4 w-4 mt-0.5 ${giftDesignation === "general" ? "text-[#303F9F]" : "text-muted-foreground"}`} />
              <div>
                <p className="text-sm font-medium">Where Most Needed</p>
                <p className="text-xs text-muted-foreground">Support our greatest impact areas</p>
              </div>
            </div>
          </button>
          
          <button
            type="button"
            onClick={() => setGiftDesignation("entrepreneurship")}
            className={`p-3 rounded-lg border text-left transition-colors ${
              giftDesignation === "entrepreneurship"
                ? "bg-[#303F9F]/10 border-[#303F9F]"
                : "bg-background border-border hover:border-[#303F9F]/50"
            }`}
          >
            <div className="flex items-start gap-2">
              <Target className={`h-4 w-4 mt-0.5 ${giftDesignation === "entrepreneurship" ? "text-[#303F9F]" : "text-muted-foreground"}`} />
              <div>
                <p className="text-sm font-medium">Entrepreneurship</p>
                <p className="text-xs text-muted-foreground">Skills training & business startup</p>
              </div>
            </div>
          </button>
          
          <button
            type="button"
            onClick={() => setGiftDesignation("digital")}
            className={`p-3 rounded-lg border text-left transition-colors ${
              giftDesignation === "digital"
                ? "bg-[#303F9F]/10 border-[#303F9F]"
                : "bg-background border-border hover:border-[#303F9F]/50"
            }`}
          >
            <div className="flex items-start gap-2">
              <Sparkles className={`h-4 w-4 mt-0.5 ${giftDesignation === "digital" ? "text-[#303F9F]" : "text-muted-foreground"}`} />
              <div>
                <p className="text-sm font-medium">Digital Empowerment</p>
                <p className="text-xs text-muted-foreground">Tech skills & digital literacy</p>
              </div>
            </div>
          </button>
          
          <button
            type="button"
            onClick={() => setGiftDesignation("mentorship")}
            className={`p-3 rounded-lg border text-left transition-colors ${
              giftDesignation === "mentorship"
                ? "bg-[#303F9F]/10 border-[#303F9F]"
                : "bg-background border-border hover:border-[#303F9F]/50"
            }`}
          >
            <div className="flex items-start gap-2">
              <Users className={`h-4 w-4 mt-0.5 ${giftDesignation === "mentorship" ? "text-[#303F9F]" : "text-muted-foreground"}`} />
              <div>
                <p className="text-sm font-medium">Mentorship</p>
                <p className="text-xs text-muted-foreground">One-on-one guidance & leadership</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Honor/Memorial gift */}
      <div className="flex items-center gap-2 pt-2">
        <Checkbox
          id="honor"
          checked={isHonorGift}
          onCheckedChange={(checked) => setIsHonorGift(checked as boolean)}
        />
        <Label htmlFor="honor" className="text-sm cursor-pointer">
          This is an honor or memorial gift
        </Label>
      </div>

      {/* Comments */}
      <div>
        <Label htmlFor="comments">Message (optional):</Label>
        <Input 
          id="comments" 
          placeholder="Add a message or dedication..." 
          className="mt-1" 
        />
      </div>

      {/* Personal Information */}
      <div className="space-y-4 pt-4 border-t border-border">
        <h3 className="font-semibold text-[#303F9F]">Your Information</h3>
        
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="firstName">* First Name:</Label>
            <Input id="firstName" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="lastName">* Last Name:</Label>
            <Input id="lastName" required className="mt-1" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox
            id="organizationGift"
            checked={isOrganizationGift}
            onCheckedChange={(checked) => setIsOrganizationGift(checked as boolean)}
          />
          <Label htmlFor="organizationGift" className="text-sm cursor-pointer">
            Give as a church, organization, or corporate partner
          </Label>
        </div>

        <div>
          <Label htmlFor="email">* Email:</Label>
          <Input id="email" type="email" required className="mt-1" />
        </div>

        <div>
          <Label htmlFor="phone">Phone (optional):</Label>
          <Input id="phone" type="tel" placeholder="+255..." className="mt-1" />
        </div>

        <div className="flex items-start gap-2">
          <Checkbox
            id="updates"
            checked={receiveUpdates}
            onCheckedChange={(checked) => setReceiveUpdates(checked as boolean)}
            className="mt-0.5"
          />
          <Label htmlFor="updates" className="text-sm cursor-pointer">
            Yes, I would like to receive stories of impact and updates from Kesho Angavu.
          </Label>
        </div>
      </div>

      {/* Billing Address - Simplified for Tanzania context */}
      <div className="space-y-4 pt-4 border-t border-border">
        <h3 className="font-semibold text-[#303F9F]">Billing Address</h3>
        
        <div>
          <Label htmlFor="billingAddress">* Street Address:</Label>
          <Input id="billingAddress" required className="mt-1" />
        </div>

        <div>
          <Label htmlFor="apt">Apt/Unit/Suite (Optional):</Label>
          <Input id="apt" className="mt-1" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="city">* City:</Label>
            <Input id="city" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="region">* Region:</Label>
            <Select>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dar">Dar es Salaam</SelectItem>
                <SelectItem value="arusha">Arusha</SelectItem>
                <SelectItem value="mbeya">Mbeya</SelectItem>
                <SelectItem value="mwanza">Mwanza</SelectItem>
                <SelectItem value="dodoma">Dodoma</SelectItem>
                <SelectItem value="zanzibar">Zanzibar</SelectItem>
                <SelectItem value="other">Other Region</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="postal">* Postal Code:</Label>
            <Input id="postal" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="country">* Country:</Label>
            <Select defaultValue="TZ">
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="TZ">Tanzania</SelectItem>
                <SelectItem value="US">United States</SelectItem>
                <SelectItem value="UK">United Kingdom</SelectItem>
                <SelectItem value="CA">Canada</SelectItem>
                <SelectItem value="KE">Kenya</SelectItem>
                <SelectItem value="UG">Uganda</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Payment section */}
      <div className="space-y-4 pt-4 border-t border-border">
        <h3 className="font-semibold text-[#303F9F]">Payment Information</h3>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-700 mb-2">
            Secure payment processing will be completed on the next screen.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>✓ SSL Encrypted</span>
            <span>•</span>
            <span>✓ Secured by</span>
            <span className="font-semibold">Selcom</span>
          </div>
        </div>
        
        <Button
          type="submit"
          className="w-full bg-[#303F9F] hover:bg-[#303F9F]/90 text-white py-6 text-lg font-semibold"
        >
          {currency === "TZS" 
            ? `GIVE ${displayAmount.toLocaleString()} TZS`
            : `GIVE $${displayAmount.toLocaleString()} USD`
          }
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Your gift empowers out-of-school youth in Tanzania with skills, mentorship, and opportunities.
          Kesho Angavu is an initiative of TUCASA MUHAS. All donations are used to support our holistic 
          youth empowerment programs in Dar es Salaam and beyond.
        </p>
        
        <div className="flex justify-center gap-4 pt-2">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Heart className="h-3 w-3" />
            <span>100% of proceeds directly support youth</span>
          </div>
        </div>
      </div>
    </form>
  )
}