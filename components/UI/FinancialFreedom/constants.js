import ic_banknotes from "@/public/svgs/ic_banknotes.svg";
import ic_circle_stack from "@/public/svgs/ic_circle_stack.svg";
import ic_arrows_left_right from "@/public/svgs/ic_arrows_right_left.svg";

// For desktop
export const desktopHeaderPhrase = ["Sustainable Development,", "Your Way"];
export const desktopParagraphPhrase = [
  "We believe that infrastructure development should be responsible and impactful.",
  "That's why we deliver excellence across every project.",
];
export const desktopBriefNotePhrase = [
  "Hydrological solutions,",
  "agricultural support, and",
  "construction expertise, all in",
  "one partnership.",
];

// For mobile
export const mobileHeaderPhrase = ["Sustainable", "Development, Your Way"];
export const mobileParagraphPhrase = [
  "We believe that infrastructure development should be",
  "responsible and impactful. That's why we deliver",
  "excellence across every project.",
];

export const mobileBriefNotePhrase = [
  "Hydrological",
  " solutions,",
  "agricultural",
  " support,",
  "and construction",
  "expertise, all",
  "in one partnership.",
];

export const edges = [
  {
    point: "150 Years Combined Experience",
    details:
      "Tap into over a century of expertise across our network. Your projects benefit from proven knowledge and trusted partnerships.",
    icon: ic_banknotes, // Replace with experience/award icon
  },
  {
    point: "Operating Across 25+ Countries",
    details:
      "Work with us across West Africa without limitations. We deliver services seamlessly from Ghana to Senegal and beyond.",
    icon: ic_circle_stack, // Replace with map/globe icon
  },
  {
    point: "Comprehensive Service Portfolio",
    details:
      "Access hydrological, agricultural, construction, and logistics solutions from one reliable partner. Complete support for your entire project lifecycle.",
    icon: ic_arrows_left_right, // Replace with services/portfolio icon
  },
];
