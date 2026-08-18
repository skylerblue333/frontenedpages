import { AlertTriangle, Bot, FileWarning, LockKeyhole, MessageCircle, ShieldCheck, Sparkles, TrendingUp, WalletCards } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const capabilityStates = [
  { label: "HopeAI model and assistant access", value: "Unavailable", icon: Bot },
  { label: "Mining optimization and trading automation", value: "Not configured", icon: TrendingUp },
  { label: "Wallet, portfolio, and profitability insights", value: "Disabled", icon: WalletCards },
  { label: "Security monitoring, support, and content generation", value: "Not verified", icon: ShieldCheck },
];

export default function HopeAIPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="HopeAI"
        description="HopeAI services are not connected in this deployment. No mining, trading, investment, profitability, security, support, or content-generation capability is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">HopeAI is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous landing page claimed HopeAI could optimize mining and profitability, automate trading, provide investment recommendations, monitor assets and threats, generate content, and resolve support queries. It also linked to unverified dashboards and provided an unverified contact address. Those claims and links were removed because the required AI, market, wallet, security, support, and operational integrations were not verified.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Sparkles aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">HopeAI readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Any production AI connected to crypto, wallets, mining, trading, or security requires an authenticated model gateway, verified market and chain data, explicit user authorization, financial-risk disclosures, transaction confirmation, custody boundaries, least-privilege tools, monitoring evidence, privacy controls, safety escalation, and clear success, failure, timeout, and retry states. None of those controls are available through this page.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <WalletCards aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No financial claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No mining result, hash power, trading strategy, market view, investment recommendation, balance, return, profitability, or transaction is presented.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No security claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No anomaly detection, threat monitoring, asset protection, encryption, security coverage, or incident response is claimed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <MessageCircle aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No assistant claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No chatbot, content generation, personalization, support answer, model response, memory, or availability is simulated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/hope-ai"><Button size="lg" className="bg-primary hover:bg-primary/90">View HopeAI status</Button></Link>
              <Link href="/wallet"><Button size="lg" variant="outline">View wallet status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about HopeAI access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="hope-page-state-heading">
          <h2 id="hope-page-state-heading" className="mb-4 text-xl font-semibold">Current HopeAI evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {capabilityStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, wallet secrets, financial details, health details, or sensitive personal information here. AI output must not be treated as financial, legal, medical, security, or production advice.</p></div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Model access, wallets, market data, mining, trading, security, support, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div>
        </Card>
      </main>
    </div>
  );
}
