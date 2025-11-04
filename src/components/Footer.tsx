import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { PawPrint, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, label: "Facebook", color: "hover:text-[#1877F2]" },
    { icon: Twitter, label: "Twitter", color: "hover:text-[#1DA1F2]" },
    { icon: Instagram, label: "Instagram", color: "hover:text-[#E4405F]" },
    { icon: Linkedin, label: "LinkedIn", color: "hover:text-[#0A66C2]" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Background Effects */}
      <div className="absolute inset-0 glass" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-md opacity-50" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                  <PawPrint className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-foreground">PawEdge</span>
                  <Sparkles className="w-4 h-4 text-secondary" />
                </div>
                <div className="text-primary">24×7</div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Professional pet care services dedicated to the health and
              happiness of your beloved companions. Available round-the-clock for your convenience.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Heart className="w-5 h-5 text-accent fill-accent" />
              <span>Making Tails Wag Since 2010</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Pets", path: "/pets" },
                { label: "Booking", path: "/booking" },
                { label: "Testimonials", path: "/testimonials" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      navigate(link.path);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Dog Training",
                "Health Check-ups",
                "Grooming Services",
                "Nutritional Consulting",
                "Boarding Facilities",
                "Behavioral Therapy",
              ].map((service) => (
                <li key={service} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-foreground mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground">Call Us</p>
                  <a href="tel:+15551234567" className="hover:text-primary transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-foreground">Email Us</p>
                  <a href="mailto:hello@pawedge247.com" className="hover:text-primary transition-colors break-all">
                    hello@pawedge247.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-foreground">Visit Us</p>
                  <span>123 Pet Street, Dogville, CA 90210</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-border/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground text-center md:text-left">
              © {currentYear} PawEdge – Pet Consultation 24×7. All rights reserved. Made with{" "}
              <Heart className="w-4 h-4 inline text-accent fill-accent" /> for pets.
            </p>
            
            {/* Social Media */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`rounded-full glass border border-border/50 hover:border-primary/30 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary" />
    </footer>
  );
}
