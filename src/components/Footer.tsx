import React from 'react';

const BrainIcon = () => (
  <svg width="32" height="32" viewBox="0 0 40 40" fill="none" className="text-primary-blue">
    {/* Brain outline */}
    <path 
      d="M12 15C12 11.5 14.5 8.5 18 8.5C19.5 7.5 21.5 7.5 23 8.5C26.5 8.5 29 11.5 29 15C30.5 16 31.5 17.5 31.5 19.5C31.5 21.5 30.5 23 29 24C29 26.5 26.5 29 23 29C21.5 30 19.5 30 18 29C14.5 29 12 26.5 12 24C10.5 23 9.5 21.5 9.5 19.5C9.5 17.5 10.5 16 12 15Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      fill="none"
    />
    {/* Neural connections */}
    <circle cx="16" cy="16" r="1.5" fill="currentColor"/>
    <circle cx="20" cy="14" r="1.5" fill="currentColor"/>
    <circle cx="24" cy="16" r="1.5" fill="currentColor"/>
    <circle cx="18" cy="20" r="1.5" fill="currentColor"/>
    <circle cx="22" cy="22" r="1.5" fill="currentColor"/>
    <circle cx="16" cy="24" r="1.5" fill="currentColor"/>
    <circle cx="24" cy="24" r="1.5" fill="currentColor"/>
    {/* Connection lines */}
    <path 
      d="M16 16L20 14M20 14L24 16M18 20L16 16M18 20L20 14M18 20L24 16M22 22L18 20M22 22L24 16M16 24L18 20M24 24L22 22M24 24L24 16" 
      stroke="currentColor" 
      strokeWidth="0.8" 
      opacity="0.6"
    />
  </svg>
);

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerSections = [
    {
      title: "Assessment",
      links: [
        { label: "Take Assessment", action: () => scrollToSection('assessment') },
        { label: "Sample Report", href: "#" },
        { label: "How It Works", href: "#" },
        { label: "Accuracy", href: "#" }
      ]
    },
    {
      title: "Organizations", 
      links: [
        { label: "Team Building", action: () => scrollToSection('organizations') },
        { label: "Talent Management", href: "#" },
        { label: "Enterprise Plans", href: "#" },
        { label: "API Access", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Research", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Best Practices", href: "#" },
        { label: "Support", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", action: () => scrollToSection('about') },
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Contact", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <BrainIcon />
              <div>
                <h3 className="text-xl font-bold text-white font-display">BBI Intelligence</h3>
                <p className="text-sm text-gray-400">Behavioral & Business Insights</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Unlock your potential and build better teams through advanced behavioral intelligence and communication insights.
            </p>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-white font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.action ? (
                        <button
                          onClick={link.action}
                          className="text-gray-400 hover:text-primary-blue transition-colors font-medium text-left"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-primary-blue transition-colors font-medium"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              &copy; 2024 BBI Intelligence. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors font-medium">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors font-medium">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors font-medium">
                Research
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 