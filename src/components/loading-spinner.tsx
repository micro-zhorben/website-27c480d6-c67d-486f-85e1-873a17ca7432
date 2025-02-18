import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  className?: string;
}

export function LoadingSpinner({ className }: LoadingSpinnerProps) {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <Loader2
        className={cn(
          "h-8 w-8 animate-spin text-primary",
          className
        )}
      />
    </div>
  );
}