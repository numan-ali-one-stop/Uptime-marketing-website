import { getServiceDetail } from "@/data/service-details";
import { getSubService, serviceCategories } from "@/data/services";
import { ogImageSize, renderOgImage } from "@/lib/og-image";

export const alt = "Uptime Marketing";
export const size = ogImageSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return serviceCategories.flatMap((category) =>
    category.subServices.map((subService) => ({
      category: category.slug,
      service: subService.slug,
    }))
  );
}

export default async function Image({
  params,
}: {
  params: Promise<{ category: string; service: string }>;
}) {
  const { category: categorySlug, service: serviceSlug } = await params;
  const subService = getSubService(categorySlug, serviceSlug);
  const detail = subService ? getServiceDetail(serviceSlug) : undefined;

  return renderOgImage({
    eyebrow: "Uptime Marketing",
    title: detail?.heroHeadline ?? subService?.title ?? "Our Services",
    subtitle: detail?.heroSubheadline ?? subService?.shortDescription,
  });
}
