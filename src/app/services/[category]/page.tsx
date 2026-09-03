import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getServiceCategory, serviceCategories } from "@/data/services";

type ServiceCategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return serviceCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: ServiceCategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const serviceCategory = getServiceCategory(category);

  return { title: serviceCategory?.title ?? "Services" };
}

export default async function ServiceCategoryPage({
  params,
}: ServiceCategoryPageProps) {
  const { category } = await params;
  const serviceCategory = getServiceCategory(category);

  if (!serviceCategory) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <h1>{serviceCategory.title}</h1>
    </div>
  );
}
