import { AlertTriangle, ExternalLink, KeyRound, LockKeyhole, ShieldAlert, Wallet } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const custodyStates = [
  { label: "Wallet custody", value: "Not configured", icon: Wallet },
  { label: "Key management", value: "Unavailable", icon: KeyRound },
  { label: "Transaction signing", value: "Unavailable", icon: LockKeyhole },
  { label: "Settlement verification", value: "Unavailable", icon: ShieldAlert },
];

export default function BlockchainCustody() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Blockchain Custody"
        description="Custody and wallet execution are not enabled in this deployment. No wallet, key, balance, signature, gas estimate, transaction, or settlement result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Custody actions are disabled</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not create or register wallets, derive addresses, store or handle keys, read balances, estimate gas, build or sign transactions, broadcast transactions, or verify settlement. No custody or transaction capability should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Custody readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production custody system requires an explicit trust model, secure key generation and storage, transaction policy controls, address and chain validation, nonce and replay protection, fee and gas verification, signing boundaries, broadcast monitoring, failure recovery, and independently verified settlement. Those services are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Wallet aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Custody boundary</h3>
                  <p className="text-sm text-muted-foreground">No supported networks, custody model, wallet registry, or account ownership proof is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <KeyRound aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Key boundary</h3>
                  <p className="text-sm text-muted-foreground">No seed phrase, private key, derivation path, signer, HSM, or wallet-provider integration is available.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Transaction boundary</h3>
                  <p className="text-sm text-muted-foreground">No balances, gas estimates, signatures, transaction hashes, broadcast states, or finality evidence is displayed.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/wallet">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View wallet status</Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="outline">View documentation</Button>
              </Link>
              <a href="https://github.com/skylerblue333/frontenedpages" target="_blank" rel="noreferrer">
                <Button size="lg" variant="ghost">
                  View source <ExternalLink aria-hidden="true" className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </Card>

        <section aria-labelledby="custody-state-heading">
          <h2 id="custody-state-heading" className="mb-4 text-xl font-semibold">Current custody state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {custodyStates.map(({ label, value, icon: Icon }) => (
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
            Never enter a seed phrase or private key into this deployment. Do not treat this page as proof that funds are held, a transaction was signed or broadcast, or a balance is accurate. Use independently audited custody infrastructure until the required integration is available.
          </p>
        </Card>
      </div>
    </div>
  );
}
