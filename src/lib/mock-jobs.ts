export type Platform = "Instagram" | "TikTok" | "YouTube" | "Facebook" | "Podcast" | "Blog" | "Live Event";

export type Job = {
  id: string;
  title: string;
  company: string;
  companyRating: number;
  companyReviews: number;
  platform: Platform;
  description: string;
  brief: string;
  deliverables: string[];
  requirements: string[];
  aboutBrand: string;
  website: string;
  verified: boolean;
  tags: string[];
  location: string;
  duration: string;
  applied: number;
  budgetMin: number;
  budgetMax: number;
  postedDaysAgo: number;
  promoted?: boolean;
  thumbnailBg: string;
};

export const PLATFORM_COLORS: Record<Platform, { bg: string; text: string }> = {
  Instagram: { bg: "#E1306C", text: "#fff" },
  TikTok: { bg: "#010101", text: "#fff" },
  YouTube: { bg: "#FF0000", text: "#fff" },
  Facebook: { bg: "#1877F2", text: "#fff" },
  Podcast: { bg: "#8B5CF6", text: "#fff" },
  Blog: { bg: "#6B7280", text: "#fff" },
  "Live Event": { bg: "#059669", text: "#fff" },
};

export const CATEGORIES: { label: Platform; count: number; icon: string }[] = [
  { label: "Instagram", count: 143, icon: "📷" },
  { label: "TikTok", count: 96, icon: "🎵" },
  { label: "YouTube", count: 47, icon: "▶" },
  { label: "Blog", count: 44, icon: "📝" },
  { label: "Podcast", count: 9, icon: "🎙" },
  { label: "Live Event", count: 9, icon: "🎤" },
];

