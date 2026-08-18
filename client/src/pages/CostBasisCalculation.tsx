import { AlertTriangle, Calculator, Database, FileText, LockKeyhole, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const taxStates = [
  { label: "Transaction and tax-lot source", value: "Not configured", icon: Database },
  { label: "Prices, basis, and adjustment rules", value: "Unavailable", icon: Calculator },
  { label: "Jurisdiction and tax treatment", value: "Unavailable", icon: FileText },
  { label: "Tax output and filing evidence", value: "Disabled", icon: ShieldAlert },
];

export default function CostBasisCalculation() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Cost Basis Calculation"
        description="Cost-basis calculation is not enabled in this deployment. No tax lot, basis, gain, loss, jurisdiction, or filing result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Cost-basis actions are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not connect to a transaction ledger, tax-lot engine, market-price source, corporate-action feed, jurisdiction rules, or tax professional workflow. It cannot calculate basis, gains, losses, holding periods, taxable income, deductions, or filing outputs. No tax or financial result should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Tax-data readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production cost-basis system requires complete transaction provenance, lot-selection methodology, currency and price sources, splits and corporate-action handling, fees and transfers, jurisdiction and tax-year configuration, audit trails, reconciliation, privacy controls, and review by a qualified tax professional. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Database aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Source boundary</h3>
                  <p className="text-sm text-muted-foreground">No account, transaction, tax lot, transfer, fee, split, dividend, or corporate-action record is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Calculator aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Calculation boundary</h3>
                  <p className="text-sm text-muted-foreground">No basis, price, holding period, gain, loss, income, deduction, lot method, or adjustment is displayed.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Filing boundary</h3>
                  <p className="text-sm text-muted-foreground">No jurisdiction, tax year, form, filing, payment, audit trail, or professional review is available.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/portfolio-tracking">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View portfolio status</Button>
              </Link>
              <Link href="/asset-tracking">
                <Button size="lg" variant="outline">View asset status</Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="ghost">View documentation</Button>
              </Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="tax-state-heading">
          <h2 id="tax-state-heading" className="mb-4 text-xl font-semibold">Current cost-basis state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {taxStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <div className="flex items-center gap-2">
                    <Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" />
                    <p className="text-lg font-semibold">{value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not use this page as tax advice or evidence of basis, gains, losses, holding periods, taxable income, or filing compliance. Verify all transaction data, methodology, jurisdiction rules, and outputs with independently trusted records and a qualified tax professional.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
