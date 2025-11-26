import { DashboardLayout } from "@/components/DashboardLayout";
import { ProfitCard } from "@/components/ProfitCard";
import { SalesReportCard } from "@/components/SalesReportCard";
import { AnalyticalAICard } from "@/components/AnalyticalAICard";
import { InvoicesTable } from "@/components/InvoicesTable";
import { ActivityCard } from "@/components/ActivityCard";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Top Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProfitCard />
            <SalesReportCard />
            <AnalyticalAICard />
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <InvoicesTable />
            </div>
            <ActivityCard />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
