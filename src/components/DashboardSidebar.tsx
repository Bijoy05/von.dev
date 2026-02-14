import {
  Home,
  Search,
  BookOpen,
  LayoutGrid,
  Star,
  Users,
  FileText,
  Gift,
  Zap,
  ChevronDown,
  PanelLeft,
  Palette,
  Code,
} from "lucide-react";
import { useMode } from "./ModeProvider";

const DashboardSidebar = () => {
  const { mode, toggleMode } = useMode();

  const isDesigner = mode === "designer";

  return (
    <div className="flex h-full w-56 flex-col border-r border-white/10 bg-black/40 backdrop-blur-xl">
      {/* Top section */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <Zap className="h-5 w-5 fill-current text-white" />
        <button className="text-white/50 hover:text-white">
          <PanelLeft className="h-4 w-4" />
        </button>
      </div>

      {/* User */}
      <div className="mx-3 mb-4 flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-white/10">
        <div className={`flex h-6 w-6 items-center justify-center rounded-md text-xs font-bold text-white ${
          isDesigner 
            ? "bg-gradient-to-br from-pink-500 to-yellow-500" 
            : "bg-gradient-to-br from-purple-600 to-blue-600"
        }`}>
          B
        </div>
        <span className="flex-1 text-sm font-medium text-white">
          User's Von
        </span>
        <ChevronDown className="h-3.5 w-3.5 text-white/50" />
      </div>

      {/* Nav items */}
      <nav className="flex flex-col gap-0.5 px-3">
        {[
          { icon: Home, label: "Home", active: true },
          { icon: Search, label: "Search" },
          { icon: BookOpen, label: "Resources" },
        ].map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            className={`flex items-center gap-3 rounded-lg px-2 py-2 text-sm transition-colors ${
              active
                ? "bg-white/20 text-white"
                : "text-white/60 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </nav>

      {/* Projects */}
      <div className="mt-6 px-5">
        <p className="mb-2 text-xs font-medium text-white/50">
          Projects
        </p>
      </div>
      <nav className="flex flex-col gap-0.5 px-3">
        {[
          { icon: LayoutGrid, label: "All projects" },
          { icon: Star, label: "Starred" },
          { icon: Users, label: "Shared with me" },
        ].map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </nav>

      {/* Recents */}
      <div className="mt-6 px-5">
        <p className="mb-2 text-xs font-medium text-white/50">
          Recents
        </p>
      </div>
      <nav className="flex flex-col gap-0.5 px-3">
        {["Project Alpha", "Marketing Site", "Dashboard v2"].map((name) => (
          <button
            key={name}
            className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <FileText className="h-4 w-4" />
            {name}
          </button>
        ))}
      </nav>

      {/* Bottom section */}
      <div className="mt-auto flex flex-col gap-1 border-t border-white/10 p-3">
        <button className="flex items-center justify-between rounded-lg px-2 py-2 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white">
          <div className="flex items-center gap-3">
            <Gift className="h-4 w-4" />
            <div className="text-left">
              <p className="text-sm font-medium text-white">
                Share Von
              </p>
              <p className="text-xs text-white/50">
                Get 10 credits each
              </p>
            </div>
          </div>
        </button>
        <button className="flex items-center justify-between rounded-lg px-2 py-2 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white">
          <div className="flex items-center gap-3">
            <Zap className={`h-4 w-4 ${isDesigner ? "text-pink-400" : "text-purple-400"}`} />
            <div className="text-left">
              <p className="text-sm font-medium text-white">
                Upgrade to Pro
              </p>
              <p className="text-xs text-white/50">
                Unlock more benefits
              </p>
            </div>
          </div>
        </button>
        {/* Mode toggle button */}
        <button
          onClick={toggleMode}
          className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          {isDesigner ? <Code className="h-4 w-4" /> : <Palette className="h-4 w-4" />}
          {isDesigner ? "Developer mode" : "Designer mode"}
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
