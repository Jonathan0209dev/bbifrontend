import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-header backdrop-blur-xl border-b border-gray-200 transition-all">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center py-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('assessment')}
              className="font-roboto-slab font-medium text-base px-3 py-2 rounded-lg transition-colors hover:bg-black/5 relative group"
              style={{ 
                color: '#180E4A',
                letterSpacing: '-0.16px',
                lineHeight: '25.6px'
              }}
            >
              Assessment
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-primary transition-all group-hover:w-4/5"></div>
            </button>
            <button
              onClick={() => scrollToSection('organizations')}
              className="font-roboto-slab font-medium text-base px-3 py-2 rounded-lg transition-colors hover:bg-black/5 relative group"
              style={{ 
                color: '#180E4A',
                letterSpacing: '-0.16px',
                lineHeight: '25.6px'
              }}
            >
              For Organizations
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-primary transition-all group-hover:w-4/5"></div>
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="font-roboto-slab font-medium text-base px-3 py-2 rounded-lg transition-colors hover:bg-black/5 relative group"
              style={{ 
                color: '#180E4A',
                letterSpacing: '-0.16px',
                lineHeight: '25.6px'
              }}
            >
              Benefits
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-primary transition-all group-hover:w-4/5"></div>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="font-roboto-slab font-medium text-base px-3 py-2 rounded-lg transition-colors hover:bg-black/5 relative group"
              style={{ 
                color: '#180E4A',
                letterSpacing: '-0.16px',
                lineHeight: '25.6px'
              }}
            >
              About
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-primary transition-all group-hover:w-4/5"></div>
            </button>
            <button 
              className="w-[165px] h-[42px] px-6 py-3 rounded-2xl font-roboto-slab font-semibold text-sm leading-none text-center text-white transition-all hover:shadow-lg"
              style={{ 
                backgroundColor: '#031744',
                boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.06), 0px 4px 6px 0px rgba(0, 0, 0, 0.07)'
              }}
            >
              Start Assessment
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors absolute right-6"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('assessment')}
                className="font-roboto-slab font-medium text-base p-3 rounded-lg transition-colors hover:bg-black/5 text-left"
                style={{ 
                  color: '#180E4A',
                  letterSpacing: '-0.16px',
                  lineHeight: '25.6px'
                }}
              >
                Assessment
              </button>
              <button
                onClick={() => scrollToSection('organizations')}
                className="font-roboto-slab font-medium text-base p-3 rounded-lg transition-colors hover:bg-black/5 text-left"
                style={{ 
                  color: '#180E4A',
                  letterSpacing: '-0.16px',
                  lineHeight: '25.6px'
                }}
              >
                For Organizations
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="font-roboto-slab font-medium text-base p-3 rounded-lg transition-colors hover:bg-black/5 text-left"
                style={{ 
                  color: '#180E4A',
                  letterSpacing: '-0.16px',
                  lineHeight: '25.6px'
                }}
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="font-roboto-slab font-medium text-base p-3 rounded-lg transition-colors hover:bg-black/5 text-left"
                style={{ 
                  color: '#180E4A',
                  letterSpacing: '-0.16px',
                  lineHeight: '25.6px'
                }}
              >
                About
              </button>
                             <button 
                 className="w-[165px] h-[42px] px-6 py-3 rounded-2xl font-roboto-slab font-semibold text-sm leading-none text-center text-white transition-all hover:shadow-lg mt-4 mx-3"
                 style={{ 
                   backgroundColor: '#031744',
                   boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.06), 0px 4px 6px 0px rgba(0, 0, 0, 0.07)'
                 }}
               >
                 Start Assessment
               </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 