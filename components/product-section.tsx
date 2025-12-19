"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export const products = [
    {
        title: "Awasar at News 24 Television",
        image: "https://jupitermedianepal.com/upload/9c66ee10bc.jpg",
        link: "/single/awasar",
    },
    {
        title: "Jupiter Media Facebook Page",
        image: "https://jupitermedianepal.com/upload/a62d606151.png",
        link: "/single/jupiter-media-facebook-page",
    },
    {
        title: "Jupiter Television YouTube",
        image: "https://jupitermedianepal.com/upload/200007b991.png",
        link: "/single/jupiter-television-youtube",
    },
    {
        title: "Educast Nepal",
        image: "https://jupitermedianepal.com/upload/ca3fb0335c.png",
        link: "/single/educast-nepal",
    },
    {
        title: "Destination India Television Show",
        image: "https://jupitermedianepal.com/upload/57e8444ea3.jpg",
        link: "/single/destination-india-television-show",
    },
    {
        title: "Destination UK Television Show",
        image: "https://jupitermedianepal.com/upload/50a7a845e7.jpg",
        link: "/single/destination-uk-television-show",
    },
    {
        title: "Destination Australia Television Show",
        image: "https://jupitermedianepal.com/upload/868afa9312.jpg",
        link: "/single/destination-australia-television-show",
    },
]


export function ProductSection() {
    const [index, setIndex] = useState(0)
    const [itemsPerView, setItemsPerView] = useState(4)

    // Responsive items per view
    useEffect(() => {
        const updateItems = () => {
            if (window.innerWidth < 640) setItemsPerView(1)
            else if (window.innerWidth < 1024) setItemsPerView(2)
            else setItemsPerView(4)
        }

        updateItems()
        window.addEventListener("resize", updateItems)
        return () => window.removeEventListener("resize", updateItems)
    }, [])

    const maxIndex = Math.max(products.length - itemsPerView, 0)

    // Auto slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
        }, 5000)

        return () => clearInterval(interval)
    }, [maxIndex])

    const next = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    const prev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))

    return (
        <section className="py-16 md:py-24 bg-muted/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <span className="text-xs uppercase tracking-widest text-muted-foreground">
                            Our Programs
                        </span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">
                            Featured Media Productions
                        </h2>
                    </div>

                    {/* Controls */}
                    <div className="hidden md:flex gap-2">
                        <button
                            onClick={prev}
                            className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition"
                        >
                            ←
                        </button>
                        <button
                            onClick={next}
                            className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition"
                        >
                            →
                        </button>
                    </div>
                </div>

                {/* Slider */}
                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-700 ease-out"
                        style={{
                            transform: `translateX(-${(index * 100) / itemsPerView}%)`,
                        }}
                    >
                        {products.map((item, i) => (
                            <div
                                key={i}
                                className="px-3"
                                style={{ minWidth: `calc(100% / ${itemsPerView})` }}
                            >
                                <Link
                                    href={item.link}
                                    className="group block h-full"
                                >
                                    <div className="relative overflow-hidden rounded-xl border border-border bg-background shadow-sm hover:shadow-xl transition-all h-full">

                                        {/* Image */}
                                        <div className="relative h-60 w-full">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                        </div>

                                        {/* Title */}
                                        <div className="absolute bottom-0 p-4">
                                            <h3 className="text-base font-semibold text-white leading-snug">
                                                {item.title}
                                            </h3>
                                        </div>

                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
