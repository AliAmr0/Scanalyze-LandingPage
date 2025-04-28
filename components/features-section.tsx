import { Bell, FileText, Clock, MessageSquareText, Lock, Share2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: <FileText className="h-10 w-10 text-blue-600" />,
    title: "Complete History Access",
    description: "View all your previous and new lab tests and radiology scans in one secure location.",
  },
  {
    icon: <Bell className="h-10 w-10 text-blue-600" />,
    title: "Real-time Notifications",
    description: "Get instant alerts when new results are available, so you're always up to date.",
  },
  {
    icon: <MessageSquareText className="h-10 w-10 text-blue-600" />,
    title: "Smart Medical Assistant",
    description: "Our AI chatbot helps answer your medical questions and navigate the platform.",
  },
  {
    icon: <Clock className="h-10 w-10 text-blue-600" />,
    title: "24/7 Availability",
    description: "Access your medical information anytime, anywhere, from any device.",
  },
  {
    icon: <Lock className="h-10 w-10 text-blue-600" />,
    title: "Secure & Private",
    description: "Your medical data is protected with enterprise-grade security and encryption.",
  },
  {
    icon: <Share2 className="h-10 w-10 text-blue-600" />,
    title: "Easy Sharing",
    description: "Securely share your results with healthcare providers with just a few clicks.",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Powerful Features for Your Health Journey
          </h2>
          <p className="mx-auto max-w-[800px] text-lg text-gray-600">
            Scanalyze provides everything you need to stay informed about your medical results
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 bg-gray-50 shadow-sm transition-all duration-200 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
