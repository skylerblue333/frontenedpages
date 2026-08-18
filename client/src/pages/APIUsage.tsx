import { AlertTriangle, BarChart3, Clock3, Gauge, ReceiptText } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const usageStates = [
  { label: "Request ledger", value: "Unavailable", icon: BarChart3 },
  { label: "Quota and rate limits", value: "Not reported", icon: Gauge },
  { label: "Usage freshness", value: "Unavailable", icon: Clock3 },
  { label: "Cost and billing attribution", value: "Unavailable", icon: ReceiptText },
];

export default function APIUsage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="API Usage"
        description="Usage reporting is not connected in this deployment. No request count, quota, limit, cost, or billing result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">API usage evidence is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page is not connected to a request ledger, provider usage feed, quota service, rate-limit source, cost model, billing account, or reconciliation process. It cannot prove how many requests were made, whether a limit was reached, what a provider charged, or which account should be billed.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Usage reporting readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                Production usage reporting requires an authoritative request ID and event schema, provider reconciliation, tenant and key attribution, timestamps and time zones, aggregation rules, quota and rate-limit semantics, failed-request treatment, delayed-event handling, pricing-version controls, currency and tax rules, privacy redaction, access control, and exportable evidence. Those measurements and accounting controls are not available here.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No volume claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No request, token, response, error, retry, or endpoint count is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Gauge aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No limit claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No quota, allowance, throttle, remaining capacity, or reset time is inferred.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ReceiptText aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No cost claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No price, estimate, invoice, currency, tax, credit, or billing attribution is reported.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/api-status"><Button size="lg" className="bg-primary hover:bg-primary/90">View API status</Button></Link>
              <Link href="/api-keys"><Button size="lg" variant="outline">View credential status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about usage access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="usage-state-heading">
          <h2 id="usage-state-heading" className="mb-4 text-xl font-semibold">Current usage evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {usageStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            Do not use this page for billing, quota, capacity, or incident decisions until usage events are sourced, reconciled, access-controlled, and independently verified. Never enter provider credentials or payment information here.
          </p>
        </Card>
      </main>
    </div>
  );
}
