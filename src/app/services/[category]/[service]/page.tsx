import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getSubService, serviceCategories } from "@/data/services";

type ServiceDetailPageProps = {
  params: Promise<{ category: string; service: string }>;
};

export function generateStaticParams() {
  return serviceCategories.flatMap((category) =>
    category.subServices.map((subService) => ({
      category: category.slug,
      service: subService.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { category, service } = await params;
  const subService = getSubService(category, service);

  return { title: subService?.title ?? "Services" };
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { category, service } = await params;
  const subService = getSubService(category, service);

  if (!subService) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <h1>{subService.title}</h1>
    </div>
  );
}
