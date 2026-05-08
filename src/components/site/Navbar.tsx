import { motion } from "framer-motion";
import { Send, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = ["HOME", "ABOUT", "CONTENT", "VIDEOS", "CONTACT"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/40"
    >
      <div className="container flex items-center justify-between h-20">
        <a href="#" className="font-display text-2xl tracking-tight">
          <span className="text-primary">JHONNY</span>
          <span className="text-brand">DZ</span>
          <span className="text-primary">GAME</span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l, i) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className={`text-sm font-semibold tracking-wider transition-colors hover:text-brand relative ${
                i === 0 ? "text-brand" : "text-foreground/80"
              }`}
            >
              {l}
              {i === 0 && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand rounded-full"
                />
              )}
            </a>
          ))}
        </nav>

        <Button variant="hero" size="lg" className="hidden md:inline-flex" >
          <Send className="size-4" />
          <a href="#contact">WORK WITH ME</a>
        </Button>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="lg:hidden border-t border-border/40 bg-background"
        >
          <nav className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-semibold tracking-wider">
                {l}
              </a>
            ))}
         <a href="mailto:kell9ycf@gmail.com">
  <Button variant="hero" className="mt-2">
    <Send className="size-4" /> WORK WITH ME
  </Button>
</a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
