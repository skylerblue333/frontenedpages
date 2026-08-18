import { AlertTriangle, BarChart3, KeyRound, LockKeyhole, Wallet as WalletIcon } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const walletStates = [
  { label: "Wallet connection", value: "Unavailable", icon: WalletIcon },
  { label: "Balances and prices", value: "Unavailable", icon: BarChart3 },
  { label: "Transaction history", value: "Unavailable", icon: LockKeyhole },
  { label: "Signing and custody", value: "Not configured", icon: KeyRound },
];

export default function WalletPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Crypto Wallet"
        description="Wallet, market-data, portfolio, and transaction services are not connected in this deployment. No balance, price, address, or transaction result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Wallet services are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen claimed live balances, a platform wallet ID, token prices, reconstructed history, MetaMask connectivity, transaction submission, network fees, and confirmation timing. No matching wallet backend contracts were found, so those claims and mutation controls have been removed. This page does not connect a wallet, read funds, sign, broadcast, or report settlement.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><WalletIcon aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Wallet readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  A production wallet requires explicit chain and asset allowlists, provider and origin controls, address validation, balance and price sources, nonce and fee checks, transaction simulation, user confirmation, signing boundaries, replay protection, idempotency, broadcast and confirmation verification, failure recovery, reconciliation, and clear custody disclosures. None of those integrations are available through this frontend-only screen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No asset claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No token balance, USD value, price, APY, portfolio chart, reward, or market metric is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <KeyRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No signing claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No provider connection, address ownership, signature, private key, or custody capability is exposed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No transaction claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No send, receive, swap, fee, timing, hash, confirmation, finality, or settlement result is simulated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/blockchain-custody"><Button size="lg" className="bg-primary hover:bg-primary/90">View custody status</Button></Link>
              <Link href="/wallet-integration"><Button size="lg" variant="outline">View integration status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about wallet access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="wallet-state-heading">
          <h2 id="wallet-state-heading" className="mb-4 text-xl font-semibold">Current wallet evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {walletStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            Never enter a seed phrase, private key, access token, or other secret into this page. Do not use it to authorize a transaction or treat a rendered address, balance, price, or empty state as proof of ownership or settlement.
          </p>
        </Card>
      </main>
    </div>
  );
}
