import { cn } from "@/lib/utils";

type EmptyStateProps = {
  icon?: string;
  title: string;
  description: string;
  className?: string;
};

export function EmptyState({ icon, title, description, className }: EmptyStateProps) {
  return (
    <section className={cn("rounded-2xl border border-dashed bg-card/50 p-8 text-center", className)} aria-live="polite">
      {icon ? <div className="mb-3 text-3xl" aria-hidden="true">{icon}</div> : null}
      <h2 className="text-base font-semibold">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">{description}</p>
    </section>
  );
}
