import { AlertTriangle, Bot, FileWarning, HandCoins, LockKeyhole, PackageOpen, ShieldCheck, ShoppingBag, TrendingUp, WalletCards, Wrench } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const actionStates = [
  { label: "Wallet balance, income, costs, and settlement", value: "Unavailable", icon: WalletCards },
  { label: "Action catalog, parameters, and permissions", value: "Not configured", icon: Wrench },
  { label: "Execution history and state transitions", value: "Disabled", icon: TrendingUp },
  { label: "AI, marketplace, subscription, and staking actions", value: "Not available", icon: ShieldCheck },
];

export default function ActionObjects() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Action Objects"
        description="Action-object services are not connected in this deployment. No balance, income flow, action catalog, cost, impact, result, history, execution, AI task, marketplace operation, subscription, staking, or settlement state is being reported or changed."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Action Objects are unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen queried an unverified wallet balance, seeded fabricated income events, displayed static action costs and outcomes, and simulated pending-to-completed success after a timeout. It claimed instant payments, trust-score changes, premium access, delivery windows, marketplace visibility, dating engagement, AI completion, notifications, staking yield, subscription income, and other financial activity. Those claims and mutations were removed because no verified action, wallet, commerce, AI, or settlement contract was established.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Wrench aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Action-object readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production action layer requires typed action definitions, authenticated intent, recipient and parameter validation, server-side authorization, idempotency, explicit confirmation, wallet and payment controls, provider verification, state transitions, failure and retry handling, user-visible receipts, notification boundaries, audit, fraud prevention, and safe AI tool permissions. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><WalletCards aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No balance claim</h3><p className="mt-1 text-sm text-muted-foreground">No wallet balance, income event, cost, fee, net flow, reward, yield, subscription, or settlement is read or calculated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><HandCoins aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No execution claim</h3><p className="mt-1 text-sm text-muted-foreground">No payment, tip, service request, listing, match, event, transfer, order, notification, or external action is initiated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Bot aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No AI claim</h3><p className="mt-1 text-sm text-muted-foreground">No AI agent, prompt, tool call, generated output, autonomous action, success status, or completion time is presented.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/action-panel"><Button size="lg" className="bg-primary hover:bg-primary/90">View action-panel status</Button></Link><Link href="/wallet"><Button size="lg" variant="outline">View wallet status</Button></Link><Link href="/ai-tools-hub"><Button size="lg" variant="outline">View AI status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about action access</Button></Link></div></div></Card>

        <section aria-labelledby="action-objects-state-heading"><h2 id="action-objects-state-heading" className="mb-4 text-xl font-semibold">Current action-object evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{actionStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, payment details, confidential prompts, proprietary code, or sensitive personal information here. An unavailable action-object page is not evidence that a balance, transaction, listing, AI task, service request, yield, subscription, or external action exists or succeeded.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Identity, wallets, payments, marketplaces, AI, events, staking, subscriptions, notifications, audit, privacy, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><PackageOpen aria-hidden="true" /><ShoppingBag aria-hidden="true" /></div>
      </main>
    </div>
  );
}
