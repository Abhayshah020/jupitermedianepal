interface GalleryImage {
    src: string;
    alt?: string;
    caption?: string;
}

interface GallerySectionProps {
    title?: string;
    images: GalleryImage[];
    styleType?: "top" | "bottom"; // To differentiate top & bottom gallery
}

export default function GallerySection({
    title,
    images,
    styleType = "top",
}: GallerySectionProps) {
    // Determine Tailwind grid classes dynamically
    let gridColsClass = "grid-cols-1";
    if (images.length === 2) gridColsClass = "md:grid-cols-2";
    else if (images.length === 3) gridColsClass = "md:grid-cols-3";
    else if (images.length >= 4) gridColsClass = "md:grid-cols-4";

    return (
        <section className="max-w-6xl mx-auto px-6 md:px-0 my-12">
            {title && (
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                    {title}
                </h2>
            )}
            <div className={`grid ${gridColsClass} gap-4 md:gap-6`}>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`overflow-hidden rounded-xl shadow-lg transition-transform duration-300 ${styleType === "top"
                                ? "hover:scale-105"
                                : "border-2 border-[#ccc] hover:border-secondary rounded-2xl"
                            }`}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className={`w-full ${images.length === 1
                                    ? "h-96 md:h-[500px]"
                                    : images.length === 2
                                        ? "h-64 md:h-80"
                                        : images.length === 3
                                            ? "h-56 md:h-72"
                                            : "h-48 md:h-64"
                                } object-cover`}
                        />
                        {img.caption && (
                            <p className="text-center text-sm text-muted-foreground mt-2">
                                {img.caption}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
