import { motion } from "motion/react";
import { Hero } from "../components/Hero";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Heart, Star, ArrowRight, Sparkles, PawPrint } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const featuredPets = [
  {
    id: 1,
    name: "Max",
    breed: "Golden Retriever",
    image: "https://images.unsplash.com/photo-1648799834307-97650bbf7298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDc3OTE3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Rocky",
    breed: "Husky",
    image: "https://images.unsplash.com/photo-1693674648823-775fb99b6aad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodXNreSUyMGRvZyUyMGJsdWUlMjBleWVzfGVufDF8fHx8MTc2MDcwNzU5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    name: "Charlie",
    breed: "Corgi",
    image: "https://images.unsplash.com/photo-1654995158960-8c7827c57c45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JnaSUyMHB1cHB5JTIwaGFwcHl8ZW58MXx8fHwxNzYwNzk1Mjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const quickTestimonials = [
  {
    name: "Sarah Johnson",
    text: "Absolutely amazing service! My dog is happier than ever.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    text: "Professional, caring, and always available. Highly recommend!",
    rating: 5,
  },
];

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <Hero 
        onBookNowClick={() => navigate("/booking")} 
        onExploreServicesClick={() => navigate("/services")}
      />

      {/* Explore Services Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full border border-primary/20 shadow-lg mb-6"
            >
              <PawPrint className="w-5 h-5 text-primary" />
              <span className="text-primary">Premium Pet Care</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-foreground mb-6"
            >
              Everything Your Pet
              <span className="gradient-text block">Needs & Deserves</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-xl mb-12 max-w-2xl mx-auto"
            >
              From expert nutritional consulting to premium boarding services and specialized
              behavioral consultation — we provide comprehensive care tailored to your pet's unique needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                onClick={() => navigate("/services")}
                className="rounded-full bg-gradient-to-r from-primary via-accent to-secondary hover:shadow-2xl hover:scale-105 transition-all duration-500 px-12 py-6 text-lg group"
              >
                Explore Services
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Decorative Elements */}
            <div className="mt-16 flex justify-center gap-12">
              {[
                { icon: "🐕", label: "Expert Care" },
                { icon: "⭐", label: "Premium Quality" },
                { icon: "💚", label: "24×7 Support" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <p className="text-muted-foreground">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Pets Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-muted/30">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full border border-primary/20 shadow-lg mb-6"
            >
              <Heart className="w-5 h-5 text-accent fill-accent" />
              <span className="text-primary">Meet Our Friends</span>
            </motion.div>
            <h2 className="text-foreground mb-6">
              Pets Under Our
              <span className="gradient-text block">Expert Care</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {featuredPets.map((pet, index) => (
              <motion.div
                key={pet.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="group overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl glass cursor-pointer"
                  onClick={() => navigate(`/pets/${pet.id}`)}
                >
                  <CardContent className="p-0">
                    <div className="relative h-72 overflow-hidden">
                      <ImageWithFallback
                        src={pet.image}
                        alt={pet.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="mb-1">{pet.name}</h3>
                        <p className="text-white/90">{pet.breed}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              size="lg"
              onClick={() => navigate("/pets")}
              className="rounded-full bg-gradient-to-r from-accent to-secondary hover:shadow-2xl hover:scale-105 transition-all duration-500 px-8"
            >
              Browse All Pets
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full border border-primary/20 shadow-lg mb-6"
            >
              <Star className="w-5 h-5 text-secondary fill-secondary" />
              <span className="text-primary">Client Reviews</span>
            </motion.div>
            <h2 className="text-foreground mb-6">
              Trusted by
              <span className="gradient-text block">Pet Lovers Everywhere</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {quickTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass border-primary/10 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-4">"{testimonial.text}"</p>
                    <p className="text-foreground">— {testimonial.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/testimonials")}
              className="rounded-full border-2 border-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 px-8"
            >
              Read More Reviews
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
        
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card className="glass border-primary/20 shadow-2xl overflow-hidden">
              <CardContent className="p-12">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-foreground mb-6">
                  Ready to Give Your Pet the Best Care?
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Book a consultation today and experience premium pet care that makes tails wag!
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() => navigate("/booking")}
                    className="rounded-full bg-gradient-to-r from-primary via-accent to-secondary hover:shadow-2xl hover:scale-105 transition-all duration-500 px-8"
                  >
                    Book Appointment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate("/contact")}
                    className="rounded-full border-2 border-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 px-8"
                  >
                    Contact Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}