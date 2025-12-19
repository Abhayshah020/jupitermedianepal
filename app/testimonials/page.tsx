import Image from "next/image";

const testimonials = [
    {
        name: "Prakash Pandey",
        title: "Educational Consultancy Association of Nepal",
        location: "Kathmandu",
        image: '/media/testimonialPerson1.jpg',
        quote:
            "The Educast Nepal online news portal published by Jupiter Media Pvt Ltd can make a significant contribution to improving the education level of students seeking international education opportunities.",
    },
    {
        name: "Dr. Binod Yadav",
        title: "Chairman, Machhapuchchhre IB World School",
        image: '/media/testimonialPerson2.jpg',
        location: "Kathmandu",
        quote:
            "The Awasar educational television show organized by Jupiter Media Pvt Ltd can make a significant contribution to improving the education level of students and providing valuable insights about studying abroad.",
    },
    {
        name: "Rupesh Singh",
        title: "Managing Director, ECA",
        image: '/media/testimonialPerson3.jpg',
        location: "Sydney",
        quote:
            "Jupiter Media showcases the quality of education, educational institutions, beauty and diversity of Australia to a global audience. By highlighting various opportunities, they help students make informed decisions.",
    },
    {
        name: "Hari Karki",
        title: "Director, BIZZ Education",
        image: '/media/testimonialPerson4.jpg',
        location: "Thamel, Kathmandu",
        quote:
            "Jupiter Media Pvt Ltd Nepal has taken a positive step in developing educational television shows that can benefit viewers in Nepal and beyond. Their commitment to quality educational content is commendable.",
    },
]

export default function TestimonialsPage() {
    return (
        <main className="bg-background min-h-screen py-16 px-6 md:px-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-center text-foreground mb-12">
                Testimonials
            </h1>
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                {testimonials.map((t, idx) => (
                    <div
                        key={idx}
                        className="bg-primary/5 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
                    >
                        <Image
                            src={t.image}
                            width={120}
                            height={120}
                            alt={t.name}
                            className="rounded-full object-cover mb-4 w-32 h-32"
                        />
                        <h3 className="text-lg font-semibold text-foreground">{t.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{t.title}</p>
                        <p className="text-muted-foreground leading-relaxed">{t.quote}</p>
                        <p className="text-sm text-muted-foreground mt-3 underline">{t.location}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
