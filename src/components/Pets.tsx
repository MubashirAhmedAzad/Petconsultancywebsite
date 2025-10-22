import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, Filter, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const pets = [
  {
    id: 1,
    name: "Max",
    breed: "Golden Retriever",
    category: "dog",
    age: "3 years",
    image: "https://images.unsplash.com/photo-1648799834307-97650bbf7298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDc3OTE3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-primary to-accent",
  },
  {
    id: 2,
    name: "Luna",
    breed: "Persian Cat",
    category: "cat",
    age: "2 years",
    image: "https://images.unsplash.com/photo-1599907370836-939f2d59b897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzaWFuJTIwY2F0JTIwZmx1ZmZ5fGVufDF8fHx8MTc2MDc5NTI3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-accent to-secondary",
  },
  {
    id: 3,
    name: "Rocky",
    breed: "Husky",
    category: "dog",
    age: "4 years",
    image: "https://images.unsplash.com/photo-1693674648823-775fb99b6aad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodXNreSUyMGRvZyUyMGJsdWUlMjBleWVzfGVufDF8fHx8MTc2MDcwNzU5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-primary to-success",
  },
  {
    id: 4,
    name: "Charlie",
    breed: "Corgi",
    category: "dog",
    age: "1 year",
    image: "https://images.unsplash.com/photo-1654995158960-8c7827c57c45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3JnaSUyMHB1cHB5JTIwaGFwcHl8ZW58MXx8fHwxNzYwNzk1Mjc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-secondary to-primary",
  },
  {
    id: 5,
    name: "Milo",
    breed: "Exotic Shorthair",
    category: "cat",
    age: "3 years",
    image: "https://images.unsplash.com/photo-1541804535-aba8d36bc1b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleG90aWMlMjBjYXQlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjA3OTUyNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-accent to-success",
  },
  {
    id: 6,
    name: "Coco",
    breed: "Macaw Parrot",
    category: "bird",
    age: "5 years",
    image: "https://images.unsplash.com/photo-1700048802079-ec47d07f7919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBhcnJvdCUyMGJpcmR8ZW58MXx8fHwxNzYwNzE5NTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-secondary to-accent",
  },
  {
    id: 7,
    name: "Bella",
    breed: "Holland Lop Rabbit",
    category: "rabbit",
    age: "2 years",
    image: "https://images.unsplash.com/photo-1688472977827-c7e446e49efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcmFiYml0JTIwYnVubnl8ZW58MXx8fHwxNzYwNzk1Mjc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-primary to-secondary",
  },
  {
    id: 8,
    name: "Duke",
    breed: "German Shepherd",
    category: "dog",
    age: "5 years",
    image: "https://images.unsplash.com/photo-1690717967186-bfa4ae996dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB0cmFpbmluZyUyMG91dGRvb3J8ZW58MXx8fHwxNzYwNzk0Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "from-success to-accent",
  },
];

const categories = ["all", "dog", "cat", "bird", "rabbit"];

export function Pets() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredPets = pets.filter((pet) => {
    const matchesSearch =
      pet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pet.breed.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || pet.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
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
            <span className="text-2xl">🐾</span>
            <span className="text-primary">Our Pets</span>
          </motion.div>
          <h2 className="text-foreground mb-6">
            Meet Our
            <span className="gradient-text block">Adorable Friends</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Browse through our gallery of pets under our care. Each one receives
            personalized attention and love.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name or breed..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 glass border-primary/20 rounded-full h-12"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-5 h-5 text-primary" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full capitalize transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                      : "border-primary/20 hover:border-primary/40"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pets Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPets.map((pet, index) => {
            const isFavorite = favorites.includes(pet.id);
            
            return (
              <motion.div
                key={pet.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                layout
              >
                <Card 
                  className="group overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl glass cursor-pointer h-80"
                  onClick={() => navigate(`/pets/${pet.id}`)}
                >
                  <CardContent className="p-0 h-full">
                    <div className="relative h-full w-full overflow-hidden">
                      {/* Full Cover Image */}
                      <ImageWithFallback
                        src={pet.image}
                        alt={pet.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Color Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${pet.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                      
                      {/* Bottom Gradient Overlay for Text Readability - Stronger in light mode */}
                      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/50 to-transparent dark:from-black/60 dark:via-black/40" />
                      
                      {/* Favorite Button */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(pet.id);
                        }}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10 bg-white/95 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/20"
                      >
                        <Heart
                          className={`w-5 h-5 transition-all duration-300 ${
                            isFavorite
                              ? "text-accent fill-accent"
                              : "text-gray-700 dark:text-white"
                          }`}
                        />
                      </motion.button>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/95 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/20 shadow-md">
                        <span className="text-gray-800 dark:text-white capitalize" style={{ fontSize: '14px', fontWeight: 500 }}>{pet.category}</span>
                      </div>

                      {/* Age Badge */}
                      <div className="absolute top-4 right-16 px-3 py-1 rounded-full bg-white/95 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/20 shadow-md">
                        <span className="text-gray-800 dark:text-white" style={{ fontSize: '14px', fontWeight: 500 }}>{pet.age}</span>
                      </div>

                      {/* Text Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                        <div className="flex items-end justify-between">
                          <div>
                            <h3 className="text-white mb-1" style={{ 
                              textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.9)'
                            }}>{pet.name}</h3>
                            <p className="text-white/95" style={{ 
                              textShadow: '0 2px 6px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.8)',
                              fontSize: '15px'
                            }}>{pet.breed}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredPets.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <Search className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-foreground mb-2">No pets found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
