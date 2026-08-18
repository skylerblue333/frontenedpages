import { AlertTriangle, Banknote, Gavel, LockKeyhole, PackageSearch, ReceiptText, ShieldCheck, Store } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const marketplaceStates = [
  { label: "Listings, products, and inventory", value: "Unavailable", icon: Store },
  { label: "Seller identity, prices, and ratings", value: "Not verified", icon: PackageSearch },
  { label: "Orders, checkout, and settlement", value: "Disabled", icon: ReceiptText },
  { label: "Escrow, auctions, and delivery", value: "Not configured", icon: Gavel },
];

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Marketplace"
        description="Marketplace, commerce, auction, and checkout services are not connected in this deployment. No listing, seller, price, order, payment, escrow, delivery, or settlement result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Marketplace services are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen contained static featured assets, sellers, prices, ratings, review counts, view counts, bids, auction deadlines, product inventory, delivery estimates, total volume, seller counts, escrow protection, Native product feeds, Stripe checkout, order placement, and listing creation. The registered marketplace router is generic, and the available product helper is not a verified end-to-end UI contract, so those claims and commerce actions were removed.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Store aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Marketplace readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production marketplace functionality requires seller and buyer authorization, listing ownership, inventory and price source-of-truth, asset provenance, reviews and ratings integrity, auction rules and clock synchronization, payment-provider integration, tax and fee calculation, escrow custody, delivery and refund workflows, fraud and abuse controls, webhook verification, idempotency, disputes, reconciliation, privacy, and audit evidence. None of those controls are available through this screen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <PackageSearch aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No listing claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No item, asset, seller, price, currency, inventory, rating, review, view, category, or provenance record is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Banknote aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No commerce claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No cart, checkout, payment, fee, tax, escrow, order, refund, payout, transfer, or settlement result is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Gavel aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No auction claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No bid, auction deadline, winner, delivery estimate, dispute, or fulfillment outcome is simulated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/admin-orders"><Button size="lg" className="bg-primary hover:bg-primary/90">View order status</Button></Link>
              <Link href="/payments"><Button size="lg" variant="outline">View payment status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about marketplace access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="marketplace-state-heading">
          <h2 id="marketplace-state-heading" className="mb-4 text-xl font-semibold">Current marketplace evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {marketplaceStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not enter payment credentials, seed phrases, private keys, identity documents, or personal addresses here. Do not purchase, bid, list, transfer, or make a financial decision based on an unavailable marketplace state.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              No custody, escrow, payment, delivery, refund, dispute, or seller-protection guarantee is provided by this screen.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
