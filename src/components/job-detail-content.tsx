"use client";

import Link from "next/link";
import MainHeader from "@/components/main-header";
import SiteFooter from "@/components/site-footer";
import { useLanguage } from "@/i18n/language-provider";
import {
  PLATFORM_COLORS,
  formatBudgetRange,
  formatPosted,
  type Job,
  type Platform,
} from "@/lib/mock-jobs";

function PlatformBadge({ platform }: { platform: Platform }) {
  const c = PLATFORM_COLORS[platform];
  return (
    <span
      className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
      style={{ backgroundColor: c.bg, color: c.text }}
    >
      {platform}
    </span>
  );
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 11 11" fill="#F59E0B">
      <path d="M5.5 1L6.9 4.1H10.3L7.7 6.2L8.7 9.4L5.5 7.5L2.3 9.4L3.3 6.2L0.7 4.1H4.1L5.5 1Z" />
    </svg>
  );
}

type JobDetailContentProps = {
  job: Job;
  relatedJobs: Job[];
};

export default function JobDetailContent({
  job,
  relatedJobs,
}: JobDetailContentProps) {
  const { t, dictionary } = useLanguage();

  const whyApplyIcons = ["🔒", "✅", "💬", "⚡"];

  return (
    <div className="min-h-screen bg-[#f5f5f3]">
      <MainHeader />

      {/* Hero banner */}
      <section className={`relative h-[280px] sm:h-[380px] ${job.thumbnailBg}`}>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.65)_100%)]" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-between px-4 sm:px-8 py-5 sm:py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-black/40 px-3 sm:px-4 py-2 text-sm font-medium text-white backdrop-blur-sm hover:bg-black/55 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t("jobDetail.back")}
            </Link>
            <div className="flex items-center gap-2">
              <button className="grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/55 transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M11 1.5L14.5 5V14.5H10.5V10H5.5V14.5H1.5V5L5 1.5H11Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/55 transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 2.5H12V13.5L8 10.5L4 13.5V2.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div>
            {job.promoted && (
              <span className="mb-3 inline-flex items-center gap-1 rounded-full bg-[#d7ff2f] px-3 py-1 text-[12px] font-bold text-[#333]">
                ✦ {t("jobDetail.promoted")}
              </span>
            )}
            <h1 className="max-w-3xl text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight text-white">
              {job.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 py-6 sm:py-8">
        {/* Sidebar floats right on lg+, stacks below on mobile */}
        <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-8">

          {/* Left column */}
          <div className="min-w-0 flex-1 space-y-4 sm:space-y-5">
            {/* Brand card */}
            <div className="rounded-2xl border border-[#eee] bg-white p-4 sm:p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 shrink-0 rounded-xl bg-[#f0f0f0]" />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-[15px] sm:text-[16px] font-bold text-[#111]">{job.company}</h2>
                      {job.verified && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#ecfdf5] px-2 py-0.5 text-[11px] font-semibold text-[#059669]">
                          ✓ {t("common.verified")}
                        </span>
                      )}
                    </div>
                    <div className="mt-1 flex items-center gap-1 text-[13px] text-[#666]">
                      <StarIcon />
                      <span className="font-semibold text-[#111]">{job.companyRating}</span>
                      <span>({job.companyReviews} {t("common.reviews")})</span>
                    </div>
                    <a href={`https://${job.website}`} className="mt-0.5 inline-block text-[13px] text-[#888] hover:text-[#9d003b]">
                      🌐 {job.website}
                    </a>
                  </div>
                </div>
                <PlatformBadge platform={job.platform} />
              </div>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                `📍 ${job.location}`,
                `⏱ ${job.duration}`,
                t("jobDetail.applied", { count: job.applied }),
                formatBudgetRange(job.budgetMin, job.budgetMax),
              ].map((pill) => (
                <span key={pill} className="rounded-full border border-[#e5e5e5] bg-white px-3.5 py-1.5 text-[12px] font-medium text-[#555]">
                  {pill}
                </span>
              ))}
            </div>

            {/* Campaign Brief */}
            <section className="rounded-2xl border border-[#eee] bg-white p-5 sm:p-6 shadow-sm">
              <h3 className="text-[16px] font-bold text-[#111]">{t("jobDetail.campaignBrief")}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[#555]">{job.brief}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-[#f5f5f5] px-3 py-1 text-[12px] font-medium text-[#666]">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Deliverables */}
            <section className="rounded-2xl border border-[#eee] bg-white p-5 sm:p-6 shadow-sm">
              <h3 className="text-[16px] font-bold text-[#111]">{t("jobDetail.deliverables")}</h3>
              <ol className="mt-4 space-y-3">
                {job.deliverables.map((item, idx) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#fce8ee] text-[12px] font-bold text-[#9d003b]">
                      {idx + 1}
                    </span>
                    <span className="text-[14px] leading-relaxed text-[#555]">{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Requirements */}
            <section className="rounded-2xl border border-[#eee] bg-white p-5 sm:p-6 shadow-sm">
              <h3 className="text-[16px] font-bold text-[#111]">{t("jobDetail.requirements")}</h3>
              <ul className="mt-4 space-y-2.5">
                {job.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-2.5 text-[14px] text-[#555]">
                    <span className="mt-0.5 text-[#059669]">✓</span>
                    {req}
                  </li>
                ))}
              </ul>
            </section>

            {/* About the Brand */}
            <section className="rounded-2xl border border-[#eee] bg-white p-5 sm:p-6 shadow-sm">
              <h3 className="text-[16px] font-bold text-[#111]">{t("jobDetail.aboutBrand")}</h3>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 rounded-lg bg-[#f0f0f0]" />
                <span className="text-[14px] font-semibold text-[#111]">{job.company}</span>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-[#555]">{job.aboutBrand}</p>
              <a
                href={`https://${job.website}`}
                className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-[#9d003b] hover:underline"
              >
                {t("jobDetail.visitWebsite")}
              </a>
            </section>
          </div>

          {/* Right sidebar — full width on mobile, fixed width on lg */}
          <aside className="w-full lg:w-[300px] lg:shrink-0">
            <div className="lg:sticky lg:top-24 space-y-4">
              <div className="rounded-2xl border border-[#eee] bg-white p-5 shadow-sm">
                <p className="text-[12px] font-medium text-[#888]">{t("jobDetail.budgetRange")}</p>
                <p className="mt-1 text-[22px] font-black text-[#9d003b]">
                  {formatBudgetRange(job.budgetMin, job.budgetMax)}
                </p>

                <dl className="mt-4 space-y-2.5 text-[13px]">
                  {[
                    [t("jobDetail.workPeriod"), job.duration],
                    [t("jobDetail.location"), job.location],
                    [t("jobDetail.applicants"), t("jobDetail.applied", { count: job.applied })],
                    [t("jobDetail.posted"), formatPosted(job.postedDaysAgo)],
                  ].map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-4">
                      <dt className="text-[#888]">{label}</dt>
                      <dd className="font-medium text-[#333] text-right">{value}</dd>
                    </div>
                  ))}
                </dl>

                <button className="mt-5 flex h-11 w-full items-center justify-center rounded-xl bg-[#9d003b] text-[14px] font-semibold text-white hover:bg-[#850030] transition-colors">
                  {t("jobDetail.applyNow")}
                </button>
                <button className="mt-2 flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#ddd] bg-white text-[14px] font-medium text-[#555] hover:border-[#9d003b] hover:text-[#9d003b] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M4 2.5H12V13.5L8 10.5L4 13.5V2.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                  </svg>
                  {t("jobDetail.saveForLater")}
                </button>
              </div>

              <div className="rounded-2xl border border-[#e8e4da] bg-[#faf8f3] p-5">
                <p className="text-[13px] font-bold text-[#333]">{t("jobDetail.whyApplyTitle")}</p>
                <ul className="mt-3 space-y-2.5 text-[12px] text-[#666]">
                  {dictionary.jobDetail.whyApplyItems.map((text, index) => (
                    <li key={text} className="flex items-start gap-2">
                      <span>{whyApplyIcons[index]}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>

        {/* Related jobs */}
        {relatedJobs.length > 0 && (
          <section className="mt-10 sm:mt-12">
            <h2 className="text-[17px] font-bold text-[#111]">
              {t("jobDetail.moreJobs", { platform: job.platform })}
            </h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {relatedJobs.map((related) => (
                <Link
                  key={related.id}
                  href={`/jobs/${related.id}`}
                  className="flex flex-col overflow-hidden rounded-2xl border border-[#f0f0f0] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.07)] hover:shadow-[0_4px_18px_rgba(0,0,0,0.12)] transition-shadow"
                >
                  <div className={`relative h-36 ${related.thumbnailBg} flex items-center justify-center`}>
                    <span className="absolute right-2.5 top-2.5">
                      <PlatformBadge platform={related.platform} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-3.5">
                    <div className="flex items-center gap-1.5">
                      <div className="h-6 w-6 shrink-0 rounded-full bg-[#eee]" />
                      <span className="truncate text-[12px] font-medium text-[#444]">{related.company}</span>
                      <span className="ml-auto flex shrink-0 items-center gap-0.5 text-[11px] text-[#888]">
                        <StarIcon />
                        {related.companyRating}
                      </span>
                    </div>
                    <h3 className="line-clamp-2 text-[13px] font-bold leading-snug text-[#111]">{related.title}</h3>
                    <p className="line-clamp-2 text-[11px] leading-relaxed text-[#888]">{related.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {related.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="rounded-full bg-[#f5f5f5] px-2 py-0.5 text-[10px] font-medium text-[#666]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-[#999]">
                      <span>📍 {related.location}</span>
                      <span>⏱ {related.duration}</span>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-1">
                      <span className="text-[13px] font-bold text-[#9d003b]">
                        {formatBudgetRange(related.budgetMin, related.budgetMax)}
                      </span>
                      <span className="rounded-xl bg-[#9d003b] px-3.5 py-1.5 text-[12px] font-semibold text-white">
                        {t("jobDetail.applyNow")}
                      </span>
                    </div>
                    <p className="text-[10px] text-[#bbb]">
                      {t("jobDetail.posted")} {formatPosted(related.postedDaysAgo)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <SiteFooter />
    </div>
  );
}
