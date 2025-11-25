'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <motion.div 
          className="flex flex-col justify-center gap-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="h1-bold">
            Host your events, connect and learn something new, on <span className="grad">Eventlio</span>
          </h1>
          <p className="p-regular-20 md:p-regular-24">
            Get tickets to learn helpful tips from a variety of instructors in world-class companies with our global community or be the host yourself :)
          </p>
          <Button size="lg" asChild className="button w-full sm:w-fit hover:scale-105 transition-transform duration-300">
            <Link href='#events'>
              Explore Now
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image 
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[85vh] object-contain object-center 2xl:max-h-[65vh]"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
