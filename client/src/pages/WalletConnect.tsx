import { AlertTriangle, Cable, KeyRound, Network, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const connectionStates = [
  { label: "Provider session", value: "Unavailable", icon: Cable },
  { label: "Supported chains", value: "Not configured", icon: Network },
  { label: "Address ownership", value: "Unverified", icon: ShieldCheck },
  { label: "Message and transaction signing", value: "Disabled", icon: KeyRound },
];

export default function WalletConnect() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Wallet Connect"
        description="External wallet connection is not integrated in this deployment. No provider session, chain, address, balance, permission, signature, or transaction is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Wallet provider integration is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page is not connected to WalletConnect, a browser wallet provider, chain configuration, origin policy, permission store, signature verifier, or transaction relay. It intentionally does not open a provider session, request accounts, display an address, ask for a signature, or claim that a transaction was approved or settled.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Cable aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Connection readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  A production wallet connection requires explicit provider and chain allowlists, origin and session controls, address and network validation, permission minimization, message-domain separation, transaction simulation, nonce and fee checks, user confirmation, signature verification, replay protection, rejection handling, disconnect and revocation behavior, and independent settlement verification. None of those controls are available through this screen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Network aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No network claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No chain ID, network name, RPC, account, address, balance, or supported asset is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No ownership claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No account connection or ownership proof is accepted without a verified provider and signature flow.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <KeyRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No signing claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No message, typed data, transaction, permission grant, broadcast, or confirmation can be initiated here.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/wallet-integration"><Button size="lg" className="bg-primary hover:bg-primary/90">View integration status</Button></Link>
              <Link href="/blockchain-custody"><Button size="lg" variant="outline">View custody status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about wallet access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="connection-state-heading">
          <h2 id="connection-state-heading" className="mb-4 text-xl font-semibold">Current connection evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {connectionStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            Never enter a seed phrase or private key into this page. Do not approve wallet prompts or connect an account based on a rendered status; use an independently verified provider and chain configuration when an integration is available.
          </p>
        </Card>
      </main>
    </div>
  );
}
