import type { CompanyInfo } from "@/types/company";

/**
 * PLACEHOLDER CONTENT — every fact below (founding year, team roster, and
 * headline stats) is a placeholder standing in for real, verified company
 * information. Replace each one before launch. Team headshots are rendered
 * as gradient avatars until real photos are added at /public/team/<slug>.jpg.
 */
export const companyInfo: CompanyInfo = {
  foundedYear: 2019,
  team: [
    {
      name: "[Founder Name]",
      role: "Founder & CEO",
      linkedinUrl: "#",
    },
    {
      name: "[Team Member Name]",
      role: "Head of Engineering",
      linkedinUrl: "#",
    },
    {
      name: "[Team Member Name]",
      role: "Head of Design",
      linkedinUrl: "#",
    },
    {
      name: "[Team Member Name]",
      role: "Head of Growth",
      linkedinUrl: "#",
    },
  ],
  stats: {
    projectsDelivered: 120,
    clientsServed: 80,
    yearsOfExperience: 6,
    countriesServed: 14,
  },
};

/** Team members with real names; the "[...]" placeholders stay unpublished. */
export const publishedTeam = companyInfo.team.filter(
  (member) => !member.name.startsWith("[")
);
