import { motion } from "framer-motion";
import { Megaphone, Search, Clapperboard, Rocket, Lock, Gamepad2 } from "lucide-react";

const items = [
  { 
    Icon: Megaphone, 
    title: "Gaming News", 
    desc: "أحدث الأخبار اليومية عن عالم الألعاب مع تغطية سريعة وموثوقة", 
    color: "bg-brand/10 text-brand" 
  },
  { 
    Icon: Search, 
    title: "Game Analysis", 
    desc: "تحليلات عميقة ورأي احترافي يساعدك تفهم اللعبة قبل ما تشتريها", 
    color: "bg-sky-500/10 text-sky-500" 
  },
  { 
    Icon: Clapperboard, 
    title: "Trailers & Events", 
    desc: "تغطية مباشرة للتريلرات، الإيفنتات والعروض العالمية", 
    color: "bg-violet-500/10 text-violet-500" 
  },
  { 
    Icon: Rocket, 
    title: "Upcoming Games", 
    desc: "نظرة على الألعاب القادمة وكل ما هو جديد في المستقبل", 
    color: "bg-emerald-500/10 text-emerald-500" 
  },
  { 
    Icon: Gamepad2, 
    title: "Early Access", 
    desc: "نجرب الألعاب قبل صدورها ونعطيك أول انطباع حصري وتجربة واقعية", 
    color: "bg-pink-500/10 text-pink-500" 
  },
  { 
    Icon: Lock, 
    title: "Leaks & Insider", 
    desc: "تسريبات موثوقة ومعلومات حصرية من داخل شركات الألعاب", 
    color: "bg-amber-500/10 text-amber-500" 
  },
];

const WhatICover = () => {
  return (
    <section id="content" className="container mt-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-3 mb-10 text-center"
      >
        <span className="hidden sm:block h-px w-16 bg-gradient-to-r from-transparent to-brand" />
        <span className="size-2 rounded-full bg-brand" />
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-primary">
          What I Cover
        </h2>
        <span className="size-2 rounded-full bg-brand" />
        <span className="hidden sm:block h-px w-16 bg-gradient-to-l from-transparent to-brand" />
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map(({ Icon, title, desc, color }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -8 }}
            className="bg-card rounded-2xl p-5 text-center shadow-card border border-border/60 hover:shadow-brand hover:border-brand/30 transition-all duration-300 cursor-pointer"
          >
            <div className={`mx-auto grid place-items-center size-12 sm:size-14 rounded-2xl ${color} mb-4`}>
              <Icon className="size-5 sm:size-6" />
            </div>

            <h3 className="font-display text-sm sm:text-base font-bold text-primary mb-2">
              {title}
            </h3>

            <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed" dir="rtl">
              {desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatICover;