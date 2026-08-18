import { AlertTriangle, Calculator, FileText, Landmark, LockKeyhole, ReceiptText } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const taxStates = [
  { label: "Taxable transaction ledger", value: "Unavailable", icon: ReceiptText },
  { label: "Jurisdiction and tax rules", value: "Not configured", icon: Landmark },
  { label: "Calculation and review", value: "Unavailable", icon: Calculator },
  { label: "Filed reports and documents", value: "Not reported", icon: FileText },
];

export default function TaxReports() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Tax Reports"
        description="Tax reporting is not connected in this deployment. No taxable basis, gain, loss, jurisdiction, filing, deduction, or tax document is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Tax reporting is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page is not connected to a complete transaction ledger, cost-basis method, pricing source, tax-rule engine, jurisdiction profile, identity records, accountant review, filing workflow, or document store. It cannot calculate or prove taxable income, gains, losses, withholding, deductions, filing status, or compliance.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><FileText aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Tax reporting readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  A production tax-reporting workflow requires a reconciled transaction ledger, asset and fiat valuation sources, cost-basis and lot methodology, transfer and income classification, jurisdiction and residency inputs, applicable tax rules, period locking, corrections, privacy controls, human review, filing ownership, document retention, and explicit professional-advice disclosures. None of those inputs are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ReceiptText aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No ledger claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No transaction, lot, cost basis, proceeds, income, transfer, fee, gain, or loss record is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Landmark aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No jurisdiction claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No residency, jurisdiction, tax year, rate, filing obligation, deduction, or withholding result is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Calculator aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No filing claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No calculation, report, form, download, submission, accountant review, or tax compliance status is simulated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/tax-documentation"><Button size="lg" className="bg-primary hover:bg-primary/90">View tax documentation</Button></Link>
              <Link href="/cost-basis-calculation"><Button size="lg" variant="outline">View cost-basis status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about tax access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="tax-state-heading">
          <h2 id="tax-state-heading" className="mb-4 text-xl font-semibold">Current tax evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {taxStates.map(({ label, value, icon: Icon }) => (
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
              This screen is not tax, legal, accounting, or financial advice. Do not file, report, transfer, or make a tax decision based on this unavailable state; consult a qualified professional using independently reconciled records.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
