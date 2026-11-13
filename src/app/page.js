import HomeClient from "./HomeClient";
import { pageMetadata } from "@/lib/seo";

const base = pageMetadata({
  title: "HeyBuddy | AI-Native Digital Transformation & Immersive Tech",
  description:
    "HeyBuddy builds AI, AR/VR, metaverse, Web3, CGI and game development solutions for brands in India and worldwide, from strategy to launch.",
  path: "/",
});

export const metadata = {
  ...base,
  // The homepage title already carries the brand; skip the "| HeyBuddy" suffix.
  title: { absolute: "HeyBuddy | AI-Native Digital Transformation & Immersive Tech" },
};

export default function Page() {
  return <HomeClient />;
}
