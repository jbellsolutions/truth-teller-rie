export interface Track {
  id: string;
  title: string;
  album: string;
  year: number;
  duration: string;
  durationSeconds: number;
  plays: number;
  color: string;
  image?: string;
  reverbId?: string;
}

// Real tracks from Truth Teller Rie's ReverbNation
export const TRACKS: Track[] = [
  {
    id: "1",
    title: "Frequency",
    album: "The Broadcast",
    year: 2026,
    duration: "3:42",
    durationSeconds: 222,
    plays: 128470,
    color: "#C8956C",
    image: "/images/album-cover.jpg",
    reverbId: "35311830",
  },
  {
    id: "2",
    title: "Mirrors Don't Lie",
    album: "The Broadcast",
    year: 2026,
    duration: "4:15",
    durationSeconds: 255,
    plays: 92030,
    color: "#5B7B9C",
    image: "/images/album-cover.jpg",
    reverbId: "35311903",
  },
  {
    id: "3",
    title: "Crown the Ground",
    album: "Singles",
    year: 2025,
    duration: "3:58",
    durationSeconds: 238,
    plays: 153410,
    color: "#5B8C5A",
    image: "/images/photo-3.jpg",
    reverbId: "35327848",
  },
  {
    id: "4",
    title: "Roots & Routes",
    album: "Singles",
    year: 2025,
    duration: "5:02",
    durationSeconds: 302,
    plays: 78920,
    color: "#D4A24E",
    image: "/images/photo-6.jpg",
    reverbId: "35311871",
  },
  {
    id: "5",
    title: "The Come Up",
    album: "Classics",
    year: 2019,
    duration: "4:33",
    durationSeconds: 273,
    plays: 245600,
    color: "#C25B56",
    image: "/images/photo-1.jpg",
    reverbId: "24104177",
  },
  {
    id: "6",
    title: "Soul Food",
    album: "The Broadcast",
    year: 2026,
    duration: "3:21",
    durationSeconds: 201,
    plays: 214500,
    color: "#8B6B4E",
    image: "/images/album-cover.jpg",
    reverbId: "35292906",
  },
  {
    id: "7",
    title: "Still Waters",
    album: "Classics",
    year: 2016,
    duration: "4:47",
    durationSeconds: 287,
    plays: 186720,
    color: "#5B7B9C",
    image: "/images/photo-2.jpg",
    reverbId: "8906314",
  },
  {
    id: "8",
    title: "Blueprint",
    album: "Singles",
    year: 2022,
    duration: "3:55",
    durationSeconds: 235,
    plays: 145210,
    color: "#D4A574",
    image: "/images/photo-1.jpg",
    reverbId: "26656343",
  },
  {
    id: "9",
    title: "No Filter",
    album: "Singles",
    year: 2023,
    duration: "4:10",
    durationSeconds: 250,
    plays: 112340,
    color: "#C8956C",
    image: "/images/photo-3.jpg",
    reverbId: "30023260",
  },
];

export const FEATURED_TRACK = TRACKS[0];

// Real YouTube video IDs from the site
export const YOUTUBE_VIDEOS = [
  { id: "yT03PRjLbXw", title: "Truth Teller Rie - Official Video" },
  { id: "XnO3T00gaGs", title: "Truth Teller Rie - Music Video" },
  { id: "YDlRKGxd3X0", title: "Truth Teller Rie - Performance" },
  { id: "4TbELiXy0kA", title: "Truth Teller Rie - Visual" },
  { id: "ajyN-5ehU8k", title: "Truth Teller Rie - Live" },
];

// Real gallery images from the site
export const GALLERY_IMAGES = [
  { src: "/images/photo-1.jpg", alt: "Truth Teller Rie Photo 1" },
  { src: "/images/photo-2.jpg", alt: "Truth Teller Rie Photo 2" },
  { src: "/images/photo-3.jpg", alt: "Truth Teller Rie Photo 3" },
  { src: "/images/photo-4.jpg", alt: "Truth Teller Rie Photo 4" },
  { src: "/images/photo-5.jpg", alt: "Truth Teller Rie Photo 5" },
  { src: "/images/photo-6.jpg", alt: "Truth Teller Rie Photo 6" },
  { src: "/images/photo-7.jpg", alt: "Truth Teller Rie Photo 7" },
  { src: "/images/photo-8.jpg", alt: "Truth Teller Rie Photo 8" },
  { src: "/images/photo-9.jpg", alt: "Truth Teller Rie Photo 9" },
  { src: "/images/photo-10.jpg", alt: "Truth Teller Rie Photo 10" },
];

export const ALBUM_COVER = "/images/album-cover.jpg";

// Real social links
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/truth_teller_rie/",
  twitter: "https://x.com/WeSeeLies/",
  spotify: "https://open.spotify.com/artist/58hJvM3TtrM5VxLELKdmWO",
  appleMusic: "https://music.apple.com/us/artist/truth-teller-rie/1436897133",
  soundCloud: "https://soundcloud.com/young-rie-the-truth",
  merchStore: "https://eliteaffairs-shop.fourthwall.com/products/truth-tellers-hoodie",
};

// Real bio from the site
export const ARTIST_BIO = `Truth Teller RIE is a defining voice in the Trap Soul and Hip-Hop landscape, blending raw, soulful lyricism with captivating melodies. More than just an artist, RIE is a self-described reparationist and proponent of Black love, utilizing his platform to speak truth to power. His work centers on authenticity, aiming to foster financial independence and psychological freedom while countering the systemic devaluation of Black culture.`;

export interface FanProfile {
  name: string;
  initial: string;
  level: string;
  streak: number;
  totalPlays: number;
  badges: string[];
  joinedDate: string;
  avatar?: string;
}

export const DEMO_FANS: FanProfile[] = [
  { name: "Marcus", initial: "M", level: "Superfan", streak: 47, totalPlays: 247, badges: ["Superfan", "First 100", "30-Day Streak"], joinedDate: "Jan 2025" },
  { name: "Aisha", initial: "A", level: "Superfan", streak: 32, totalPlays: 189, badges: ["Superfan", "Day One", "Collab Crew"], joinedDate: "Feb 2025" },
  { name: "Jordan", initial: "J", level: "Regular", streak: 14, totalPlays: 92, badges: ["Regular", "7-Day Streak"], joinedDate: "Mar 2025" },
  { name: "Kai", initial: "K", level: "Superfan", streak: 61, totalPlays: 312, badges: ["Superfan", "First 100", "60-Day Streak", "Top Listener"], joinedDate: "Dec 2024" },
  { name: "Devon", initial: "D", level: "Listener", streak: 5, totalPlays: 34, badges: ["Listener"], joinedDate: "Mar 2026" },
  { name: "Nia", initial: "N", level: "Regular", streak: 21, totalPlays: 156, badges: ["Regular", "First 100", "14-Day Streak"], joinedDate: "Jan 2025" },
];

// Real stats
export const STATS = {
  totalStreams: "1M+",
  followers: "50K+",
  tracks: "25+",
  subscribers: 2847,
  activeListeners: 342,
  weeklyGrowth: 28,
};
