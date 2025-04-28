import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Your Medical Results, <span className="text-blue-600">Simplified</span>
            </h1>
            <p className="max-w-[600px] text-lg text-gray-600 md:text-xl">
              Access all your lab tests and radiology scans in one secure platform. Get instant insights and stay
              informed about your health journey.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="font-medium">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="font-medium">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative mx-auto h-[400px] w-full max-w-[500px] rounded-lg shadow-xl md:h-[500px]">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Scanalyze dashboard showing medical reports and scans"
              fill
              className="rounded-lg object-cover"
              priority
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl"></div>
      <div className="absolute -right-16 top-32 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl"></div>
    </section>
  )
}
