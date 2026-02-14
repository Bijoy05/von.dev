import { Plus, Mic, ArrowUp } from "lucide-react";
import { useMode } from "./ModeProvider";
import { motion } from "motion/react";
import { useState, useRef, useCallback, useEffect } from "react";

const MIN_HEIGHT = 121; // Base height
const MAX_HEIGHT = 484; // 4x base height (121 * 4)
const TOOLBAR_HEIGHT = 48; // Height of the toolbar area

const ChatInput = ({ className }: { className?: string }) => {
  const { mode } = useMode();
  const isDesigner = mode === "designer";
  const [containerHeight, setContainerHeight] = useState(MIN_HEIGHT);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // Reset height to auto to get the correct scrollHeight
    textarea.style.height = 'auto';
    const scrollHeight = textarea.scrollHeight;
    
    // Calculate container height based on textarea content
    const newContainerHeight = Math.min(
      Math.max(scrollHeight + TOOLBAR_HEIGHT + 24, MIN_HEIGHT), // 24px for padding
      MAX_HEIGHT
    );
    
    setContainerHeight(newContainerHeight);
    
    // Set textarea height to fill available space minus toolbar
    const textareaHeight = newContainerHeight - TOOLBAR_HEIGHT - 24;
    textarea.style.height = `${textareaHeight}px`;
  }, []);

  const handleInput = useCallback(() => {
    adjustHeight();
  }, [adjustHeight]);

  // Initial adjustment
  useEffect(() => {
    adjustHeight();
  }, [adjustHeight]);

  return (
    <motion.div 
      className={className || "w-full max-w-3xl"}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Liquid Glass Container - expands downward */}
      <motion.div 
        className="relative overflow-hidden rounded-3xl bg-white/8 border border-white/10 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.1)]"
        animate={{ height: containerHeight }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ minHeight: MIN_HEIGHT }}
      >
        {/* Soft inner glow - top edge highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
        
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none" />
        
        {/* Text area - grows with content */}
        <div className="relative z-10 px-4 pt-4 pb-2 flex-1">
          <textarea
            ref={textareaRef}
            placeholder="Describe what you want to create..."
            onInput={handleInput}
            className="w-full resize-none bg-transparent text-sm text-white/90 placeholder:text-white/40 focus:outline-none overflow-y-auto"
            style={{ minHeight: MIN_HEIGHT - TOOLBAR_HEIGHT - 24 }}
          />
        </div>

        {/* Toolbar - always at bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between border-white/8 px-3 py-2 bg-transparent">
          <div className="flex items-center gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-white/50 transition-colors hover:bg-white/10 hover:text-white">
              <Plus className="h-4 w-4" />
            </button>
            <motion.button 
              className={`rounded-full px-3 py-1 text-xs font-medium text-white transition-colors ${
                isDesigner 
                  ? "bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600" 
                  : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDesigner ? "Create" : "Build"}
            </motion.button>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-white/50 transition-colors hover:bg-white/10 hover:text-white">
              <Mic className="h-4 w-4" />
            </button>
            <motion.button 
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15 text-white transition-colors hover:bg-white/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ChatInput;
