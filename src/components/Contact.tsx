import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const contactInfo = [
  {
    id: 1,
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    link: "tel:+15551234567",
    color: "from-primary to-accent",
  },
  {
    id: 2,
    icon: Mail,
    title: "Email",
    details: "hello@petconsultancy247.com",
    link: "mailto:hello@petconsultancy247.com",
    color: "from-accent to-secondary",
  },
  {
    id: 3,
    icon: MapPin,
    title: "Address",
    details: "123 Pet Street, Dogville, CA 90210",
    link: "https://maps.google.com",
    color: "from-secondary to-success",
  },
  {
    id: 4,
    icon: Clock,
    title: "Working Hours",
    details: "24×7 Available",
    link: null,
    color: "from-success to-primary",
  },
];

export function Contact() {
  const handleChatClick = () => {
    // Handle chat functionality
    console.log("Opening chat...");
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

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
            <MessageCircle className="w-5 h-5 text-primary" />
            <span className="text-primary">Contact Us</span>
          </motion.div>
          <h2 className="text-foreground mb-6">
            Let's Get In
            <span className="gradient-text block">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Have questions? We'd love to hear from you. Reach out through any of our
            channels and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-foreground mb-6">Contact Information</h3>
            </motion.div>

            <div className="grid gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="glass border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl group overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                          >
                            <div className={`absolute inset-0 bg-gradient-to-br ${info.color} rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity`} />
                            <Icon className="w-7 h-7 text-white relative z-10" />
                          </motion.div>
                          <div className="flex-1">
                            <div className="text-muted-foreground mb-1">
                              {info.title}
                            </div>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-foreground text-lg hover:text-primary transition-colors duration-200"
                                target={info.link.startsWith("http") ? "_blank" : undefined}
                                rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                              >
                                {info.details}
                              </a>
                            ) : (
                              <p className="text-foreground text-lg">{info.details}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Quick Chat Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={handleChatClick}
                className="w-full rounded-full bg-gradient-to-r from-primary via-accent to-secondary hover:shadow-2xl transition-all duration-500 h-14 text-lg group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <MessageCircle className="mr-2 h-5 w-5 relative z-10" />
                <span className="relative z-10">Start Live Chat</span>
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </Button>
            </motion.div>
          </div>

          {/* Map Section with Visit Our Office Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {/* Map Card */}
            <Card className="overflow-hidden glass border-primary/20 shadow-2xl">
              <CardContent className="p-0">
                <div className="relative w-full h-[500px] bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8944894788316!2d-118.39284368478524!3d34.09246358060033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bbf2e3e3e3e3%3A0x1234567890abcdef!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Pet Consultancy 24×7 Location"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Visit Our Office Card - Positioned 16px below map (gap-4 = 16px) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="glass p-6 rounded-2xl border border-primary/20"
              style={{
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.14)'
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                >
                  <MapPin className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <div className="text-foreground mb-1 text-lg">Visit Our Office</div>
                  <p className="text-muted-foreground">
                    Drop by anytime! We're open 24×7 to serve you and your pets.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
