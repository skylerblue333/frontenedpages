import { AlertTriangle, BarChart3, FileWarning, LockKeyhole, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const riskStates = [
  { label: "Portfolio and exposure data", value: "Unavailable", icon: BarChart3 },
  { label: "Risk methodology and model", value: "Not configured", icon: FileWarning },
  { label: "Suitability and constraints", value: "Unavailable", icon: ShieldAlert },
  { label: "Recommendation and execution", value: "Disabled", icon: LockKeyhole },
];

export default function RiskAnalysis() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Risk Analysis"
        description="Risk analysis is not connected in this deployment. No score, forecast, recommendation, suitability assessment, or risk-control result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Risk analysis is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page is not connected to authoritative holdings, market data, liabilities, transaction history, risk methodology, model validation, suitability rules, or a controlled execution service. It cannot calculate or prove a risk score, loss estimate, forecast, stress result, investment recommendation, or protection outcome.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Decision-support readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                Responsible risk analysis requires a defined data scope and freshness, validated pricing and exposure sources, transparent methodology, model governance, scenario and stress assumptions, uncertainty and limitations, user suitability and constraints, concentration and liquidity treatment, fees and tax considerations, human review, clear disclosures, access controls, auditability, and a separate confirmed execution path. None of those decision controls are available here.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No data claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No holdings, balances, prices, exposures, returns, liabilities, or transaction history is used or displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileWarning aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No model claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No methodology, score, probability, forecast, stress scenario, confidence, or validation result is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No action claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No recommendation, rebalance, order, hedge, transfer, or other financial action can be initiated here.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/portfolio-tracking"><Button size="lg" className="bg-primary hover:bg-primary/90">View portfolio status</Button></Link>
              <Link href="/security"><Button size="lg" variant="outline">View security status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about risk access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="risk-state-heading">
          <h2 id="risk-state-heading" className="mb-4 text-xl font-semibold">Current risk evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {riskStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            This screen is informational only and is not financial, investment, legal, or tax advice. Do not make a financial decision or execute a transaction based on this unavailable state.
          </p>
        </Card>
      </main>
    </div>
  );
}
