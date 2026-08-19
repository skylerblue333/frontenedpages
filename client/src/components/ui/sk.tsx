import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { StatCard } from "@/components/StatCard";
import { cn } from "@/lib/utils";

export { Card, StatCard };

export type IconTileProps = {
  icon: LucideIcon;
  label?: string;
  className?: string;
};

export function IconTile({ icon: Icon, label, className }: IconTileProps) {
  return (
    <div className={cn("inline-flex items-center gap-2 rounded-lg border bg-card p-2", className)}>
      <Icon aria-hidden="true" className="h-4 w-4 text-primary" />
      {label ? <span className="text-sm font-medium">{label}</span> : null}
    </div>
  );
}
