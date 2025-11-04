import { Testimonials } from "../components/Testimonials";
import { motion } from "motion/react";
import { Star, Heart, Quote } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export function TestimonialsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
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
              <Star className="w-5 h-5 text-secondary fill-secondary" />
              <span className="text-primary">Client Reviews</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-foreground mb-6"
            >
              Loved by
              <span className="gradient-text block">Pet Parents Everywhere</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-xl max-w-3xl mx-auto"
            >
              Read what our satisfied clients have to say about their experience with
              PawEdge – Pet Consultation 24×7. Their trust and happiness drive us forward!
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mt-12"
          >
            {[
              { number: "2,500+", label: "Happy Clients" },
              { number: "4.9/5", label: "Average Rating" },
              { number: "98%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card className="glass border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <p className="text-primary mb-1">{stat.number}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <Testimonials />

      {/* Trust Indicators */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <Quote className="w-12 h-12 mx-auto mb-6 text-primary" />
            <h2 className="text-foreground mb-6">
              What Makes Us
              <span className="gradient-text block">Special?</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every review represents a real pet family who trusted us with their beloved companions.
              From emergency care at 2 AM to routine check-ups, we're here 24×7 because your pet's
              well-being is our top priority. Join thousands of satisfied pet parents who've made us
              their trusted partner in pet care.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