export const MOCK_JOBS: Job[] = [
  {
    id: "j1",
    title: "Instagram Lifestyle Influencer for Premium Skincare Launch",
    company: "Glow Lab Thailand",
    companyRating: 4.8,
    companyReviews: 132,
    platform: "Instagram",
    description: "Looking for a beauty influencer with 50K+ followers to promote our new skincare launch line.",
    brief:
      "Seeking a lifestyle influencer with 50K+ followers to create authentic content showcasing our new premium skincare line. The campaign focuses on daily routines, before/after results, and honest product reviews. Content must feel natural and relatable — not overly promotional.",
    deliverables: [
      "3 × Instagram feed posts (high-res, on-brand aesthetic)",
      "5 × Instagram Stories (product in daily routine, before/after)",
      "1 × Instagram Reel (30–60 sec, showing application & results)",
      "Caption copy submitted for approval at least 48 hours before posting",
      "Product must be visible and clearly tagged @glowlabthailand",
    ],
    requirements: [
      "50,000+ Instagram followers",
      "Engagement rate above 3%",
      "Audience primarily female, 20–35 age range",
      "Niche: beauty, skincare, wellness, or lifestyle",
      "Must be based in Thailand or have a Thai-speaking audience",
      "No competing skincare brand partnerships in the past 3 months",
    ],
    aboutBrand:
      "Glow Lab Thailand is a homegrown premium skincare brand founded in 2019. We combine Thai botanical ingredients with modern dermatological science to create effective, clean beauty products loved by over 200,000 customers nationwide.",
    website: "glowlabthailand.com",
    verified: true,
    tags: ["Beauty", "Skincare", "Lifestyle", "50K+ Followers"],
    location: "Bangkok, TH",
    duration: "2 Weeks",
    applied: 47,
    budgetMin: 35000,
    budgetMax: 50000,
    postedDaysAgo: 0,
    promoted: true,
    thumbnailBg: "bg-[#d4e8d0]",
  },
  {
    id: "j2",
    title: "TikTok Food Creator for Restaurant Chain Campaign",
    company: "SomTam Empire",
    companyRating: 4.2,
    companyReviews: 88,
    platform: "TikTok",
    description: "We need a good TikTok creator to produce a series of videos that make people crave our food.",
    brief:
      "Create a series of short-form TikTok videos that highlight our signature dishes, behind-the-scenes kitchen moments, and customer reactions. The tone should be fun, energetic, and mouth-watering.",
    deliverables: [
      "4 × TikTok videos (15–60 seconds each)",
      "2 × TikTok Stories or photo carousels",
      "Use campaign hashtag #SomTamEmpire in all posts",
      "Include location tag for at least 2 videos",
    ],
    requirements: [
      "20,000+ TikTok followers",
      "Strong food or lifestyle content history",
      "Based in Thailand",
      "Ability to film in-restaurant content",
    ],
    aboutBrand:
      "SomTam Empire is one of Thailand's fastest-growing casual dining chains, known for authentic Isaan flavors and modern restaurant experiences across Bangkok and Chiang Mai.",
    website: "somtamempire.co.th",
    verified: true,
    tags: ["Food", "Viral", "Entertainment"],
    location: "Nationwide",
    duration: "1 Month",
    applied: 58,
    budgetMin: 20000,
    budgetMax: 50000,
    postedDaysAgo: 3,
    promoted: true,
    thumbnailBg: "bg-[#ffe8cc]",
  },
  {
    id: "j3",
    title: "YouTube Tech Reviewer — Smartphone Accessories",
    company: "TechEdge Asia",
    companyRating: 4.7,
    companyReviews: 127,
    platform: "YouTube",
    description: "Looking for a tech YouTuber with genuine passion for gadgets to produce a detailed review.",
    brief:
      "Produce an in-depth YouTube review of our latest smartphone accessory lineup, covering unboxing, real-world usage, and an honest pros/cons summary for your audience.",
    deliverables: [
      "1 × YouTube review video (8–12 minutes)",
      "1 × YouTube Shorts teaser",
      "Include affiliate link in description",
      "Submit script outline for approval before filming",
    ],
    requirements: [
      "10,000+ YouTube subscribers",
      "Tech or gadget review niche",
      "English or Thai language content",
      "Previous unboxing/review examples required",
    ],
    aboutBrand:
      "TechEdge Asia distributes premium mobile accessories across Southeast Asia, partnering with global brands to bring innovative tech products to Thai consumers.",
    website: "techedge.asia",
    verified: true,
    tags: ["Tech", "Review", "Unboxing"],
    location: "Nationwide",
    duration: "1 Month",
    applied: 54,
    budgetMin: 15000,
    budgetMax: 25000,
    postedDaysAgo: 5,
    thumbnailBg: "bg-[#cce4ff]",
  },
  {
    id: "j4",
    title: "Fashion & Style Content Creator — Seasonal Collection",
    company: "Zara TH Studio",
    companyRating: 4.4,
    companyReviews: 56,
    platform: "Instagram",
    description: "We're launching our Summer 2026 collection and need a fashion creator to showcase key pieces.",
    brief:
      "We're launching our Summer 2026 collection and need a fashion-forward creator to showcase key pieces through styled lookbooks and lifestyle content on Instagram.",
    deliverables: [
      "2 × Instagram feed posts (styled outfit shots)",
      "3 × Instagram Stories (try-on, styling tips)",
      "1 × Instagram Reel (outfit transition or GRWM)",
      "Tag @zarathstudio and use #ZaraTHSummer26",
    ],
    requirements: [
      "30,000+ Instagram followers",
      "Fashion or lifestyle niche",
      "High-quality photography aesthetic",
      "Based in Chiang Mai or Bangkok",
    ],
    aboutBrand:
      "Zara TH Studio curates contemporary fashion collections for the modern Thai consumer, blending international trends with local style sensibilities.",
    website: "zarathstudio.com",
    verified: false,
    tags: ["Fashion", "Style", "Summer"],
    location: "Chiang Mai, TH",
    duration: "2 Weeks",
    applied: 112,
    budgetMin: 12000,
    budgetMax: 18000,
    postedDaysAgo: 3,
    thumbnailBg: "bg-[#f0e6ff]",
  },
  {
    id: "j5",
    title: "Podcast Guest & Sponsor Mention — Finance & Investment",
    company: "WealthWise TH",
    companyRating: 4.7,
    companyReviews: 41,
    platform: "Podcast",
    description: "Our finance podcast is looking for a credible guest speaker for one episode focused on young adults.",
    brief:
      "Join us as a guest on WealthWise TH podcast for a 45-minute episode discussing personal finance and investment strategies for young Thai adults aged 22–30.",
    deliverables: [
      "1 × 45-minute podcast guest appearance",
      "1 × 60-second sponsor read during the episode",
      "Share episode on your social channels",
    ],
    requirements: [
      "Demonstrated expertise in finance or investment",
      "Clear, engaging speaking style",
      "Existing audience in finance or career niche",
      "Available for remote recording",
    ],
    aboutBrand:
      "WealthWise TH is Thailand's leading personal finance podcast, helping young professionals build wealth through practical, actionable advice.",
    website: "wealthwise.th",
    verified: true,
    tags: ["Finance", "Investment", "YoungAdults"],
    location: "Remote",
    duration: "1–3 Days",
    applied: 23,
    budgetMin: 6000,
    budgetMax: 12000,
    postedDaysAgo: 1,
    thumbnailBg: "bg-[#fce8ee]",
  },
  {
    id: "j6",
    title: "Facebook Live Host for Electronics Flash Sale Event",
    company: "LaeOlin Partner Brand",
    companyRating: 4.3,
    companyReviews: 95,
    platform: "Facebook",
    description: "We need an energetic, camera-confident host for a 3-hour Facebook Live flash sale event.",
    brief:
      "Host a 3-hour Facebook Live flash sale event showcasing electronics deals. You must be energetic, bilingual (Thai/English), and experienced with live selling.",
    deliverables: [
      "1 × 3-hour Facebook Live session",
      "Pre-event teaser post on your page",
      "Post-event recap Stories",
    ],
    requirements: [
      "Experience hosting live selling sessions",
      "Fluent Thai and conversational English",
      "Available on the scheduled event date",
      "Confident on-camera presence",
    ],
    aboutBrand:
      "LaeOlin Partner Brand is a leading electronics distributor running flash sale events across Facebook and Lazada for top consumer tech brands.",
    website: "laeolin.co.th",
    verified: false,
    tags: ["Electronics", "Live Selling", "Thai-English"],
    location: "Bangkok, TH",
    duration: "1–3 Days",
    applied: 41,
    budgetMin: 8000,
    budgetMax: 9000,
    postedDaysAgo: 2,
    thumbnailBg: "bg-[#e3eeff]",
  },
  {
    id: "j7",
    title: "Blog Article — Travel & Wellness Resort in Phuket",
    company: "The Resort Phuket",
    companyRating: 3.0,
    companyReviews: 22,
    platform: "Blog",
    description: "We invite a travel or wellness blogger for a complimentary 2-night stay at our resort.",
    brief:
      "We invite a travel or wellness blogger for a complimentary 2-night stay at our resort in exchange for a detailed blog article and social media coverage.",
    deliverables: [
      "1 × SEO-optimised blog article (800+ words)",
      "5 × Instagram Stories during the stay",
      "2 × Instagram feed posts",
      "Include 3 do-follow backlinks to our website",
    ],
    requirements: [
      "Established travel or wellness blog",
      "Minimum 5,000 monthly blog visitors",
      "High-quality photography skills",
      "Available for a 2-night stay within campaign period",
    ],
    aboutBrand:
      "The Resort Phuket is a boutique wellness retreat on the Andaman coast, offering spa treatments, yoga classes, and farm-to-table dining in a serene tropical setting.",
    website: "theresortphuket.com",
    verified: false,
    tags: ["Travel", "Wellness", "SEO"],
    location: "Phuket, TH",
    duration: "1 Month",
    applied: 79,
    budgetMin: 6000,
    budgetMax: 10000,
    postedDaysAgo: 4,
    thumbnailBg: "bg-[#d0f0e8]",
  },
  {
    id: "j8",
    title: "TikTok Fitness Creator — Protein Supplement Brand",
    company: "LeanFuel Thailand",
    companyRating: 4.5,
    companyReviews: 198,
    platform: "TikTok",
    description: "We are looking for an active TikTok fitness creator to promote our new Whey Pro Series brand.",
    brief:
      "Promote our new Whey Pro Series through authentic gym and workout content. Show real usage, taste tests, and results over a 2-week period.",
    deliverables: [
      "3 × TikTok workout videos featuring the product",
      "2 × TikTok taste-test or review clips",
      "Use #LeanFuelTH and tag @leanfuelthailand",
    ],
    requirements: [
      "15,000+ TikTok followers",
      "Fitness, gym, or health niche",
      "Active posting schedule (3+ posts/week)",
      "Must disclose sponsored content per platform guidelines",
    ],
    aboutBrand:
      "LeanFuel Thailand produces premium protein supplements for fitness enthusiasts, with products available at major retailers and online across the country.",
    website: "leanfuelthailand.com",
    verified: true,
    tags: ["Fitness", "Health", "Gym"],
    location: "Nationwide",
    duration: "1 Month",
    applied: 53,
    budgetMin: 18000,
    budgetMax: 28000,
    postedDaysAgo: 3,
    thumbnailBg: "bg-[#fff3cc]",
  },
];

export function getJobById(id: string): Job | undefined {
  return MOCK_JOBS.find((job) => job.id === id);
}

export function getRelatedJobs(job: Job, limit = 1): Job[] {
  return MOCK_JOBS.filter((j) => j.id !== job.id && j.platform === job.platform).slice(0, limit);
}

export function formatBudget(n: number): string {
  if (n >= 1000) return `฿${(n / 1000).toFixed(0)}K`;
  return `฿${n.toLocaleString()}`;
}

export function formatBudgetRange(min: number, max: number): string {
  return `฿${min.toLocaleString()} – ฿${max.toLocaleString()}`;
}

export function formatPosted(daysAgo: number): string {
  if (daysAgo === 0) return "Today";
  if (daysAgo === 1) return "Yesterday";
  return `${daysAgo}d ago`;
}
