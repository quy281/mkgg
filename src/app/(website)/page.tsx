import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import VideoCTASection from "@/components/sections/VideoCTASection";
import SkillsSection from "@/components/sections/SkillsSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import BlogSection from "@/components/sections/BlogSection";
import FAQSection from "@/components/sections/FAQSection";
import {
  companyInfo,
  heroSlides,
  blogPosts as mockPosts,
  projects as mockProjects,
  services as mockServices
} from "@/data/site-data";

const RibbonSeparator = () => (
  <div className="section-ribbon">
    <div className="ribbon-line-glow" />
    <div className="ribbon-center">
      <span className="ribbon-icon">MKG</span>
    </div>
  </div>
);

export default function HomePage() {
  const slides = heroSlides.map(s => s.image);
  const slogan = companyInfo.slogan;
  const aboutText = companyInfo.aboutText;
  const skills = companyInfo.skills;
  const stats = companyInfo.stats;
  const videoUrl = companyInfo.videoUrl;

  const displayPosts = mockPosts.map(p => ({
    _id: `mock-${p.id}`,
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt,
    publishedAt: p.date,
    mainImage: p.featuredImage,
    category: { title: p.category }
  }));

  const displayProjects = mockProjects.map(p => ({
    _id: `mock-${p.id}`,
    title: p.title,
    slug: p.slug,
    category: p.category,
    mainImage: p.image
  }));

  const displayServices = mockServices.map(s => ({
    _id: `mock-${s.id}`,
    title: s.title,
    slug: s.slug,
    shortDesc: s.description,
    image: s.image
  }));

  return (
    <>
      <HeroSection slides={slides} slogan={slogan} />
      <RibbonSeparator />
      <AboutSection aboutText={aboutText} />
      <RibbonSeparator />
      <PortfolioSection projects={displayProjects} />
      <RibbonSeparator />
      <ProcessSection />
      <RibbonSeparator />
      <ServicesSection services={displayServices} />
      <RibbonSeparator />
      <ExpertiseSection />
      <RibbonSeparator />
      <VideoCTASection videoUrl={videoUrl} />
      <RibbonSeparator />
      <SkillsSection skills={skills} />
      <RibbonSeparator />
      <StatsSection stats={stats} />
      <RibbonSeparator />
      <TestimonialsSection testimonials={[]} />
      <RibbonSeparator />
      <BlogSection posts={displayPosts} />
      <RibbonSeparator />
      <FAQSection />
      <RibbonSeparator />
      <ContactSection />
    </>
  );
}
