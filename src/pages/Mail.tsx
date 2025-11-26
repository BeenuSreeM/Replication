import { DashboardLayout } from "@/components/DashboardLayout";
import { Search, Star, Trash2, Archive, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const emails = [
  { 
    id: 1,
    sender: "John Smith",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    subject: "Q4 Financial Report Review",
    preview: "Please find attached the quarterly financial report for review...",
    time: "10:30 AM",
    unread: true,
    starred: true
  },
  { 
    id: 2,
    sender: "Marketing Team",
    avatar: "MT",
    subject: "New Campaign Launch",
    preview: "We're excited to announce our new marketing campaign...",
    time: "Yesterday",
    unread: true,
    starred: false
  },
  { 
    id: 3,
    sender: "Sarah Connor",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    subject: "Meeting Reschedule",
    preview: "Can we reschedule tomorrow's meeting to 3 PM?",
    time: "2 days ago",
    unread: false,
    starred: false
  },
  { 
    id: 4,
    sender: "Tech Support",
    avatar: "TS",
    subject: "System Maintenance Notice",
    preview: "Scheduled maintenance will occur this weekend...",
    time: "3 days ago",
    unread: false,
    starred: true
  },
];

const Mail = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Mail</h1>
          <p className="text-muted-foreground mt-1">{emails.filter(e => e.unread).length} unread messages</p>
        </div>
        <Button variant="ghost" size="icon" className="rounded-xl">
          <RefreshCw className="w-5 h-5" />
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Search mail..."
          className="pl-10 bg-secondary border-0 rounded-xl"
        />
      </div>

      <div className="metric-card glass-card">
        <div className="space-y-2">
          {emails.map((email) => (
            <div 
              key={email.id}
              className={`p-4 rounded-xl transition-all cursor-pointer hover:bg-secondary/50 ${
                email.unread ? 'bg-secondary/30' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={email.avatar} />
                  <AvatarFallback>{email.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-medium ${email.unread ? 'font-semibold' : ''}`}>
                        {email.sender}
                      </h3>
                      {email.unread && (
                        <Badge variant="default" className="rounded-full px-2 py-0 text-xs">New</Badge>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">{email.time}</span>
                  </div>
                  <p className={`text-sm mb-1 ${email.unread ? 'font-medium' : 'text-muted-foreground'}`}>
                    {email.subject}
                  </p>
                  <p className="text-sm text-muted-foreground truncate">{email.preview}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={email.starred ? 'text-yellow-400' : ''}
                  >
                    <Star className="w-4 h-4" fill={email.starred ? "currentColor" : "none"} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Archive className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </DashboardLayout>
  );
};

export default Mail;
