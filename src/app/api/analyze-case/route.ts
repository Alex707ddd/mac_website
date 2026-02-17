import { NextResponse } from "next/server"
import { intakeSchema } from "@/lib/validations/intake-schema"
import { generateSystemPrompt, generateUserPrompt } from "@/lib/ai/prompt-generator"

export async function POST(req: Request) {
    try {
        const json = await req.json()
        const body = intakeSchema.parse(json)

        // TODO: Integrate OpenAI API here
        // const completion = await openai.chat.completions.create({...})

        // Mock Response for Demo
        const mockSummary = `
## 案情摘要 (AI Generated)

**1. 原告需求**
客戶 ${body.name} 希望針對 ${body.caseType} 相關問題尋求法律協助。具體訴求為解決其描述的爭議並獲得相應賠償或法律保護。

**2. 爭議點**
根據描述，核心爭議涉及：
- ${body.description.substring(0, 50)}... (節錄)
- 需要進一步釐清相關證據與時序。

**3. 法律初步分類**
歸類為：**${body.caseType}**

**4. 建議行動**
建議安排 30 分鐘初步諮詢以評估案件勝算。
    `

        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1500))

        return NextResponse.json({ summary: mockSummary })
    } catch (error) {
        return NextResponse.json(
            { error: "Invalid request data" },
            { status: 400 }
        )
    }
}
