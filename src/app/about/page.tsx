import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <h1>About Us</h1>
    </div>
  );
}
