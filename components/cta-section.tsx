import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CtaSection() {
  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Ready to Take Control of Your Medical Information?
          </h2>
          <p className="mb-8 text-lg text-blue-100">
            Join Scanalyze today and experience a better way to manage your health data.
          </p>

          <div className="mx-auto mb-8 max-w-md">
            <form className="flex flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                className="border-blue-400 bg-white/10 text-white placeholder:text-blue-200 focus-visible:ring-blue-300"
              />
              <Button size="lg" className="bg-white font-medium text-blue-600 hover:bg-blue-50">
                Get Started
              </Button>
            </form>
            <p className="mt-2 text-sm text-blue-200">Free 30-day trial. No credit card required.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">10k+</span>
              <span className="text-sm text-blue-200">Active Users</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">50+</span>
              <span className="text-sm text-blue-200">Healthcare Partners</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold">99.9%</span>
              <span className="text-sm text-blue-200">Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
