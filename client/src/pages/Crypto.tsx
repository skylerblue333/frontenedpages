import { AlertTriangle, ArrowUpDown, BarChart3, Coins, LockKeyhole, ShieldAlert, Wallet } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const cryptoStates = [
  { label: "Wallet connection", value: "Not connected", icon: Wallet },
  { label: "Token metadata and prices", value: "Unavailable", icon: Coins },
  { label: "Portfolio balances", value: "Unavailable", icon: BarChart3 },
  { label: "Transaction execution", value: "Disabled", icon: LockKeyhole },
];

export default function Crypto() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Crypto Wallet"
        description="Crypto portfolio and transaction integrations are not enabled in this deployment. No token price, balance, return, yield, or transaction result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Crypto actions are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not connect a wallet, fetch market data, calculate portfolio value, send or receive assets, swap tokens, provide yield products, offer insurance, or submit transactions. No financial or blockchain result should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Crypto integration readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production crypto surface requires trusted token metadata, live market-data provenance, wallet and chain validation, balance freshness, transaction policy controls, quote expiry, slippage and fee disclosure, key-management boundaries, and independently verified settlement. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Coins aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Market-data boundary</h3>
                  <p className="text-sm text-muted-foreground">No token list, price, percentage change, exchange rate, market cap, APY, TVL, or performance statistic is displayed.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Wallet aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Wallet boundary</h3>
                  <p className="text-sm text-muted-foreground">No wallet address, balance, portfolio total, custody state, signing permission, or asset ownership is available.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Execution boundary</h3>
                  <p className="text-sm text-muted-foreground">No swap, send, receive, staking, yield, insurance, or transaction action can be initiated or confirmed.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/crypto-hub">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View crypto hub status</Button>
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

        <section aria-labelledby="crypto-state-heading">
          <h2 id="crypto-state-heading" className="mb-4 text-xl font-semibold">Current crypto state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {cryptoStates.map(({ label, value, icon: Icon }) => (
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
            <ArrowUpDown aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not enter a seed phrase or private key into this deployment and do not rely on this page for financial decisions. Verify wallet balances, prices, yields, ownership, and transaction status through independently trusted providers until the required integrations are available.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
