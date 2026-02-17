"use client"

import { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { intakeSchema, IntakeFormValues } from "@/lib/validations/intake-schema"
import { motion, AnimatePresence } from "framer-motion"
import { StepPersonalDetails } from "./StepPersonalDetails"
import { StepCaseType } from "./StepCaseType"
import { StepDescription } from "./StepDescription"

const steps = [
    { id: "personal", title: "Personal Details" },
    { id: "caseType", title: "Case Type" },
    { id: "description", title: "Description" },
]

export function IntakeWizard() {
    const [currentStep, setCurrentStep] = useState(0)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [summary, setSummary] = useState<string | null>(null)
    const router = useRouter()

    const methods = useForm<IntakeFormValues>({
        resolver: zodResolver(intakeSchema),
        mode: "onChange",
    })

    const { trigger, handleSubmit } = methods

    const nextStep = async () => {
        let isValid = false

        if (currentStep === 0) {
            isValid = await trigger(["name", "email", "phone"])
        } else if (currentStep === 1) {
            isValid = await trigger(["caseType"])
        } else {
            isValid = true
        }

        if (isValid) {
            setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
        }
    }

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0))
    }

    const onSubmit = async (data: IntakeFormValues) => {
        setIsSubmitting(true)
        try {
            const response = await fetch("/api/analyze-case", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            const result = await response.json()
            if (response.ok) {
                setSummary(result.summary)
            } else {
                console.error("API Error:", result.error)
            }
        } catch (error) {
            console.error("Network Error:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (summary) {
        return (
            <div className="w-full max-w-2xl mx-auto p-8 bg-slate-800 rounded-xl shadow-xl border border-slate-700 animate-in fade-in zoom-in duration-500">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-400 mb-4">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Assessment Complete</h2>
                    <p className="text-slate-400">Our AI has analyzed your case details.</p>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 mb-8 overflow-auto max-h-[60vh] text-left">
                    <pre className="whitespace-pre-wrap font-sans text-slate-300 leading-relaxed">
                        {summary}
                    </pre>
                </div>

                <div className="text-center">
                    <p className="text-sm text-slate-500 mb-4">A copy of this summary has been sent to our team.</p>
                    <button
                        onClick={() => router.push("/")}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
                    >
                        Return to Home
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-6 bg-slate-800 rounded-xl shadow-xl border border-slate-700">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between mb-2">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`text-sm font-medium ${index <= currentStep ? "text-blue-400" : "text-slate-500"}`}
                        >
                            {step.title}
                        </div>
                    ))}
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-blue-500"
                        initial={{ width: "0%" }}
                        animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentStep}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            {currentStep === 0 && <StepPersonalDetails />}
                            {currentStep === 1 && <StepCaseType />}
                            {currentStep === 2 && <StepDescription />}
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-between pt-6 border-t border-slate-700">
                        <button
                            type="button"
                            onClick={prevStep}
                            disabled={currentStep === 0}
                            className={`px-4 py-2 text-slate-300 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed`}
                        >
                            Back
                        </button>

                        {currentStep < steps.length - 1 ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg font-medium transition-colors disabled:opacity-50 flex items-center"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Analyzing...
                                    </>
                                ) : (
                                    "Submit Assessment"
                                )}
                            </button>
                        )}
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}
