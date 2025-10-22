import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Clock, 
  CheckCircle, 
  Shield, 
  Star, 
  Apple, 
  Home, 
  Brain, 
  X,
  Check,
  Sparkles
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "../components/ui/dialog";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { FloatingLiveChatButton } from "../components/LiveChatButton";
import { toast } from "sonner@2.0.3";

const mainServices = [
  {
    id: "nutritional",
    icon: Apple,
    title: "Nutritional Consulting",
    subtitle: "Expert Diet Plans for Optimal Health",
    description: "Personalized nutrition guidance to keep your pet healthy and energetic",
    color: "from-success to-primary",
    image: "https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXQlMjBmb29kJTIwaGVhbHRoeXxlbnwxfHx8fDE3NjA3OTQzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    details: {
      overview: "Our certified pet nutritionists create customized meal plans based on your pet's age, breed, activity level, and health conditions. We focus on balanced nutrition to enhance your pet's overall well-being.",
      features: [
        "Personalized meal plans tailored to your pet",
        "Nutritional analysis and health assessments",
        "Weight management programs",
        "Allergy and sensitivity consultations",
        "Supplement recommendations",
        "Ongoing support and adjustments",
      ],
      pricing: [
        { name: "Basic Consultation", price: "$75", duration: "30 min" },
        { name: "Complete Plan", price: "$150", duration: "60 min" },
        { name: "Monthly Follow-up", price: "$50", duration: "20 min" },
      ],
    },
  },
  {
    id: "boarding",
    icon: Home,
    title: "Boarding Services",
    subtitle: "Premium Home Away From Home",
    description: "Safe, comfortable, and fun boarding experience for your beloved pet",
    color: "from-primary to-accent",
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBib2FyZGluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc2MDc5NDM5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    details: {
      overview: "Our state-of-the-art boarding facility provides a safe, clean, and loving environment for your pet while you're away. With 24/7 supervision, comfortable accommodations, and plenty of playtime.",
      features: [
        "Climate-controlled luxury suites",
        "24/7 professional supervision",
        "Daily exercise and playtime",
        "Personalized feeding schedules",
        "Regular health check-ups",
        "Photo/video updates for pet parents",
      ],
      pricing: [
        { name: "Standard Suite", price: "$45/night", duration: "Per night" },
        { name: "Deluxe Suite", price: "$75/night", duration: "Per night" },
        { name: "VIP Suite", price: "$120/night", duration: "Per night" },
      ],
    },
  },
  {
    id: "behavioral",
    icon: Brain,
    title: "Behavioral Consultation",
    subtitle: "Understanding & Improving Pet Behavior",
    description: "Professional guidance to address behavioral challenges and enhance training",
    color: "from-accent to-secondary",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB0cmFpbmluZyUyMHRyYWluZXJ8ZW58MXx8fHwxNzYwNzk0Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    details: {
      overview: "Our certified animal behaviorists help address common and complex behavioral issues using positive reinforcement techniques. From anxiety to aggression, we provide compassionate, science-based solutions.",
      features: [
        "Comprehensive behavioral assessment",
        "Customized training programs",
        "Anxiety and stress management",
        "Aggression modification",
        "Socialization techniques",
        "Owner education and support",
      ],
      pricing: [
        { name: "Initial Assessment", price: "$125", duration: "90 min" },
        { name: "Training Package (4 sessions)", price: "$400", duration: "4 weeks" },
        { name: "Follow-up Session", price: "$85", duration: "45 min" },
      ],
    },
  },
];

const whyChooseUs = [
  {
    icon: Star,
    title: "Certified Experts",
    description: "All our professionals are certified and have years of experience",
  },
  {
    icon: Clock,
    title: "24×7 Available",
    description: "Round-the-clock support for all your pet care needs",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "State-of-the-art facilities with strict safety protocols",
  },
  {
    icon: CheckCircle,
    title: "Proven Results",
    description: "Thousands of happy pets and satisfied pet parents",
  },
];

