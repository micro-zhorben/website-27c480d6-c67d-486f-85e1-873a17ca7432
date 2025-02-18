import { useState } from "react";
import { RecommendationHeader } from "@/components/recommendation-header";
import { PreferenceForm } from "@/components/preference-form";
import { CoffeeCard } from "@/components/coffee-card";
import { LoadingSpinner } from "@/components/loading-spinner";
import { Typography } from "@/components/ui/typography";

// Mock coffee recommendations data
const coffeeRecommendations = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description: "Bright and complex with floral notes, bergamot, and citrus undertones. Perfect for pour-over brewing.",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    name: "Colombian Supremo",
    description: "Well-balanced with caramel sweetness, subtle notes of nuts and chocolate. Versatile for various brewing methods.",
    rating: 4.6,
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    name: "Sumatra Mandheling",
    description: "Full-bodied with earthy tones, herbs, and dark chocolate notes. Excellent for French press.",
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1516224498413-84ecf3a1e7fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handlePreferenceSubmit = async (values: any) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setShowRecommendations(true);
    setIsLoading(false);
  };

  const handleCoffeeSelect = (coffeeId: number) => {
    // Handle coffee selection
    console.log("Selected coffee:", coffeeId);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <RecommendationHeader />
      
      <main className="flex-1 bg-background py-12">
        <div className="container px-4">
          {!showRecommendations ? (
            <div className="mx-auto max-w-2xl">
              <div className="mb-8 text-center">
                <Typography.H1>Find Your Perfect Coffee</Typography.H1>
                <Typography.Lead className="mt-4">
                  Tell us your preferences, and our AI will recommend the perfect coffee blends for you.
                </Typography.Lead>
              </div>
              <PreferenceForm onSubmit={handlePreferenceSubmit} />
            </div>
          ) : (
            <div>
              <Typography.H2 className="mb-8 text-center">
                Your Personalized Coffee Recommendations
              </Typography.H2>
              
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {coffeeRecommendations.map((coffee) => (
                    <CoffeeCard
                      key={coffee.id}
                      name={coffee.name}
                      description={coffee.description}
                      rating={coffee.rating}
                      imageUrl={coffee.imageUrl}
                      onSelect={() => handleCoffeeSelect(coffee.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}