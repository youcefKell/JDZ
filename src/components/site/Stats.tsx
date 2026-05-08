import { motion } from "framer-motion";
import { Users, PlaySquare, Eye, Clock } from "lucide-react";

const stats = [
  { Icon: Users, value: "485K+", label: "Community", sub: "Across Platforms" },
  { Icon: PlaySquare, value: "6000+", label: "Videos", sub: "News & Analysis" },
  { Icon: Eye, value: "200M+", label: "Views", sub: "Total Views" },
  { Icon: Clock, value: "18+", label: "Years", sub: "Experience" },
];

const Stats = () => {
  return (
    <section className="container -mt-4 relative z-20" id="stats">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/60 rounded-2xl overflow-hidden shadow-card border border-border/60"
      >
        {stats.map(({ Icon, value, label, sub }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card p-6 flex items-center gap-4 group hover:bg-secondary/50 transition-colors"
          >
            <div className="grid place-items-center size-12 rounded-xl bg-brand/10 text-brand group-hover:scale-110 transition-transform duration-300">
              <Icon className="size-6" />
            </div>
            <div>
              <div className="font-display text-3xl font-bold text-primary leading-none">{value}</div>
              <div className="text-sm font-semibold mt-1">{label}</div>
              <div className="text-xs text-muted-foreground">{sub}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
