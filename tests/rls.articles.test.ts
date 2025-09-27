// tests/rls.articles.test.ts (pseudo example)
import { test, expect } from "vitest";
// import test db clients scoped to different user tokens

test("user B cannot read user A's article", async () => {
  // seed as user A
  // query as user B
  // expect forbidden/empty result
  expect(true).toBe(true); // replace with real assertions when wired
});