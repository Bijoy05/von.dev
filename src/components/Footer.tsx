import { Globe } from "lucide-react";

const footerLinks = {
  company: {
    title: "Company",
    links: ["Careers", "Press & media", "Enterprise", "Security", "Trust center", "Partnerships"],
  },
  product: {
    title: "Product",
    links: [
      "Pricing",
      "Student discount",
      "Founders",
      "Product Managers",
      "Designers",
      "Marketers",
      "Sales",
      "Prototyping",
      "Internal Tools",
      "Connections",
      "Changelog",
      "Status",
    ],
  },
  resources: {
    title: "Resources",
    links: ["Learn", "Templates", "Guides", "Videos", "Blog", "Support"],
  },
  legal: {
    title: "Legal",
    links: [
      "Privacy policy",
      "Cookie settings",
      "Terms of Service",
      "Platform rules",
      "Report abuse",
      "Report security concerns",
      "DPA",
    ],
  },
  community: {
    title: "Community",
    links: [
      "Apply to our expert program",
      "Hire a Lovable expert",
      "Affiliates",
      "Code of conduct",
      "Discord",
      "Reddit",
      "X / Twitter",
      "YouTube",
      "LinkedIn",
    ],
  },
};

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden rounded-t-3xl">
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl rounded-t-3xl" />
      
      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay rounded-t-3xl"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />
      
      {/* Top border glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-3xl" />
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-black/10 pointer-events-none rounded-t-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            {/* Logo */}
            <div className="mb-8">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-pink-500 to-orange-500" />
            </div>
            
            {/* Language Selector */}
            <button className="flex items-center gap-2 text-sm text-white/50 hover:text-white/70 transition-colors mt-auto">
              <Globe className="h-4 w-4" />
              <span>EN</span>
            </button>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-medium text-white/40 mb-4">{footerLinks.company.title}</h3>
            <ul className="space-y-3">
              {footerLinks.company.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-medium text-white/40 mb-4">{footerLinks.product.title}</h3>
            <ul className="space-y-3">
              {footerLinks.product.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-medium text-white/40 mb-4">{footerLinks.resources.title}</h3>
            <ul className="space-y-3">
              {footerLinks.resources.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-medium text-white/40 mb-4">{footerLinks.legal.title}</h3>
            <ul className="space-y-3">
              {footerLinks.legal.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-sm font-medium text-white/40 mb-4">{footerLinks.community.title}</h3>
            <ul className="space-y-3">
              {footerLinks.community.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
