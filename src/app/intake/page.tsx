import { IntakeWizard } from "@/components/intake-form/IntakeWizard"
import Link from "next/link"

export default function IntakePage() {
    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col font-sans">
            <nav className="border-b border-slate-800/50 backdrop-blur-sm fixed w-full z-10 top-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity">
                            <span className="text-xl font-bold tracking-tight text-white">
                                CHAN & CO., MAC
                                <span className="ml-2 text-slate-400 text-sm font-normal hidden sm:inline">陳浩庭律師行</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>

            <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                        AI Preliminary Case Assessment
                    </h1>
                    <p className="text-lg text-slate-400">
                        Complete this secure form to receive an instant summary of your legal situation.
                    </p>
                </div>

                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                    <IntakeWizard />
                </div>
            </main>
        </div>
    )
}
