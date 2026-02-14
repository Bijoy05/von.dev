import { LiquidBackground } from "@/components/LiquidBackground";
import { LiquidGlass } from "@/components/ui/liquid-glass";
import { useMode } from "@/components/ModeProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Zap, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const carouselImages = [
  { bg: "from-sky-400 to-sky-300", label: "Visual Electric" },
  { bg: "from-gray-200 to-gray-300", label: "Fashion Portfolio" },
  { bg: "from-purple-500 to-indigo-600", label: "Algo Studio" },
  { bg: "from-pink-400 to-rose-500", label: "Creative Agency" },
  { bg: "from-amber-400 to-yellow-500", label: "Bonded" },
  { bg: "from-slate-700 to-slate-800", label: "AI Assistant" },
  { bg: "from-orange-500 to-red-500", label: "Haptic" },
  { bg: "from-emerald-600 to-green-500", label: "Dashboard" },
  { bg: "from-violet-500 to-purple-600", label: "Analytics" },
  { bg: "from-cyan-400 to-teal-500", label: "SaaS Platform" },
];

const CarouselColumn = ({ items, direction }: { items: typeof carouselImages; direction: "up" | "down" }) => (
  <div className="flex flex-col gap-3 overflow-hidden h-full">
    <div
      className={`flex flex-col gap-3 ${direction === "up" ? "animate-scroll-up" : "animate-scroll-down"}`}
    >
      {[...items, ...items, ...items].map((item, i) => (
        <div
          key={i}
          className={`w-full aspect-[4/3] rounded-xl bg-gradient-to-br ${item.bg} flex items-end p-3 shrink-0`}
        >
          <span className="text-xs font-medium text-white/80 drop-shadow-sm">{item.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const Login = () => {
  const { mode, toggleMode } = useMode();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const isDesigner = mode === "designer";

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      navigate("/dashboard");
    }
  };

  const col1 = carouselImages.slice(0, 5);
  const col2 = carouselImages.slice(5, 10);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-black">
      {/* Left side - Login form */}
      <div className="relative flex w-full flex-col items-center justify-center lg:w-1/2">
        {/* Unified Liquid Background */}
        <LiquidBackground />

        <div className="relative z-10 flex w-full max-w-md flex-col items-center px-8">
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

          {/* Logo */}
          <Zap className="mb-8 h-10 w-10 fill-current text-white" />

          {/* Heading - coherent */}
          <h1 className="mb-2 text-3xl font-semibold text-white">
            <span>Welcome to </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={mode}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.3 }}
                className={`inline-block ${
                  isDesigner 
                    ? "bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent" 
                    : "bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                }`}
              >
                Von
              </motion.span>
            </AnimatePresence>
          </h1>
          <AnimatePresence mode="wait">
            <motion.p
              key={mode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mb-10 text-lg text-white/60"
            >
              {isDesigner ? "Start creating now." : "Start building now."}
            </motion.p>
          </AnimatePresence>

          {/* Google button with liquid glass */}
          <LiquidGlass intensity="medium" className="w-full">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex w-full items-center justify-center gap-3 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </button>
          </LiquidGlass>

          {/* Divider */}
          <div className="my-6 flex w-full items-center gap-4">
            <div className="h-px flex-1 bg-white/20" />
            <span className="text-xs text-white/50">OR</span>
            <div className="h-px flex-1 bg-white/20" />
          </div>

          {/* Email form with liquid glass */}
          <form onSubmit={handleContinue} className="w-full space-y-3">
            <LiquidGlass intensity="low" className="w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email..."
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
            </LiquidGlass>
            <motion.button
              type="submit"
              className={`w-full rounded-2xl px-4 py-3 text-sm font-medium text-white transition-colors ${
                isDesigner 
                  ? "bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600" 
                  : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Continue
            </motion.button>
          </form>
        </div>
      </div>

      {/* Right side - Carousel */}
      <div className="hidden h-screen w-1/2 overflow-hidden p-3 lg:block bg-black/50">
        <div className="grid h-full grid-cols-2 gap-3 overflow-hidden rounded-2xl">
          <CarouselColumn items={col1} direction="up" />
          <CarouselColumn items={col2} direction="down" />
        </div>
      </div>
    </div>
  );
};

export default Login;
