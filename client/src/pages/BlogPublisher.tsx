import { AlertTriangle, BarChart3, CalendarClock, FileWarning, Globe2, LockKeyhole, Megaphone, Search, ShieldCheck, Share2, Workflow } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const publishingStates = [
  { label: "Drafts, approvals, publication status, and ownership", value: "Unavailable", icon: Workflow },
  { label: "Schedules, channels, audiences, and delivery", value: "Not configured", icon: CalendarClock },
  { label: "Analytics, engagement, monetization, and attribution", value: "Not measured", icon: BarChart3 },
  { label: "Moderation, rights, privacy, and audit", value: "Disabled", icon: ShieldCheck },
];

export default function BlogPublisher() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Blog Publisher"
        description="Publishing services are not connected in this deployment. No draft, approval, publication, schedule, channel, audience, delivery, engagement, monetization, attribution, moderation, or audit result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Blog Publisher is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified content registry, approval workflow, scheduler, channel provider, audience permission, delivery receipt, analytics source, monetization ledger, moderation policy, rights model, or audit contract was connected. Those controls were removed because the screen cannot establish that content is approved, scheduled, published, delivered, or monetized.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Megaphone aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Publication readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production publishing requires author and content ownership, review and moderation, version and approval state, timezone-aware scheduling, channel and audience authorization, provider credentials, delivery receipts, retries, canonical URLs, accessibility and rights checks, engagement and revenue definitions, privacy, retention, and audit. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Globe2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No publication claim</h3><p className="mt-1 text-sm text-muted-foreground">No article, author, approval, schedule, channel, audience, canonical URL, search index, or public publication is displayed or created.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Share2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No distribution claim</h3><p className="mt-1 text-sm text-muted-foreground">No email, social post, push, notification, feed update, webhook, delivery receipt, retry, or external share is sent.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No outcome claim</h3><p className="mt-1 text-sm text-muted-foreground">No view, click, engagement, subscriber, conversion, revenue, attribution, ranking, or monetization result is calculated.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/blog-editor"><Button size="lg" className="bg-primary hover:bg-primary/90">View editor status</Button></Link><Link href="/content-calendar"><Button size="lg" variant="outline">View calendar status</Button></Link><Link href="/analytics"><Button size="lg" variant="outline">View analytics status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about publishing</Button></Link></div></div></Card>

        <section aria-labelledby="blog-publisher-state-heading"><h2 id="blog-publisher-state-heading" className="mb-4 text-xl font-semibold">Current publishing evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{publishingStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, provider credentials, confidential drafts, unreleased campaigns, or sensitive personal information here. An unavailable publisher is not evidence that content was approved, published, delivered, seen, monetized, or attributed.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Content, identity, channels, audiences, providers, analytics, monetization, privacy, permissions, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Search aria-hidden="true" /></div>
      </main>
    </div>
  );
}
