import { Booking } from "../components/Booking";
import { motion } from "motion/react";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

export function BookingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
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
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-primary">Book Appointment</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-foreground mb-6"
            >
              Schedule Your
              <span className="gradient-text block">Consultation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-xl mb-8"
            >
              Fill out the form below to book an appointment. We're available 24×7 to serve you!
            </motion.p>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
            >
              {[
                { icon: Clock, text: "Same Day Available" },
                { icon: CheckCircle, text: "Easy Booking" },
                { icon: Calendar, text: "Flexible Scheduling" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <Card className="glass border-primary/10">
                    <CardContent className="p-3 text-center">
                      <item.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <p className="text-muted-foreground text-sm">{item.text}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <Booking />
    </div>
  );
}
