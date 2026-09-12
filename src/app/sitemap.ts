import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { serviceCategories } from "@/data/services";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const { url } = siteConfig;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url, changeFrequency: "yearly", priority: 1.0 },
    { url: `${url}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${url}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${url}/portfolio`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${url}/contact`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${url}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    {
      url: `${url}/terms-of-service`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = serviceCategories.map(
    (category) => ({
      url: `${url}/services/${category.slug}`,
      changeFrequency: "monthly",
      priority: 0.9,
    })
  );

  const subServiceRoutes: MetadataRoute.Sitemap = serviceCategories.flatMap(
    (category) =>
      category.subServices.map((subService) => ({
        url: `${url}/services/${category.slug}/${subService.slug}`,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      }))
  );

  const portfolioRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${url}/portfolio/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...subServiceRoutes,
    ...portfolioRoutes,
  ];
}
