const pageData = {
    title: "Destination India Television Show",
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
