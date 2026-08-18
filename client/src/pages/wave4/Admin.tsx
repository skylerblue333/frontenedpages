import { AlertTriangle, BarChart3, FileText, Gavel, LockKeyhole, Shield, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const adminStates = [
  { label: "Admin identity and role", value: "Not verified", icon: Shield },
  { label: "Users and moderation reports", value: "Unavailable", icon: UsersRound },
  { label: "Health and analytics", value: "Not reported", icon: BarChart3 },
  { label: "Privileged actions and audit", value: "Disabled", icon: Gavel },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Wave4 Admin"
        description="Administrative user, moderation, health, analytics, and audit services are not connected in this deployment. No privileged state is being reported or changed."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Wave4 administration is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen claimed user records, posts, banned users, open reports, 24-hour analytics, revenue, user bans, report resolution, report dismissal, and audit logs. No matching wave4 admin contracts were found for the frontend calls, so those claims and privileged mutations were removed. This screen does not expose or alter user data.
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
                  Production administration requires server-side role and object authorization, tenant scope, least privilege, separation of duties, protected personal data, moderation policy and evidence, confirmation for destructive actions, reversible workflows, rate limits, audit records, incident response, independently sourced metrics, and secure error handling. None of those controls are available through this screen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <UsersRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No directory claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No user, email, post count, ban status, reporter, reported user, or moderation target is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Gavel aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No mutation claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No ban, resolve, dismiss, approval, bulk action, or user-data change is simulated.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No metric claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No users, posts, bans, reports, activity, revenue, health, analytics, or audit event is asserted.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/access-control"><Button size="lg" className="bg-primary hover:bg-primary/90">View access status</Button></Link>
              <Link href="/audit-logs"><Button size="lg" variant="outline">View audit status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about admin access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="wave4-admin-state-heading">
          <h2 id="wave4-admin-state-heading" className="mb-4 text-xl font-semibold">Current administrative evidence</h2>
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
              Do not treat frontend visibility as authorization. Do not upload personal data or use this page to moderate, ban, resolve, dismiss, export, or alter records until server-side permissions and audit evidence are connected.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
