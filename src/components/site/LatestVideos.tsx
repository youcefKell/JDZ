import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import v1 from "@/assets/video-3.jpeg";
import v2 from "@/assets/video-2.jpeg";
import v3 from "@/assets/video-1.jpeg";

const videos = [
  {
    img: v1,
    badge: "NEW",
    badgeColor: "bg-brand",
    title: "GTA 6",
    duration: "8:45",
    href: "https://www.youtube.com/watch?v=jwKixnCIVf4", // ← بدل بالرابط ديالك
  },
  {
    img: v2,
    badge: "NEW INFO",
    badgeColor: "bg-violet-500",
    title: "INTERVIEW",
    duration: "10:12",
    href: "https://www.youtube.com/watch?v=SLt8VqqiKVs", // ← بدل بالرابط ديالك
  },
  {
    img: v3,
    badge: "EXCLUSIVE",
    badgeColor: "bg-rose-500",
    title: "UNBOXING",
    duration: "7:21",
    href: "https://www.youtube.com/watch?v=TTDu6eYVWZA", // ← بدل بالرابط ديالك
  },
];

const LatestVideos = () => {
  return (
    <section id="videos" className="container mt-20 mb-24">
      <div className="flex items-end justify-between mb-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold uppercase text-primary"
        >
          Most viewed videos
        </motion.h2>
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          href="https://www.youtube.com/@JOHNNYDZGAME/videos"
          className="group inline-flex items-center gap-2 text-sm font-bold tracking-wider text-brand hover:gap-3 transition-all"
        >
          VIEW ALL VIDEOS
          <span className="grid place-items-center size-7 rounded-full gradient-brand text-brand-foreground">
            <ArrowRight className="size-3.5" />
          </span>
        </motion.a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {videos.map((v, i) => (
          <motion.a
            key={v.title}
            href={v.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl bg-primary shadow-card cursor-pointer block"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={v.img}
                alt={v.title}
                loading="lazy"
                width={800}
                height={450}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

              {/* Badge */}
              <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider text-white ${v.badgeColor} shadow-lg`}>
                {v.badge}
              </span>

              {/* Play button */}
              <div className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="grid place-items-center size-16 rounded-full gradient-brand text-brand-foreground shadow-brand animate-pulse-glow">
                  <Play className="size-6 fill-current ml-1" />
                </div>
              </div>

              {/* Title + duration */}
              <div className="absolute bottom-0 inset-x-0 p-4 flex items-end justify-between gap-3">
                <h3 className="font-display text-xl font-bold text-white">{v.title}</h3>
                <span className="text-xs font-bold text-white/90 px-2 py-1 rounded bg-black/50 backdrop-blur-sm">
                  {v.duration}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default LatestVideos;