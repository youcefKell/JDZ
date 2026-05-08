import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import capcomLogo from "../../assets/Capcom_logo.webp";
import ubisoftLogo from "../../assets/aawec5ql6.webp";
import bandaiLogo from "../../assets/Bandai_Namco_Holdings_logo.svg.png";
import Logo505 from "../../assets/505_Games_logo.svg.png";
import companyLogo from "../../assets/Company-Logo_Quarter-Up.png";
import konamiLogo from "../../assets/Konami-logo.png";
import teamNinja from "../../assets/Team_Ninja.svg.png";
import pearlLogo from "../../assets/Pearl_Abyss_Logo.png";
import THQ_Nordio from "../../assets/THQ_Nordic_logo_2016.svg";
import playstationLogo from "../../assets/PlayStation-Logo.png";


const partners = [
  ubisoftLogo,
  capcomLogo,
  bandaiLogo,
  Logo505,
  companyLogo,
  konamiLogo,
  teamNinja,
  pearlLogo,
  THQ_Nordio,
  playstationLogo,
  
];

const Partners = () => {
  return (
    <section id="partners" className="container mt-12" >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 mb-4"
      >
        <ShieldCheck className="size-5 text-brand" />
        <span className="text-xs font-bold tracking-wider text-primary">
          TRUSTED & PARTNERED WITH
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-card rounded-2xl shadow-card border border-border/60 p-8 overflow-hidden"
      >
        {/* Fade edges */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-card to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-card to-transparent" />

          {/* Marquee track */}
          <div className="flex overflow-hidden">
            <div className="flex gap-16 items-center animate-infinite-marquee">
              {/* Render twice — CSS translates -50% so it loops seamlessly */}
              {[...partners, ...partners].map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt=""
                  className="h-10 w-auto shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Partners;