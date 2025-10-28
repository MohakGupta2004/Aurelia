import { LoginForm } from "@/components/ui/login"
export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
           <LoginForm />
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
