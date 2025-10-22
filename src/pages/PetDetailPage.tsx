import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ArrowLeft, Calendar, Heart, MapPin, Share2, Ruler, Weight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const petsData = {
  "1": {
    name: "Max",
    breed: "Golden Retriever",
    category: "dog",
    age: "3 years",
    weight: "32 kg",
    height: "58 cm",
    location: "Main Facility",
    joinedDate: "January 2023",
    personality: "Friendly, Playful, Energetic",
    description: "Max is a wonderful Golden Retriever with an incredibly friendly personality. He loves to play fetch and is great with children. Max has been with us for regular training and grooming sessions, and has shown remarkable progress in obedience training.",
    image: "https://images.unsplash.com/photo-1648799834307-97650bbf7298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDc3OTE3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    services: ["Training", "Grooming", "Health Check-ups"],
    gallery: [
      "https://images.unsplash.com/photo-1648799834307-97650bbf7298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDc3OTE3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
  },
  "2": {
    name: "Luna",
    breed: "Persian Cat",
    category: "cat",
    age: "2 years",
    weight: "4.5 kg",
    height: "25 cm",
    location: "Cat Care Wing",
    joinedDate: "May 2023",
    personality: "Gentle, Affectionate, Calm",
    description: "Luna is an elegant Persian cat with a luxurious coat and gentle demeanor. She enjoys peaceful environments and loves being pampered. Luna receives regular grooming sessions and has a specialized diet to keep her coat shiny and healthy. She's perfect for calm households and adores lounging in sunny spots.",
    image: "https://images.unsplash.com/photo-1599907370836-939f2d59b897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzaWFuJTIwY2F0JTIwZmx1ZmZ5fGVufDF8fHx8MTc2MDk3MzE5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    services: ["Grooming", "Nutrition Planning", "Health Check-ups"],
    gallery: [
      "https://images.unsplash.com/photo-1599907370836-939f2d59b897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzaWFuJTIwY2F0JTIwZmx1ZmZ5fGVufDF8fHx8MTc2MDk3MzE5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
  },
  "3": {
    name: "Rocky",
    breed: "Siberian Husky",
    category: "dog",
    age: "4 years",
    weight: "28 kg",
    height: "55 cm",
    location: "Training Center",
    joinedDate: "March 2022",
    personality: "Independent, Loyal, Adventurous",
    description: "Rocky is a stunning Siberian Husky with beautiful blue eyes and an adventurous spirit. He excels in agility training and loves outdoor activities. Rocky has completed advanced obedience training and is now working on specialized behavioral exercises.",
    image: "https://images.unsplash.com/photo-1693674648823-775fb99b6aad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodXNreSUyMGRvZyUyMGJsdWUlMjBleWVzfGVufDF8fHx8MTc2MDcwNzU5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    services: ["Advanced Training", "Behavioral Consultation", "Nutrition Planning"],
    gallery: [
      "https://images.unsplash.com/photo-1693674648823-775fb99b6aad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodXNreSUyMGRvZyUyMGJsdWUlMjBleWVzfGVufDF8fHx8MTc2MDcwNzU5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
  },
  "4": {
    name: "Charlie",
    breed: "Corgi",
    category: "dog",
    age: "1 year",
    weight: "12 kg",
    height: "30 cm",
    location: "Puppy Training Center",
    joinedDate: "September 2024",
    personality: "Cheerful, Smart, Curious",
    description: "Charlie is an adorable young Corgi full of energy and curiosity. He's currently in our puppy training program and is learning basic commands and socialization skills. Charlie loves treats and is making excellent progress every day!",
    image: "https://images.unsplash.com/photo-1654995158960-8c7827c57c45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JnaSUyMHB1cHB5JTIwaGFwcHl8ZW58MXx8fHwxNzYwNzk1Mjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    services: ["Puppy Training", "Socialization", "Basic Grooming"],
    gallery: [
      "https://images.unsplash.com/photo-1654995158960-8c7827c57c45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JnaSUyMHB1cHB5JTIwaGFwcHl8ZW58MXx8fHwxNzYwNzk1Mjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
  },
  "5": {
    name: "Milo",
    breed: "Exotic Shorthair",
    category: "cat",
    age: "3 years",
    weight: "5.2 kg",
    height: "28 cm",
    location: "Cat Care Wing",
    joinedDate: "July 2022",
    personality: "Playful, Sweet, Sociable",
    description: "Milo is an adorable Exotic Shorthair with a round face and big expressive eyes. He has a playful nature and loves interactive toys. Milo is very social and gets along well with other cats. He's on a specialized nutrition plan to maintain his healthy weight and receives regular wellness check-ups.",
    image: "https://images.unsplash.com/photo-1541804535-aba8d36bc1b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleG90aWMlMjBjYXQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA5NzMyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    services: ["Nutrition Planning", "Play Therapy", "Wellness Check-ups"],
    gallery: [
      "https://images.unsplash.com/photo-1541804535-aba8d36bc1b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleG90aWMlMjBjYXQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA5NzMyMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
  },
  "6": {
    name: "Coco",
    breed: "Macaw Parrot",
    category: "bird",
    age: "5 years",
    weight: "1.2 kg",
    height: "85 cm",
    location: "Avian Care Center",
    joinedDate: "February 2021",
    personality: "Intelligent, Vocal, Social",
    description: "Coco is a vibrant Macaw parrot with stunning colorful plumage and a lively personality. She's incredibly intelligent and can mimic various sounds and phrases. Coco enjoys mental stimulation through puzzle toys and social interaction. She's on a specialized avian diet with fresh fruits and premium seeds.",
    image: "https://images.unsplash.com/photo-1668137474958-3c2b3664bc55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBhcnJvdCUyMGJpcmR8ZW58MXx8fHwxNzYwOTY1OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    services: ["Behavioral Training", "Avian Nutrition", "Enrichment Activities"],
    gallery: [
      "https://images.unsplash.com/photo-1668137474958-3c2b3664bc55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBhcnJvdCUyMGJpcmR8ZW58MXx8fHwxNzYwOTY1OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
  },
  "7": {
    name: "Bella",
    breed: "Holland Lop Rabbit",
    category: "rabbit",
    age: "2 years",
    weight: "1.8 kg",
    height: "20 cm",
    location: "Small Animal Care",
    joinedDate: "October 2023",
    personality: "Gentle, Curious, Friendly",
    description: "Bella is a sweet Holland Lop rabbit with adorable floppy ears and soft fur. She's gentle and loves being petted. Bella enjoys exploring her environment and munching on fresh vegetables. She receives specialized rabbit care including dental check-ups and a balanced diet of hay, greens, and pellets.",
    image: "https://images.unsplash.com/photo-1688472977827-c7e446e49efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcmFiYml0JTIwYnVubnl8ZW58MXx8fHwxNzYwOTI4NzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    services: ["Dental Care", "Nutrition Planning", "Habitat Enrichment"],
    gallery: [
      "https://images.unsplash.com/photo-1688472977827-c7e446e49efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcmFiYml0JTIwYnVubnl8ZW58MXx8fHwxNzYwOTI4NzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
  },
  "8": {
    name: "Duke",
    breed: "German Shepherd",
    category: "dog",
    age: "5 years",
    weight: "38 kg",
    height: "63 cm",
    location: "Advanced Training Facility",
    joinedDate: "August 2020",
    personality: "Protective, Intelligent, Disciplined",
    description: "Duke is a magnificent German Shepherd with exceptional training and a noble demeanor. He has completed advanced protection training and excels in obedience work. Duke is highly disciplined and forms strong bonds with his handlers. He's currently working on agility competitions and continues to impress with his focus and athletic abilities.",
    image: "https://images.unsplash.com/photo-1690717967186-bfa4ae996dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB0cmFpbmluZyUyMG91dGRvb3J8ZW58MXx8fHwxNzYwNzk0Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    services: ["Advanced Training", "Agility Training", "Protection Training"],
    gallery: [
      "https://images.unsplash.com/photo-1690717967186-bfa4ae996dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB0cmFpbmluZyUyMG91dGRvb3J8ZW58MXx8fHwxNzYwNzk0Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    ],
  },
};

export function PetDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pet = petsData[id as keyof typeof petsData];

  if (!pet) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <Card className="glass border-primary/20 p-8">
          <CardContent>
            <h2 className="text-foreground mb-4">Pet Not Found</h2>
            <Button onClick={() => navigate("/pets")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Pets
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/pets")}
            className="rounded-full"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Pets
          </Button>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="px-4 pb-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass border-primary/20 shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={pet.image}
                      alt={pet.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button
                        size="icon"
                        className="rounded-full backdrop-blur-md bg-white/95 dark:bg-white/10 border border-gray-200 dark:border-white/20 hover:bg-white dark:hover:bg-white/20 shadow-lg"
                      >
                        <Heart className="w-5 h-5 text-gray-700 dark:text-white" />
                      </Button>
                      <Button
                        size="icon"
                        className="rounded-full backdrop-blur-md bg-white/95 dark:bg-white/10 border border-gray-200 dark:border-white/20 hover:bg-white dark:hover:bg-white/20 shadow-lg"
                      >
                        <Share2 className="w-5 h-5 text-gray-700 dark:text-white" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <Badge className="mb-4 bg-gradient-to-r from-primary to-accent">
                  {pet.category}
                </Badge>
                <h1 className="text-foreground mb-2">{pet.name}</h1>
                <p className="text-muted-foreground text-xl">{pet.breed}</p>
              </div>

              <Card className="glass border-primary/10">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground">Age</p>
                        <p className="text-foreground">{pet.age}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                        <Weight className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-muted-foreground">Weight</p>
                        <p className="text-foreground">{pet.weight}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <Ruler className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground">Height</p>
                        <p className="text-foreground">{pet.height}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-success" />
                      </div>
                      <div>
                        <p className="text-muted-foreground">Location</p>
                        <p className="text-foreground">{pet.location}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div>
                <h3 className="text-foreground mb-3">Personality</h3>
                <div className="flex flex-wrap gap-2">
                  {pet.personality.split(", ").map((trait, index) => (
                    <Badge key={index} variant="outline" className="rounded-full">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-foreground mb-3">About {pet.name}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pet.description}
                </p>
              </div>

              <div>
                <h3 className="text-foreground mb-3">Services</h3>
                <div className="flex flex-wrap gap-2">
                  {pet.services.map((service, index) => (
                    <Badge
                      key={index}
                      className="rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20"
                    >
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={() => navigate("/booking")}
                  className="flex-1 rounded-full bg-gradient-to-r from-primary via-accent to-secondary hover:shadow-2xl transition-all duration-500"
                >
                  Book Service
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/contact")}
                  className="flex-1 rounded-full border-2 border-primary hover:bg-primary/10"
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}