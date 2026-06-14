import type { Platform } from "./mock-jobs";

export const INFLUENCER_CATEGORY_KEYS = [
  "beauty",
  "fashion",
  "food",
  "tech",
  "fitness",
  "travel",
  "finance",
  "gaming",
  "parenting",
  "home",
] as const;

export type InfluencerCategoryKey = (typeof INFLUENCER_CATEGORY_KEYS)[number];

export type Influencer = {
  id: string;
  name: string;
  handle: string;
  platform: Platform;
  categories: InfluencerCategoryKey[];
  location: string;
  followers: number;
  rating: number;
  reviews: number;
  bio: string;
  about: string;
  contentTypes: string[];
  highlights: string[];
  audienceNotes: string[];
  engagementRate: number;
  avgViews: number;
  responseTime: string;
  collaborations: number;
  avatarBg: string;
  verified?: boolean;
  featured?: boolean;
};

export const MOCK_INFLUENCERS: Influencer[] = [
  {
    id: "inf1",
    name: "Nina Somchai",
    handle: "@nina.glows",
    platform: "Instagram",
    categories: ["beauty", "fashion"],
    location: "Bangkok, TH",
    followers: 128000,
    rating: 4.9,
    reviews: 84,
    bio: "Skincare routines, GRWM, and honest product reviews for everyday glow.",
    about:
      "Nina creates approachable beauty content for Thai women who want realistic skincare routines without the hype. Her audience trusts her for honest before/after reviews and daily GRWM videos.",
    contentTypes: ["Instagram Reels", "Feed posts", "Stories", "GRWM videos"],
    highlights: [
      "Glow Lab Thailand launch — 2.1M total reach",
      "Sephora TH skincare week — top-performing creator",
      "Local sunscreen brand campaign — 4.8% engagement",
    ],
    audienceNotes: [
      "Primary audience: women 20–32 in Bangkok and major cities",
      "Strong interest in skincare, K-beauty, and affordable luxury",
      "Average story completion rate above 70%",
    ],
    engagementRate: 4.2,
    avgViews: 45000,
    responseTime: "Within 12 hours",
    collaborations: 38,
    avatarBg: "bg-[#fce8ee]",
    verified: true,
    featured: true,
  },
  {
    id: "inf2",
    name: "Tom Foodie",
    handle: "@tom.eats.th",
    platform: "TikTok",
    categories: ["food", "travel"],
    location: "Chiang Mai, TH",
    followers: 89000,
    rating: 4.6,
    reviews: 52,
    bio: "Street food hunts and hidden cafe finds across Thailand.",
    about:
      "Tom documents hidden food spots and local cafe culture across Thailand. His short-form reviews are fast-paced, authentic, and optimized for discovery on TikTok.",
    contentTypes: ["TikTok reviews", "Street food vlogs", "Cafe tours"],
    highlights: [
      "Tourism Authority food series — 1.5M views",
      "Delivery app restaurant promo — 320K views",
      "Chiang Mai cafe crawl — viral local feature",
    ],
    audienceNotes: [
      "Food lovers and travelers aged 22–40",
      "High share rate on cafe and dessert content",
      "Strong regional following in Northern Thailand",
    ],
    engagementRate: 5.1,
    avgViews: 62000,
    responseTime: "Within 24 hours",
    collaborations: 24,
    avatarBg: "bg-[#ffe8cc]",
  },
  {
    id: "inf3",
    name: "Arkin Tech",
    handle: "@arkin.unbox",
    platform: "YouTube",
    categories: ["tech", "gaming"],
    location: "Bangkok, TH",
    followers: 245000,
    rating: 4.8,
    reviews: 131,
    bio: "Gadget reviews, comparisons, and setup guides in Thai and English.",
    about:
      "Arkin produces in-depth gadget reviews and comparison videos for Thai tech enthusiasts. His bilingual content reaches both local and regional audiences interested in smartphones, laptops, and gaming gear.",
    contentTypes: ["YouTube reviews", "Unboxing", "Comparison videos", "Setup guides"],
    highlights: [
      "Samsung Galaxy launch coverage — 890K views",
      "Gaming laptop buyer's guide — top search ranking",
      "Wireless earbuds roundup — 12 min avg watch time",
    ],
    audienceNotes: [
      "Tech-savvy audience aged 18–35",
      "High purchase intent on gadget recommendations",
      "Strong male skew with growing female segment",
    ],
    engagementRate: 3.8,
    avgViews: 78000,
    responseTime: "Within 8 hours",
    collaborations: 56,
    avatarBg: "bg-[#cce4ff]",
    verified: true,
  },
  {
    id: "inf4",
    name: "Maya Fit",
    handle: "@maya.moves",
    platform: "Instagram",
    categories: ["fitness", "fashion"],
    location: "Phuket, TH",
    followers: 67000,
    rating: 4.7,
    reviews: 39,
    bio: "Home workouts, activewear styling, and wellness tips.",
    about:
      "Maya blends fitness coaching with activewear styling for women who prefer home workouts and sustainable wellness habits. Her content is motivational without being intimidating.",
    contentTypes: ["Workout Reels", "Activewear lookbooks", "Wellness tips"],
    highlights: [
      "Sportswear brand collab — 180K reach",
      "Home workout challenge — 2-week series",
      "Protein supplement review — high save rate",
    ],
    audienceNotes: [
      "Women 25–38 interested in fitness and lifestyle",
      "Strong engagement on workout tutorials",
      "Audience values practical, equipment-free routines",
    ],
    engagementRate: 4.5,
    avgViews: 28000,
    responseTime: "Within 18 hours",
    collaborations: 19,
    avatarBg: "bg-[#d0f0e8]",
  },
  {
    id: "inf5",
    name: "James Wallet",
    handle: "@james.wallet",
    platform: "YouTube",
    categories: ["finance", "tech"],
    location: "Remote",
    followers: 156000,
    rating: 4.5,
    reviews: 67,
    bio: "Personal finance basics and investing explainers for young professionals.",
    about:
      "James breaks down personal finance, investing, and fintech products for young Thai professionals. His explainers focus on clarity, trust, and actionable takeaways.",
    contentTypes: ["Finance explainers", "App reviews", "Investing basics"],
    highlights: [
      "Digital bank app review — 420K views",
      "ETF investing series — 6-part playlist",
      "Tax season tips — high comment engagement",
    ],
    audienceNotes: [
      "Young professionals aged 24–35",
      "Audience interested in saving, investing, and side income",
      "High trust scores on financial product reviews",
    ],
    engagementRate: 3.2,
    avgViews: 55000,
    responseTime: "Within 24 hours",
    collaborations: 31,
    avatarBg: "bg-[#e8e0ff]",
  },
  {
    id: "inf6",
    name: "Ploy Travels",
    handle: "@ploy.wanders",
    platform: "Instagram",
    categories: ["travel", "food"],
    location: "Nationwide",
    followers: 203000,
    rating: 4.8,
    reviews: 98,
    bio: "Luxury stays, local eats, and itinerary ideas across ASEAN.",
    about:
      "Ploy curates travel itineraries that mix boutique stays with local food experiences across ASEAN. Her aesthetic content inspires both weekend getaways and longer trips.",
    contentTypes: ["Travel Reels", "Hotel reviews", "Itinerary guides", "Food diaries"],
    highlights: [
      "Boutique hotel chain campaign — 3.2M impressions",
      "Airline travel series — branded partnership",
      "Krabi itinerary guide — saved 45K times",
    ],
    audienceNotes: [
      "Travel enthusiasts aged 25–42",
      "High interest in boutique hotels and food tourism",
      "Audience spans Thailand and regional ASEAN markets",
    ],
    engagementRate: 4.0,
    avgViews: 52000,
    responseTime: "Within 10 hours",
    collaborations: 44,
    avatarBg: "bg-[#d4e8d0]",
    verified: true,
    featured: true,
  },
  {
    id: "inf7",
    name: "Beam Gamer",
    handle: "@beam.plays",
    platform: "TikTok",
    categories: ["gaming", "tech"],
    location: "Bangkok, TH",
    followers: 312000,
    rating: 4.4,
    reviews: 76,
    bio: "Mobile gaming clips, live highlights, and gear recommendations.",
    about:
      "Beam creates high-energy mobile gaming content with clip highlights, gear reviews, and live stream recaps. He is one of Thailand's most watched gaming creators on TikTok.",
    contentTypes: ["Gaming clips", "Live highlights", "Gear reviews", "Game tutorials"],
    highlights: [
      "Mobile game launch — 4.8M views in first week",
      "Gaming headset review — viral clip",
      "Esports event coverage — live recap series",
    ],
    audienceNotes: [
      "Gamers aged 16–28, predominantly male",
      "Peak engagement on mobile game launches",
      "Strong crossover audience for gaming peripherals",
    ],
    engagementRate: 6.2,
    avgViews: 95000,
    responseTime: "Within 6 hours",
    collaborations: 62,
    avatarBg: "bg-[#f0e6ff]",
  },
  {
    id: "inf8",
    name: "Mint Mom",
    handle: "@mint.momlife",
    platform: "Instagram",
    categories: ["parenting", "home"],
    location: "Nonthaburi, TH",
    followers: 54000,
    rating: 4.6,
    reviews: 41,
    bio: "Family routines, nursery ideas, and practical product picks for parents.",
    about:
      "Mint shares practical parenting tips, nursery organization, and honest product reviews for Thai parents. Her content feels relatable and community-driven.",
    contentTypes: ["Parenting tips", "Product reviews", "Home organization", "Daily routines"],
    highlights: [
      "Baby care brand campaign — high conversion",
      "Nursery makeover series — 120K reach",
      "School prep checklist — top saved post",
    ],
    audienceNotes: [
      "Parents aged 28–40, mostly mothers",
      "Strong trust on baby and home product recommendations",
      "Community-driven comments and DMs",
    ],
    engagementRate: 5.4,
    avgViews: 22000,
    responseTime: "Within 20 hours",
    collaborations: 17,
    avatarBg: "bg-[#fff3cc]",
  },
];

export function formatFollowers(count: number): string {
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`;
  if (count >= 1_000) return `${Math.round(count / 1_000)}K`;
  return String(count);
}

export function formatAvgViews(count: number): string {
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`;
  if (count >= 1_000) return `${Math.round(count / 1_000)}K`;
  return String(count);
}

export function getInfluencerById(id: string): Influencer | undefined {
  return MOCK_INFLUENCERS.find((inf) => inf.id === id);
}

export function getRelatedInfluencers(
  influencer: Influencer,
  limit = 3
): Influencer[] {
  return MOCK_INFLUENCERS.filter(
    (inf) =>
      inf.id !== influencer.id &&
      (inf.platform === influencer.platform ||
        inf.categories.some((cat) => influencer.categories.includes(cat)))
  ).slice(0, limit);
}

export function filterInfluencersByCategories(
  influencers: Influencer[],
  selected: InfluencerCategoryKey[]
): Influencer[] {
  if (selected.length === 0) return influencers;
  return influencers.filter((inf) =>
    inf.categories.some((cat) => selected.includes(cat))
  );
}
