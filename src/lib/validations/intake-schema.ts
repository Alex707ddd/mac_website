import { z } from "zod"

export const intakeSchema = z.object({
    // Step 1: Personal Details
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().min(8, { message: "Phone number must be at least 8 digits." }),

    // Step 2: Case Type
    caseType: z.enum(["Civil Litigation", "Criminal Defence", "Family Law", "Commercial", "Other"], {
        message: "Please select a case type.",
    }),

    // Step 3: Description
    description: z.string().min(20, { message: "Please provide at least 20 characters describing your situation." })
        .max(2000, { message: "Description must not exceed 2000 characters." }),
})

export type IntakeFormValues = z.infer<typeof intakeSchema>
