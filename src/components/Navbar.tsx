
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-30 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary flex items-center">
            <span className="hidden sm:inline">Farmer's</span> Market
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
            <Link to="/market" className="text-gray-700 hover:text-primary font-medium">Market</Link>
            <Link to="/farmers" className="text-gray-700 hover:text-primary font-medium">Farmers</Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-primary font-medium">How it Works</Link>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="relative text-gray-700 hover:text-primary">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {isLoggedIn ? (
              <Link to="/profile" className="text-gray-700 hover:text-primary">
                <User className="h-6 w-6" />
              </Link>
            ) : (
              <Link to="/login" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors">
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-20">
          <div className="flex flex-col px-4 py-2">
            <Link to="/" className="py-3 text-gray-700 border-b" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/market" className="py-3 text-gray-700 border-b" onClick={() => setIsMenuOpen(false)}>Market</Link>
            <Link to="/farmers" className="py-3 text-gray-700 border-b" onClick={() => setIsMenuOpen(false)}>Farmers</Link>
            <Link to="/how-it-works" className="py-3 text-gray-700 border-b" onClick={() => setIsMenuOpen(false)}>How it Works</Link>
            
            <div className="flex justify-between items-center py-3">
              <Link to="/cart" className="relative text-gray-700 flex items-center" onClick={() => setIsMenuOpen(false)}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                <span>Cart</span>
                {cartCount > 0 && (
                  <span className="ml-2 bg-primary text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              
              {isLoggedIn ? (
                <Link to="/profile" className="text-gray-700 flex items-center" onClick={() => setIsMenuOpen(false)}>
                  <User className="h-5 w-5 mr-2" />
                  <span>Profile</span>
                </Link>
              ) : (
                <Link to="/login" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
