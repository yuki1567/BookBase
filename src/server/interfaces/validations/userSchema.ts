import { z } from 'zod'

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  if (issue.code === 'invalid_type') {
    return { message: '形式が正しくありません。正しい形式で入力してください。' }
  }
  return { message: ctx.defaultError }
}

z.setErrorMap(customErrorMap)

const emailSchema = z.string()

const passwordSchema = z.string()

export const loginShema = z.object({
  email: emailSchema,
  password: passwordSchema,
})
