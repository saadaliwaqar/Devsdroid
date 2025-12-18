"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { FOOTER_INFO } from "@/lib/constants";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus("idle"), 5000);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div className="flex flex-col gap-12 md:gap-20 pb-20">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-slate-900 to-brand-navy">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-background/60 dark:bg-slate-950/60 z-10" />
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0 opacity-70"
                        style={{ backgroundImage: "url('/finance-hero-contact-abstract.png')" }}
                    />
                </div>
                <div className="container px-4 md:px-6 py-20 md:py-32 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6">
                            Get In Touch
                        </h1>
                        <p className="text-xl text-slate-300">
                            Have a question or want to learn more about our research services? We'd love to hear from you.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information Cards */}
            <section className="container px-4 md:px-6">
                <div className="grid gap-6 md:grid-cols-3 mb-12">
                    <Card className="text-center">
                        <CardHeader>
                            <Mail className="h-10 w-10 text-brand-cyan mx-auto mb-4" />
                            <CardTitle>Email Us</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <a href={`mailto:${FOOTER_INFO.contact.email}`} className="text-brand-cyan hover:underline">
                                {FOOTER_INFO.contact.email}
                            </a>
                        </CardContent>
                    </Card>

                    <Card className="text-center">
                        <CardHeader>
                            <Phone className="h-10 w-10 text-brand-gold mx-auto mb-4" />
                            <CardTitle>Call Us</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <a href={`tel:${FOOTER_INFO.contact.phone}`} className="text-brand-gold hover:underline">
                                {FOOTER_INFO.contact.phone}
                            </a>
                        </CardContent>
                    </Card>

                    <Card className="text-center">
                        <CardHeader>
                            <MapPin className="h-10 w-10 text-brand-cyan mx-auto mb-4" />
                            <CardTitle>Visit Us</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">Pakistan & UK Offices</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Contact Form & Office Locations */}
            <section className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Contact Form */}
                    <div>
                        <h2 className="text-3xl font-bold font-serif mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Full Name
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email Address
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                    Subject
                                </label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="How can we help you?"
                                    required
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us more about your inquiry..."
                                    required
                                    className="w-full min-h-[150px]"
                                />
                            </div>

                            {submitStatus === "success" && (
                                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                                    Thank you for your message! We'll get back to you soon.
                                </div>
                            )}

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-semibold"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>

                    {/* Office Locations */}
                    <div>
                        <h2 className="text-3xl font-bold font-serif mb-6">Our Offices</h2>
                        <div className="space-y-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-start gap-3">
                                        <MapPin className="h-6 w-6 text-brand-cyan flex-shrink-0 mt-1" />
                                        <div>
                                            <div className="font-bold">Lahore, Pakistan</div>
                                            <div className="text-sm font-normal text-muted-foreground mt-2">
                                                {FOOTER_INFO.locations[0]}
                                            </div>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-start gap-3">
                                        <MapPin className="h-6 w-6 text-brand-gold flex-shrink-0 mt-1" />
                                        <div>
                                            <div className="font-bold">London, UK</div>
                                            <div className="text-sm font-normal text-muted-foreground mt-2">
                                                {FOOTER_INFO.locations[1]}
                                            </div>
                                        </div>
                                    </CardTitle>
                                </CardHeader>
                            </Card>

                            <div className="bg-slate-50 rounded-xl p-6 mt-8">
                                <h3 className="font-semibold mb-4">Business Hours</h3>
                                <div className="space-y-2 text-sm text-muted-foreground">
                                    <div className="flex justify-between">
                                        <span>Monday - Friday:</span>
                                        <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday:</span>
                                        <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday:</span>
                                        <span className="font-medium text-foreground">Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
