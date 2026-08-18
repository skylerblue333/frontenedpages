import { AlertTriangle, CreditCard, FileText, HeartHandshake, LockKeyhole, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const donationStates = [
  { label: "Campaign and beneficiary", value: "Not configured", icon: HeartHandshake },
  { label: "Donation and payment provider", value: "Unavailable", icon: CreditCard },
  { label: "Receipt and donor records", value: "Unavailable", icon: FileText },
  { label: "Refund and payout reconciliation", value: "Disabled", icon: ShieldAlert },
];

export default function DonationProcessing() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Donation Processing"
        description="Donation processing is not enabled in this deployment. No campaign, beneficiary, donation, payment, receipt, refund, or payout result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Donation actions are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not verify a campaign or beneficiary, collect a donation, authorize or capture a payment, issue a receipt, process a refund, or disburse funds. It cannot attest that a donation was received, safeguarded, transferred, or used for a stated purpose. No charitable or financial outcome should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Donation readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production donation flow requires beneficiary and campaign verification, donor consent and privacy controls, payment-provider integration, fraud and chargeback handling, receipt and tax rules, restricted-fund accounting, refund controls, disbursement approvals, reconciliation, regulatory obligations, and transparent reporting. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <HeartHandshake aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Campaign boundary</h3>
                  <p className="text-sm text-muted-foreground">No campaign, beneficiary, cause, terms, donor identity, goal, deadline, or restricted-fund policy is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <CreditCard aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Payment boundary</h3>
                  <p className="text-sm text-muted-foreground">No payment method, donation amount, authorization, capture, refund, chargeback, fee, or donor total is available.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Settlement boundary</h3>
                  <p className="text-sm text-muted-foreground">No receipt, tax output, disbursement, beneficiary payout, audit record, confirmation, or settlement evidence is displayed.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/fundraiser-tools">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View fundraiser status</Button>
              </Link>
              <Link href="/payments">
                <Button size="lg" variant="outline">View payment status</Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="ghost">View documentation</Button>
              </Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="donation-state-heading">
          <h2 id="donation-state-heading" className="mb-4 text-xl font-semibold">Current donation state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {donationStates.map(({ label, value, icon: Icon }) => (
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
              Do not enter donor payment details, beneficiary credentials, or sensitive campaign information into this deployment. Do not treat this page as evidence that a donation was received, a receipt issued, a refund processed, or funds paid out.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
