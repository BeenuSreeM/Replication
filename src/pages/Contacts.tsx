import { DashboardLayout } from "@/components/DashboardLayout";
import { Search, Plus, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const contacts = [
  { name: "Sarah Johnson", email: "sarah.j@company.com", role: "CEO", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop", status: "Active" },
  { name: "Michael Chen", email: "m.chen@company.com", role: "CTO", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop", status: "Active" },
  { name: "Emily Davis", email: "emily.d@company.com", role: "Designer", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop", status: "Away" },
  { name: "James Wilson", email: "j.wilson@company.com", role: "Developer", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop", status: "Active" },
  { name: "Lisa Anderson", email: "lisa.a@company.com", role: "Manager", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop", status: "Offline" },
  { name: "David Brown", email: "d.brown@company.com", role: "Analyst", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", status: "Active" },
];

const Contacts = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Contacts</h1>
          <p className="text-muted-foreground mt-1">{contacts.length} total contacts</p>
        </div>
        <Button className="rounded-xl bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Contact
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search contacts..."
          className="pl-10 bg-secondary border-0 rounded-xl"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contacts.map((contact) => (
          <div key={contact.email} className="metric-card glass-card group hover:scale-[1.02] transition-transform">
            <div className="flex items-start justify-between mb-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={contact.avatar} />
                <AvatarFallback>{contact.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
            <h3 className="font-semibold text-lg">{contact.name}</h3>
            <p className="text-sm text-muted-foreground">{contact.email}</p>
            <div className="flex items-center justify-between mt-4">
              <Badge variant="secondary" className="rounded-lg">{contact.role}</Badge>
              <Badge 
                variant={contact.status === "Active" ? "default" : "secondary"}
                className="rounded-lg"
              >
                {contact.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
      </div>
    </DashboardLayout>
  );
};

export default Contacts;
