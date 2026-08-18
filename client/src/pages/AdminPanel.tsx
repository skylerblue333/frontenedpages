import { AlertTriangle, BarChart3, Gavel, LockKeyhole, Shield, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const adminStates = [
  { label: "Administrator identity and role", value: "Not verified", icon: Shield },
  { label: "User directory and moderation queue", value: "Unavailable", icon: UsersRound },
  { label: "Privileged mutations", value: "Disabled", icon: Gavel },
  { label: "Platform metrics and health", value: "Unavailable", icon: BarChart3 },
];

export default function AdminPanel() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Admin Panel"
        description="Administrative user, moderation, analytics, and system-control services are not connected in this deployment. No privileged state is being reported or changed."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Administrative controls are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen claimed live user counts, online users, connections, system health, user records, moderation items, role promotion, account bans, and analytics. The registered admin backend is currently a generic feature router, so those values and privileged mutations are not verified. They have been removed rather than presented as operational controls.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Shield aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Administrative readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production administration requires server-side identity and role enforcement, tenant and object authorization, least privilege, separation of duties, moderation policy and evidence, protected user data, approval and confirmation for destructive actions, rate limits, reversible workflows, audit records, incident response, and independent system metrics. None of those controls can be established by this frontend-only surface.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <UsersRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No directory claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No user, email, role, ban status, post count, join date, or moderation target is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Gavel aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No mutation claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No promotion, ban, moderation decision, bulk action, approval, or destructive operation is simulated.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No metric claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No user count, online count, connection count, content count, health state, or analytics result is asserted.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/access-control"><Button size="lg" className="bg-primary hover:bg-primary/90">View access status</Button></Link>
              <Link href="/audit-logs"><Button size="lg" variant="outline">View audit status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about admin access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="admin-state-heading">
          <h2 id="admin-state-heading" className="mb-4 text-xl font-semibold">Current administrative evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {adminStates.map(({ label, value, icon: Icon }) => (
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
              Do not treat frontend visibility as authorization. Do not use this page to ban, promote, moderate, export, or alter user data until every privileged action is enforced and audited on the server.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
