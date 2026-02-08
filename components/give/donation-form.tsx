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

const donationAmounts = [40, 100, 250, 1000]

export function DonationForm() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time")
  const [selectedAmount, setSelectedAmount] = useState(40)
  const [customAmount, setCustomAmount] = useState("")
  const [isHonorGift, setIsHonorGift] = useState(false)
  const [isChurchOrg, setIsChurchOrg] = useState(false)
  const [receiveEmails, setReceiveEmails] = useState(true)
  const [sameAddress, setSameAddress] = useState(true)

  const displayAmount = customAmount ? Number.parseFloat(customAmount) || 0 : selectedAmount

  return (
    <form className="space-y-6">
      {/* Frequency toggle */}
      <div className="flex rounded-lg overflow-hidden border border-border">
        <button
          type="button"
          onClick={() => setFrequency("one-time")}
          className={`flex-1 py-3 px-4 text-sm font-semibold transition-colors ${
            frequency === "one-time"
              ? "bg-primary text-primary-foreground"
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
              ? "bg-primary text-primary-foreground"
              : "bg-background text-foreground hover:bg-muted"
          }`}
        >
          MONTHLY
        </button>
      </div>

      {frequency === "monthly" && (
        <p className="text-sm text-primary bg-primary/10 p-3 rounded-lg">
          A monthly gift is the most effective way to support ADRA&apos;s work all year.
        </p>
      )}

      {/* Amount selection */}
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
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-foreground border-border hover:border-primary"
            }`}
          >
            ${amount.toLocaleString()}
          </button>
        ))}
      </div>

      {/* Custom amount */}
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
        <Input
          type="number"
          placeholder="OTHER"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          className="pl-7"
        />
      </div>

      {/* Comments */}
      <div>
        <Label htmlFor="comments">Comments (optional):</Label>
        <Input id="comments" placeholder="Add a comment..." className="mt-1" />
      </div>

      {/* Honor/Memorial gift */}
      <div className="flex items-center gap-2">
        <Checkbox
          id="honor"
          checked={isHonorGift}
          onCheckedChange={(checked) => setIsHonorGift(checked as boolean)}
        />
        <Label htmlFor="honor" className="text-sm cursor-pointer">
          This is an honor or memorial gift
        </Label>
      </div>

      {/* Personal Information */}
      <div className="space-y-4 pt-4 border-t border-border">
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
            id="churchOrg"
            checked={isChurchOrg}
            onCheckedChange={(checked) => setIsChurchOrg(checked as boolean)}
          />
          <Label htmlFor="churchOrg" className="text-sm cursor-pointer">
            Give as a church or organization
          </Label>
        </div>

        <div>
          <Label htmlFor="email">* Email:</Label>
          <Input id="email" type="email" required className="mt-1" />
        </div>

        <div className="flex items-start gap-2">
          <Checkbox
            id="emails"
            checked={receiveEmails}
            onCheckedChange={(checked) => setReceiveEmails(checked as boolean)}
            className="mt-0.5"
          />
          <Label htmlFor="emails" className="text-sm cursor-pointer">
            Yes, I would like to receive occasional emails from ADRA, in addition to my gift receipts.
          </Label>
        </div>
      </div>

      {/* Billing Address */}
      <div className="space-y-4 pt-4 border-t border-border">
        <h3 className="font-semibold text-primary">Your Billing Address</h3>
        
        <div>
          <Label htmlFor="billingAddress">* Billing Address:</Label>
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
            <Label htmlFor="state">* State:</Label>
            <Select>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select state" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="AL">Alabama</SelectItem>
                <SelectItem value="CA">California</SelectItem>
                <SelectItem value="FL">Florida</SelectItem>
                <SelectItem value="MD">Maryland</SelectItem>
                <SelectItem value="NY">New York</SelectItem>
                <SelectItem value="TX">Texas</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="zip">* ZIP Code:</Label>
            <Input id="zip" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="country">* Country:</Label>
            <Select defaultValue="US">
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="US">United States</SelectItem>
                <SelectItem value="CA">Canada</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox
            id="sameAddress"
            checked={sameAddress}
            onCheckedChange={(checked) => setSameAddress(checked as boolean)}
          />
          <Label htmlFor="sameAddress" className="text-sm cursor-pointer">
            The billing address above is the same as my personal address.
          </Label>
        </div>
      </div>

      {/* Payment section */}
      <div className="space-y-4 pt-4 border-t border-border">
        <h3 className="font-semibold text-primary">Your Payment Information</h3>
        
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold"
        >
          GIVE ${displayAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </Button>

        <p className="text-xs text-muted-foreground">
          Unrestricted donations contribute to ADRA&apos;s entire mission. For details, including
          matching gifts and compliance with state fundraising regulations, go to
          ADRA.org/fundraising. If you choose to restrict a gift, 90% of the gift is used for the
          purpose specified. Occasionally, we may suggest modifying the restriction.
        </p>
      </div>
    </form>
  )
}
