const pageData = {
    title: "Jupiter Television YouTube",
    content: `Awareness for Change” with that slogan Jupiter Media is representing an independent Nepal Based Production Company. Broadcast Quality Programs for TV Channels, Documentary Films, Talk Shows, Investigative Reports, Short Films, Tele-Films, TV Commercials, TV Plays and Full Fledge Media Campaigns. Jupiter Media is offering wide-range of compelling content that gratifies the global audience.

We specialize in providing clients with strategic PR advice that has a significant and measurable impact on their business. Furthermore, we also specialize in designing and producing full-fledged media campaigns by using all the tools and techniques to satisfy our valued clients completely. We help entrepreneurs expand their markets by integrating new technologies with traditional and digital media. With the availability of appropriate resources and manpower, we are certain to accomplish the target we’ve undertaken and we will not leave any stone unturned.`,
    button: {
        title: "Learn More",
        link: "https://www.youtube.com/@JupiterTelevisionNepal/videos",
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
