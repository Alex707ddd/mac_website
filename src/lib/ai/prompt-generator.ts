import { IntakeFormValues } from "@/lib/validations/intake-schema"

export function generateSystemPrompt() {
    return `You are a senior legal assistant for a Hong Kong law firm (Chan & Co., Mac). 
Your task is to analyze client intake forms and summarize them into a structured "Case Brief" for the solicitor.
Output must be in Traditional Chinese (繁體中文).

Format:
1. **原告需求**: What is the client asking for?
2. **爭議點**: What are the key facts/conflicts?
3. **法律初步分類**: Which area of law does this fall under? (e.g. Contract, Tort, Family, Criminal)
4. **建議行動**: A one-line internal suggestion for the lawyer (e.g. "Schedule urgent consultation", "Request documents").

Keep it concise and professional.`
}

export function generateUserPrompt(data: IntakeFormValues) {
    return `Client Name: ${data.name}
Case Type: ${data.caseType}
Description:
${data.description}`
}
