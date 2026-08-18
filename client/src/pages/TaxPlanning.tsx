import { AlertTriangle, Calculator, FileWarning, Landmark, LockKeyhole, UserRoundCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const planningStates = [
  { label: "Tax and financial data", value: "Unavailable", icon: Calculator },
  { label: "Jurisdiction and rule set", value: "Not configured", icon: Landmark },
  { label: "Planning analysis", value: "Not verified", icon: FileWarning },
  { label: "Personalized recommendation", value: "Not provided", icon: UserRoundCheck },
];

export default function TaxPlanning() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Tax Planning"
        description="Tax planning is not connected in this deployment. No strategy, savings estimate, deduction, forecast, or personalized recommendation is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Tax planning is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page is not connected to reconciled financial records, tax lots, income, expenses, residency, jurisdictional rules, filing history, legal interpretation, or qualified tax-professional review. It cannot determine a tax position, recommend a transaction, estimate savings, identify a deduction, or confirm that a strategy is lawful or suitable.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Calculator aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Planning readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Responsible tax planning requires complete and reconciled records, explicit assumptions, cost-basis and lot methods, income and expense classification, jurisdiction and residency, current law, scenario analysis, uncertainty, timing and liquidity constraints, interaction with investment and legal decisions, human review, documentation, auditability, and professional-advice boundaries. None of those inputs are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Calculator aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No calculation claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No income, gain, loss, basis, deduction, savings, liability, rate, or payment amount is calculated.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Landmark aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No legal claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No jurisdiction, rule, strategy, filing position, eligibility, compliance, or lawful-outcome conclusion is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <UserRoundCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No advice claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No personalized tax, legal, accounting, investment, or financial recommendation is provided.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/tax-reports"><Button size="lg" className="bg-primary hover:bg-primary/90">View tax reports status</Button></Link>
              <Link href="/risk-analysis"><Button size="lg" variant="outline">View risk status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about planning access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="planning-state-heading">
          <h2 id="planning-state-heading" className="mb-4 text-xl font-semibold">Current planning evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {planningStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              This screen is not tax, legal, accounting, investment, or financial advice. Do not execute a transaction, change a filing position, or rely on a savings estimate until qualified professionals review current records and law.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
