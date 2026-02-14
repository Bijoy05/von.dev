import { ChevronDown, Zap, Menu, X } from "lucide-react";
import { useMode } from "./ModeProvider";
import { useState } from "react";
import { LiquidGlass } from "./ui/liquid-glass";

const Navbar = () => {
  const { mode } = useMode();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isDesigner = mode === "designer";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Zap className="h-6 w-6 fill-current text-white" />
          <span className={`text-lg font-semibold ${
            isDesigner 
              ? "bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent" 
              : "bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          }`}>
            Von
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {[
            { label: "Solutions", hasDropdown: true },
            { label: "Resources", hasDropdown: true },
            { label: "Enterprise", hasDropdown: false },
            { label: "Pricing", hasDropdown: false },
            { label: "Community", hasDropdown: false },
          ].map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-white/60 transition-colors hover:text-white"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a 
            href="/login" 
            className="hidden text-sm text-white/60 transition-colors hover:text-white md:block"
          >
            Log in
          </a>
          <a href="/login" className="hidden md:block">
            <LiquidGlass intensity="high" className="px-4 py-2">
              <span className="text-sm font-medium text-white">Get started</span>
            </LiquidGlass>
          </a>
          <button
            className="rounded-md p-2 text-white/60 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/80 backdrop-blur-xl px-6 py-4 md:hidden">
          {["Solutions", "Resources", "Enterprise", "Pricing", "Community"].map((label) => (
            <button
              key={label}
              className="block w-full py-2 text-left text-sm text-white/60 hover:text-white"
            >
              {label}
            </button>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <a href="/login" className="text-sm text-white/60">
              Log in
            </a>
            <a href="/login">
              <LiquidGlass intensity="medium" className="w-full text-center py-2">
                <span className="text-sm font-medium text-white">Get started</span>
              </LiquidGlass>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
