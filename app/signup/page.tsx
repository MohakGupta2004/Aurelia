import Link from "next/link"
import { LoginForm as SignUpForm } from "@/components/ui/signup"

export default function SignupPage() {
	return (
		<div className="grid min-h-svh lg:grid-cols-2">
			<div className="flex flex-col gap-4 p-6 md:p-10">
				<div className="flex flex-1 items-center justify-center">
					<div className="w-full max-w-xs">
						<SignUpForm />
					</div>
				</div>
			</div>

			<div className="bg-muted w-full lg:flex justify-center items-center p-10">
				<div className="flex flex-col items-center gap-4 text-center max-w-lg">
					<h2 style={{ fontFamily: "var(--font-logo)" }} className="text-4xl font-bold tracking-tight text-foreground">
						Join Aurelia
					</h2>
					<p className="text-muted">Create your account to save favorites, checkout faster, and track orders.</p>
				</div>
			</div>
		</div>
	)
}
