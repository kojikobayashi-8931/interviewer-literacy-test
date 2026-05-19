import { z } from "zod";

export const leadFormSchema = z.object({
  lastName: z.string().min(1, "姓は必須です"),
  firstName: z.string().min(1, "名は必須です"),
  company: z.string().min(1, "所属企業名は必須です"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  occupationLabel: z.string().min(1, "職種を選択してください"),
  occupationId: z.string().min(1, "職種を選択してください"),
  privacyPolicyAgreed: z.literal(true, {
    errorMap: () => ({ message: "プライバシーポリシーへの同意が必要です" }),
  }),
});

export type LeadFormInput = z.infer<typeof leadFormSchema>;

export const submitLeadApiSchema = z.object({
  lead: leadFormSchema,
  rankId: z.string(),
  rankLabel: z.string(),
  correctCount: z.number().int().min(0).max(29),
  totalQuestions: z.number().int().min(1),
  correctRate: z.number().min(0).max(100),
  categoryScores: z.record(z.number()),
  userAgent: z.string(),
});
