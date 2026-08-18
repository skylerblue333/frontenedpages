import { AlertTriangle, BarChart3, CalendarClock, FileText, LockKeyhole, Megaphone, Settings2, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const campaignStates = [
  { label: "Campaigns, drafts, and ownership", value: "Unavailable", icon: FileText },
  { label: "Audience, budget, and consent", value: "Not configured", icon: Megaphone },
  { label: "Schedules, providers, and delivery", value: "Not verified", icon: CalendarClock },
  { label: "Reach, engagement, and conversion analytics", value: "Not reported", icon: BarChart3 },
];

export default function SocialMediaCampaigns() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Social Media Campaigns"
        description="Campaign planning, publishing, audience, and performance services are not connected in this deployment. No campaign, budget, audience, provider, delivery, or analytics result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Campaign services are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen exposed a sign-in gate, New action, search, settings, and an empty campaign state, but no verified campaign-management or social-provider contract was connected. This page cannot establish that a campaign, audience, budget, consent record, schedule, post, delivery, spend, reach, engagement, conversion, or report exists or succeeded.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Megaphone aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Campaign readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production campaign management requires workspace ownership, audience consent and targeting controls, budget authorization, provider credentials, content and policy review, scheduling, timezone normalization, idempotent delivery, verified webhooks, retries, cancellation, spend reconciliation, attribution methodology, privacy, retention, audit evidence, and transparent analytics limitations. None of those controls are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileText aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No campaign claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No campaign, owner, draft, objective, content, channel, schedule, or status record is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No audience or spend claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No audience, consent, budget, spend, billing, targeting, provider, or compliance state is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No performance claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No delivery, reach, impression, click, engagement, conversion, attribution, or return result is simulated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/content-calendar"><Button size="lg" className="bg-primary hover:bg-primary/90">View calendar status</Button></Link>
              <Link href="/content-scheduler"><Button size="lg" variant="outline">View scheduler status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about campaign access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="campaign-state-heading">
          <h2 id="campaign-state-heading" className="mb-4 text-xl font-semibold">Current campaign evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {campaignStates.map(({ label, value, icon: Icon }) => (
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
              Do not enter customer lists, provider credentials, access tokens, financial budgets, private campaign data, or unpublished media here. An unavailable campaign state is not proof that a campaign ran, spent money, reached an audience, or produced a result.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <Settings2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Campaign, content, scheduler, provider, payment, attribution, moderation, and analytics services remain separate integrations. This screen does not replace any of them.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
