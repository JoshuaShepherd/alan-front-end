// app/error.tsx
"use client";
export default function Error({ error }: { error: Error }) {
  return (
    <main className="p-6">
      <h1>Something went wrong.</h1>
      <p className="opacity-70">{error.message}</p>
    </main>
  );
}