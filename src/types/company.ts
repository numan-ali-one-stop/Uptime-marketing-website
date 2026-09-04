export type TeamMember = {
  name: string;
  role: string;
  linkedinUrl: string;
};

export type CompanyStats = {
  projectsDelivered: number;
  clientsServed: number;
  yearsOfExperience: number;
  countriesServed: number;
};

export type CompanyInfo = {
  foundedYear: number;
  team: TeamMember[];
  stats: CompanyStats;
};
