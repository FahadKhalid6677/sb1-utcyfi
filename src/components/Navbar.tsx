import { Bot, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Installation', href: '#installation' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 top-4">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-gray-900/70 rounded-2xl shadow-lg shadow-gray-900/20 border border-gray-800/50">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="bg-indigo-500/10 p-2 rounded-xl">
                  <Bot className="w-6 h-6 text-indigo-400" />
                </div>
                <span className="text-xl font-semibold text-white">iMessageAI</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <button className="bg-indigo-600/90 backdrop-blur-sm text-white px-6 py-2 rounded-xl hover:bg-indigo-600 transition-all hover:shadow-md hover:shadow-indigo-500/20">
                  Get Started
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-300 hover:text-white p-2 rounded-xl hover:bg-gray-800/50 transition-colors"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-800/50">
              <div className="px-4 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-gray-800/50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button 
                  className="w-full mt-2 bg-indigo-600/90 backdrop-blur-sm text-white px-6 py-2 rounded-xl hover:bg-indigo-600 transition-all hover:shadow-md hover:shadow-indigo-500/20"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}