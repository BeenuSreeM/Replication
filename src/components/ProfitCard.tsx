import { MoreVertical, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProfitCard = () => {
  return (
    <div className="metric-card bg-primary/20 border border-primary/30 relative overflow-hidden">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-10"
      >
        <MoreVertical className="w-5 h-5" />
      </Button>
      
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-background/80 flex items-center justify-center">
          <TrendingUp className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-semibold">Profit</h3>
      </div>

      <div className="relative z-10 mb-6">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop" 
          alt="Profit illustration"
          className="w-full h-32 object-cover rounded-xl opacity-90"
        />
      </div>

      <div className="space-y-2">
        <p className="text-sm text-foreground/70 flex items-center gap-1">
          <span className="text-green-400">+14%</span>
          Since last week
        </p>
        <p className="text-4xl font-bold">$12 895.5</p>
      </div>
    </div>
  );
};
