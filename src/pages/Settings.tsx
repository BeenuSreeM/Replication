import { DashboardLayout } from "@/components/DashboardLayout";
import { User, Bell, Shield, Palette, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your account preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Menu */}
        <div className="metric-card glass-card space-y-2">
          {[
            { icon: User, label: "Profile", active: true },
            { icon: Bell, label: "Notifications", active: false },
            { icon: Shield, label: "Security", active: false },
            { icon: Palette, label: "Appearance", active: false },
            { icon: Globe, label: "Language", active: false },
          ].map((item) => (
            <button
              key={item.label}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl
                transition-all
                ${item.active 
                  ? 'bg-secondary text-foreground font-medium' 
                  : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                }
              `}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <div className="metric-card glass-card">
            <h3 className="text-lg font-semibold mb-6">Profile Information</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John" 
                    className="bg-secondary border-0 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe" 
                    className="bg-secondary border-0 rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john.doe@example.com" 
                  className="bg-secondary border-0 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  placeholder="+1 (555) 000-0000" 
                  className="bg-secondary border-0 rounded-xl"
                />
              </div>
              <Button className="w-full rounded-xl bg-primary hover:bg-primary/90">
                Save Changes
              </Button>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="metric-card glass-card">
            <h3 className="text-lg font-semibold mb-6">Notifications</h3>
            <div className="space-y-4">
              {[
                { label: "Email Notifications", description: "Receive updates via email" },
                { label: "Push Notifications", description: "Get alerts on your device" },
                { label: "SMS Notifications", description: "Receive text message alerts" },
                { label: "Weekly Reports", description: "Get weekly summary reports" },
              ].map((setting) => (
                <div key={setting.label} className="flex items-center justify-between py-3">
                  <div className="space-y-0.5">
                    <Label className="text-sm font-medium">{setting.label}</Label>
                    <p className="text-sm text-muted-foreground">{setting.description}</p>
                  </div>
                  <Switch />
                </div>
              ))}
            </div>
          </div>

          {/* Security Settings */}
          <div className="metric-card glass-card">
            <h3 className="text-lg font-semibold mb-6">Security</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input 
                  id="currentPassword" 
                  type="password" 
                  className="bg-secondary border-0 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input 
                  id="newPassword" 
                  type="password" 
                  className="bg-secondary border-0 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input 
                  id="confirmPassword" 
                  type="password" 
                  className="bg-secondary border-0 rounded-xl"
                />
              </div>
              <Button className="w-full rounded-xl bg-primary hover:bg-primary/90">
                Update Password
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
