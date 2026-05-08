import { motion } from "framer-motion";
import { Gamepad2, Play, User, MapPin, Youtube, Instagram, Twitter } from "lucide-react";
import { SiTiktok, SiDiscord, SiFacebook } from "react-icons/si";
import { Button } from "@/components/ui/button";
import heroPortrait from "@/assets/hero-portrait.png";

const socials = [
  { Icon: Youtube, href: "https://www.youtube.com/@JOHNNYDZGAME", label: "YouTube" },
  { Icon: SiTiktok, href: "https://www.tiktok.com/@johnny_dz_game", label: "TikTok" },
  { Icon: Instagram, href: "https://www.instagram.com/johnnydzgame", label: "Instagram" },
  // { Icon: Twitter, href: "#", label: "Twitter" },
  { Icon: SiFacebook, href: "https://www.facebook.com/Johnnydzgame", label: "Facebook" },
  // { Icon: SiDiscord, href: "#", label: "Discord" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden hero-bg px-4" id="about">
      <div className="container mx-auto relative grid lg:grid-cols-2 gap-10 lg:gap-12 items-center py-10 lg:py-20">

        {/* LEFT */}
        <div className="relative z-10 text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-2 rounded-full bg-card shadow-card border border-border/60"
          >
            <span className="grid place-items-center size-7 rounded-full gradient-brand text-brand-foreground">
              <Gamepad2 className="size-4" />
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-primary">
              GAMING NEWS & ANALYSIS CREATOR
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold uppercase mt-5 leading-tight text-primary"
          >
            I cover the future <br />
            of <span className="gradient-text">gaming.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 text-base sm:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 leading-relaxed"
          >
            Delivering daily gaming news, deep analysis, exclusive leaks, and early access content from top companies like{" "}
            <span className="text-brand font-semibold">Ubisoft & Capcom.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
          >
           <a href="https://www.youtube.com/@JOHNNYDZGAME" target="_blank" rel="noopener noreferrer">
  <Button variant="hero" size="xl">
    <Play className="size-4 fill-current" />
    LATEST VIDEOS
  </Button>
</a>

            <Button variant="outlineBrand" size="xl">
              <User className="size-4" />
              ABOUT ME
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <span className="text-xs font-bold tracking-wider text-muted-foreground">
              FOLLOW ME ON
            </span>

            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid place-items-center size-9 sm:size-10 rounded-full bg-card border border-border text-foreground/70 hover:text-brand hover:border-brand hover:-translate-y-1 transition-all duration-300 shadow-card"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
        >
          <div className="absolute inset-0 gradient-brand opacity-20 blur-3xl rounded-full" />

          <div className="relative animate-float">
            <img
              src={heroPortrait}
              alt="Jhonny DZ Game"
              className="relative w-[260px] sm:w-[320px] md:max-w-md drop-shadow-2xl"
            />

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute bottom-16 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-brand text-brand-foreground shadow-brand"
            >
              <MapPin className="size-4" />
              <div className="text-left leading-tight">
                <div className="text-[10px] opacity-80 font-medium">BASED IN</div>
                <div className="text-sm font-bold tracking-wide">ALGERIA</div>
              </div>
            </motion.div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="absolute bottom-4 right-2 lg:right-8 text-right scale-90 sm:scale-100"
            >
              <div className="font-script text-3xl sm:text-4xl text-brand-glow leading-none drop-shadow-lg">
                Jhonny
              </div>
              <div className="font-display text-2xl sm:text-3xl text-brand font-bold -mt-1">
                DZ
              </div>
              <div className="text-[9px] sm:text-[10px] tracking-[0.3em] text-muted-foreground font-semibold">
                G A M E
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;