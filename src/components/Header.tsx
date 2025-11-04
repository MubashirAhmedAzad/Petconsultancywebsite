import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, PawPrint, Sparkles, Home, Grid3x3, Calendar, Quote, MapPin, Users } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "./ThemeToggle";
import { NavItem } from "./NavItem";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home", path: "/", icon: Home },
    { id: "services", label: "Services", path: "/services", icon: Grid3x3 },
    { id: "pets", label: "Pets", path: "/pets", icon: PawPrint },
    { id: "booking", label: "Booking", path: "/booking", icon: Calendar },
    { id: "testimonials", label: "Testimonials", path: "/testimonials", icon: Quote },
    { id: "contact", label: "Contact", path: "/contact", icon: MapPin },
    { id: "about", label: "About Us", path: "/about", icon: Users },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "glass shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 lg:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 cursor-pointer mr-12"
            onClick={() => handleNavClick("/")}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-md opacity-50" />
              <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                <PawPrint className="w-7 h-7 text-white" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-foreground">PawEdge</span>
                <Sparkles className="w-4 h-4 text-secondary" />
              </div>
              <div className="text-primary">24×7</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                label={item.label}
                icon={item.icon}
                isActive={isActive(item.path)}
                onClick={() => handleNavClick(item.path)}
              />
            ))}
            <Button
              onClick={() => handleNavClick("/booking")}
              className="ml-2 h-11 px-6 rounded-full bg-gradient-to-r from-primary via-accent to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-0 active:outline-none active:ring-0"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Now
            </Button>
            <ThemeToggle />
          </nav>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2.5 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-0 active:outline-none active:ring-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-6 flex flex-col gap-3 overflow-hidden pb-4"
            >
              {/* Mobile Menu Items */}
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                  className="w-full"
                >
                  <NavItem
                    label={item.label}
                    icon={item.icon}
                    isActive={isActive(item.path)}
                    onClick={() => handleNavClick(item.path)}
                  />
                </motion.div>
              ))}
              
              {/* Mobile Book Consultation Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="w-full pt-2"
              >
                <Button
                  onClick={() => handleNavClick("/booking")}
                  className="w-full h-12 rounded-full bg-gradient-to-r from-primary via-accent to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px] focus:outline-none focus:ring-0 active:outline-none active:ring-0"
                  size="lg"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
