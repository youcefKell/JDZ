import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Stats from "@/components/site/Stats";
import Partners from "@/components/site/Partners";
import WhatICover from "@/components/site/WhatICover";
import LatestVideos from "@/components/site/LatestVideos";
import Contact from "@/components/site/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Partners />
        <WhatICover />
        <LatestVideos />
        <Contact />
      </main>
      <footer className="border-t border-border/60 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Jhonny DZ Game. Gaming News & Analysis.
        </div>
      </footer>
    </div>
  );
};

export default Index;
