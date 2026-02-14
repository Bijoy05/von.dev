import { LiquidBackground } from "@/components/LiquidBackground";
import { LiquidGlass } from "@/components/ui/liquid-glass";
import { useMode } from "@/components/ModeProvider";
import ChatInput from "@/components/ChatInput";
import DashboardSidebar from "@/components/DashboardSidebar";
import LibrarySection from "@/components/LibrarySection";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

const Dashboard = () => {
  const { mode, toggleMode } = useMode();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const isDesigner = mode === "designer";

  return (
    <div className="flex h-screen w-full overflow-hidden bg-black">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Main chat area with rounded section */}
        <div 
          ref={scrollContainerRef}
          className="relative flex-1 overflow-y-auto overflow-x-hidden rounded-2xl m-2"
        >
          {/* Fixed Liquid Background within the container */}
          <div className="sticky top-0 left-0 right-0 h-0 z-0">
            <div className="absolute inset-0 h-screen rounded-2xl overflow-hidden">
              <LiquidBackground className="rounded-2xl" />
            </div>
          </div>

          {/* Hero section - first viewport */}
          <section className="relative z-10 flex min-h-full flex-col items-center justify-center px-6 py-20">
            <div className="flex max-w-3xl flex-col items-center text-center">
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

              {/* Chat Input - expands downward */}
              <div className="w-[638px]">
                <ChatInput className="w-full" />
              </div>
            </div>
          </section>

          {/* Library Section - Visible on scroll */}
          <section className="relative z-10 pb-12 pt-8">
            <LibrarySection showRecentProjects={true} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
