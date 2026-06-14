import { notFound } from "next/navigation";
import InfluencerDetailContent from "@/components/influencer-detail-content";
import RequireAuth from "@/components/require-auth";
import {
  getInfluencerById,
  getRelatedInfluencers,
} from "@/lib/mock-influencers";

export default async function InfluencerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const influencer = getInfluencerById(id);
  if (!influencer) notFound();

  const relatedInfluencers = getRelatedInfluencers(influencer, 3);

  return (
    <RequireAuth returnTo={`/influencers/${id}`}>
      <InfluencerDetailContent
        influencer={influencer}
        relatedInfluencers={relatedInfluencers}
      />
    </RequireAuth>
  );
}
