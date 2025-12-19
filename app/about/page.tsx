import { ProductSection } from "@/components/product-section";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-primary/10 py-20 px-6 md:px-16 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                    About Jupiter Media
                </h1>
                <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
                    “Awareness for Change” – an independent Nepal-based production company delivering high-quality programs, documentaries, and media campaigns globally.
                </p>
            </section>

            {/* Founder Section */}
            <section className="py-16 md:py-24 max-w-6xl mx-auto px-6 md:px-0 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                        SUNIL ACHARYA <span className="text-primary">- Director</span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Jupiter Media represents a wide range of compelling content for TV channels, documentary films, talk shows, short films, tele-films, TV commercials, TV plays, and full-fledged media campaigns. We provide strategic PR advice and design full-fledged media campaigns that satisfy our clients completely.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        Mission: To create, execute, and deliver quality yet creative content that meets our diverse clients’ requirements while ensuring significant impact in achieving their goals.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        Vision: To create the leading media house partnering with clients to achieve their goals using traditional and digital media while providing quality services at a competitive price.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Image
                        src="/media/sunil.jpg" // Replace with actual image
                        width={400}
                        height={400}
                        alt="Sunil Acharya"
                        className="rounded-xl shadow-lg object-cover"
                    />
                </div>
            </section>

            {/* Achievements / Media Section */}
            <section className="bg-primary/5 py-16 md:py-24 px-6 md:px-16 text-center">
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
                    Why Jupiter Media?
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto text-left">
                    <div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">600+ Programs</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Successfully produced documentaries, programs, and reports for various TV channels in the last decade.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">Global Reach</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Worked with national and international organizations, NGOs, and digital media outlets worldwide.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">State-of-the-art Equipment</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Broadcast-quality HD/Full HD cameras, digital-DSLR, lighting, TV studio, green screen, editing suites, and more.
                        </p>
                    </div>
                </div>
            </section>
            <ProductSection />

        </main>
    );
}
