import { useFormContext } from "react-hook-form"
import { IntakeFormValues } from "@/lib/validations/intake-schema"

export function StepDescription() {
    const { register, formState: { errors } } = useFormContext<IntakeFormValues>()

    return (
        <div className="space-y-4">
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-slate-300 mb-1">
                    Tell us about your situation
                </label>
                <p className="text-xs text-slate-500 mb-2">
                    Please provide as much detail as possible. (Min 20 characters)
                </p>
                <textarea
                    id="description"
                    {...register("description")}
                    rows={6}
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Describe what happened, when it happened, and what outcome you are looking for..."
                />
                {errors.description && (
                    <p className="mt-1 text-sm text-red-400">{errors.description.message}</p>
                )}
            </div>
        </div>
    )
}
