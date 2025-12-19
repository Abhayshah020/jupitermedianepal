import GallerySection from "@/components/internal-gallery-section";

const pageData = {
    title: "Awasar at News 24 Television",
    content: `Jupiter Media is a production house dedicated to creating informative and engaging multimedia content 
  in the areas of education, development, social services, and more. Our mission is "Awareness for Change", 
  and we strive to provide up-to-date information and impactful productions for Nepalese students and audiences.`,
    button: {
        title: "Learn More",
        link: "/about",
    },
    imageSrc: "",
    imageAlt: "",
};
const bottomImages = [
    { src: "/destinationImages/aus-3.jpg", alt: "Australia Event 5" },
];
const topImages = [
    { src: "/destinationImages/aus-2.jpeg", alt: "Australia Event 2" },
];


export default function IntroPage() {
    return (
        <main className="bg-background flex flex-col items-center py-20">
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12">
                {/* Image */}
                {pageData.imageSrc && (<div className="flex-shrink-0 w-full md:w-1/2">
                    <img
                        src={pageData.imageSrc}
                        alt={pageData.imageAlt}
                        className="rounded-xl shadow-xl w-full h-auto object-cover"
                    />
                </div>)}

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                        {pageData.title}
                    </h1>
                    <GallerySection title="Featured Moments" images={topImages} styleType="top" />


                    <section className="max-w-6xl mx-auto mb-12">
                        <h3 className="text-2xl font-semibold text-foreground mb-6">Broadcasting & Telecast Schedule</h3>

                        <div className="overflow-x-auto rounded-xl shadow-lg border border-border">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-primary/10">
                                    <tr>
                                        <th className="px-6 py-3 text-muted-foreground font-medium">Television</th>
                                        <th className="px-6 py-3 text-muted-foreground font-medium">Program</th>
                                        <th className="px-6 py-3 text-muted-foreground font-medium">Telecast Time</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    <tr className="hover:bg-primary/5">
                                        <td className="px-6 py-3">News 24 Television</td>
                                        <td className="px-6 py-3">AWASAR</td>
                                        <td className="px-6 py-3">Saturday 9:30 PM & Sunday 9:30 AM</td>
                                    </tr>
                                    <tr className="hover:bg-primary/5">
                                        <td className="px-6 py-3">News 24 Television</td>
                                        <td className="px-6 py-3">Destination Australia</td>
                                        <td className="px-6 py-3">Thursday 06:30 PM & Friday 12:30 PM</td>
                                    </tr>
                                    <tr className="hover:bg-primary/5">
                                        <td className="px-6 py-3">Educastnepal.com</td>
                                        <td className="px-6 py-3">Branding Ad</td>
                                        <td className="px-6 py-3">3 Months</td>
                                    </tr>
                                    <tr className="hover:bg-primary/5">
                                        <td className="px-6 py-3">Jupiter Television YouTube</td>
                                        <td className="px-6 py-3">Video Display</td>
                                        <td className="px-6 py-3">360 days</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        {pageData.content}
                    </p>
                    {pageData.button && (
                        <a
                            href={pageData.button.link}
                            className="mt-4 px-8 py-3 bg-primary text-white hover:bg-primary/90 transition"
                        >
                            {pageData.button.title}
                        </a>
                    )}
                </div>
            </div>
            <GallerySection title="More Highlights" images={bottomImages} styleType="bottom" />

            <section className="text-center max-w-4xl mx-auto mb-12">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Want to Know More?</h3>
                <p className="text-muted-foreground mb-6">
                    Contact Jupiter Media to get more information about DESTINATION AUSTRALIA and our media programs.
                </p>
                <a className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-5 rounded-md" href="/contact">Contact Us</a>
            </section>
        </main>
    );
}
