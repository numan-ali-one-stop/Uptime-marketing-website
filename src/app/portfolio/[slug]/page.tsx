type PortfolioDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PortfolioDetailPage({
  params,
}: PortfolioDetailPageProps) {
  const { slug } = await params;

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <h1>Portfolio: {slug}</h1>
    </div>
  );
}
