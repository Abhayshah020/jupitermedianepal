const pageData = {
    title: "Educast Nepal",
    content: `With the grand success of more than 600 documentaries, programs and reports at different TV channels in the last decade, our valuable team have already helped national and international organizations and companies globally. We also provide an unparalleled range of media productions for NGOs, the corporate sector and digital Media outlets all around the world. Also, we are fully equipped with state of the art technology in digital media; broadcast-quality HD and full HD Video Cameras, Digital-SLR, Quadcopter, Professional Lighting Set-Up, TV Studio, Green Screen for Chroma, ENG Units, Crane, Jib, Editing Suits; equipped with desktop and Apple Macintosh systems, Training and Internship Facilities for Workshops &Seminar. Based on moral enrichment, we intend to provide you with the finest and most compelling work.`,
    button: {
        title: "Learn More",
        link: "https://www.educastnepal.com/",
    },
    imageSrc: "",
    imageAlt: "",
};

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
        </main>
    );
}
