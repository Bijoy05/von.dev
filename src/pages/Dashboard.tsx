import { LiquidBackground } from "@/components/LiquidBackground";
import { LiquidGlass } from "@/components/ui/liquid-glass";
import { useMode } from "@/components/ModeProvider";
import ChatInput from "@/components/ChatInput";
import DashboardSidebar from "@/components/DashboardSidebar";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const Dashboard = () => {
  const { mode, toggleMode } = useMode();

  const isDesigner = mode === "designer";

  return (
    <div className="flex h-screen w-full overflow-hidden bg-black">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Main chat area with rounded section */}
        <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden rounded-2xl m-2">
          {/* Unified Liquid Background */}
          <LiquidBackground className="rounded-2xl" />

          <div className="relative z-10 flex max-w-3xl flex-col items-center text-center px-6">
            {/* Mode toggle button with liquid glass */}
            <LiquidGlass 
              intensity="high"
              className="mb-6 cursor-pointer"
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

            {/* Heading */}
            <h1 className="mb-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              What's on your mind?
            </h1>

            {/* Subtitle - same for both modes */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8 max-w-lg text-lg text-white/70"
            >
              Use Von to ship your next idea faster!
            </motion.p>

            {/* Chat Input - fixed container to prevent movement */}
            <div className="w-[638px] h-[121px]">
              <ChatInput className="w-full" />
            </div>
          </div>

          {/* Bottom tabs with liquid glass */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <LiquidGlass intensity="medium" className="mx-auto max-w-4xl">
              <div className="flex items-center justify-between px-6 py-3">
                <div className="flex items-center gap-1">
                  {["Recently viewed", "My projects", "Shared with me", "Templates"].map((tab, i) => (
                    <button
                      key={tab}
                      className={`rounded-full px-4 py-2 text-sm transition-colors ${
                        i === 0
                          ? "bg-white/20 text-white"
                          : "text-white/60 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <button className="flex items-center gap-1 text-sm text-white/60 hover:text-white">
                  Browse all <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </LiquidGlass>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
