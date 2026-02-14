import { LiquidBackground } from "./LiquidBackground";
import { LiquidGlass } from "./ui/liquid-glass";
import { useMode } from "./ModeProvider";
import ChatInput from "./ChatInput";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const HeroSection = () => {
  const { mode, toggleMode } = useMode();

  const isDesigner = mode === "designer";

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16">
      {/* Unified Liquid Background - adapts colors based on mode */}
      <LiquidBackground />

      <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
        {/* Mode toggle button with liquid glass */}
        <LiquidGlass 
          intensity="high"
          className="mb-8 cursor-pointer"
          onClick={toggleMode}
        >
          <div className="flex items-center gap-2 px-4 py-2 text-sm text-white/90 transition-all hover:scale-105">
            <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-medium">
              Switch
            </span>
            <span className="font-medium">
              {isDesigner ? "Von for Developers" : "Von for Designers"}
            </span>
            <ArrowRight className="h-3.5 w-3.5" />
          </div>
        </LiquidGlass>

        {/* Heading - coherent layout, only the last word changes */}
        <h1 className="mb-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
          <span>Create something </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={mode}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`inline-block ${
                isDesigner 
                  ? "bg-gradient-to-r from-pink-400 via-yellow-300 to-pink-400 bg-clip-text text-transparent" 
                  : "bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              }`}
            >
              {isDesigner ? "beautiful" : "cool"}
            </motion.span>
          </AnimatePresence>
        </h1>

        {/* Subtitle - position stays same */}
        <AnimatePresence mode="wait">
          <motion.p
            key={mode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-10 max-w-lg text-lg text-white/70"
          >
            {isDesigner 
              ? "Design stunning experiences with the power of AI" 
              : "Build powerful apps and websites with AI"
            }
          </motion.p>
        </AnimatePresence>

        {/* ChatInput - stays in same position */}
        <ChatInput className="w-[638px]" />
      </div>
    </section>
  );
};

export default HeroSection;
