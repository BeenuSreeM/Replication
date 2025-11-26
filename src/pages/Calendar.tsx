import { DashboardLayout } from "@/components/DashboardLayout";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  { id: 1, title: "Team Meeting", time: "09:00 AM", date: "10", color: "bg-primary" },
  { id: 2, title: "Client Call", time: "02:00 PM", date: "10", color: "bg-chart-2" },
  { id: 3, title: "Project Review", time: "11:00 AM", date: "15", color: "bg-chart-4" },
  { id: 4, title: "Lunch with Partners", time: "01:00 PM", date: "20", color: "bg-chart-5" },
];

const Calendar = () => {
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);
  const firstDayOffset = 2; // Starting day of month (Wednesday = 2)

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Calendar</h1>
          <p className="text-muted-foreground mt-1">Manage your schedule</p>
        </div>
        <Button className="rounded-xl bg-primary hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 metric-card glass-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">September 2023</h2>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="rounded-xl">
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-xl">
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                {day}
              </div>
            ))}
            
            {Array.from({ length: firstDayOffset }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            
            {daysInMonth.map((day) => {
              const hasEvent = events.some(e => e.date === day.toString());
              const isToday = day === 10;
              
              return (
                <button
                  key={day}
                  className={`
                    aspect-square rounded-xl flex items-center justify-center text-sm
                    transition-all hover:bg-secondary
                    ${isToday ? 'bg-primary text-primary-foreground font-bold' : ''}
                    ${hasEvent && !isToday ? 'font-semibold' : ''}
                  `}
                >
                  {day}
                  {hasEvent && !isToday && (
                    <span className="w-1 h-1 rounded-full bg-primary absolute mt-6" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="metric-card glass-card">
          <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
          <div className="space-y-3">
            {events.map((event) => (
              <div key={event.id} className="flex gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <div className={`w-1 rounded-full ${event.color}`} />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">{event.title}</p>
                  <p className="text-xs text-muted-foreground">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </DashboardLayout>
  );
};

export default Calendar;
