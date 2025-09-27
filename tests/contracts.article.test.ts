// tests/contracts.article.test.ts
import { expect, test } from "vitest";
import { ArticleSchema } from "@/contracts/article";

test("ArticleSchema: valid", () => {
  const res = ArticleSchema.safeParse({ title: "Hello", content: "World..." });
  expect(res.success).toBe(true);
});

test("ArticleSchema: rejects short title", () => {
  const res = ArticleSchema.safeParse({ title: "", content: "x" });
  expect(res.success).toBe(false);
});