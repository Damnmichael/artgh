"use client";

import type React from "react";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-[#c09e80]">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with our team for inquiries
            about our collection, commissions, or any other questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 border border-gray-100 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif mb-4">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your message has been sent successfully. We'll get back to you
                  as soon as possible.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#c09e80] text-white hover:bg-[#c09e80]/80 rounded-none"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select
                    value={formState.subject}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="purchase">
                        Purchase Information
                      </SelectItem>
                      <SelectItem value="commission">
                        Commission Request
                      </SelectItem>
                      <SelectItem value="artist">Artist Submission</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={6}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#c09e80] text-white hover:bg-[#c09e80]/80 rounded-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif mb-6 text-[#c09e80]">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you're looking to purchase a piece, inquire about an
                artist, or discuss a potential collaboration, our team is here
                to help.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  {/* <MapPin className="h-5 w-5 text-gray-600 mt-1 mr-3" /> */}
                  {/* <div>
                    <h3 className="font-medium">Visit Us</h3>
                    <p className="text-gray-600">
                      123 Gallery Street
                      <br />
                      Art District
                      <br />
                      New York, NY 10001
                    </p>
                  </div> */}
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5  mt-1 mr-3 text-[#c09e80]" />
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-gray-600">info@artistrygallery.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5  mt-1 mr-3 text-[#c09e80]" />
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-gray-600">+1 (212) 555-7890</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif mb-6 text-[#c09e80]">
                Gallery Hours
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>11:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h2 className="text-2xl font-serif mb-6 text-[#c09e80]">
                Follow Us
              </h2>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-black hover:text-black transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-black hover:text-black transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:border-black hover:text-black transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
