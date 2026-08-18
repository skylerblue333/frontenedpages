import { AlertTriangle, Database, FileWarning, Gauge, KeyRound, LockKeyhole, Settings2, ShieldCheck, Users, Wrench } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const adminStates = [
  { label: "Users, roles, sessions, and account status", value: "Unavailable", icon: Users },
  { label: "Moderation queue, reports, and enforcement", value: "Not configured", icon: ShieldCheck },
  { label: "Platform settings, policies, and rate limits", value: "Disabled", icon: Settings2 },
  { label: "Backups, recovery, audit, and privileged actions", value: "Not available", icon: Database },
];

export default function AdvancedAdminPanel() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Advanced Admin Panel"
        description="Administrative services are not connected in this deployment. No user, role, moderation item, account action, platform setting, rate limit, backup, restore, or privileged operation is being reported or changed."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Advanced Admin Panel is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen rendered named user records, roles, email addresses, join dates, activity times, moderation reports, system metrics, and destructive or privileged controls for suspension, removal, maintenance mode, rate limits, security policy, backup, and restore. Those claims and actions were removed because no verified administrative data source, authorization boundary, audit trail, or recovery system was established.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><ShieldCheck aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Administrative readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production admin panel requires server-side authorization, role and scope enforcement, fresh privilege checks, tenant isolation, typed user and moderation contracts, confirmation for destructive actions, immutable audit logs, rate-limit governance, maintenance safeguards, backup verification, restore testing, secrets protection, incident recovery, and clear unavailable, denied, stale, failed, and retry states. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Users aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No user claim</h3><p className="mt-1 text-sm text-muted-foreground">No user, email, role, status, join date, last-active time, session, account count, or permission is displayed or changed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Wrench aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No enforcement claim</h3><p className="mt-1 text-sm text-muted-foreground">No report, moderation decision, suspension, removal, approval, maintenance mode, policy change, or rate-limit update is initiated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Database aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No recovery claim</h3><p className="mt-1 text-sm text-muted-foreground">No backup, restore, recovery point, database state, audit record, security posture, or system metric is reported or changed.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/admin-panel"><Button size="lg" className="bg-primary hover:bg-primary/90">View admin status</Button></Link><Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about admin access</Button></Link></div></div></Card>

        <section aria-labelledby="advanced-admin-state-heading"><h2 id="advanced-admin-state-heading" className="mb-4 text-xl font-semibold">Current administrative evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{adminStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, recovery codes, confidential user records, or sensitive personal information here. An unavailable admin page is not evidence of user data, authorization, moderation, backups, recovery, or security compliance.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Identity, authorization, moderation, settings, backups, recovery, secrets, audit, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Gauge aria-hidden="true" /><KeyRound aria-hidden="true" /></div>
      </main>
    </div>
  );
}
