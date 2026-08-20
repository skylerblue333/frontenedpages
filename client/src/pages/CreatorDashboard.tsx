import { BarChart3, CheckCircle2, CreditCard, Crown, Database, LockKeyhole, ShieldAlert, Users } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const tabs = [
  ["/creator", "Dashboard"],
  ["/creator-studio", "Studio"],
  ["/creator-analytics", "Analytics"],
  ["/creator-monetization", "Monetize"],
  ["/creator-onboarding", "Onboarding"],
  ["/shadowfans", "ShadowFans"],
] as const;

const readiness = [
  { label: "Creator identity, ownership, profiles, and content records", value: "Not connected", icon: Users },
  { label: "Subscriptions, tips, token rewards, and marketplace sales", value: "Unavailable", icon: CreditCard },
  { label: "Views, audience, engagement, revenue, and payouts", value: "Not reported", icon: BarChart3 },
  { label: "Permissions, privacy, moderation, billing, and audit evidence", value: "Not verified", icon: LockKeyhole },
];

const boundaries = [
  { title: "No creator metric claim", description: "No earnings, subscribers, tips, views, posts, likes, comments, shares, audience, growth, revenue, payout, or content-performance record is read, calculated, displayed, or simulated.", icon: BarChart3 },
  { title: "No monetization claim", description: "No subscription tier, price, tip flow, token reward, marketplace sale, revenue stream, payment method, balance, fee, payout, or financial entitlement is active.", icon: CreditCard },
  { title: "No ownership or access claim", description: "No creator, subscriber, supporter, VIP, learner, purchaser, content owner, entitlement, audience permission, or private record is resolved or changed.", icon: Users },
  { title: "No privacy or safety claim", description: "No analytics SDK, billing source, moderation service, consent record, retention rule, access log, audit trail, or security guarantee is connected. Do not enter private financial or audience data here.", icon: LockKeyhole },
];

export default function CreatorDashboard() {
  return <div className="min-h-screen bg-background"><PageHeader icon={Crown} title="Creator Hub" subtitle="Creator-platform readiness status; no live creator identity, audience, content, analytics, subscriptions, monetization, rewards, or payout data is available in this deployment." /><main className="mx-auto max-w-6xl space-y-8 px-4 py-8"><nav aria-label="Creator areas" className="flex gap-2 overflow-x-auto pb-1">{tabs.map(([href, label]) => <Link key={href} href={href}><Button variant={href === "/creator" ? "default" : "outline"} size="sm" className="whitespace-nowrap">{label}</Button></Link>)}</nav><Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><ShieldAlert aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Creator dashboard data is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen queried unverified earnings, subscription, and tip services, displayed fallback values and active monetization badges, exposed SKY444 tier prices and subscriber records, and presented unsupported growth advice. Those queries, claims, and implied active states were removed because no verified creator, billing, analytics, entitlement, or payout integration was connected.</p></div></div></Card><Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Crown aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Creator-readiness status</h2><p className="mt-2 max-w-4xl text-sm leading-6 text-muted-foreground">A production creator hub requires authenticated creator ownership, durable content records, audience and entitlement rules, consent, analytics provenance, moderation, billing and payout controls, financial reconciliation, privacy protections, and explicit failure states. None are connected through this page.</p></div></div><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{readiness.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-primary/30 bg-background/80 p-4"><Icon aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><p className="text-sm text-muted-foreground">{label}</p><p className="mt-2 font-semibold">{value}</p></Card>)}</div></Card><section aria-labelledby="creator-boundaries-heading"><h2 id="creator-boundaries-heading" className="mb-4 text-xl font-semibold">Current boundaries</h2><div className="grid gap-4 md:grid-cols-2">{boundaries.map(({ title, description, icon: Icon }) => <Card key={title} className="border border-border/50 bg-card p-6"><Icon aria-hidden="true" className="mb-4 h-7 w-7 text-primary" /><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p></Card>)}</div></section><div className="flex flex-wrap gap-3"><Link href="/creator-studio"><Button variant="outline">View creator studio status</Button></Link><Link href="/creator-analytics"><Button variant="outline">View analytics status</Button></Link><Badge variant="outline" className="px-3 py-2">No creator data controls active</Badge></div><Card className="border border-border/50 bg-card p-6"><div className="flex items-start gap-3"><CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">No sign-in flow, analytics query, chart, tab data, export, subscription read, tip read, subscriber identity, payment, reward, revenue, payout, API request, database read or write, notification, account mutation, or creator recommendation is performed. This page is not evidence that a creator account, audience, content, earnings, or monetization program exists.</p></div></Card></main></div>;
}
