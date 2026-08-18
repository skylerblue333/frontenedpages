import { AlertTriangle, BarChart3, Coins, FileWarning, Gavel, LockKeyhole, Wallet } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const enhancementStates = [
  { label: "Wallet and custody", value: "Unavailable", icon: Wallet },
  { label: "Market and trading data", value: "Not connected", icon: BarChart3 },
  { label: "Mining, staking, and yield", value: "Not configured", icon: Coins },
  { label: "Governance and execution", value: "Disabled", icon: Gavel },
];

export default function CryptoEnhancementsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Crypto Enhancements"
        description="Crypto enhancement services are not connected in this deployment. No wallet, mining, swap, trading, staking, yield, governance, or digital-asset result is being offered."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Crypto enhancements are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen presented promotional claims for multi-crypto mining, exclusive pools, multi-signature and hardware wallets, transaction history, swaps, low fees, trading bots, real-time data, staking, yield farming, governance, and digital-asset wealth. Those claims were not backed by verified integrations and have been removed. This page does not connect, custody, execute, or promise returns.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Coins aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Enhancement readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production crypto features require authoritative chain and asset configuration, wallet and custody design, provider and origin controls, market-data sources, transaction simulation and signing, nonce and fee checks, replay protection, reconciliation, mining and reward accounting, staking terms, governance identity and voting rules, access control, audit evidence, incident handling, and clear financial-risk disclosures. None of those integrations are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Wallet aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No wallet claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No wallet, multisignature, hardware provider, address, balance, ownership, custody, or transaction history is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No market claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No trading bot, price, rate, fee, liquidity, swap quote, staking APY, yield, or passive-income result is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileWarning aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No execution claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No mining, swap, trade, stake, governance vote, transfer, signature, confirmation, or settlement can be initiated here.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/crypto-hub"><Button size="lg" className="bg-primary hover:bg-primary/90">View crypto status</Button></Link>
              <Link href="/wallet"><Button size="lg" variant="outline">View wallet status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about enhancements</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="enhancement-state-heading">
          <h2 id="enhancement-state-heading" className="mb-4 text-xl font-semibold">Current enhancement evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {enhancementStates.map(({ label, value, icon: Icon }) => (
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
              Never enter a seed phrase, private key, wallet credential, or payment token here. Do not purchase, trade, mine, stake, vote, or transfer assets based on promotional copy or an unavailable state.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
