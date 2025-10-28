import { LoginForm } from "@/components/ui/login-form"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <span
                style={{ fontFamily: "var(--font-logo)" }}
                className="text-2xl font-bold tracking-tight text-foreground"
              >
                Aurelia
              </span>
            </Link>
          </div>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <h1 className="text-2xl font-semibold mb-2">Sign in to your account</h1>
            <p className="text-sm text-muted mb-4">Welcome back — enter your email and password to continue to your orders, wishlist, and faster checkout.</p>

            <LoginForm />

            <div className="mt-4 text-sm text-muted">
              New here?{' '}
              <Link href="/signup" className="text-primary hover:underline">
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    <div className="bg-muted w-full lg:flex justify-center items-center p-10">
      <div className="flex flex-col items-center gap-4 text-center max-w-lg">
        <h2 style={{ fontFamily: "var(--font-logo)" }} className="text-4xl font-bold tracking-tight text-foreground">
          Curated goods, thoughtfully selected
        </h2>
        <p className="text-muted">Discover a handpicked collection of everyday essentials — sign in to shop faster, save favorites, and track orders.</p>
      </div>
    </div>
    </div>
  )
}
