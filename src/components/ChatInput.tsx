import { Plus, Mic, ArrowUp } from "lucide-react";
import { useMode } from "./ModeProvider";
import { motion } from "motion/react";

const ChatInput = ({ className }: { className?: string }) => {
  const { mode } = useMode();
  const isDesigner = mode === "designer";

  return (
    <motion.div 
      className={className || "w-full max-w-3xl"}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Liquid Glass Container */}
      <div className="relative overflow-hidden rounded-2xl h-[121px] bg-white/10 dark:bg-black/20 border border-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
        {/* Inner glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-white/5 pointer-events-none" />
        
        {/* Text area */}
        <div className="relative z-10 px-4 pt-4 pb-2">
          <textarea
            placeholder="Describe what you want to create..."
            rows={2}
            className="w-full resize-none bg-transparent text-sm text-white/90 placeholder:text-white/40 focus:outline-none"
          />
        </div>

        {/* Toolbar */}
        <div className="relative z-10 flex items-center justify-between border-t border-white/10 px-3 py-2">
          <div className="flex items-center gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-white/50 transition-colors hover:bg-white/10 hover:text-white">
              <Plus className="h-4 w-4" />
            </button>
            <motion.button 
              className={`rounded-full px-3 py-1 text-xs font-medium text-white transition-colors ${
                isDesigner 
                  ? "bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600" 
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
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white transition-colors hover:bg-white/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatInput;
