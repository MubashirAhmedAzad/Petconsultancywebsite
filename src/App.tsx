import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PageTransition } from "./components/PageTransition";
import { PawPrintEffect } from "./components/PawPrintEffect";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { PetsPage } from "./pages/PetsPage";
import { PetDetailPage } from "./pages/PetDetailPage";
import { BookingPage } from "./pages/BookingPage";
import { TestimonialsPage } from "./pages/TestimonialsPage";
import { ContactPage } from "./pages/ContactPage";
import { Toaster } from "./components/ui/sonner";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./components/ui/button";
import { useState, useEffect } from "react";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showFAB, setShowFAB] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollTop(scrollPosition > 500);
      setShowFAB(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChatClick = () => {
    console.log("Opening chat...");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+15551234567";
  };

  return (
    <div className="min-h-screen relative">
      <Header />
      <ScrollToTop />

      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <HomePage />
                </PageTransition>
              }
            />
            <Route
              path="/about"
              element={
                <PageTransition>
                  <AboutPage />
                </PageTransition>
              }
            />
            <Route
              path="/services"
              element={
                <PageTransition>
                  <ServicesPage />
                </PageTransition>
              }
            />
            <Route
              path="/pets"
              element={
                <PageTransition>
                  <PetsPage />
                </PageTransition>
              }
            />
            <Route
              path="/pets/:id"
              element={
                <PageTransition>
                  <PetDetailPage />
                </PageTransition>
              }
            />
            <Route
              path="/booking"
              element={
                <PageTransition>
                  <BookingPage />
                </PageTransition>
              }
            />
            <Route
              path="/testimonials"
              element={
                <PageTransition>
                  <TestimonialsPage />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <ContactPage />
                </PageTransition>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Floating Action Buttons */}
      <AnimatePresence>
        {showFAB && (
          <>
            {/* Chat Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="fixed bottom-28 right-8 z-40"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  y: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <Button
                  onClick={handleChatClick}
                  className="relative w-14 h-14 rounded-full bg-gradient-to-r from-accent to-secondary hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                  aria-label="Start chat"
                >
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all" />
                  <MessageCircle className="w-6 h-6 relative z-10" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Call Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0, x: 100 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
              className="fixed bottom-44 right-8 z-40"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  onClick={handleCallClick}
                  className="w-14 h-14 rounded-full glass border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  aria-label="Call us"
                >
                  <Phone className="w-6 h-6 text-primary" />
                </Button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-8 right-8 z-40"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                onClick={scrollToTop}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                aria-label="Scroll to top"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ y: "100%" }}
                  whileHover={{ y: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <ArrowUp className="w-6 h-6 relative z-10 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Particles (Decorative) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <Toaster />
      <PawPrintEffect />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}