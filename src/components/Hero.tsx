import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Heart, Shield, Star, Sparkles, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onBookNowClick: () => void;
  onExploreServicesClick?: () => void;
}

export function Hero({ onBookNowClick, onExploreServicesClick }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(14, 77, 146, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(244, 180, 0, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(255, 112, 67, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(14, 77, 146, 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-br from-primary to-accent rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            style={{ opacity }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full border border-primary/20 shadow-lg"
            >
              <Sparkles className="w-5 h-5 text-secondary" />
              <span className="text-primary">Premium Pet Care Services</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-foreground mb-4">
                Expert Care for Your
                <span className="gradient-text block">Beloved Companions</span>
              </h1>
              <p className="text-muted-foreground text-xl">
                24×7 professional consultancy for all your pet care needs. From
                training to health, we're always here for your furry friends.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={onBookNowClick}
                className="group rounded-full bg-gradient-to-r from-primary via-accent to-secondary hover:shadow-2xl transition-all duration-500 px-8 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative flex items-center gap-2">
                  Book Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onExploreServicesClick}
                className="rounded-full border-2 border-primary hover:bg-primary/10 backdrop-blur-sm px-8"
              >
                Explore Services
              </Button>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-8"
            >
              {[
                { icon: Heart, value: "2500+", label: "Happy Pets", color: "text-accent" },
                { icon: Shield, value: "15+", label: "Years Expert", color: "text-primary" },
                { icon: Star, value: "4.9", label: "Rating", color: "text-secondary" },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass p-4 rounded-2xl border border-primary/10 shadow-lg cursor-pointer"
                  >
                    <Icon className={`w-6 h-6 ${stat.color} mb-2`} />
                    <div className="text-foreground">{stat.value}</div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Pet Images */}
          <motion.div
            style={{ 
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            className="relative hidden lg:block"
          >
            {/* Main Image */}
            <motion.div
              style={{ y: y1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-[3rem] blur-3xl" />
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative glass rounded-[3rem] overflow-hidden shadow-2xl border border-primary/20"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1648799834307-97650bbf7298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDc3OTE3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Happy pet"
                  className="w-full h-[550px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </motion.div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-6 -left-6 glass p-4 rounded-2xl shadow-xl border border-secondary/20 max-w-[200px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-foreground">Premium</div>
                  <p className="text-muted-foreground">Care 24×7</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl shadow-xl border border-primary/20 max-w-[200px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-success rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <div className="text-foreground">Certified</div>
                  <p className="text-muted-foreground">Experts</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Pet Icon */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 -right-12 w-24 h-24 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center shadow-2xl"
            >
              <span className="text-5xl">🐾</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}