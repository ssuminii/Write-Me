import { ApiError, GoogleGenAI } from '@google/genai'

const MODEL = 'gemini-3.5-flash-lite'

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

export class AiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message)
  }
}

export interface AiResult {
  text: string
  inputTokens: number
  outputTokens: number
}

export async function generateText(system: string, prompt: string): Promise<AiResult> {
  try {
    const res = await ai.models.generateContent({
      model: MODEL,
      contents: prompt,
      config: { systemInstruction: system },
    })
    const usage = res.usageMetadata
    return {
      text: res.text ?? '',
      inputTokens: usage?.promptTokenCount ?? 0,
      outputTokens: (usage?.candidatesTokenCount ?? 0) + (usage?.thoughtsTokenCount ?? 0),
    }
  } catch (error) {
    if (error instanceof ApiError && error.status === 429) {
      throw new AiError(
        429,
        '오늘 사용할 수 있는 AI 요청을 모두 썼어요. 잠시 후 다시 시도해주세요.',
      )
    }
    throw error
  }
}
