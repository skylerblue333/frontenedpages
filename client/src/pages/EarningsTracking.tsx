import { AlertTriangle, BarChart3, Calculator, Database, LockKeyhole, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const earningsStates = [
  { label: "Earnings and transaction source", value: "Not configured", icon: Database },
  { label: "Revenue, income, and expense data", value: "Unavailable", icon: BarChart3 },
  { label: "Calculation and tax treatment", value: "Unavailable", icon: Calculator },
  { label: "Payout and reconciliation", value: "Disabled", icon: ShieldAlert },
];

export default function EarningsTracking() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Earnings Tracking"
        description="Earnings tracking is not enabled in this deployment. No revenue, income, expense, balance, payout, or performance result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Earnings data is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not connect to an accounting ledger, marketplace, payroll, creator, affiliate, wallet, payment, or tax source. It cannot prove revenue, income, expenses, profit, balances, invoices, fees, payouts, or performance. No financial or tax result should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Earnings-data readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production earnings tracker requires authenticated source accounts, complete transaction provenance, revenue and expense classification, fees and refunds, currency conversion, payout and invoice reconciliation, access controls, privacy, tax-year and jurisdiction methodology, audit trails, and independent verification of financial outputs. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Database aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Source boundary</h3>
                  <p className="text-sm text-muted-foreground">No account, sale, subscription, commission, invoice, expense, fee, refund, or payout record is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <BarChart3 aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Calculation boundary</h3>
                  <p className="text-sm text-muted-foreground">No revenue, income, profit, margin, balance, trend, growth, forecast, or performance data is displayed.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Settlement boundary</h3>
                  <p className="text-sm text-muted-foreground">No payout, invoice, tax output, transfer, reconciliation, confirmation, or settlement evidence is available.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/portfolio-tracking">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View portfolio status</Button>
              </Link>
              <Link href="/cost-basis-calculation">
                <Button size="lg" variant="outline">View tax-data status</Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="ghost">View documentation</Button>
              </Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="earnings-state-heading">
          <h2 id="earnings-state-heading" className="mb-4 text-xl font-semibold">Current earnings state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {earningsStates.map(({ label, value, icon: Icon }) => (
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
              Do not use this page as financial or tax advice, and do not treat it as evidence of revenue, income, expenses, profit, payout, or filing compliance. Verify all earnings records, methodology, and outputs through independently trusted systems and qualified professionals.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
