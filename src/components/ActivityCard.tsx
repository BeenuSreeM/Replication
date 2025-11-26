import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Transactions", value: 482 },
  { name: "Payouts", value: 412 },
  { name: "Sales", value: 715 },
  { name: "Reports", value: 128 },
];

const COLORS = ["hsl(var(--primary))", "hsl(var(--chart-2))", "hsl(var(--muted))", "hsl(var(--chart-4))"];

export const ActivityCard = () => {
  return (
    <div className="metric-card glass-card relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 z-10"
      >
        <MoreVertical className="w-5 h-5" />
      </Button>

      <h3 className="text-lg font-semibold mb-6">Activity</h3>

      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-3xl font-bold">+13%</p>
            <p className="text-xs text-muted-foreground">Since last week</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 w-full">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: COLORS[index] }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-muted-foreground truncate">{item.name}</p>
              </div>
              <p className="text-sm font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
