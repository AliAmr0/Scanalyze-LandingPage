"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonialGroups = [
  {
    category: "Patients",
    testimonials: [
      {
        quote:
          "As someone managing diabetes, I need to track my lab results closely. Scanalyze sends me alerts when my glucose levels are outside my target range, which has been life-changing.",
        author: "Robert Chen",
        role: "Patient with Type 2 Diabetes",
        avatar: "/placeholder.svg?height=40&width=40",
        metrics: "Reduced doctor visits by 30%",
      },
      {
        quote:
          "After my cancer treatment, I needed to keep track of multiple scan results. Scanalyze organizes everything chronologically and lets me see progress over time. The peace of mind is invaluable.",
        author: "Maria Lopez",
        role: "Cancer Survivor",
        avatar: "/placeholder.svg?height=40&width=40",
        metrics: "Manages 15+ different test types",
      },
    ],
  },
  {
    category: "Healthcare Providers",
    testimonials: [
      {
        quote:
          "My patients who use Scanalyze come to appointments better prepared and more engaged in their care. The platform's sharing feature means I can review their results before they arrive.",
        author: "Dr. James Wilson",
        role: "Primary Care Physician",
        avatar: "/placeholder.svg?height=40&width=40",
        metrics: "20% more efficient patient consultations",
      },
      {
        quote:
          "As a specialist, I often need historical data to make treatment decisions. When patients share their Scanalyze profile, I get a complete picture instantly, without waiting for records transfers.",
        author: "Dr. Aisha Patel",
        role: "Endocrinologist",
        avatar: "/placeholder.svg?height=40&width=40",
        metrics: "Reduced diagnostic time by 40%",
      },
    ],
  },
  {
    category: "Medical Facilities",
    testimonials: [
      {
        quote:
          "Integrating our lab with Scanalyze has reduced our patient support calls by 45%. Patients can access their results directly, and our staff can focus on other priorities.",
        author: "Jennifer Okafor",
        role: "Lab Operations Manager",
        avatar: "/placeholder.svg?height=40&width=40",
        metrics: "45% reduction in support calls",
      },
      {
        quote:
          "Our radiology center uses Scanalyze to deliver results to patients securely. The platform's image quality and security features are excellent, and patients appreciate the immediate access.",
        author: "Thomas Schmidt",
        role: "Radiology Center Director",
        avatar: "/placeholder.svg?height=40&width=40",
        metrics: "98% patient satisfaction rate",
      },
    ],
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Real Stories, Real Impact
          </h2>
          <p className="mx-auto max-w-[800px] text-lg text-gray-600">
            See how Scanalyze is transforming healthcare experiences for patients and providers alike
          </p>
        </div>

        {/* Category Selection */}
        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold text-center text-blue-700">Featured Testimonials</h3>
        </div>

        {/* Testimonials */}
        <div className="grid gap-8 md:grid-cols-2">
          {testimonialGroups[0].testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-white shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 text-gray-700">"{testimonial.quote}"</p>
                <div className="rounded-md bg-blue-100 px-3 py-2 text-sm font-medium text-blue-800">
                  {testimonial.metrics}
                </div>
              </CardContent>
              <CardFooter className="border-t bg-white pt-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}

          {testimonialGroups[1].testimonials.slice(0, 1).map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-white shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 text-gray-700">"{testimonial.quote}"</p>
                <div className="rounded-md bg-blue-100 px-3 py-2 text-sm font-medium text-blue-800">
                  {testimonial.metrics}
                </div>
              </CardContent>
              <CardFooter className="border-t bg-white pt-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800">
            <span className="mr-2 text-blue-600">★</span>
            4.9/5 average rating from over 10,000 users
          </div>
          <p className="text-lg font-medium text-gray-700">
            Join our growing community of patients and healthcare providers
          </p>
        </div>
      </div>
    </section>
  )
}
