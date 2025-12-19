"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
    {
        title: "Discover Your Path to Study Abroad",
        description:
            "Expert insights, comprehensive guides, and the latest news to help Nepali students achieve their dreams of studying in prestigious universities worldwide.",
        image: "/media/1.jpeg",
        label: "Your Gateway to Global Education",
    },
    {
        title: "Edu-Cast: Your Authentic Education Program",
        description:
            "Watch our weekly programs on leading TV channels featuring educational news, updates, and opportunities from Australia, UK, India, and more countries.",
        image: "/media/14.jpeg",
        label: "Broadcasting on Leading TV Channels",
    },
    {
        title: "Awareness for Change",
        description:
            "Jupiter Media brings you quality content about international education, career opportunities, and success stories from students studying abroad.",
        image: "/media/5.jpeg",
        label: "Quality Educational Content",
    },
    {
        title: "Destination-Based Education Insights",
        description:
            "Explore country-specific education programs, visa guidance, and career pathways through our destination-focused shows and expert discussions.",
        image: "/media/8.jpeg",
        label: "Australia • UK • USA • Canada",
    },
    {
        title: "Connecting Students, Institutions & Opportunities",
        description:
            "We bridge students, universities, consultancies, and institutions through powerful media, digital platforms, and nationwide broadcasts.",
        image: "/media/11.jpeg",
        label: "A Trusted Education Media Platform",
    },
]


export function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    return (
        <section className="relative overflow-hidden bg-muted/30">
            <div className="relative">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`transition-opacity duration-700 ${index === currentSlide ? "opacity-100 relative z-10" : "opacity-0 absolute inset-0 pointer-events-none"
                            }`}
                    >
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="space-y-8">
                                    <div className="inline-block">
                                        <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                                            {slide.label}
                                        </span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tighter text-balance leading-[1]">
                                        {slide.title}
                                    </h2>
                                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{slide.description}</p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a className="flex items-center bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 rounded-md" href="/contact">
                                            Explore Opportunities
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </a>
                                    </div>
                                </div>
                                <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
                                    <img
                                        src={slide.image || "/placeholder.svg"}
                                        alt={slide.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="hidden md:block absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="hidden md:block absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background p-2 rounded-full transition-colors"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>

            </div>
            {/* Slide Indicators */}
            <div className="z-10 flex align-center pb-5 justify-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full cursor-pointer transition-all ${index === currentSlide ? "w-8 bg-primary" : "w-2 bg-primary/30"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}
