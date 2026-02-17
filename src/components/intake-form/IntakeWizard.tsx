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
        console.log("Form Data:", data)
        // TODO: Send to API
        // router.push("/intake/success")
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
                                className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg font-medium transition-colors"
                            >
                                Submit Assessment
                            </button>
                        )}
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}
