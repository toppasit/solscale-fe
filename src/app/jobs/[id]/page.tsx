import { notFound } from "next/navigation";
import JobDetailContent from "@/components/job-detail-content";
import { getJobById, getRelatedJobs } from "@/lib/mock-jobs";

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = getJobById(id);
  if (!job) notFound();

  const relatedJobs = getRelatedJobs(job, 1);

  return <JobDetailContent job={job} relatedJobs={relatedJobs} />;
}
