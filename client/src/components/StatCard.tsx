import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StatCardColor = "primary" | "success" | "accent" | "warning";
type StatCardAccent = "cyan" | "purple" | "green" | "pink" | "amber";

export type StatCardProps = {
  icon: LucideIcon;
  label: string;
  value: string | number;
  color?: StatCardColor;
  accent?: StatCardAccent;
  className?: string;
};

const colorClasses: Record<StatCardColor, string> = {
  primary: "text-primary",
  success: "text-emerald-500",
  accent: "text-violet-500",
  warning: "text-amber-500",
};

const accentClasses: Record<StatCardAccent, string> = {
  cyan: "text-cyan-400",
  purple: "text-violet-400",
  green: "text-emerald-400",
  pink: "text-pink-400",
  amber: "text-amber-400",
};

export function StatCard({ icon: Icon, label, value, color = "primary", accent, className }: StatCardProps) {
  const iconClassName = accent ? accentClasses[accent] : colorClasses[color];

  return (
    <Card className={cn("p-4", className)}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight">{value}</p>
        </div>
        <Icon aria-hidden="true" className={cn("h-5 w-5", iconClassName)} />
      </div>
    </Card>
  );
}
