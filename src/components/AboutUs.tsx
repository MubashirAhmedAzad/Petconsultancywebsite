import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Award, Heart, Users, Zap, Target, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Every pet deserves love and attention. We treat them like family.",
    color: "from-accent to-secondary",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Premium services backed by 15+ years of expertise and certification.",
    color: "from-primary to-accent",
  },
  {
    icon: Zap,
    title: "24×7 Available",
    description: "Round-the-clock support because pets don't follow schedules.",
    color: "from-secondary to-success",
  },
  {
    icon: Target,
    title: "Personalized",
    description: "Custom care plans tailored to each pet's unique needs.",
    color: "from-success to-primary",
  },
];

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Veterinarian",
    image: "",
    initials: "SM",
  },
  {
    name: "Dr. James Cooper",
    role: "Animal Behaviorist",
    image: "",
    initials: "JC",
  },
  {
    name: "Emma Rodriguez",
    role: "Senior Groomer",
    image: "",
    initials: "ER",
  },
  {
    name: "Dr. Michael Chen",
    role: "Nutritionist",
    image: "",
    initials: "MC",
  },
];

const stats = [
  { icon: Users, value: "2500+", label: "Happy Clients" },
  { icon: Heart, value: "5000+", label: "Pets Cared" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: TrendingUp, value: "98%", label: "Satisfaction" },
];

export function AboutUs() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
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
            <Heart className="w-5 h-5 text-accent" />
            <span className="text-primary">About Us</span>
          </motion.div>
          <h2 className="text-foreground mb-6">
            Your Pet's Health is Our
            <span className="gradient-text block">Top Priority</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Founded in 2010, PawEdge – Pet Consultation 24×7 has grown into a trusted name in
            pet care. Our mission is simple: provide exceptional, compassionate care
            that enhances the bond between pets and their families.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-2xl border border-primary/10 shadow-xl text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-foreground mb-1">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Values Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-foreground mb-4">Our Core Values</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group h-full glass border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                    <CardContent className="p-6 relative">
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${value.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`w-14 h-14 mb-4 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center shadow-lg relative z-10`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <h4 className="text-foreground mb-2 relative z-10">{value.title}</h4>
                      <p className="text-muted-foreground relative z-10">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-foreground mb-4">Meet Our Expert Team</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Certified professionals dedicated to your pet's wellbeing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group glass border-primary/10 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative mb-4 inline-block"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white mx-auto shadow-xl">
                      <span className="text-3xl">{member.initials}</span>
                    </div>
                  </motion.div>
                  <h4 className="text-foreground mb-1">{member.name}</h4>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
