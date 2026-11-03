import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Heart, User, ChevronRight } from 'lucide-react';
import { navLinks } from '@/data/data.js';
import { cn } from '@/lib/utils.js';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // If not on home page, treat as scrolled for contrast
  const isScrolledState = scrolled || !isHome;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
        isScrolledState
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100'
          : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent'
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div
                className={cn(
                  'w-10 h-10 rounded-xl flex items-center justify-center font-serif font-bold text-lg transition-colors duration-300 shadow-sm',
                  isScrolledState
                    ? 'bg-[#102a43] text-[#efc07a]'
                    : 'bg-[#c8922f] text-white'
                )}
              >
                ZE
              </div>
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  'font-serif text-xl font-bold tracking-wide transition-colors duration-300',
                  isScrolledState ? 'text-[#102a43]' : 'text-white'
                )}
              >
                Zameen Elite
              </span>
              <span
                className={cn(
                  'text-[10px] tracking-[0.25em] font-medium transition-colors duration-300',
                  isScrolledState ? 'text-[#c8922f]' : 'text-[#efc07a]'
                )}
              >
                BUY · SELL · RENT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300',
                    isActive
                      ? isScrolledState
                        ? 'text-[#c8922f] font-semibold'
                        : 'text-[#efc07a] font-semibold'
                      : isScrolledState
                        ? 'text-gray-700 hover:text-[#102a43] hover:bg-gray-100/60'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#c8922f] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/properties"
              title="Saved Properties"
              className={cn(
                'p-2 rounded-xl transition-all duration-300',
                isScrolledState
                  ? 'text-gray-600 hover:text-[#c8922f] hover:bg-gray-100'
                  : 'text-white/80 hover:text-[#efc07a] hover:bg-white/10'
              )}
            >
              <Heart className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              title="Agent Directory"
              className={cn(
                'p-2 rounded-xl transition-all duration-300',
                isScrolledState
                  ? 'text-gray-600 hover:text-[#c8922f] hover:bg-gray-100'
                  : 'text-white/80 hover:text-[#efc07a] hover:bg-white/10'
              )}
            >
              <User className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="ml-2 px-6 py-2.5 bg-[#102a43] hover:bg-[#243b53] text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 border border-[#efc07a]/30"
            >
              <span>Get Started</span>
              <ChevronRight className="w-4 h-4 text-[#efc07a]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'lg:hidden p-2.5 rounded-xl transition-all duration-300 cursor-pointer',
              isScrolledState
                ? 'text-[#102a43] hover:bg-gray-100'
                : 'text-white hover:bg-white/15'
            )}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="lg:hidden overflow-hidden bg-white rounded-2xl shadow-xl mt-2 mb-4 border border-gray-100"
            >
              <div className="p-4 space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.25 }}
                    >
                      <Link
                        to={link.path}
                        className={cn(
                          'block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                          isActive
                            ? 'bg-[#fdf8f0] text-[#c8922f] font-semibold'
                            : 'text-gray-700 hover:bg-gray-50'
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}

                <div className="pt-3 border-t border-gray-100">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-5 py-3 bg-[#102a43] hover:bg-[#243b53] text-white text-sm font-semibold rounded-xl transition shadow-md"
                  >
                    Get Started &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
