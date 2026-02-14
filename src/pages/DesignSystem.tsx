import { LiquidBackground } from "@/components/LiquidBackground";
import { LiquidGlass } from "@/components/ui/liquid-glass";
import { useMode } from "@/components/ModeProvider";
import Footer from "@/components/Footer";
import { ArrowRight, Plus, Mic, ArrowUp, Check, X, Info, AlertTriangle } from "lucide-react";
import { motion } from "motion/react";

const DesignSystem = () => {
  const { mode, toggleMode } = useMode();
  const isDesigner = mode === "designer";

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Fixed Liquid Background */}
      <div className="fixed inset-0 z-0">
        <LiquidBackground />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-pink-500 to-orange-500" />
              <span className="text-lg font-semibold text-white">Von Design System</span>
            </div>
            <LiquidGlass intensity="medium" className="cursor-pointer" onClick={toggleMode}>
              <div className="flex items-center gap-2 px-3 py-1.5 text-sm text-white/90">
                <span className="text-xs text-white/60">Mode:</span>
                <span className="font-medium">{isDesigner ? "Designer" : "Developer"}</span>
              </div>
            </LiquidGlass>
          </div>
        </header>

        {/* Main Content */}
        <main className="mx-auto max-w-6xl px-6 py-12 space-y-16">
          
          {/* Introduction */}
          <section>
            <h1 className="text-4xl font-bold text-white mb-4">Design System</h1>
            <p className="text-lg text-white/60 max-w-2xl">
              A comprehensive guide to Von's visual language. All components and styles should follow 
              these guidelines to ensure consistency across the platform.
            </p>
          </section>

          {/* Typography */}
          <section>
            <SectionHeader title="Typography" description="Inter Tight is our primary typeface" />
            <LiquidGlass intensity="high" className="p-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-xs text-white/40 uppercase tracking-wider">Font Family</p>
                  <p className="text-2xl text-white">Inter Tight</p>
                  <code className="text-sm text-white/60 bg-white/10 px-2 py-1 rounded">font-family: 'Inter Tight', sans-serif</code>
                </div>
                
                <div className="border-t border-white/10 pt-6 space-y-4">
                  <p className="text-xs text-white/40 uppercase tracking-wider">Type Scale</p>
                  <div className="space-y-3">
                    <div className="flex items-baseline gap-4">
                      <span className="text-7xl font-semibold text-white">Aa</span>
                      <span className="text-sm text-white/40">7xl / 72px - Hero Headlines</span>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-5xl font-semibold text-white">Aa</span>
                      <span className="text-sm text-white/40">5xl / 48px - Page Titles</span>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-3xl font-semibold text-white">Aa</span>
                      <span className="text-sm text-white/40">3xl / 30px - Section Headers</span>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-xl font-medium text-white">Aa</span>
                      <span className="text-sm text-white/40">xl / 20px - Subheadings</span>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-base text-white">Aa</span>
                      <span className="text-sm text-white/40">base / 16px - Body Text</span>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-sm text-white">Aa</span>
                      <span className="text-sm text-white/40">sm / 14px - UI Text</span>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs text-white">Aa</span>
                      <span className="text-sm text-white/40">xs / 12px - Labels & Captions</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6 space-y-4">
                  <p className="text-xs text-white/40 uppercase tracking-wider">Font Weights</p>
                  <div className="flex flex-wrap gap-6">
                    <div><span className="text-xl font-normal text-white">Regular</span><span className="text-sm text-white/40 ml-2">400</span></div>
                    <div><span className="text-xl font-medium text-white">Medium</span><span className="text-sm text-white/40 ml-2">500</span></div>
                    <div><span className="text-xl font-semibold text-white">Semibold</span><span className="text-sm text-white/40 ml-2">600</span></div>
                    <div><span className="text-xl font-bold text-white">Bold</span><span className="text-sm text-white/40 ml-2">700</span></div>
                  </div>
                </div>
              </div>
            </LiquidGlass>
          </section>

          {/* Colors */}
          <section>
            <SectionHeader title="Colors" description="Mode-aware color palettes" />
            <div className="grid md:grid-cols-2 gap-6">
              {/* Designer Mode Colors */}
              <LiquidGlass intensity="high" className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-500" />
                  Designer Mode
                </h3>
                <div className="space-y-3">
                  <ColorSwatch name="Primary Pink" color="#ec407a" hex="#ec407a" />
                  <ColorSwatch name="Accent Orange" color="#ff9800" hex="#ff9800" />
                  <ColorSwatch name="Deep Blue" color="#1a237e" hex="#1a237e" />
                  <ColorSwatch name="Text Primary" color="rgba(255,255,255,0.9)" hex="white/90" />
                  <ColorSwatch name="Text Secondary" color="rgba(255,255,255,0.6)" hex="white/60" />
                  <ColorSwatch name="Text Muted" color="rgba(255,255,255,0.4)" hex="white/40" />
                </div>
              </LiquidGlass>

              {/* Developer Mode Colors */}
              <LiquidGlass intensity="high" className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600" />
                  Developer Mode
                </h3>
                <div className="space-y-3">
                  <ColorSwatch name="Primary Purple" color="#7c4dff" hex="#7c4dff" />
                  <ColorSwatch name="Accent Blue" color="#2196f3" hex="#2196f3" />
                  <ColorSwatch name="Deep Black" color="#000000" hex="#000000" />
                  <ColorSwatch name="Deep Blue" color="#1a237e" hex="#1a237e" />
                  <ColorSwatch name="Text Primary" color="rgba(255,255,255,0.9)" hex="white/90" />
                  <ColorSwatch name="Text Secondary" color="rgba(255,255,255,0.6)" hex="white/60" />
                </div>
              </LiquidGlass>
            </div>
          </section>

          {/* Gradients */}
          <section>
            <SectionHeader title="Gradients" description="Brand gradients for emphasis" />
            <LiquidGlass intensity="high" className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-xs text-white/40 uppercase tracking-wider">Designer Mode Gradient</p>
                  <div className="h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-500" />
                  <code className="text-xs text-white/60">from-pink-500 to-orange-500</code>
                </div>
                <div className="space-y-3">
                  <p className="text-xs text-white/40 uppercase tracking-wider">Developer Mode Gradient</p>
                  <div className="h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600" />
                  <code className="text-xs text-white/60">from-purple-600 to-blue-600</code>
                </div>
                <div className="space-y-3">
                  <p className="text-xs text-white/40 uppercase tracking-wider">Text Gradient (Designer)</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                    beautiful
                  </p>
                  <code className="text-xs text-white/60">from-pink-400 via-orange-400 to-pink-400</code>
                </div>
                <div className="space-y-3">
                  <p className="text-xs text-white/40 uppercase tracking-wider">Text Gradient (Developer)</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    cool
                  </p>
                  <code className="text-xs text-white/60">from-purple-400 via-blue-400 to-purple-400</code>
                </div>
              </div>
            </LiquidGlass>
          </section>

          {/* Glass Effects */}
          <section>
            <SectionHeader title="Glass Effects" description="Glassmorphism with varying intensities" />
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <p className="text-xs text-white/40 uppercase tracking-wider text-center">Low Intensity</p>
                <LiquidGlass intensity="low" className="p-6 h-32 flex items-center justify-center">
                  <span className="text-white/80">backdrop-blur-lg</span>
                </LiquidGlass>
              </div>
              <div className="space-y-3">
                <p className="text-xs text-white/40 uppercase tracking-wider text-center">Medium Intensity</p>
                <LiquidGlass intensity="medium" className="p-6 h-32 flex items-center justify-center">
                  <span className="text-white/80">backdrop-blur-xl</span>
                </LiquidGlass>
              </div>
              <div className="space-y-3">
                <p className="text-xs text-white/40 uppercase tracking-wider text-center">High Intensity</p>
                <LiquidGlass intensity="high" className="p-6 h-32 flex items-center justify-center">
                  <span className="text-white/80">backdrop-blur-2xl</span>
                </LiquidGlass>
              </div>
            </div>
            
            <div className="mt-6">
              <LiquidGlass intensity="high" className="p-6">
                <p className="text-xs text-white/40 uppercase tracking-wider mb-4">Glass Properties</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p className="text-white/80">Background</p>
                    <code className="text-white/60">bg-white/5 → bg-white/10</code>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white/80">Border</p>
                    <code className="text-white/60">border border-white/8</code>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white/80">Shadow</p>
                    <code className="text-white/60">shadow-[0_8px_40px_rgba(0,0,0,0.12)]</code>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white/80">Border Radius</p>
                    <code className="text-white/60">rounded-2xl (16px) or rounded-3xl (24px)</code>
                  </div>
                </div>
              </LiquidGlass>
            </div>
          </section>

          {/* Buttons */}
          <section>
            <SectionHeader title="Buttons" description="Interactive button styles" />
            <LiquidGlass intensity="high" className="p-8">
              <div className="space-y-8">
                {/* Primary Buttons */}
                <div className="space-y-4">
                  <p className="text-xs text-white/40 uppercase tracking-wider">Primary Actions</p>
                  <div className="flex flex-wrap gap-4">
                    <motion.button 
                      className={`rounded-full px-6 py-2 text-sm font-medium text-white ${
                        isDesigner 
                          ? "bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600" 
                          : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isDesigner ? "Create" : "Build"}
                    </motion.button>
                    <motion.button 
                      className="rounded-full px-6 py-2 text-sm font-medium text-white bg-white/15 hover:bg-white/25"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Secondary
                    </motion.button>
                    <motion.button 
                      className="rounded-full px-6 py-2 text-sm font-medium text-white/60 hover:text-white hover:bg-white/10"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ghost
                    </motion.button>
                  </div>
                </div>

                {/* Icon Buttons */}
                <div className="space-y-4">
                  <p className="text-xs text-white/40 uppercase tracking-wider">Icon Buttons</p>
                  <div className="flex flex-wrap gap-4">
                    <button className="flex h-10 w-10 items-center justify-center rounded-xl text-white/50 transition-colors hover:bg-white/10 hover:text-white">
                      <Plus className="h-5 w-5" />
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-xl text-white/50 transition-colors hover:bg-white/10 hover:text-white">
                      <Mic className="h-5 w-5" />
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white transition-colors hover:bg-white/25">
                      <ArrowUp className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Pill Buttons */}
                <div className="space-y-4">
                  <p className="text-xs text-white/40 uppercase tracking-wider">Pill / Tag Buttons</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">Switch</span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/60 hover:text-white hover:bg-white/15 cursor-pointer transition-colors">Tag</span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/60 hover:text-white hover:bg-white/15 cursor-pointer transition-colors">Filter</span>
                  </div>
                </div>
              </div>
            </LiquidGlass>
          </section>

          {/* Form Elements */}
          <section>
            <SectionHeader title="Form Elements" description="Input fields and text areas" />
            <LiquidGlass intensity="high" className="p-8">
              <div className="space-y-6 max-w-md">
                {/* Text Input */}
                <div className="space-y-2">
                  <label className="text-xs text-white/40 uppercase tracking-wider">Text Input</label>
                  <div className="relative rounded-2xl bg-white/8 border border-white/10 backdrop-blur-xl overflow-hidden">
                    <input 
                      type="text" 
                      placeholder="Enter text..."
                      className="w-full bg-transparent px-4 py-3 text-sm text-white/90 placeholder:text-white/40 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Textarea */}
                <div className="space-y-2">
                  <label className="text-xs text-white/40 uppercase tracking-wider">Text Area</label>
                  <div className="relative rounded-2xl bg-white/8 border border-white/10 backdrop-blur-xl overflow-hidden">
                    <textarea 
                      placeholder="Describe what you want to create..."
                      rows={3}
                      className="w-full bg-transparent px-4 py-3 text-sm text-white/90 placeholder:text-white/40 focus:outline-none resize-none"
                    />
                  </div>
                </div>
              </div>
            </LiquidGlass>
          </section>

          {/* Border Radius */}
          <section>
            <SectionHeader title="Border Radius" description="Consistent corner rounding" />
            <LiquidGlass intensity="high" className="p-8">
              <div className="flex flex-wrap gap-6 items-end">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-white/20 rounded-lg" />
                  <p className="text-xs text-white/40">lg (8px)</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-white/20 rounded-xl" />
                  <p className="text-xs text-white/40">xl (12px)</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl" />
                  <p className="text-xs text-white/40">2xl (16px)</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-white/20 rounded-3xl" />
                  <p className="text-xs text-white/40">3xl (24px)</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-white/20 rounded-full" />
                  <p className="text-xs text-white/40">full (50%)</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-white/60">
                  <strong className="text-white/80">Usage:</strong> Use <code className="bg-white/10 px-1 rounded">rounded-2xl</code> for cards and containers, 
                  <code className="bg-white/10 px-1 rounded ml-1">rounded-3xl</code> for large elements like chatbox, 
                  <code className="bg-white/10 px-1 rounded ml-1">rounded-full</code> for buttons and pills.
                </p>
              </div>
            </LiquidGlass>
          </section>

          {/* Spacing */}
          <section>
            <SectionHeader title="Spacing" description="Consistent spacing scale" />
            <LiquidGlass intensity="high" className="p-8">
              <div className="space-y-4">
                {[
                  { name: "xs", value: "4px", class: "w-1" },
                  { name: "sm", value: "8px", class: "w-2" },
                  { name: "md", value: "16px", class: "w-4" },
                  { name: "lg", value: "24px", class: "w-6" },
                  { name: "xl", value: "32px", class: "w-8" },
                  { name: "2xl", value: "48px", class: "w-12" },
                  { name: "3xl", value: "64px", class: "w-16" },
                ].map((space) => (
                  <div key={space.name} className="flex items-center gap-4">
                    <span className="w-12 text-sm text-white/60">{space.name}</span>
                    <div className={`h-4 ${space.class} bg-gradient-to-r ${isDesigner ? "from-pink-500 to-orange-500" : "from-purple-600 to-blue-600"} rounded`} />
                    <span className="text-xs text-white/40">{space.value}</span>
                  </div>
                ))}
              </div>
            </LiquidGlass>
          </section>

          {/* Status Indicators */}
          <section>
            <SectionHeader title="Status Indicators" description="Feedback and state colors" />
            <LiquidGlass intensity="high" className="p-8">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <Check className="h-5 w-5 text-emerald-400" />
                  <span className="text-sm text-emerald-400">Success</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                  <X className="h-5 w-5 text-red-400" />
                  <span className="text-sm text-red-400">Error</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <AlertTriangle className="h-5 w-5 text-amber-400" />
                  <span className="text-sm text-amber-400">Warning</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <Info className="h-5 w-5 text-blue-400" />
                  <span className="text-sm text-blue-400">Info</span>
                </div>
              </div>
            </LiquidGlass>
          </section>

          {/* Animation Guidelines */}
          <section>
            <SectionHeader title="Motion & Animation" description="Smooth, purposeful transitions" />
            <LiquidGlass intensity="high" className="p-8">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-white/80">Hover Scale</p>
                    <motion.div 
                      className="p-4 rounded-xl bg-white/10 text-center cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm text-white/60">Hover me</span>
                    </motion.div>
                    <code className="text-xs text-white/40">whileHover: scale 1.05</code>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-white/80">Fade In Up</p>
                    <motion.div 
                      className="p-4 rounded-xl bg-white/10 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-sm text-white/60">Animated element</span>
                    </motion.div>
                    <code className="text-xs text-white/40">opacity: 0→1, y: 20→0</code>
                  </div>
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <p className="text-xs text-white/40 uppercase tracking-wider mb-4">Timing Guidelines</p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-white/80">Fast (150-200ms)</p>
                      <p className="text-white/40">Hover states, micro-interactions</p>
                    </div>
                    <div>
                      <p className="text-white/80">Normal (300-500ms)</p>
                      <p className="text-white/40">Component transitions, fades</p>
                    </div>
                    <div>
                      <p className="text-white/80">Slow (800-1500ms)</p>
                      <p className="text-white/40">Background color changes, page transitions</p>
                    </div>
                  </div>
                </div>
              </div>
            </LiquidGlass>
          </section>

          {/* Component Reference */}
          <section>
            <SectionHeader title="Component Reference" description="Key dimensions and specifications" />
            <LiquidGlass intensity="high" className="p-8">
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-sm font-medium text-white/80 mb-2">ChatInput</p>
                    <ul className="text-xs text-white/50 space-y-1">
                      <li>Width: 638px</li>
                      <li>Min Height: 121px</li>
                      <li>Max Height: 484px (4x)</li>
                      <li>Border Radius: rounded-3xl</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-sm font-medium text-white/80 mb-2">LiquidGlass</p>
                    <ul className="text-xs text-white/50 space-y-1">
                      <li>Blur: lg / xl / 2xl</li>
                      <li>Background: white/5 → white/10</li>
                      <li>Border: white/8</li>
                      <li>Border Radius: rounded-2xl</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-sm font-medium text-white/80 mb-2">Mode Toggle Button</p>
                    <ul className="text-xs text-white/50 space-y-1">
                      <li>Padding: px-4 py-2</li>
                      <li>Font: text-sm</li>
                      <li>Contains: Switch pill + label + arrow</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-sm font-medium text-white/80 mb-2">Footer</p>
                    <ul className="text-xs text-white/50 space-y-1">
                      <li>Full width with rounded-t-3xl</li>
                      <li>Glass effect + noise texture</li>
                      <li>6-column grid layout</li>
                    </ul>
                  </div>
                </div>
              </div>
            </LiquidGlass>
          </section>

        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

// Helper Components
const SectionHeader = ({ title, description }: { title: string; description: string }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-semibold text-white mb-1">{title}</h2>
    <p className="text-sm text-white/50">{description}</p>
  </div>
);

const ColorSwatch = ({ name, color, hex }: { name: string; color: string; hex: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: color }} />
    <div>
      <p className="text-sm text-white/80">{name}</p>
      <code className="text-xs text-white/40">{hex}</code>
    </div>
  </div>
);

export default DesignSystem;
