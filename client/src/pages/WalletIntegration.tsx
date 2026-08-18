import { AlertTriangle, KeyRound, Link2, ShieldAlert, Wallet } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const walletStates = [
  { label: "Wallet provider", value: "Not configured", icon: Wallet },
  { label: "Connection and permissions", value: "Unavailable", icon: Link2 },
  { label: "Signing and key boundary", value: "Disabled", icon: KeyRound },
  { label: "Balance and transaction verification", value: "Unavailable", icon: ShieldAlert },
];

export default function WalletIntegration() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Wallet Integration"
        description="Wallet integration is not enabled in this deployment. No wallet address, balance, signature, permission, or transaction result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Wallet connection is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not connect a browser wallet, mobile wallet, custody provider, chain RPC, or signing service. It cannot prove address ownership, request permissions, sign messages or transactions, read balances, or confirm settlement. No wallet action should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Wallet readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production wallet integration requires an explicit provider and chain allowlist, origin and permission controls, address and network validation, message-domain separation, transaction simulation, fee and nonce checks, user confirmation, rejection handling, replay protection, and independent verification of returned transaction state. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Wallet aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Provider boundary</h3>
                  <p className="text-sm text-muted-foreground">No wallet provider, chain ID, network allowlist, account address, or connection session is available.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <KeyRound aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Signing boundary</h3>
                  <p className="text-sm text-muted-foreground">No message, transaction, permission, nonce, fee, simulation, signature, or key-management flow is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Verification boundary</h3>
                  <p className="text-sm text-muted-foreground">No balance, ownership proof, broadcast state, confirmation, finality, or settlement evidence is displayed.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/blockchain-custody">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View custody status</Button>
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

        <section aria-labelledby="wallet-state-heading">
          <h2 id="wallet-state-heading" className="mb-4 text-xl font-semibold">Current wallet state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {walletStates.map(({ label, value, icon: Icon }) => (
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
          <p className="text-sm leading-6 text-muted-foreground">
            Never enter a seed phrase or private key into this deployment. Do not treat this page as proof that a wallet is connected, an address is controlled, a permission was granted, a message was signed, or a transaction was submitted or settled.
          </p>
        </Card>
      </div>
    </div>
  );
}
