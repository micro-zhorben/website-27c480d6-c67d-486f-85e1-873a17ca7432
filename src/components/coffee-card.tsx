import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Coffee, Star } from "lucide-react";

interface CoffeeCardProps {
  name: string;
  description: string;
  rating: number;
  imageUrl: string;
  onSelect: () => void;
}

export function CoffeeCard({
  name,
  description,
  rating,
  imageUrl,
  onSelect,
}: CoffeeCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <Typography.H3>{name}</Typography.H3>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <Typography.Small>{rating}</Typography.Small>
          </div>
        </div>
        <Typography.P className="text-muted-foreground">{description}</Typography.P>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          className="w-full gap-2"
          onClick={onSelect}
        >
          <Coffee className="h-4 w-4" />
          Select This Blend
        </Button>
      </CardFooter>
    </Card>
  );
}