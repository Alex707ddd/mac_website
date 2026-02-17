import { useFormContext } from "react-hook-form"
import { IntakeFormValues } from "@/lib/validations/intake-schema"

const caseTypes = [
    { value: "Civil Litigation", label: "Civil Litigation (民事訴訟)", desc: "Contract disputes, debt recovery, negligence" },
    { value: "Criminal Defence", label: "Criminal Defence (刑事辯護)", desc: "Police investigation, court representation" },
    { value: "Family Law", label: "Family Law (家事法)", desc: "Divorce, custody, maintenance" },
    { value: "Commercial", label: "Commercial (商業法)", desc: "Business agreements, compliance, intellectual property" },
    { value: "Other", label: "Other (其他)", desc: "Not listed above" },
]

export function StepCaseType() {
    const { register, formState: { errors } } = useFormContext<IntakeFormValues>()

    return (
        <div className="space-y-4">
            <h3 className="text-lg font-medium text-white mb-4">What type of legal issue are you facing?</h3>
            <div className="grid gap-3">
                {caseTypes.map((type) => (
                    <label
                        key={type.value}
                        className="relative flex items-start p-4 cursor-pointer rounded-lg border border-slate-700 hover:bg-slate-700/50 transition-colors"
                    >
                        <div className="flex items-center h-5">
                            <input
                                type="radio"
                                value={type.value}
                                {...register("caseType")}
                                className="w-4 h-4 text-blue-600 bg-slate-900 border-slate-600 focus:ring-blue-500 focus:ring-offset-slate-800"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <span className="block font-medium text-white">{type.label}</span>
                            <span className="block text-slate-400">{type.desc}</span>
                        </div>
                    </label>
                ))}
            </div>
            {errors.caseType && (
                <p className="mt-1 text-sm text-red-400">{errors.caseType.message}</p>
            )}
        </div>
    )
}
