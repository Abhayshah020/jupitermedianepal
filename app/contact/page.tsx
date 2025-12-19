import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Globe2, Users, Award } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="bg-background min-h-screen">
            <section className="py-20 px-6 md:px-16 text-center">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                    Contact Us
                </h1>
                <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
                    Reach out to us for queries, collaborations, or media services. We are available Monday to Friday, 9 a.m. to 5 p.m.
                </p>
            </section>

            <section className="max-w-6xl mx-auto px-6 md:px-0 grid md:grid-cols-2 gap-12 py-16">
                {/* Contact Details + Map */}
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-primary mt-1" />
                        <div>
                            <h4 className="font-semibold text-foreground">Call Us</h4>
                            <p className="text-muted-foreground">015581367</p>
                            <p className="text-muted-foreground text-sm">
                                Available Hours: 9 a.m. – 5 p.m.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-primary mt-1" />
                        <div>
                            <h4 className="font-semibold text-foreground">Email</h4>
                            <p className="text-muted-foreground">jupitermedianepal@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1" />
                        <div>
                            <h4 className="font-semibold text-foreground">Address</h4>
                            <p className="text-muted-foreground">
                                Jeetjung Marg, Thapathali, Kathmandu, Nepal
                            </p>
                        </div>
                    </div>

                    {/* Google Map */}
                    <div className="mt-6 w-full h-64 md:h-96 rounded-xl overflow-hidden border border-border shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3381.00679604283!2d85.32089556397672!3d27.692356263934805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb195843e07395%3A0x38e3ec3c8f6e68!2sJupiter%20Media!5e1!3m2!1sen!2snp!4v1766127930299!5m2!1sen!2snp"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* New Content Section */}
                <div className="space-y-8 bg-primary/5 p-8 rounded-xl flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold font-serif text-foreground">
                        Our Mission & Vision
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                        To create, execute and deliver high-quality, creative media content
                        that meets our clients’ diverse requirements while ensuring a significant impact.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        Vision: Becoming the leading media house partnering with clients to achieve their goals
                        through innovative use of traditional and digital media.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="flex items-center gap-2">
                            <Users className="h-6 w-6 text-primary" />
                            <div>
                                <p className="font-semibold text-foreground">Global Reach</p>
                                <p className="text-muted-foreground text-sm">Coverage across multiple countries</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Award className="h-6 w-6 text-primary" />
                            <div>
                                <p className="font-semibold text-foreground">Experience</p>
                                <p className="text-muted-foreground text-sm">600+ media productions completed</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe2 className="h-6 w-6 text-primary" />
                            <div>
                                <p className="font-semibold text-foreground">Platforms</p>
                                <p className="text-muted-foreground text-sm">TV, social media, and online channels</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-6 w-6 text-primary" />
                            <div>
                                <p className="font-semibold text-foreground">Offices</p>
                                <p className="text-muted-foreground text-sm">Kathmandu, Nepal</p>
                            </div>
                        </div>
                    </div>

                    <Button className="mt-4 w-full">Get in Touch</Button>
                </div>
            </section>
        </main>
    );
}
