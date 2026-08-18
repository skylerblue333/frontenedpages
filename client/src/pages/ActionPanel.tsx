import { AlertTriangle, Bot, BriefcaseBusiness, FileWarning, HandCoins, LockKeyhole, PackagePlus, ShieldCheck, ShoppingBag, Wrench } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const actionStates = [
  { label: "Tips, transfers, wallets, and balances", value: "Unavailable", icon: HandCoins },
  { label: "Service requests, listings, and marketplace state", value: "Not configured", icon: ShoppingBag },
  { label: "AI tasks, tools, and external actions", value: "Disabled", icon: Bot },
  { label: "Orders, fees, notifications, and audit", value: "Not available", icon: ShieldCheck },
];

export default function ActionPanel() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Action Panel"
        description="Action execution services are not connected in this deployment. No tip, transfer, wallet balance, AI task, service request, listing, order, fee, notification, or external side effect is being reported or initiated."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Action execution is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed unverified tip and AI mutations, hard-coded recipient and service behavior, fake success states, fabricated platform activity, marketplace prices, recent actions, fee calculations, and claims that value was flowing. Those actions and claims were removed because no verified wallet, commerce, AI, marketplace, payment, notification, or audit contract was established.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Wrench aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Action-layer readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production action execution requires authenticated intent, recipient and parameter validation, server-side authorization, idempotency, confirmation, wallet and payment controls, provider verification, state transitions, failure and retry handling, user-visible receipts, notification boundaries, audit, fraud controls, and safe AI tool permissions. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><HandCoins aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No financial action</h3><p className="mt-1 text-sm text-muted-foreground">No tip, transfer, wallet transaction, balance check, platform fee, payment, refund, or value transfer is calculated or initiated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><BriefcaseBusiness aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No marketplace action</h3><p className="mt-1 text-sm text-muted-foreground">No service request, provider notification, listing, product, price, order, sale, fulfillment, or matching workflow is created.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Bot aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No AI action</h3><p className="mt-1 text-sm text-muted-foreground">No AI prompt, tool call, code execution, external request, generated output, success state, or real-world action is sent or performed.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/wallet"><Button size="lg" className="bg-primary hover:bg-primary/90">View wallet status</Button></Link><Link href="/marketplace"><Button size="lg" variant="outline">View marketplace status</Button></Link><Link href="/ai-tools-hub"><Button size="lg" variant="outline">View AI status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about action access</Button></Link></div></div></Card>

        <section aria-labelledby="action-state-heading"><h2 id="action-state-heading" className="mb-4 text-xl font-semibold">Current action evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{actionStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, payment details, confidential prompts, proprietary code, or sensitive personal information here. An unavailable action page is not evidence that a transaction, listing, AI task, service request, order, or external action succeeded.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Identity, wallets, payments, marketplaces, AI, providers, notifications, audit, privacy, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><PackagePlus aria-hidden="true" /></div>
      </main>
    </div>
  );
}
