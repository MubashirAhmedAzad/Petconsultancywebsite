import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { GraduationCap, Heart, Scissors, Stethoscope, Home, Users, ChevronDown, Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    id: 1,
    title: "Dog Training",
    description: "Professional obedience training and behavioral modification for dogs of all ages and breeds.",
    image: "https://images.unsplash.com/photo-1690717967186-bfa4ae996dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB0cmFpbmluZyUyMG91dGRvb3J8ZW58MXx8fHwxNzYwNzk0Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: GraduationCap,
    color: "from-primary to-accent",
    features: ["Basic Obedience", "Behavioral Modification", "Puppy Training", "Advanced Commands"],
  },
  {
    id: 2,
    title: "Health Check-ups",
    description: "Comprehensive veterinary consultations and regular health assessments for your beloved pets.",
    image: "https://images.unsplash.com/photo-1725409796886-850f46d1d0cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBkb2clMjBjaGVja3VwfGVufDF8fHx8MTc2MDc5NDM5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Stethoscope,
    color: "from-success to-primary",
    features: ["Full Physical Exam", "Vaccination Updates", "Blood Work", "Dental Check"],
  },
  {
    id: 3,
    title: "Grooming Services",
    description: "Premium grooming services to keep your dog looking and feeling their absolute best.",
    image: "https://images.unsplash.com/photo-1597595735781-6a57fb8e3e3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBncm9vbWluZyUyMHNhbG9ufGVufDF8fHx8MTc2MDcxODY3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Scissors,
    color: "from-accent to-secondary",
    features: ["Bath & Brush", "Hair Cutting", "Nail Trimming", "Spa Treatment"],
  },
  {
    id: 4,
    title: "Nutritional Consulting",
    description: "Expert advice on diet plans and nutritional requirements tailored to your dog's needs.",
    icon: Heart,
    color: "from-secondary to-primary",
    features: ["Diet Planning", "Weight Management", "Allergy Analysis", "Supplement Advice"],
  },
  {
    id: 5,
    title: "Boarding Services",
    description: "Safe and comfortable boarding facilities with 24/7 care when you're away.",
    icon: Home,
    color: "from-primary to-success",
    features: ["24/7 Supervision", "Spacious Rooms", "Play Areas", "Camera Access"],
  },
  {
    id: 6,
    title: "Behavioral Consultation",
    description: "One-on-one sessions to address specific behavioral issues and improve pet-owner relationships.",
    icon: Users,
    color: "from-accent to-primary",
    features: ["Anxiety Treatment", "Aggression Control", "Socialization", "Custom Plans"],
  },
];

export function Services() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full border border-primary/20 shadow-lg mb-6"
          >
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="text-primary">Our Services</span>
          </motion.div>
          <h2 className="text-foreground mb-6">
            Comprehensive Care for
            <span className="gradient-text block">Your Furry Friends</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            We offer a wide range of professional services designed to keep your
            pets healthy, happy, and well-behaved. Click any card to learn more.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedId === service.id;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Card 
                  className="group h-full overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl glass cursor-pointer"
                  onClick={() => setExpandedId(isExpanded ? null : service.id)}
                >
                  <CardContent className="p-0">
                    {service.image ? (
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-40 group-hover:opacity-50 transition-opacity duration-300`} />
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="absolute top-4 right-4 w-12 h-12 glass rounded-xl flex items-center justify-center shadow-lg"
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                      </div>
                    ) : (
                      <div className={`relative h-48 bg-gradient-to-br ${service.color} flex items-center justify-center overflow-hidden`}>
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 opacity-10"
                        >
                          <Icon className="w-full h-full" />
                        </motion.div>
                        <Icon className="w-20 h-20 text-white relative z-10" />
                      </div>
                    )}
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-foreground">{service.title}</h3>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-primary" />
                        </motion.div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-border">
                              <p className="text-muted-foreground mb-3">
                                What's Included:
                              </p>
                              <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-2 text-muted-foreground"
                                  >
                                    <Check className="w-4 h-4 text-success flex-shrink-0" />
                                    <span>{feature}</span>
                                  </motion.li>
                                ))}
                              </ul>
                              <Button
                                className="w-full mt-4 rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-lg"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Handle booking
                                }}
                              >
                                Book This Service
                              </Button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
