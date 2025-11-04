import { motion } from "motion/react";
import { AboutUs } from "../components/AboutUs";
import { Card, CardContent } from "../components/ui/card";
import { Award, Target, Heart, Users, CheckCircle } from "lucide-react";

const milestones = [
  {
    year: "2010",
    title: "Founded",
    description: "PawEdge – Pet Consultation 24×7 was born with a mission to provide exceptional pet care services around the clock.",
    icon: "🎯",
    color: "from-primary to-accent",
  },
  {
    year: "2013",
    title: "500+ Happy Clients",
    description: "Reached our first major milestone, serving over 500 satisfied pet parents in our community.",
    icon: "🎉",
    color: "from-accent to-secondary",
  },
  {
    year: "2015",
    title: "Expanded Services",
    description: "Introduced grooming, boarding, and behavioral consultation services to better serve our clients.",
    icon: "✨",
    color: "from-secondary to-success",
  },
  {
    year: "2018",
    title: "Award Recognition",
    description: "Received the 'Best Pet Care Service' award from the National Pet Association.",
    icon: "🏆",
    color: "from-success to-primary",
  },
  {
    year: "2020",
    title: "24×7 Operations",
    description: "Launched round-the-clock services with emergency support and telehealth consultations.",
    icon: "⏰",
    color: "from-primary to-accent",
  },
  {
    year: "2023",
    title: "2500+ Pets Served",
    description: "Celebrated serving over 2500 pets with continued excellence and compassionate care.",
    icon: "🐾",
    color: "from-accent to-secondary",
  },
  {
    year: "2025",
    title: "Future Vision",
    description: "Expanding to multiple locations and introducing AI-powered pet health monitoring systems.",
    icon: "🚀",
    color: "from-secondary to-primary",
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "Every pet deserves unconditional love and care",
    stat: "100%",
    label: "Care",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Delivering premium services with certified experts",
    stat: "15+",
    label: "Years",
  },
  {
    icon: Target,
    title: "Dedication",
    description: "Committed to your pet's health and happiness",
    stat: "24×7",
    label: "Available",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building lasting relationships with pet families",
    stat: "2500+",
    label: "Clients",
  },
];

export function AboutPage() {
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
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full border border-primary/20 shadow-lg mb-6"
            >
              <Heart className="w-5 h-5 text-accent fill-accent" />
              <span className="text-primary">Our Story</span>
            </motion.div>
            <h1 className="text-foreground mb-6">
              A Legacy of
              <span className="gradient-text block">Love & Care</span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Since 2010, we've been on a mission to redefine pet care. What started as a
              small clinic has grown into a trusted name, serving thousands of pets with
              compassion, expertise, and round-the-clock dedication.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <Card className="group glass border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl h-full">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center"
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground mb-4">{value.description}</p>
                      <div className="pt-4 border-t border-border/50">
                        <div className="text-primary mb-1">{value.stat}</div>
                        <p className="text-muted-foreground">{value.label}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 relative overflow-hidden bg-muted/30">
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
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="text-primary">Our Journey</span>
            </motion.div>
            <h2 className="text-foreground mb-6">
              Milestones &
              <span className="gradient-text block">Achievements</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A timeline of our growth, dedication, and commitment to excellence in pet care
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Line */}
                {index !== milestones.length - 1 && (
                  <div className="absolute left-1/2 top-24 w-0.5 h-full bg-gradient-to-b from-primary/30 to-transparent -translate-x-1/2 hidden lg:block" />
                )}

                <div className={`grid lg:grid-cols-2 gap-8 mb-16 items-center ${
                  index % 2 === 0 ? "" : "lg:grid-flow-dense"
                }`}>
                  {/* Content */}
                  <div className={index % 2 === 0 ? "lg:text-right" : ""}>
                    <Card className="glass border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
                      <CardContent className="p-6">
                        <div className={`flex items-start gap-4 ${
                          index % 2 === 0 ? "lg:flex-row-reverse" : ""
                        }`}>
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}
                          >
                            {milestone.icon}
                          </motion.div>
                          <div className={index % 2 === 0 ? "lg:text-right" : ""}>
                            <div className="text-primary mb-2">{milestone.year}</div>
                            <h3 className="text-foreground mb-2">{milestone.title}</h3>
                            <p className="text-muted-foreground">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Year Badge (Desktop) */}
                  <div className="hidden lg:flex justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="relative"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} rounded-full blur-xl opacity-50`} />
                      <div className={`relative w-24 h-24 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-2xl border-4 border-white dark:border-gray-900`}>
                        <span className="text-white text-2xl">{milestone.year}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <AboutUs />

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-primary/20 shadow-2xl h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-6 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-foreground mb-4">Our Mission</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To provide exceptional, compassionate pet care services that enhance
                    the bond between pets and their families. We strive to be available
                    24×7, ensuring that every pet receives the love, attention, and
                    medical care they deserve, regardless of the time or day.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="glass border-secondary/20 shadow-2xl h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mb-6 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-foreground mb-4">Our Vision</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To become the most trusted and innovative pet care consultancy,
                    setting new standards in the industry. We envision a future where
                    every pet has access to premium care, and every pet parent feels
                    supported and informed in their journey of pet ownership.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
