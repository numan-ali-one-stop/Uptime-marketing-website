import { getServiceCategory, serviceCategories } from "@/data/services";
import { ogImageSize, renderOgImage } from "@/lib/og-image";

export const alt = "Uptime Marketing";
export const size = ogImageSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return serviceCategories.map((category) => ({ category: category.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getServiceCategory(categorySlug);

  return renderOgImage({
    eyebrow: category ? `${category.title} Services` : "Our Services",
    title: category?.heroHeadline ?? "Technology and digital solutions for growth",
    subtitle: category?.tagline,
  });
}
