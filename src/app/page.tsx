import { HeroSection } from "@/components/sections/HeroSection";
import { MusicSection } from "@/components/sections/MusicSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { VideoSection } from "@/components/sections/VideoSection";
import { DropSection } from "@/components/sections/DropSection";
import { CommunitySection } from "@/components/sections/CommunitySection";
import { CollabSection } from "@/components/sections/CollabSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { MerchSection } from "@/components/sections/MerchSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MusicSection />
      <GallerySection />
      <VideoSection />
      <DropSection />
      <CommunitySection />
      <CollabSection />
      <MissionSection />
      <MerchSection />
      <NewsletterSection />
      <FooterSection />
    </>
  );
}
