import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useForm } from "react-hook-form@7.55.0";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CalendarIcon, CheckCircle2, Loader2, Sparkles, PawPrint } from "lucide-react";
import { format } from "date-fns";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  dogBreed: z.string().min(1, "Please select a dog breed"),
  serviceType: z.string().min(1, "Please select a service"),
  date: z.date({
    required_error: "Please select a date",
  }),
  timeSlot: z.string().min(1, "Please select a time slot"),
  notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const dogBreeds = [
  { value: "labrador", label: "Labrador Retriever", icon: "🦮" },
  { value: "shepherd", label: "German Shepherd", icon: "🐕" },
  { value: "golden", label: "Golden Retriever", icon: "🦮" },
  { value: "bulldog", label: "Bulldog", icon: "🐕" },
  { value: "beagle", label: "Beagle", icon: "🐶" },
  { value: "poodle", label: "Poodle", icon: "🐩" },
  { value: "husky", label: "Siberian Husky", icon: "🐺" },
  { value: "corgi", label: "Corgi", icon: "🐕" },
  { value: "other", label: "Other", icon: "🐾" },
];

const services = [
  { value: "training", label: "Dog Training", icon: "🎓" },
  { value: "health", label: "Health Check-up", icon: "🏥" },
  { value: "grooming", label: "Grooming", icon: "✂️" },
  { value: "nutrition", label: "Nutritional Consulting", icon: "🥗" },
  { value: "behavior", label: "Behavioral Consultation", icon: "🧠" },
];

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
];

export function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const dogBreed = watch("dogBreed");
  const serviceType = watch("serviceType");
  const timeSlot = watch("timeSlot");

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Booking data:", data);
    setIsSubmitting(false);
    setShowSuccess(true);
    reset();
    setSelectedDate(undefined);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full border border-primary/20 shadow-lg mb-6"
          >
            <CalendarIcon className="w-5 h-5 text-primary" />
            <span className="text-primary">Book Appointment</span>
          </motion.div>
          <h2 className="text-foreground mb-6">
            Schedule Your
            <span className="gradient-text block">Consultation Today</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Fill out the form below and we'll get back to you shortly to confirm your
            appointment. We're here 24×7 for your convenience!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="glass border-primary/20 shadow-2xl overflow-hidden">
            <div className="relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
              <CardContent className="p-8 relative z-10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="name" className="text-foreground">Your Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        {...register("name")}
                        className={`glass border-primary/20 rounded-2xl h-12 transition-all duration-300 focus:border-primary ${
                          errors.name ? "border-destructive" : ""
                        }`}
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-destructive"
                        >
                          {errors.name.message}
                        </motion.p>
                      )}
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        {...register("email")}
                        className={`glass border-primary/20 rounded-2xl h-12 transition-all duration-300 focus:border-primary ${
                          errors.email ? "border-destructive" : ""
                        }`}
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-destructive"
                        >
                          {errors.email.message}
                        </motion.p>
                      )}
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        {...register("phone")}
                        className={`glass border-primary/20 rounded-2xl h-12 transition-all duration-300 focus:border-primary ${
                          errors.phone ? "border-destructive" : ""
                        }`}
                      />
                      {errors.phone && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-destructive"
                        >
                          {errors.phone.message}
                        </motion.p>
                      )}
                    </motion.div>

                    {/* Dog Breed */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.25 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="dogBreed" className="text-foreground">Dog Breed *</Label>
                      <Select
                        value={dogBreed}
                        onValueChange={(value) => setValue("dogBreed", value)}
                      >
                        <SelectTrigger className={`glass border-primary/20 rounded-2xl h-12 ${
                          errors.dogBreed ? "border-destructive" : ""
                        }`}>
                          <SelectValue placeholder="Select breed" />
                        </SelectTrigger>
                        <SelectContent className="glass">
                          {dogBreeds.map((breed) => (
                            <SelectItem key={breed.value} value={breed.value}>
                              <span className="flex items-center gap-2">
                                <span>{breed.icon}</span>
                                {breed.label}
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.dogBreed && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-destructive"
                        >
                          {errors.dogBreed.message}
                        </motion.p>
                      )}
                    </motion.div>

                    {/* Service Type */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="serviceType" className="text-foreground">Service Type *</Label>
                      <Select
                        value={serviceType}
                        onValueChange={(value) => setValue("serviceType", value)}
                      >
                        <SelectTrigger className={`glass border-primary/20 rounded-2xl h-12 ${
                          errors.serviceType ? "border-destructive" : ""
                        }`}>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent className="glass">
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              <span className="flex items-center gap-2">
                                <span>{service.icon}</span>
                                {service.label}
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.serviceType && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-destructive"
                        >
                          {errors.serviceType.message}
                        </motion.p>
                      )}
                    </motion.div>

                    {/* Date Picker */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 }}
                      className="space-y-2"
                    >
                      <Label className="text-foreground">Preferred Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={`w-full justify-start glass border-primary/20 rounded-2xl h-12 ${
                              errors.date ? "border-destructive" : ""
                            }`}
                          >
                            <CalendarIcon className="mr-2 h-5 w-5" />
                            {selectedDate ? (
                              format(selectedDate, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 glass" align="start">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={(date) => {
                              setSelectedDate(date);
                              if (date) setValue("date", date);
                            }}
                            disabled={(date) =>
                              date < new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      {errors.date && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-destructive"
                        >
                          {errors.date.message}
                        </motion.p>
                      )}
                    </motion.div>

                    {/* Time Slot */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="timeSlot" className="text-foreground">Time Slot *</Label>
                      <Select
                        value={timeSlot}
                        onValueChange={(value) => setValue("timeSlot", value)}
                      >
                        <SelectTrigger className={`glass border-primary/20 rounded-2xl h-12 ${
                          errors.timeSlot ? "border-destructive" : ""
                        }`}>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent className="glass">
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.timeSlot && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-destructive"
                        >
                          {errors.timeSlot.message}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>

                  {/* Notes */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="notes" className="text-foreground">Additional Notes (Optional)</Label>
                    <textarea
                      id="notes"
                      placeholder="Any special requirements or concerns..."
                      {...register("notes")}
                      rows={4}
                      className="w-full glass border-primary/20 rounded-2xl p-4 transition-all duration-300 focus:border-primary outline-none resize-none text-foreground"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button
                      type="submit"
                      className="w-full rounded-full bg-gradient-to-r from-primary via-accent to-secondary hover:shadow-2xl transition-all duration-500 h-14 text-lg group relative overflow-hidden"
                      disabled={isSubmitting}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-5 w-5" />
                          Book Appointment
                          <PawPrint className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md glass border-primary/20">
          <DialogHeader>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-success/30 to-primary/30 rounded-full blur-xl" />
                <div className="relative w-20 h-20 bg-gradient-to-br from-success to-primary rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </div>
              </div>
            </motion.div>
            <DialogTitle className="text-center text-foreground text-2xl">
              Booking Confirmed! 🎉
            </DialogTitle>
            <DialogDescription className="text-center text-muted-foreground text-lg">
              Thank you for choosing PawEdge – Pet Consultation 24×7! We'll send you a
              confirmation email shortly with all the details.
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => setShowSuccess(false)}
            className="w-full rounded-full bg-gradient-to-r from-primary to-accent hover:shadow-lg"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
