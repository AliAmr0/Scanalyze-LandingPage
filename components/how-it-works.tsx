import { ArrowRight, CheckCircle2, Clock, FileText, Smartphone, Users } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-blue-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Your Health Journey with Scanalyze
          </h2>
          <p className="mx-auto max-w-[800px] text-lg text-gray-600">
            See how Scanalyze transforms your healthcare experience
          </p>
        </div>

        {/* Before/After Comparison */}
        <div className="mb-20 overflow-hidden rounded-xl bg-white shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="border-b border-r-0 p-8 md:border-b-0 md:border-r">
              <h3 className="mb-6 text-center text-2xl font-bold text-gray-800">Before Scanalyze</h3>
              <div className="space-y-4">
                {[
                  "Calling labs repeatedly for results",
                  "Waiting days for physical copies of scans",
                  "Carrying folders of medical records between appointments",
                  "Difficulty tracking changes in test results over time",
                  "Struggling to understand medical terminology",
                  "Missing important result notifications",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-red-100 p-1 text-red-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 p-8">
              <h3 className="mb-6 text-center text-2xl font-bold text-blue-800">With Scanalyze</h3>
              <div className="space-y-4">
                {[
                  "Instant access to results as soon as they're available",
                  "View high-quality digital scans on any device",
                  "All medical records in one secure digital location",
                  "Interactive charts showing trends over time",
                  "AI assistant explains results in plain language",
                  "Real-time notifications for new results",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-blue-100 p-1 text-blue-600">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Day in the Life Timeline */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold">A Day with Scanalyze</h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-200 md:left-1/2"></div>

            {/* Timeline events */}
            <div className="space-y-12">
              {[
                {
                  time: "8:00 AM",
                  title: "Morning Check-in",
                  description:
                    "Sarah receives a notification that her blood test results from yesterday are ready to view.",
                  icon: <Clock className="h-6 w-6" />,
                  position: "right",
                },
                {
                  time: "10:30 AM",
                  title: "Doctor's Appointment",
                  description:
                    "Sarah shares her complete test history with her doctor through a secure Scanalyze link.",
                  icon: <Users className="h-6 w-6" />,
                  position: "left",
                },
                {
                  time: "2:15 PM",
                  title: "New Prescription",
                  description:
                    "Her doctor orders new tests. Sarah receives the order details instantly in her Scanalyze app.",
                  icon: <FileText className="h-6 w-6" />,
                  position: "right",
                },
                {
                  time: "7:30 PM",
                  title: "Evening Review",
                  description:
                    "Sarah uses the Scanalyze chatbot to understand her cholesterol trends over the past year.",
                  icon: <Smartphone className="h-6 w-6" />,
                  position: "left",
                },
              ].map((event, i) => (
                <div key={i} className="relative flex flex-col md:flex-row">
                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      event.position === "right" ? "md:pr-8" : "md:ml-auto md:pl-8"
                    }`}
                  >
                    <div
                      className={`rounded-lg bg-white p-6 shadow-md ${
                        event.position === "left" ? "md:text-right" : ""
                      }`}
                    >
                      <div
                        className={`mb-2 inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800`}
                      >
                        {event.time}
                      </div>
                      <h4 className="mb-2 text-xl font-semibold">{event.title}</h4>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`absolute left-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white md:left-1/2 md:-ml-4`}
                  >
                    {event.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Demo Teaser */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 shadow-xl">
          <div className="grid md:grid-cols-5">
            <div className="p-8 md:col-span-3">
              <h3 className="mb-4 text-2xl font-bold text-white">See Scanalyze in Action</h3>
              <p className="mb-6 text-blue-100">
                Watch our interactive demo to see how Scanalyze makes managing your medical information simple and
                intuitive.
              </p>
              <Button className="bg-white font-medium text-blue-600 hover:bg-blue-50">
                Watch Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative hidden h-64 md:col-span-2 md:block">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Scanalyze demo preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <div className="h-12 w-12 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
