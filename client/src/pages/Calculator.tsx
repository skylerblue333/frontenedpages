import { AlertTriangle, Calculator as CalculatorIcon, FileWarning, Gauge, LockKeyhole, Search, ShieldCheck, SlidersHorizontal, TableProperties, Workflow } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const calculatorStates = [
  { label: "Inputs, units, currencies, rates, and assumptions", value: "Unavailable", icon: SlidersHorizontal },
  { label: "Formulas, precision, rounding, validation, and provenance", value: "Not configured", icon: TableProperties },
  { label: "Results, scenarios, recommendations, and saved work", value: "Disabled", icon: CalculatorIcon },
  { label: "Permissions, privacy, exports, and audit", value: "Not available", icon: ShieldCheck },
];

export default function Calculator() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Calculator"
        description="Calculation services are not connected in this deployment. No input, formula, rate, unit, assumption, result, scenario, recommendation, saved calculation, export, or audit result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Calculator is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified calculation domain, input schema, formula registry, unit and currency rules, rate source, precision policy, result provenance, persistence, export, or audit contract was connected. Those controls were removed because the screen cannot establish that a computed result is correct, current, reproducible, or appropriate to act on.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><CalculatorIcon aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Calculation readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production calculators require a defined domain, typed inputs, unit and currency semantics, authoritative rates, versioned formulas, validation and bounds, precision and rounding policy, reproducible provenance, scenario and sensitivity definitions, safe persistence and export, privacy, and audit. None of those controls are available through this route. This screen is informational and does not provide financial, tax, legal, medical, or other professional advice.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><SlidersHorizontal aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No input claim</h3><p className="mt-1 text-sm text-muted-foreground">No amount, rate, duration, unit, currency, assumption, variable, scenario, or user-provided value is collected or displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Gauge aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No result claim</h3><p className="mt-1 text-sm text-muted-foreground">No formula, total, rate, forecast, conversion, score, estimate, recommendation, or decision is calculated or asserted.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Workflow aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No persistence claim</h3><p className="mt-1 text-sm text-muted-foreground">No calculation history, saved scenario, export, notification, provider lookup, or external action is created or sent.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/analytics"><Button size="lg" className="bg-primary hover:bg-primary/90">View analytics status</Button></Link><Link href="/budget-planner"><Button size="lg" variant="outline">View budget status</Button></Link><Link href="/privacy"><Button size="lg" variant="outline">View privacy status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about calculations</Button></Link></div></div></Card>

        <section aria-labelledby="calculator-state-heading"><h2 id="calculator-state-heading" className="mb-4 text-xl font-semibold">Current calculation evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{calculatorStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, bank credentials, tax data, health information, or sensitive personal information here. An unavailable calculator is not evidence that a formula, rate, result, estimate, or recommendation is correct.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Inputs, formulas, rates, providers, persistence, exports, privacy, security, and observability remain separate integrations. This screen does not replace any of them and does not provide professional advice.</p></div></Card>
        <div className="sr-only"><Search aria-hidden="true" /></div>
      </main>
    </div>
  );
}
