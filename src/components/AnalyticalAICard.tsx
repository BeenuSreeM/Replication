import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, ReferenceLine } from "recharts";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

const data = [
  { day: 1, value: 20000 },
  { day: 5, value: 35000 },
  { day: 10, value: 45000 },
  { day: 15, value: 30000 },
  { day: 20, value: 38000 },
  { day: 25, value: 42000 },
  { day: 30, value: 48000 },
];

export const AnalyticalAICard = () => {
  return (
    <div className="metric-card glass-card relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-10"
      >
        <MoreVertical className="w-5 h-5" />
      </Button>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Analytical AI</h3>
        <p className="text-sm text-muted-foreground">September 2023</p>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="day" 
              stroke="#6B7280"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#6B7280"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <ReferenceLine 
              x={10} 
              stroke="hsl(var(--muted-foreground))" 
              strokeDasharray="3 3" 
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              dot={{ fill: "hsl(var(--primary))", r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
