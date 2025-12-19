import { ProductSection } from "@/components/product-section";

const videoGallery = [
    {
        title: "Jupiter Media Educast Episode 1",
        url: "https://www.youtube.com/embed/PM1Gsg4PMHs",
        caption: "Behind the scenes of Educast filming",
    },
    {
        title: "Educational Insights Program",
        url: "https://www.youtube.com/embed/n-V-qqEBv8I",
        caption: "Highlights from our educational programs",
    },
    {
        title: "Student Interaction Highlights",
        url: "https://www.youtube.com/embed/RmSYff44q1w",
        caption: "Interactions and Q&A sessions with students",
    },
    {
        title: "Media Coverage Event",
        url: "https://www.youtube.com/embed/gN1MV6Tmux4",
        caption: "Coverage of media events and interviews",
    },
];

export default function VideoGalleryPage() {
    return (
        <>
            <section className="py-20 px-6 md:px-16 text-center bg-primary/5">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                    Video Gallery
                </h1>
                <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
                    Jupiter Media Pvt. Ltd. brings you behind-the-scenes footage, interviews, educational programs, and media
                    events. Explore our videos to see the quality content we produce across television, social media, and digital
                    platforms.
                </p>
            </section>
            <main className="max-w-6xl mx-auto px-6 md:px-0 py-16">



                {/* Video Grid */}
                <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videoGallery.map((video, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-3 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="relative aspect-video w-full">
                                <iframe
                                    src={video.url}
                                    title={video.title}
                                    className="w-full h-full rounded-xl"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="p-4 bg-background border-t border-border">
                                <h3 className="text-lg font-semibold text-foreground">{video.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{video.caption}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
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
        </>
    );
}
