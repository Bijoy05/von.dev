import { ArrowRight, Clock, FolderOpen, Layout, Box, Code2 } from "lucide-react";
import { LiquidGlass } from "./ui/liquid-glass";
import { useMode } from "./ModeProvider";
import { motion } from "motion/react";

// Template categories
const templateCategories = [
  { id: "websites", label: "Websites", icon: Layout },
  { id: "apps", label: "Apps", icon: Box },
  { id: "components", label: "Components", icon: Code2 },
];

const templates = [
  {
    title: "Ecommerce Store",
    category: "websites",
    gradient: "from-stone-400/60 to-stone-600/60",
  },
  {
    title: "Portfolio Site",
    category: "websites",
    gradient: "from-slate-400/60 to-slate-600/60",
  },
  {
    title: "Blog Template",
    category: "websites",
    gradient: "from-pink-400/60 to-purple-500/60",
  },
  {
    title: "Landing Page",
    category: "websites",
    gradient: "from-amber-400/60 to-orange-500/60",
  },
  {
    title: "Dashboard UI",
    category: "apps",
    gradient: "from-cyan-400/60 to-blue-500/60",
  },
  {
    title: "Mobile App",
    category: "apps",
    gradient: "from-emerald-400/60 to-teal-500/60",
  },
  {
    title: "Button Pack",
    category: "components",
    gradient: "from-violet-400/60 to-fuchsia-500/60",
  },
  {
    title: "Form Elements",
    category: "components",
    gradient: "from-rose-400/60 to-pink-500/60",
  },
];

// Sample recent projects (for dashboard only)
const recentProjects = [
  { title: "My Portfolio v2", updatedAt: "2 hours ago", gradient: "from-blue-500/60 to-purple-500/60" },
  { title: "Client Dashboard", updatedAt: "Yesterday", gradient: "from-green-500/60 to-teal-500/60" },
  { title: "Startup Landing", updatedAt: "3 days ago", gradient: "from-orange-500/60 to-red-500/60" },
  { title: "E-commerce App", updatedAt: "Last week", gradient: "from-pink-500/60 to-rose-500/60" },
];

interface LibrarySectionProps {
  showRecentProjects?: boolean;
}

const LibrarySection = ({ showRecentProjects = false }: LibrarySectionProps) => {
  const { mode } = useMode();
  const isDesigner = mode === "designer";

  return (
    <div className="w-full px-4 md:px-8 pb-12">
      <LiquidGlass intensity="high" className="w-full max-w-5xl mx-auto">
        <div className="p-6 md:p-8">
          {/* Recent Projects Section - Only for Dashboard */}
          {showRecentProjects && (
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-white/60" />
                  <h3 className="text-sm font-medium text-white/90">Recent Projects</h3>
                </div>
                <button className="flex items-center gap-1 text-xs text-white/50 hover:text-white/80 transition-colors">
                  View all <ArrowRight className="h-3 w-3" />
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {recentProjects.map((project, i) => (
                  <motion.div
                    key={project.title}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`aspect-video rounded-xl bg-gradient-to-br ${project.gradient} mb-2 flex items-center justify-center transition-all group-hover:shadow-lg`}>
                      <FolderOpen className="h-6 w-6 text-white/50" />
                    </div>
                    <p className="text-xs font-medium text-white/80 truncate">{project.title}</p>
                    <p className="text-[10px] text-white/40">{project.updatedAt}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Templates Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: showRecentProjects ? 0.3 : 0.1 }}
          >
            {/* Category Tabs */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1">
                {templateCategories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                      cat.id === "websites"
                        ? "bg-white/15 text-white"
                        : "text-white/50 hover:text-white/80 hover:bg-white/8"
                    }`}
                  >
                    <cat.icon className="h-3 w-3" />
                    {cat.label}
                  </button>
                ))}
              </div>
              <button className="flex items-center gap-1 text-xs text-white/50 hover:text-white/80 transition-colors">
                Browse all <ArrowRight className="h-3 w-3" />
              </button>
            </div>

            {/* Templates Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {templates.slice(0, 8).map((template, i) => (
                <motion.div
                  key={template.title}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (showRecentProjects ? 0.4 : 0.2) + i * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`aspect-video rounded-xl bg-gradient-to-br ${template.gradient} mb-2 flex items-center justify-center transition-all group-hover:shadow-lg overflow-hidden`}>
                    <span className="text-[10px] font-medium uppercase tracking-widest text-white/40">
                      {template.title.split(" ")[0]}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-white/80 truncate">{template.title}</p>
                  <p className="text-[10px] text-white/40 capitalize">{template.category}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </LiquidGlass>
    </div>
  );
};

export default LibrarySection;
