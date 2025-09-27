import { z } from "zod";

export const ArticleSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
});

export type Article = z.infer<typeof ArticleSchema>;