import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";

const data = [
  { day: "Sun", value: 8000 },
  { day: "Mon", value: 12000 },
  { day: "Tue", value: 9000 },
  { day: "Wed", value: 11000 },
  { day: "Thu", value: 15000 },
  { day: "Fri", value: 10000 },
  { day: "Sat", value: 7000 },
];

export const SalesReportCard = () => {
  return (
    <div className="metric-card glass-card">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-lg font-semibold">Sales Report</h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
            <span>Earnings</span>
            <span>Payments</span>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          Week ⊙
        </div>
      </div>

      <div className="h-64 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
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
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.day === "Thu" ? "hsl(var(--chart-4))" : "hsl(var(--muted))"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
