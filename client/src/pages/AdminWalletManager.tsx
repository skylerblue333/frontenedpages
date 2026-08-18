import { AlertTriangle, KeyRound, LockKeyhole, ShieldAlert, Wallet } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const walletStates = [
  { label: "Wallet registry", value: "Unavailable", icon: Wallet },
  { label: "Custody and key control", value: "Not configured", icon: KeyRound },
  { label: "Balance and reward ledger", value: "Unavailable", icon: ShieldAlert },
  { label: "Transfer and swap execution", value: "Disabled", icon: LockKeyhole },
];

export default function AdminWalletManager() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Admin Wallet Manager"
        description="Administrative wallet and mining-reward operations are not connected in this deployment. No wallet, balance, transaction, key, or automation state is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Admin custody controls are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The prior screen contained hardcoded wallet addresses, zero-valued balance objects, unverified polling endpoints, automatic transfer toggles, and a fake swap form. Those elements did not prove custody, ownership, balances, mining rewards, transaction settlement, signing, or execution. They have been removed rather than presented as live administrative controls.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Wallet aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Custody readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production administrative wallet operations require an approved custody model, chain and asset allowlists, hardened key management or a qualified custodian, multi-party authorization, address allowlists, transaction simulation, nonce and fee controls, idempotency, signing policy, broadcast and confirmation verification, reconciliation, limits, monitoring, incident response, and tamper-evident audit records. None of those controls are connected through this frontend-only surface.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <KeyRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No key claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No seed phrase, private key, signer, custodian, ownership proof, or signing capability is exposed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldAlert aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No ledger claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No balance, reward, valuation, transaction, confirmation, or settlement result is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No mutation claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No transfer, swap, deposit, auto-routing, address change, or mining operation can be triggered here.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/blockchain-custody"><Button size="lg" className="bg-primary hover:bg-primary/90">View custody status</Button></Link>
              <Link href="/audit-logs"><Button size="lg" variant="outline">View audit status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about custody</Button></Link>
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
            Never enter a seed phrase, private key, access token, or other secret into this page. Do not authorize a transaction, assume a mining payout, or treat a rendered address or balance as proof of custody or settlement.
          </p>
        </Card>
      </main>
    </div>
  );
}
