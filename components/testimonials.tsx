import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"

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

export function Testimonials() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">What Leaders Say</span>
                    <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-balance">
                        Trusted by Education Experts
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Hear from education leaders and industry professionals about Jupiter Media's impact on students
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="p-6 md:p-8 hover:shadow-lg transition-shadow">
                            <div className="flex flex-col h-full">
                                <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden border border-[#ccc] mb-4">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                        sizes="150px"
                                    />
                                </div>

                                <Quote className="h-4 w-4 text-primary mb-4" />
                                <blockquote className="text-base md:text-lg leading-relaxed mb-6 flex-grow">
                                    {testimonial.quote}
                                </blockquote>
                                <div className="border-t pt-4">
                                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                                    <div className="text-sm text-muted-foreground mt-1">{testimonial.title}</div>
                                    <div className="text-xs text-muted-foreground mt-1">{testimonial.location}</div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
