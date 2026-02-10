"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"

const panels = [
  {
    image: "/assets/image6.JPG",
    title: "Your Support, Their Breakthrough",
    text:
      "Every contribution creates a ripple effect of change. You're investing in a young person's journey.",
    button: "DONATE NOW",
    link: "/give",
  },
  {
    image: "/assets/image7.JPG",
    title: "See the Future They're Building",
    text: "And be part of their story.",
    button: "LEARN MORE",
    link: "/stories",
  },
  {
    image: "/assets/image8.JPG",
    title: "Change From Within",
    text: "Empowerment that starts here, in Tanzania.",
    button: "OUR WORK",
    link: "/programs",
  },
]

export function HeroSection() {
  const [active, setActive] = useState(0)

  return (
    <section
      className="h-[460px] md:h-[520px] overflow-hidden"
      onMouseLeave={() => setActive(0)} // fallback to default
    >
      <div className="flex h-full">

        {panels.map((panel, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)} // mobile
            animate={{
              flex: active === i ? 3 : 1,
            }}
            transition={{ duration: 0.35 }}
            className="relative cursor-pointer"
          >
            {/* IMAGE */}
            <motion.div
              animate={{ scale: active === i ? 1.05 : 1 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0"
            >
              <Image
                src={panel.image}
                alt=""
                fill
                className="object-cover"
                priority={i === 0}
              />
            </motion.div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white max-w-xl">
              <h2 className="text-xl md:text-3xl font-bold mb-2">
                {panel.title}
              </h2>

              {active === i && (
                <>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm md:text-base mb-4 text-white/90"
                  >
                    {panel.text}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <Button asChild>
                      <Link href={panel.link}>{panel.button}</Link>
                    </Button>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
