// HeyBuddy's own facts, used on comparison and landing pages.
// Only list what the site already states publicly; keep this in sync with
// the About and service pages.
export const HEYBUDDY = {
  name: "HeyBuddy",
  hq: "Gurugram, Haryana, India",
  address: "SupremeWork, Second floor, Eros City Square Mall, Sector 49, Gurugram 122018",
  founders: "Avdhesh Kashyap (Founder & CEO) and Kapil Panchal (Founder & COO)",
  positioning:
    "An AI-native creative technology studio: immersive tech (AR, VR, metaverse, CGI, 3D billboards), games, AI and custom software under one team.",
  clients: ["Google", "Amazon", "Canon", "Nestlé", "Kia", "Bloomberg", "Da Milano"],
};

// Services HeyBuddy offers, with the page that covers each one.
export const SERVICES = [
  { key: "ai", label: "AI development", href: "/services/ai-development" },
  { key: "aiads", label: "AI ad creatives", href: "/services/ai-ads" },
  { key: "ar", label: "AR development", href: "/services/ar-development" },
  { key: "vr", label: "VR development", href: "/services/vr-development" },
  { key: "metaverse", label: "Metaverse development", href: "/services/metaverse" },
  { key: "web3", label: "Web3 & blockchain", href: "/services/web3" },
  { key: "game", label: "Game development", href: "/services/game-development" },
  { key: "cgi", label: "CGI & VFX", href: "/services/cgi" },
  { key: "3d", label: "3D modelling", href: "/services/3d-modeling" },
  { key: "billboard", label: "3D anamorphic billboards", href: "/services/billboard" },
  { key: "software", label: "Custom software", href: "/services/custom-software" },
  { key: "mobile", label: "Mobile app development", href: "/services/custom-software" },
  { key: "marketing", label: "Digital marketing", href: "/services/digital-marketing" },
  { key: "labs", label: "Robotics & VR/AR labs for schools", href: "/services/robotics-lab" },
];

// HeyBuddy's coverage of the list above (mobile apps are built as part of
// custom software and AR/VR projects, not sold as a standalone line).
export const HEYBUDDY_COVERAGE = {
  ai: true, aiads: true, ar: true, vr: true, metaverse: true, web3: true, game: true,
  cgi: true, "3d": true, billboard: true, software: true, mobile: true, marketing: true, labs: true,
};
