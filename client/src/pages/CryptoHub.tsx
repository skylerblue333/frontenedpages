import { AlertTriangle, BarChart3, Flame, LockKeyhole, Pickaxe, RefreshCcw, Wallet } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const cryptoStates = [
  { label: "Token balances and prices", value: "Unavailable", icon: BarChart3 },
  { label: "Mining and reward settlement", value: "Disabled", icon: Pickaxe },
  { label: "Swap and market execution", value: "Disabled", icon: RefreshCcw },
  { label: "Stake, burn, and custody", value: "Not configured", icon: LockKeyhole },
];

export default function CryptoHub() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Crypto Hub"
        description="Token, market, mining, staking, burn, wallet, and transaction services are not connected in this deployment. No financial state or execution result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Crypto services are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen claimed live token prices, balances, USD portfolio value, mining progress and rewards, swaps, staking APY, burns, fees, slippage, and transaction history. No matching token routes were found for the frontend calls, and static fallback values cannot prove financial state. All execution controls and fabricated results have been removed.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Wallet aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Financial integration readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  A production crypto hub requires authoritative chain and asset configuration, validated market data, account and balance ownership, wallet custody boundaries, address and network validation, transaction simulation, nonce and fee checks, signed intent, idempotency, replay protection, provider error handling, broadcast and confirmation verification, reward accounting, staking terms, burn finality, reconciliation, rate limits, audit evidence, and clear risk disclosures. None of those controls are available through this screen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No market claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No price, exchange rate, balance, USD value, portfolio, slippage, fee, APY, or reward metric is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Pickaxe aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No mining claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No hash power, mining session, reward, pool, payout, algorithm, or blockchain settlement is simulated.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Flame aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No execution claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No swap, stake, burn, transfer, signature, transaction hash, confirmation, finality, or custody action can be initiated here.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/wallet"><Button size="lg" className="bg-primary hover:bg-primary/90">View wallet status</Button></Link>
              <Link href="/blockchain-custody"><Button size="lg" variant="outline">View custody status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about crypto access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="crypto-state-heading">
          <h2 id="crypto-state-heading" className="mb-4 text-xl font-semibold">Current crypto evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {cryptoStates.map(({ label, value, icon: Icon }) => (
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
              Never enter a seed phrase, private key, or access token here. Do not treat a rendered value, empty state, or frontend interaction as proof of ownership, market value, mining, staking, transaction execution, or settlement.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
