import { AlertTriangle, BarChart3, Calculator, FileWarning, HandCoins, LockKeyhole, PieChart, Search, ShieldCheck, WalletCards } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const budgetStates = [
  { label: "Accounts, income, expenses, categories, and periods", value: "Unavailable", icon: WalletCards },
  { label: "Budgets, transactions, forecasts, and variance", value: "Not configured", icon: BarChart3 },
  { label: "Goals, recommendations, alerts, and automations", value: "Disabled", icon: HandCoins },
  { label: "Privacy, exports, security, and audit", value: "Not available", icon: ShieldCheck },
];

export default function BudgetPlanner() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Budget Planner"
        description="Budget-planning services are not connected in this deployment. No account, income, expense, category, budget, transaction, forecast, goal, recommendation, alert, or financial result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Budget Planner is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified financial-account source, transaction importer, category schema, budgeting period, forecast model, goal workflow, recommendation policy, notification provider, privacy boundary, or audit contract was connected. Those controls were removed because the screen cannot establish that a balance, budget, forecast, or recommendation is accurate.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Calculator aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Budget-planning readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production budget planning requires user-authorized account data, transaction normalization, category and period semantics, currency and timezone rules, forecast assumptions, reconciliation, goal and alert state, privacy minimization, export controls, security, audit, and careful non-advisory disclosures. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><WalletCards aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No balance claim</h3><p className="mt-1 text-sm text-muted-foreground">No account, balance, income, expense, transaction, category, budget, bill, currency, or financial record is displayed or changed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><PieChart aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No forecast claim</h3><p className="mt-1 text-sm text-muted-foreground">No trend, projection, savings estimate, variance, goal progress, affordability result, risk conclusion, or personalized recommendation is calculated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No action claim</h3><p className="mt-1 text-sm text-muted-foreground">No transfer, payment, subscription change, alert, export, notification, provider sync, or financial action is initiated.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/portfolio"><Button size="lg" className="bg-primary hover:bg-primary/90">View portfolio status</Button></Link><Link href="/analytics"><Button size="lg" variant="outline">View analytics status</Button></Link><Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about budgeting</Button></Link></div></div></Card>

        <section aria-labelledby="budget-state-heading"><h2 id="budget-state-heading" className="mb-4 text-xl font-semibold">Current budget evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{budgetStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, bank credentials, full account numbers, tax data, or sensitive personal information here. An unavailable budget page is not evidence that a balance, expense, forecast, recommendation, or financial decision is accurate.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Accounts, transactions, providers, payments, tax, privacy, security, financial advice, and observability remain separate integrations. This screen does not replace any of them and does not provide financial advice.</p></div></Card>
        <div className="sr-only"><Search aria-hidden="true" /></div>
      </main>
    </div>
  );
}
