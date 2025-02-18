import { Typography } from "@/components/ui/typography";
import { ModeToggle } from "@/components/mode-toggle";
import { Coffee } from "lucide-react";

export function RecommendationHeader() {
  return (
    <header className="border-b bg-card">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Coffee className="h-6 w-6 text-primary" />
          <Typography.H3 className="text-primary">AI Coffee Guide</Typography.H3>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}