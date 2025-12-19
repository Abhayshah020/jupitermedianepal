import Image from "next/image"
import Link from "next/link"

export const destinations = [
    {
        name: "Australia",
        image: "https://jupitermedianepal.com/img/abroad-icon/australia.png",
        link: "/destination/australia",
    },
    {
        name: "India",
        image: "https://jupitermedianepal.com/img/abroad-icon/india.png",
        link: "/destination/india",
    },
    {
        name: "UK",
        image: "https://jupitermedianepal.com/img/abroad-icon/ukk.png",
        link: "/destination/uk",
    },
    {
        name: "Bangladesh",
        image: "https://jupitermedianepal.com/img/abroad-icon/bangladesh.png",
        link: "/destination/bangladesh",
    },
    {
        name: "USA",
        image: "https://jupitermedianepal.com/img/abroad-icon/usa.png",
        link: "/destination/usa",
    },
    {
        name: "Canada",
        image: "https://jupitermedianepal.com/img/abroad-icon/canada.png",
        link: "/destination/canada",
    },
]


export function DestinationProjectsSection() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-12">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                        Global Reach
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">
                        Our Destination Projects
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="group rounded-xl border border-border bg-muted/30 p-8 text-center hover:bg-background hover:shadow-xl transition-all"
                        >
                            {/* Icon */}
                            <div className="mx-auto mb-6 relative h-24 w-24 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold">
                                Destination{" "}
                                <span className="text-primary">{item.name}</span>
                            </h3>

                            {/* Subtle underline */}
                            <div className="mt-3 h-0.5 w-12 bg-primary/40 mx-auto scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    )
}
