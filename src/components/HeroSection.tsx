import { LiquidBackground } from "./LiquidBackground";
import { LiquidGlass } from "./ui/liquid-glass";
import { useMode } from "./ModeProvider";
import ChatInput from "./ChatInput";
import LibrarySection from "./LibrarySection";
import Footer from "./Footer";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";

// Typewriter effect component
const TypewriterWord = ({ word, isDeleting, onComplete, gradientClass }: { 
  word: string; 
  isDeleting: boolean; 
  onComplete: () => void;
  gradientClass: string;
}) => {
  const [displayText, setDisplayText] = useState(isDeleting ? word : "");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const targetText = isDeleting ? "" : word;
    const currentLength = displayText.length;
    const targetLength = targetText.length;

    if (currentLength === targetLength) {
      // Blink cursor a bit then call onComplete
      const timeout = setTimeout(() => {
        onComplete();
      }, isDeleting ? 100 : 500);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(word.slice(0, currentLength - 1));
      } else {
        setDisplayText(word.slice(0, currentLength + 1));
      }
    }, isDeleting ? 50 : 80); // Faster delete, slower type

    return () => clearTimeout(timeout);
  }, [displayText, word, isDeleting, onComplete]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`inline-block ${gradientClass}`}>
      {displayText}
      <span className={`${cursorVisible ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
    </span>
  );
};

const HeroSection = () => {
  const { mode, toggleMode } = useMode();
  const isDesigner = mode === "designer";
  
  const [animationState, setAnimationState] = useState<"idle" | "deleting" | "typing">("idle");
  const [displayWord, setDisplayWord] = useState(isDesigner ? "beautiful" : "cool");
  const previousMode = useRef(mode);
  const [hasScrolled, setHasScrolled] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const targetWord = isDesigner ? "beautiful" : "cool";
  const gradientClass = isDesigner 
    ? "bg-gradient-to-r from-pink-400 via-orange-400 to-pink-400 bg-clip-text text-transparent" 
    : "bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent";

  useEffect(() => {
    if (previousMode.current !== mode) {
      previousMode.current = mode;
      setAnimationState("deleting");
    }
  }, [mode]);

  // Track scroll to hide the scroll hint
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (container.scrollTop > 20) {
        setHasScrolled(true);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDeleteComplete = () => {
    setDisplayWord(targetWord);
    setAnimationState("typing");
  };

  const handleTypeComplete = () => {
    setAnimationState("idle");
  };

  return (
    <div 
      ref={scrollContainerRef}
      className="relative h-screen w-full overflow-y-auto overflow-x-hidden"
    >
      {/* Fixed Liquid Background */}
      <div className="fixed inset-0 z-0">
        <LiquidBackground />
      </div>

      {/* Main Hero Content - First viewport */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-16">
        <div className="flex max-w-3xl flex-col items-center text-center">
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

          {/* Heading - all in one line with typewriter effect */}
          <h1 className="mb-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl whitespace-nowrap">
            <span>Create something </span>
            {animationState === "idle" && (
              <span className={gradientClass}>{displayWord}</span>
            )}
            {animationState === "deleting" && (
              <TypewriterWord 
                word={displayWord} 
                isDeleting={true} 
                onComplete={handleDeleteComplete}
                gradientClass={gradientClass}
              />
            )}
            {animationState === "typing" && (
              <TypewriterWord 
                word={targetWord} 
                isDeleting={false} 
                onComplete={handleTypeComplete}
                gradientClass={gradientClass}
              />
            )}
          </h1>

          {/* Subtitle - same for both modes */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-10 max-w-lg text-lg text-white/70"
          >
            Use Von to ship your next idea faster!
          </motion.p>

          {/* ChatInput - expands downward */}
          <div className="w-[638px]">
            <ChatInput className="w-full" />
          </div>

          {/* Scroll hint - disappears on scroll */}
          <AnimatePresence>
            {!hasScrolled && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="mt-12 flex flex-col items-center gap-2 text-white/40"
              >
                <span className="text-xs font-medium">Scroll to view library</span>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Library Section - Visible on scroll */}
      <section className="relative z-10 flex items-start justify-center pt-20 pb-20">
        <LibrarySection showRecentProjects={false} />
      </section>

      {/* Footer - Full width */}
      <div className="relative z-10 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default HeroSection;
