export type LeadFormData = {
  lastName: string;
  firstName: string;
  company: string;
  email: string;
  occupationLabel: string;
  occupationId: string;
  privacyPolicyAgreed: boolean;
};

export type SubmitLeadPayload = {
  lead: LeadFormData;
  rankId: string;
  rankLabel: string;
  correctCount: number;
  totalQuestions: number;
  correctRate: number;
  categoryScores: Record<string, number>;
  userAgent: string;
};
