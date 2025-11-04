import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Dog Owner",
    pet: "Golden Retriever - Max",
    text: "Absolutely amazing service! The team at PawEdge – Pet Consultation 24×7 transformed my dog Max's behavior. He's now so well-trained and happy. Their nutritional consulting also helped him lose weight safely. I couldn't be more grateful!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwc21pbGluZ3xlbnwxfHx8fDE3NjA3OTQzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Cat Owner",
    pet: "Persian Cat - Luna",
    text: "Professional, caring, and always available. The boarding service is incredible - Luna came back happy and healthy. They sent me daily photos which gave me such peace of mind. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzYwNzk0Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Dog Owner",
    pet: "Husky - Rocky",
    text: "The behavioral consultation was life-changing! Rocky had severe anxiety, and the team created a personalized training plan that worked wonders. Now he's calm, confident, and so much happier. Thank you!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MDc5NDM5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Bird Owner",
    pet: "Parrot - Kiwi",
    text: "Exceptional care and expertise! The nutritional plan they created for Kiwi improved his feather quality and energy levels dramatically. The staff truly understands exotic pets. Five stars!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMGNhc3VhbHxlbnwxfHx8fDE3NjA3OTQzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    name: "Jessica Martinez",
    role: "Dog Owner",
    pet: "Corgi - Charlie",
    text: "Best pet care service ever! From the first visit, they made Charlie feel comfortable. The grooming service is top-notch, and the trainers are patient and knowledgeable. Absolutely worth every penny!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBvcnRyYWl0JTIweW91bmd8ZW58MXx8fHwxNzYwNzk0Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    name: "Robert Wilson",
    role: "Dog Owner",
    pet: "German Shepherd - Duke",
    text: "The 24×7 availability is a game-changer! When Duke had an emergency at 2 AM, they were there immediately. Their dedication and professionalism are unmatched. Forever grateful!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdCUyMG1hdHVyZXxlbnwxfHx8fDE3NjA3OTQzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Carousel */}
          <div className="relative min-h-[500px] flex items-center justify-center mb-12">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <Card className="glass border-primary/20 shadow-2xl overflow-hidden mx-4 md:mx-12">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-5 gap-0">
                      {/* Image Section */}
                      <div className="md:col-span-2 relative h-64 md:h-auto">
                        <ImageWithFallback
                          src={currentTestimonial.image}
                          alt={currentTestimonial.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
                      </div>

                      {/* Content Section */}
                      <div className="md:col-span-3 p-8 md:p-12">
                        {/* Quote Icon */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" }}
                          className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                        >
                          <Quote className="w-8 h-8 text-white" />
                        </motion.div>

                        {/* Rating */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="flex gap-1 mb-6"
                        >
                          {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.4 + i * 0.05 }}
                            >
                              <Star className="w-6 h-6 text-secondary fill-secondary" />
                            </motion.div>
                          ))}
                        </motion.div>

                        {/* Testimonial Text */}
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="text-muted-foreground text-lg italic leading-relaxed mb-8"
                        >
                          "{currentTestimonial.text}"
                        </motion.p>

                        {/* Author Info */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <p className="text-foreground mb-1">{currentTestimonial.name}</p>
                          <p className="text-muted-foreground">{currentTestimonial.role}</p>
                          <p className="text-primary mt-2">{currentTestimonial.pet}</p>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute left-0 right-0 flex justify-between items-center px-0 md:px-4 pointer-events-none">
              <Button
                onClick={() => paginate(-1)}
                size="icon"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-2xl transition-all duration-300 pointer-events-auto"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                onClick={() => paginate(1)}
                size="icon"
                className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-2xl transition-all duration-300 pointer-events-auto"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-12 h-3 bg-gradient-to-r from-primary to-accent"
                    : "w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center mt-8"
          >
            <p className="text-muted-foreground">
              {currentIndex + 1} / {testimonials.length}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
