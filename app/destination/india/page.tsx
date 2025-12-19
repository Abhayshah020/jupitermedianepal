import Image from "next/image";
import { Button } from "@/components/ui/button";
import GallerySection from "@/components/internal-gallery-section";
import { Link } from "lucide-react";

const topImages = [
    { src: "/destinationImages/in-1.jpg", alt: "India Event 1" },
    { src: "/destinationImages/in-4.jpg", alt: "India Event 2" },
];

const bottomImages = [
    { src: "/destinationImages/in-5.jpg", alt: "India Event 5" },
    { src: "/destinationImages/in-6.jpg", alt: "India Event 5" },
];
const bottomImages2 = [
    { src: "/destinationImages/in-7.jpg", alt: "India Event 5" },
    { src: "/destinationImages/in-8.jpg", alt: "India Event 5" },
];

const bottomImages3 = [
    { src: "/destinationImages/in-2.jpg", alt: "India Event 2" },
    { src: "/destinationImages/in-3.jpg", alt: "India Event 2" },
];

export const broadcastImages = [
    { src: "/destinationImages/news-24.jpeg", alt: "News 24 Television", title: "Broadcasted On" },
    { src: "/media/logo.png", alt: "Jupiter Television YouTube", title: "Presented by" },
];

export default function IndiaPage() {
    return (
        <main className="bg-background min-h-screen px-6 md:px-16 py-12">
            {/* Hero Section */}
            <section className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg mb-12">
                <Image src="/destinationImages/bg-india.jpg" alt="Australia" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">Destination INDIA</h1>
                </div>
            </section>


            {/* Featuring */}
            <section className="max-w-4xl mx-auto mb-12 text-center">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Featuring from INDIA</h2>
                <p className="text-muted-foreground leading-relaxed">
                    A Production & Presentation of Jupiter Media Pvt. Ltd., bringing informative, educational, and promotional content for Nepalese students and institutions.
                </p>
            </section>
            <section className="px-6 max-w-5xl mx-auto">
                <div className="flex flex-wrap justify-center gap-6">
                    {broadcastImages.map((image, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                            {image.title && <p className="text-l font-medium text-foreground">{image.title}</p>}
                            <div
                                className="flex items-center justify-center bg-background border border-border rounded-lg p-2 shadow-sm"
                                style={{ width: 200, height: 200 }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <GallerySection title="Featured Moments" images={topImages} styleType="top" />

            {/* Broadcasting Section */}
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
                                <td className="px-6 py-3">Destination India</td>
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


            {/* About Jupiter Media */}
            <section className="max-w-4xl mx-auto mb-12">
                <h3 className="text-2xl font-semibold text-foreground mb-4">About Jupiter Media Pvt. Ltd.</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                    Jupiter Media is a production house having its own specific slogan “Awareness for change”.  Along with informative shows Jupiter Media also functions strong multimedia creations. We produce in the disciplinary areas of education, development, social services, environment and education. Team of Jupiter Media is experienced as well as expertise in the respected fields. Our main focus is the education field where our team provides the most up-to-date news and information in Nepal and abroad to better inform Nepalese students.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    For the commercial campaign we make documentaries, profiles, promotional videos, and TVC’s, which we air on Nepal television, News24 television, Prime Television and Mountain Television.  Based on moral enrichment, we intend to provide you with the finest and most compelling work.  With the availability of appropriate resources and manpower, we are certain to accomplish the target we’ve undertaken.
                </p>
            </section>

            {/* Background */}
            <section className="max-w-6xl mx-auto mb-12 space-y-6">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Background of “DESTINATION INDIA”</h3>
                <p className="text-muted-foreground leading-relaxed">
                    Jupiter Media, in joint collaboration with your institution is pleased to announce that we will be continuing our initiative of DESTINATION INDIA after the grand success of Different Study destination Mission Shows in AUSTRALIA, USA, UK, India, China, Bangladesh, Japan etc. The initiative is dedicated to showcasing abroad study destinations, education system and student life in the continent with a fresh new perspective. The vision is to acquaint Nepali students and their parents with adequate information and enable them to make informed decisions regarding their career and university choices.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    While the program provides valuable information to students and parents, it opens up a window of opportunity to colleges and universities to reach out to prospective students from Nepal, in their local language. The series provides each partner with two dedicated prime time 10 minutes programs in the leading private TV Channel of Nepal to be followed by returns providing an outstanding value for money to the partners.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    In addition, the programs are also available on You Tube channel and other popular social mediums for interested students or their parents to watch it at their leisure. This we believe would also bring morevalue to our partners in the long run as the content in local language will facilitate students, especially their parents who might not be completely comfortable in English language to know more about the partner colleges or universities.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    Jupiter Media Pvt. Ltd. completed different visionary project in AUSTRALIA, USA, UK, India, China, Bangladesh, Japan successfully, like wise ”DESTINATION INDIA” TV SERIES has to be better, and bigger. Motivated from our success and learning from our experience, we hope to make this episode of ”DESTINATION INDIA” TV SERIES more interesting and informative for our audience while we provide even better reach to our partners to provide good return on marketing investment.
                </p>
            </section>

            {/* Why Australia Education */}
            <section className="max-w-6xl mx-auto mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Why INDIA Education?</h3>
                <p className="text-muted-foreground leading-relaxed">
                    The INDIA and its universities have an undisputed reputation for academic excellence and quality with thousands of courses available for students, as well as being an ideal destination for many decades for over a million international students from all over the world.There are a variety of reasons why you should consider studying in the INDIA. Some of these reasons might be exclusively academic for you, but in addition to the high-quality education, you will gain a lot of value from this one-of-a-kind experience, if you choose to study in the INDIA.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    The INDIA is one of the most popular countries to travel to for the purpose of earning an education. Generations of international students have come to the INDIA for their education, which means that Indian universities have decades of experience in working with international students. In other words, you’ll get the red carpet treatment from the time you start applying until you walk across the stage for your degree.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    Every university has an international student society that will help you become adjusted to life in the India and connect you with other international students.
                </p>
            </section>

            {/* Perception of Parents */}
            <section className="max-w-6xl mx-auto mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Perception of Nepalese Parents</h3>
                <p className="text-muted-foreground leading-relaxed">
                    Nepalese parents are still not comfortable about Education in Nepal. Most importantly, situation of Nepal like strike, sudden interruption on regular classes due to various factors in medical education, parents have mentality to send their children abroad for further education. One of the choices for them is India. So, India can be one of the good destinations for Nepalese students if we explore the destination with good package of information.
                </p>
                {/* Perception of Parents */}
                <h3 className="text-muted-foreground leading-relaxed font-semibold">Parent Education through Media Network</h3>
                <p className="text-muted-foreground leading-relaxed">
                    In recent days, various institutions are visiting Nepal for the promotion of their universities / Colleges here in Nepal. It is obviously biggest decision of life to leave a country for education in abroad.  This is in fact the prime concern of parents. In this situation, visualizing real life of AUSTRALIA, University, Culture, Career Perspective and overall environment plays vital role especially to those students who want to go abroad. ‘DESTINATION AUSTRALIA’ will be such an iconic TV show which reflects overall student life of Australia. This will cater millions of Nepalese viewers to guide them properly.  So, we have developed a concept of TV program to give right information to the parents & students.  The program will be aired on various channels and simultaneously in a few newspapers as well. Online News portal, Press meets and talk show will help to highlight the ‘‘DESTINATION AUSTRALIA’’ program.
                </p>
                <h2 className="text-muted-foreground leading-relaxed font-semibold">
                    “DESTINATION INDIA” TV program will focus on:
                </h2>
                <ul className="grid gap-4 md:grid-cols-2">
                    {[
                        "Indian Education system",
                        "Universities and Colleges",
                        "International Students life",
                        "Opportunities",
                        "Analysis of reality",
                    ].map((item, index) => (
                        <li
                            key={index}
                            className="flex items-start gap-3 p-4 bg-primary/10 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
                        >
                            <span className="flex-shrink-0 h-6 w-6 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                                {index + 1}
                            </span>
                            <p className="text-foreground text-lg">{item}</p>
                        </li>
                    ))}
                </ul>
            </section>


            {/* What We Do */}
            <section className="max-w-6xl mx-auto my-12 px-6 md:px-0">
                <h3 className="text-2xl font-semibold text-foreground">
                    What do we do on “DESTINATION INDIA”?
                </h3>

                <div className="text-muted-foreground leading-relaxed">
                    <p>
                        Jupiter Media crew (2/3 people) will visit INDIA to feature real stories from INDIA, Indian Uni/College & lifestyle. We talk to Nepalese Students, University representatives and cover the most attractive and salable points of the institution. This is for the promotion of Indian Institutions into Nepalese Media. Team will develop documentary of the institution and broadcast on Television along with Social Media like Face book, YouTube, Instagram & Twitter.  This will be an exclusive promotional material prepared by TV crew having an experience of more than 1.5 decades on education field.
                    </p>

                    <div className="bg-primary/5 p-6 rounded-xl shadow-lg  my-3">
                        <h4 className="text-2xl text-muted-foreground text-foreground">Episodes:</h4>
                        <p>
                            Total Episodes will be around 12 and it comes on weekly basis along with 2 times repeat telecast on Nepal Television HD. Each Institution will get 2 episodes of around 10-15 minutes and aired on at least 6 times on National Television.
                        </p>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-xl shadow-lg  my-3">
                        <h4 className="text-2xl text-muted-foreground text-foreground">Broadcasting Channel:</h4>
                        <p>Program called “DESTINATION INDIA” will be aired on super prime time of NEWS 24 Television.</p>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-xl shadow-lg  my-3">
                        <h4 className="text-2xl text-muted-foreground text-foreground">Social Media</h4>
                        <ul className="list-disc list-inside space-y-2">
                            <li>LIVE through Facebook / Uploaded on YouTube</li>
                            <li>Updates on Twitter / Updates on Website</li>
                        </ul>
                    </div>
                </div>
            </section>

            <GallerySection title="More Highlights" images={bottomImages} styleType="bottom" />
            <GallerySection images={bottomImages2} styleType="bottom" />
            <GallerySection images={bottomImages3} styleType="bottom" />

            {/* Call to Action */}
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
