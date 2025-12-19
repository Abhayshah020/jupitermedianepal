"use client";

import { ProductSection } from "@/components/product-section";
import Image from "next/image";

const galleryImages = [
    {
        src: "/media/1.jpeg",
        alt: "Educast Program on TV",
        caption: "Educast Program - Nepal TV",
    },
    {
        src: "/media/2.jpeg",
        alt: "Jupiter Media Team",
        caption: "Our Team at Work",
    },
    {
        src: "/media/3.jpeg",
        alt: "AWSAR Program",
        caption: "AWSAR Program on News 24 Television",
    },
    {
        src: "/media/4.jpeg",
        alt: "Destination Australia Event",
        caption: "Destination Australia Event",
    },
    {
        src: "/media/5.jpeg",
        alt: "Student Interaction Program",
        caption: "Student Interaction & Workshops",
    },
    {
        src: "/media/6.jpeg",
        alt: "Filming Educast",
        caption: "Behind the Scenes - Educast Filming",
    },
    {
        src: "/media/7.jpeg",
        alt: "Event Coverage",
        caption: "Event Coverage - Jupiter Media",
    },
    {
        src: "/media/8.jpeg",
        alt: "Educational Program",
        caption: "Educational Program - Educast",
    },
    {
        src: "/media/9.jpeg",
        alt: "Workshop Session",
        caption: "Workshop Session with Students",
    },
    {
        src: "/media/10.jpeg",
        alt: "Media Production Setup",
        caption: "Media Production Setup",
    },
    {
        src: "/media/11.jpeg",
        alt: "Studio Recording",
        caption: "Studio Recording Session",
    },
    {
        src: "/media/12.jpeg",
        alt: "Camera Crew",
        caption: "Camera Crew at Work",
    },
    {
        src: "/media/13.jpeg",
        alt: "Interview Session",
        caption: "Interview Session for TV Program",
    },
    {
        src: "/media/14.jpeg",
        alt: "Educational Outreach",
        caption: "Educational Outreach Program",
    },
    {
        src: "/media/15.jpg",
        alt: "Team Discussion",
        caption: "Team Discussion and Planning",
    },
    {
        src: "/media/16.png",
        alt: "Behind the Scenes",
        caption: "Behind the Scenes - Media Shoot",
    },
    {
        src: "/media/17.jpg",
        alt: "Filming Location",
        caption: "Filming Location for Educast",
    },
];

export default function PhotoGalleryPage() {
    return (
        <main className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="py-20 px-6 md:px-16 text-center bg-primary/5">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                    Photo Gallery
                </h1>
                <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
                    Explore the moments captured from our educational programs, TV shows, workshops, and media events.
                    Jupiter Media Pvt. Ltd. is dedicated to delivering high-quality content for TV, social media, and global platforms.
                </p>
            </section>

            {/* Gallery Grid */}
            <section className="max-w-6xl mx-auto px-6 md:px-0 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {galleryImages.map((img, index) => (
                        <div
                            key={index}
                            className="group relative rounded-xl overflow-hidden border border-border shadow-lg cursor-pointer hover:scale-105 transition-transform"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width={400}
                                height={300}
                                quality={80}
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-transparent to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <p className="text-white text-sm">{img.caption}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section className="bg-primary/5 py-16 px-6 md:px-16 text-center rounded-xl max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                    About Jupiter Media
                </h2>
                <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Jupiter Media Pvt. Ltd. is a Nepal-based media production company delivering quality content for TV channels, documentaries,
                    talk shows, short films, and educational programs. With a team of highly skilled professionals and state-of-the-art equipment,
                    we bring stories to life and engage audiences worldwide.
                </p>
                <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-4">
                    Our programs, including Educast and AWSAR, reach millions of viewers, creating awareness and inspiring students globally.
                </p>
            </section>
            <ProductSection />
        </main>
    );
}
