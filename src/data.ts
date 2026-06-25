export type Category = "Wedding Films" | "Commercial Ads" | "Social Media Reels" | "Cinematic Edits";

export interface Project {
  id: string;
  title: string;
  category: Category;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

// Sample royalty-free videos from Google's GCS bucket
const SAMPLE_VIDEOS = [
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
];

export const projects: Project[] = [
  {
    id: "p1",
    title: "Aria & Marcus — Wedding Film",
    category: "Wedding Films",
    thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[0],
    description: "A cinematic wedding film capturing the emotional journey of Aria and Marcus's special day.",
  },
  {
    id: "p2",
    title: "Lumière Fragrance — TVC",
    category: "Commercial Ads",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[1],
    description: "Luxury perfume commercial with cinematic lighting and elegant motion design.",
  },
  {
    id: "p3",
    title: "Sunset Vibes — Travel Reel",
    category: "Social Media Reels",
    thumbnail: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[2],
    description: "Vertical travel reel crafted for Instagram with punchy transitions and color grading.",
  },
  {
    id: "p4",
    title: "Nocturne — Short Film Edit",
    category: "Cinematic Edits",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[3],
    description: "Atmospheric short film edit with tight pacing and moody color science.",
  },
  {
    id: "p5",
    title: "Saoirse & Daniel — Forest Wedding",
    category: "Wedding Films",
    thumbnail: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[4],
    description: "An intimate forest ceremony edit with cinematic slow-motion and live sound design.",
  },
  {
    id: "p6",
    title: "Aurora Apparel — Fashion Ad",
    category: "Commercial Ads",
    thumbnail: "https://images.unsplash.com/photo-1551的天空?w=800&q=80".replace("天空", "861974106d7e"),
    videoUrl: SAMPLE_VIDEOS[5],
    description: "High-end fashion commercial with rhythmic editing and bold typographic accents.",
  },
  {
    id: "p7",
    title: "City Pulse — Lifestyle Reel",
    category: "Social Media Reels",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[6],
    description: "Energetic lifestyle reel with snappy transitions and trending audio sync.",
  },
  {
    id: "p8",
    title: "Echoes — Cinematic Travel Film",
    category: "Cinematic Edits",
    thumbnail: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[7],
    description: "A meditative travel film edit exploring solitude and landscape across Iceland.",
  },
  {
    id: "p9",
    title: "Halcyon — Luxury Resort Ad",
    category: "Commercial Ads",
    thumbnail: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[0],
    description: "Cinematic resort advertisement emphasizing atmosphere and elegant motion.",
  },
  {
    id: "p10",
    title: "Whisper — Wedding Highlight",
    category: "Wedding Films",
    thumbnail: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[1],
    description: "A short, emotionally-driven wedding highlight film under five minutes.",
  },
  {
    id: "p11",
    title: "Neon Nights — Club Reel",
    category: "Social Media Reels",
    thumbnail: "https://images.unsplash.com/photo-1571266028243-d220c6a51e2c?w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[2],
    description: "Bass-driven club reel with neon grading and beat-synced transitions.",
  },
  {
    id: "p12",
    title: "Meridian — Documentary Cut",
    category: "Cinematic Edits",
    thumbnail: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    videoUrl: SAMPLE_VIDEOS[3],
    description: "Long-form documentary edit weaving archival and original footage together.",
  },
];

export const services = [
  {
    title: "Wedding Editing",
    description: "Cinematic wedding films and highlight reels that capture every emotion of your big day.",
    icon: "💍",
  },
  {
    title: "Reel Editing",
    description: "Punchy vertical reels for Instagram and TikTok with trending audio and snappy transitions.",
    icon: "📱",
  },
  {
    title: "YouTube Video Editing",
    description: "Long-form YouTube editing with retention-driven pacing, b-roll layering, and motion graphics.",
    icon: "▶️",
  },
  {
    title: "Advertisement Editing",
    description: "Premium commercial edits for brands, products, and campaigns — from TVC to digital.",
    icon: "🎬",
  },
  {
    title: "Color Grading",
    description: "Custom color science using DaVinci Resolve to give your footage a cinematic signature look.",
    icon: "🎨",
  },
  {
    title: "Motion Graphics",
    description: "Kinetic typography, logo animations, and lower thirds that elevate your story.",
    icon: "✨",
  },
];

export const skills = [
  { name: "Editing & Storytelling", value: 95 },
  { name: "Color Grading (DaVinci Resolve)", value: 90 },
  { name: "Premiere Pro", value: 95 },
  { name: "After Effects & Motion Graphics", value: 85 },
  { name: "Sound Design", value: 80 },
  { name: "Photoshop & Compositing", value: 88 },
];

export const timeline = [
  {
    year: "2024 — Present",
    role: "Senior Freelance Editor",
    company: "Independent Studio",
    description: "Working with international brands and creators on cinematic commercials and documentary cuts.",
  },
  {
    year: "2022 — 2024",
    role: "Lead Video Editor",
    company: "Studio Lumen",
    description: "Led the edit suite on 40+ commercial projects, mentored junior editors, and built color pipelines.",
  },
  {
    year: "2021 — 2022",
    role: "Junior Editor & Colorist",
    company: "Northstar Productions",
    description: "Cut wedding films, social campaigns, and short-form content while assisting on color grades.",
  },
  {
    year: "2020",
    role: "Started Filmmaking Journey",
    company: "Self-taught",
    description: "Picked up a camera, learned DaVinci Resolve, and never looked back.",
  },
];

export const software = [
  { name: "DaVinci Resolve", tag: "Primary Suite", color: "from-rose-500 to-orange-500" },
  { name: "Premiere Pro", tag: "Daily Driver", color: "from-violet-500 to-indigo-500" },
  { name: "After Effects", tag: "Motion", color: "from-cyan-500 to-blue-500" },
  { name: "Photoshop", tag: "Compositing", color: "from-blue-500 to-sky-500" },
];