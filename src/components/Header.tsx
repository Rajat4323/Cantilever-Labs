import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/image18.png" alt="Cantilever" className="h-10" />
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="relative group">
            <button className="text-gray-700 px-2 py-1 transition-all duration-300 
              hover:text-blue-600 hover:scale-105 transform">
              Course ▾
            </button>
          </div>
          <div className="relative group">
            <button className="text-gray-700 px-2 py-1 transition-all duration-300 
              hover:text-blue-600 hover:scale-105 transform">
              Free Resources ▾
            </button>
          </div>
          <div className="relative group">
            <button className="text-gray-700 px-2 py-1 transition-all duration-300 
              hover:text-blue-600 hover:scale-105 transform">
              For Colleges ▾
            </button>
          </div>
          <Link to="/" className="text-gray-700 px-2 py-1 transition-all duration-300 
            hover:text-blue-600 hover:scale-105 transform">
            Blog
          </Link>
          <Link to="/" className="bg-blue-100 text-blue-700 px-6 py-2 rounded-md font-medium
            transition-all duration-300 transform
            hover:bg-blue-600 hover:text-white
            hover:scale-105 hover:shadow-lg hover:-translate-y-0.5
            active:scale-95 active:shadow-none active:translate-y-0">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity md:hidden ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div 
          className={`fixed top-0 right-0 w-[300px] h-full bg-white transform transition-transform duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center">
                  <img src="/image18.png" alt="Cantilever" className="h-8" />
                </Link>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-md"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <nav className="flex-1 p-4">
              <div className="flex flex-col space-y-4">
                <button className="text-gray-700 px-2 py-1 transition-all duration-300 
                  hover:text-blue-600 hover:scale-105 transform text-left">
                  Course ▾
                </button>
                <button className="text-gray-700 px-2 py-1 transition-all duration-300 
                  hover:text-blue-600 hover:scale-105 transform text-left">
                  Free Resources ▾
                </button>
                <button className="text-gray-700 px-2 py-1 transition-all duration-300 
                  hover:text-blue-600 hover:scale-105 transform text-left">
                  For Colleges ▾
                </button>
                <Link 
                  to="/" 
                  className="text-gray-700 px-2 py-1 transition-all duration-300 
                    hover:text-blue-600 hover:scale-105 transform"
                >
                  Blog
                </Link>
                <Link 
                  to="/" 
                  className="bg-blue-100 text-blue-700 px-6 py-2 rounded-md font-medium
                    transition-all duration-300 transform
                    hover:bg-blue-600 hover:text-white
                    hover:scale-105 hover:shadow-lg hover:-translate-y-0.5
                    active:scale-95 active:shadow-none active:translate-y-0 text-center"
                >
                  Login
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