export function ServicesPage() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<typeof mainServices[0] | null>(null);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full border border-primary/20 shadow-lg mb-6"
            >
              <Sparkles className="w-5 h-5 text-secondary" />
              <span className="text-primary">Premium Services</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-foreground mb-6"
            >
              Comprehensive Care
              <span className="gradient-text block">For Every Pet Need</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-xl"
            >
              From expert nutritional consulting to premium boarding and specialized behavioral guidance,
              we offer complete professional pet care services tailored to your pet's unique needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.5 + index * 0.15,
                    ease: "easeOut"
                  }}
                >
                  <Card className="group h-full overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl glass cursor-pointer">
                    <CardContent className="p-0">
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden">
                        <ImageWithFallback
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-40 group-hover:opacity-50 transition-opacity`} />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}
                        >
                          <Icon className="w-7 h-7 text-white" />
                        </motion.div>

                        <h3 className="text-foreground mb-2">{service.title}</h3>
                        <p className="text-primary mb-3">{service.subtitle}</p>
                        <p className="text-muted-foreground mb-6">{service.description}</p>

                        <Button
                          onClick={() => setSelectedService(service)}
                          className={`w-full rounded-full bg-gradient-to-r ${service.color} hover:shadow-2xl hover:scale-105 transition-all duration-500`}
                        >
                          Learn More
                          <Sparkles className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-muted/30">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-foreground mb-6">
              Why Choose
              <span className="gradient-text block">Pet Consultancy 24×7</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We go above and beyond to ensure your pet receives the best care possible
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center"
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass border-primary/20 shadow-2xl overflow-hidden">
              <CardContent className="p-12 text-center">
                <h2 className="text-foreground mb-6">
                  Ready to Book a Service?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Schedule your appointment today and give your pet the care they deserve
                </p>
                <Button
                  size="lg"
                  onClick={() => navigate("/booking")}
                  className="rounded-full bg-gradient-to-r from-primary via-accent to-secondary hover:shadow-2xl hover:scale-105 transition-all duration-500 px-8"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass border-primary/20">
              <DialogTitle className="sr-only">{selectedService.title}</DialogTitle>
              <DialogDescription className="sr-only">
                {selectedService.description} - Learn more about our {selectedService.title} service including features, pricing, and details.
              </DialogDescription>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass hover:bg-destructive/10 flex items-center justify-center transition-colors z-50"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header Image */}
                <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${selectedService.color} opacity-50`} />
                  <div className="absolute bottom-6 left-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center mb-3 shadow-xl`}>
                      <selectedService.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-white mb-1">{selectedService.title}</h2>
                    <p className="text-white/90">{selectedService.subtitle}</p>
                  </div>
                </div>

                {/* Overview */}
                <div className="mb-8">
                  <h3 className="text-foreground mb-3">Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedService.details.overview}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-foreground mb-4">What's Included</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {selectedService.details.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-success" />
                        </div>
                        <p className="text-muted-foreground">{feature}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h3 className="text-foreground mb-4">Pricing</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {selectedService.details.pricing.map((plan, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        <Card className="glass border-primary/10 hover:border-primary/30 transition-all">
                          <CardContent className="p-4 text-center">
                            <p className="text-muted-foreground mb-2">{plan.name}</p>
                            <p className="text-primary mb-1">{plan.price}</p>
                            <p className="text-muted-foreground">{plan.duration}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-4 pt-6 border-t border-border/50">
                  <Button
                    size="lg"
                    onClick={() => {
                      setSelectedService(null);
                      navigate("/booking");
                    }}
                    className={`flex-1 rounded-full bg-gradient-to-r ${selectedService.color} hover:shadow-2xl hover:scale-105 transition-all duration-500`}
                  >
                    Book This Service
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => {
                      setSelectedService(null);
                      navigate("/contact");
                    }}
                    className="flex-1 rounded-full border-2 border-primary hover:bg-primary/10"
                  >
                    Contact Us
                  </Button>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>

      {/* Floating Live Chat Button */}
      <FloatingLiveChatButton 
        onClick={() => {
          toast.success("Live chat support coming soon!", {
            description: "Our team will be available 24/7 to assist you.",
            duration: 3000,
          });
        }}
        position="bottom-right"
      />
    </div>
  );
}
