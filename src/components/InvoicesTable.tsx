import { Filter, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const invoices = [
  {
    id: "001423",
    customer: "Arlene McCoy",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    date: "31 Aug 2023",
    amount: "$3 230.2",
    status: "Paid",
  },
  {
    id: "004533",
    customer: "Jacob Jones",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    date: "30 Aug 2023",
    amount: "$5 630.5",
    status: "Unpaid",
  },
  {
    id: "001784",
    customer: "Marvin Butcher",
    avatar: "MB",
    date: "30 Aug 2023",
    amount: "$4 230.0",
    status: "Paid",
  },
  {
    id: "001515",
    customer: "Ralph Edwards",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    date: "29 Aug 2023",
    amount: "$3 082.2",
    status: "Paid",
  },
];

export const InvoicesTable = () => {
  return (
    <div className="metric-card glass-card">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Invoices</h3>
          <p className="text-sm text-muted-foreground">3,251 Invoices</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-xl">
            <Filter className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-xl">
            <RefreshCw className="w-4 h-4" />
          </Button>
          <Button variant="secondary" size="sm" className="rounded-xl">
            Report
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-muted-foreground border-b border-border/50">
              <th className="pb-3 font-medium">Customer name</th>
              <th className="pb-3 font-medium hidden md:table-cell">Date</th>
              <th className="pb-3 font-medium">Amount</th>
              <th className="pb-3 font-medium hidden sm:table-cell">Product ID</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Option</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="border-b border-border/30 hover:bg-secondary/30 transition-colors">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={invoice.avatar} />
                      <AvatarFallback>{invoice.avatar}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-sm">{invoice.customer}</span>
                  </div>
                </td>
                <td className="py-4 text-sm text-muted-foreground hidden md:table-cell">
                  {invoice.date}
                </td>
                <td className="py-4 text-sm font-medium">{invoice.amount}</td>
                <td className="py-4 text-sm text-muted-foreground hidden sm:table-cell">
                  {invoice.id}
                </td>
                <td className="py-4">
                  <Badge 
                    variant={invoice.status === "Paid" ? "secondary" : "destructive"}
                    className="rounded-lg"
                  >
                    {invoice.status}
                  </Badge>
                </td>
                <td className="py-4">
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                    More
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
