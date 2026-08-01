"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Quote, Star } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export interface AnimatedTestimonialsProps {
  title?: string
  subtitle?: string
  badgeText?: string
  testimonials?: Testimonial[]
  autoRotateInterval?: number
  className?: string
}

export function AnimatedTestimonials({
  title = "Depoimentos de Clientes",
  subtitle = "Veja o que nossos clientes dizem sobre nossos serviços",
  badgeText = "Confiado por empresas",
  testimonials = [],
  autoRotateInterval = 6000,
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as any,
      },
    },
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [autoRotateInterval, testimonials.length])

  if (testimonials.length === 0) {
    return null
  }

  return (
    <div ref={sectionRef} className={`h-full flex flex-col ${className || ""}`}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex flex-col h-full"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="space-y-3">
            {badgeText && (
              <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-success/20 text-success border border-success/30">
                <Star className="mr-1.5 h-3.5 w-3.5 fill-success" />
                <span>{badgeText}</span>
              </div>
            )}

            <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
            <p className="text-sm text-white/70">{subtitle}</p>

            <div className="flex items-center gap-2 pt-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "w-8 bg-success" : "w-1.5 bg-muted-foreground/30"
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="relative flex-1 min-h-[280px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                x: activeIndex === index ? 0 : 50,
                scale: activeIndex === index ? 1 : 0.95,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ zIndex: activeIndex === index ? 10 : 0 }}
            >
              <div className="bg-gradient-to-br from-success/10 via-card/90 to-success/5 backdrop-blur-sm border-2 border-success/30 shadow-lg shadow-success/10 rounded-xl p-5 h-full flex flex-col hover:border-success/50 hover:shadow-success/20 transition-all dark:from-success/10 dark:to-success/5 dark:via-card/50">
                <div className="mb-3 flex gap-1">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-success text-success" />
                    ))}
                </div>

                <div className="relative mb-3 flex-1">
                  <Quote className="absolute -top-1 -left-1 h-6 w-6 text-success/30 rotate-180" />
                  <p className="relative z-10 text-sm leading-relaxed text-white pl-6">"{testimonial.content}"</p>
                </div>

                <Separator className="my-3 bg-success/30" />

                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-success/40 ring-2 ring-success/10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-success/20 text-success font-semibold">{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-sm text-white">{testimonial.name}</h4>
                    <p className="text-xs text-white/60">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="absolute -bottom-3 -left-3 h-12 w-12 rounded-xl bg-success/10 -z-10"></div>
          <div className="absolute -top-3 -right-3 h-12 w-12 rounded-xl bg-success/10 -z-10"></div>
        </motion.div>
      </motion.div>
    </div>
  )
}
