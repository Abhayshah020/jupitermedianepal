"use client"

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Link from "next/link"

export function ContactCTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-6">
          <Mail className="h-8 w-8" />
        </div>

        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mb-4">
          Let’s Work Together
        </h3>

        {/* Description */}
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-[1.4]">
          Have a project in mind, want to collaborate, or looking for media and production services?
          Get in touch with Jupiter Media and let’s create impactful stories together.
        </p>

        {/* CTA Button */}
        <Link href="/contact">
          <Button
            variant="secondary"
            size="lg"
            className="px-10 py-6 rounded-full text-base font-medium"
          >
            Contact Us
          </Button>
        </Link>

      </div>
    </section>
  )
}
