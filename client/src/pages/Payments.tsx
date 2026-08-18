import { AlertTriangle, CreditCard, LockKeyhole, Package, ReceiptText, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const paymentStates = [
  { label: "Catalog and subscription plans", value: "Not configured", icon: ReceiptText },
  { label: "Payment provider", value: "Unavailable", icon: CreditCard },
  { label: "Order and refund records", value: "Unavailable", icon: Package },
  { label: "Payment security controls", value: "Unverified", icon: ShieldAlert },
];

export default function Payments() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Payments"
        description="Payment and subscription services are not enabled in this deployment. No plan, price, payment method, charge, order, refund, or security certification is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Payment actions are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not create checkout sessions, collect card or bank details, accept cryptocurrency, authorize or capture charges, create subscriptions, issue receipts, create orders, process refunds, or claim payment security. No purchase or payment result should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Payment readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production payment system requires a verified commerce catalog, server-side price and tax calculation, a payment-provider contract, tokenization boundaries, authentication and authorization, idempotent checkout and webhook handling, order and refund reconciliation, dispute handling, privacy controls, and independently verified security obligations. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ReceiptText aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Catalog boundary</h3>
                  <p className="text-sm text-muted-foreground">No subscription plan, price, feature entitlement, discount, tax, billing interval, or order identifier is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <CreditCard aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Payment boundary</h3>
                  <p className="text-sm text-muted-foreground">No payment provider, card form, bank transfer, crypto payment, authorization, capture, or tokenization flow is available.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Reconciliation boundary</h3>
                  <p className="text-sm text-muted-foreground">No order, receipt, refund, dispute, webhook, entitlement, or independently verified security status is displayed.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/checkout-flow">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View checkout status</Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="outline">View documentation</Button>
              </Link>
              <Link href="/contact-us-form">
                <Button size="lg" variant="ghost">Ask about integration</Button>
              </Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="payment-state-heading">
          <h2 id="payment-state-heading" className="mb-4 text-xl font-semibold">Current payment state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {paymentStates.map(({ label, value, icon: Icon }) => (
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
              Do not enter card details, bank credentials, API keys, wallet keys, or test payment numbers into this deployment. Do not treat this page as evidence that a payment, subscription, order, refund, or security certification exists.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
