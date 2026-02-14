import { LiquidBackground } from "./LiquidBackground";
import { LiquidGlass } from "./ui/liquid-glass";
import { useMode } from "./ModeProvider";
import ChatInput from "./ChatInput";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
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

  const targetWord = isDesigner ? "beautiful" : "cool";
  const gradientClass = isDesigner 
    ? "bg-gradient-to-r from-pink-400 via-yellow-300 to-pink-400 bg-clip-text text-transparent" 
    : "bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent";

  useEffect(() => {
    if (previousMode.current !== mode) {
      previousMode.current = mode;
      setAnimationState("deleting");
    }
  }, [mode]);

  const handleDeleteComplete = () => {
    setDisplayWord(targetWord);
    setAnimationState("typing");
  };

  const handleTypeComplete = () => {
    setAnimationState("idle");
  };

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

        {/* ChatInput - fixed position container to prevent movement */}
        <div className="w-[638px] h-[121px]">
          <ChatInput className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
