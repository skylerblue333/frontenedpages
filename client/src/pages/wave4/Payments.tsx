import { AlertTriangle, CreditCard, FileText, LockKeyhole, ReceiptText, RefreshCcw, WalletCards } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const paymentStates = [
  { label: "Payment methods", value: "Unavailable", icon: CreditCard },
  { label: "Billing and transaction ledger", value: "Unavailable", icon: ReceiptText },
  { label: "Subscriptions and renewals", value: "Not configured", icon: RefreshCcw },
  { label: "Payouts and settlement", value: "Disabled", icon: WalletCards },
];

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Payments & Billing"
        description="Payment, billing, subscription, and payout services are not connected in this deployment. No financial balance, charge, renewal, refund, payout, or settlement result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Payment services are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen claimed payment methods, masked card records, billing transactions, subscription renewals, spending and earnings totals, payout history, and successful payout requests. No matching wave4 payment contracts were found for the frontend calls, so those claims and the payout mutation have been removed. This page does not collect credentials, charge, refund, renew, or transfer funds.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><CreditCard aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Payments readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  A production payments system requires a provider integration, server-side payment intents, tokenized payment-method references, PCI scope controls, customer and merchant authorization, webhook signature verification, idempotency, ledger reconciliation, subscription lifecycle, refunds and disputes, payout eligibility and approval, sanctions and fraud controls, privacy-safe access, audit records, and independently verified settlement. None of those controls are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <CreditCard aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No credential claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No card, bank account, wallet, payment token, default method, or customer payment profile is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ReceiptText aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No ledger claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No charge, balance, spend, earning, subscription, renewal, refund, dispute, invoice, or payout record is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <WalletCards aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No settlement claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No payment, payout, transfer, approval, confirmation, or settlement action can be initiated here.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/admin-orders"><Button size="lg" className="bg-primary hover:bg-primary/90">View order status</Button></Link>
              <Link href="/wallet"><Button size="lg" variant="outline">View wallet status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about payment access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="payment-state-heading">
          <h2 id="payment-state-heading" className="mb-4 text-xl font-semibold">Current payment evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {paymentStates.map(({ label, value, icon: Icon }) => (
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
              Never enter a full card number, bank credential, seed phrase, private key, or payment token here. Do not treat an unavailable state as proof that a charge, refund, payout, or subscription was completed.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
