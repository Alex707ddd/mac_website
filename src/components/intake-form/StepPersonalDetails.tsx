import { useFormContext } from "react-hook-form"
import { IntakeFormValues } from "@/lib/validations/intake-schema"

export function StepPersonalDetails() {
    const { register, formState: { errors } } = useFormContext<IntakeFormValues>()

    return (
        <div className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                    Full Name
                </label>
                <input
                    id="name"
                    {...register("name")}
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="e.g. Chan Tai Man"
                />
                {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="e.g. taiman@example.com"
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">
                    Phone Number
                </label>
                <input
                    id="phone"
                    {...register("phone")}
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="e.g. 91234567"
                />
                {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
                )}
            </div>
        </div>
    )
}
