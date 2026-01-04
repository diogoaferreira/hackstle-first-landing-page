export const metadata = {
  title: "Hackstle | Darkweb Threat Intelligence",
  description:
    "Hackstle monitors darkweb chatter, leaked credentials, CVEs, and exposed assets to help teams act on threats fast.",
};

import Hero from "@/components/hero-home";
import BlogPreview from "@/components/blog-preview";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import Cta from "@/components/cta";
import Differentiators from "@/components/differentiators";
import Certifications from "@/components/certifications";
import HashScrollHandler from "@/components/hash-scroll-handler";

export default function Home() {
  return (
    <>
      <HashScrollHandler />
      <Hero />
      <BlogPreview />
      <BusinessCategories />
      <FeaturesPlanet />
      <Differentiators />
      <Certifications />
      <Cta />
    </>
  );
}
