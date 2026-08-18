import { AlertTriangle, FileCheck2, KeyRound, LockKeyhole, MailPlus, Settings2, ShieldCheck, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const teamStates = [
  { label: "Teams, workspaces, and members", value: "Unavailable", icon: UsersRound },
  { label: "Roles, permissions, and ownership", value: "Not verified", icon: KeyRound },
  { label: "Invitations, access, and lifecycle", value: "Not configured", icon: MailPlus },
  { label: "Activity, settings, and mutations", value: "Disabled", icon: Settings2 },
];

export default function TeamManagement() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Team Management"
        description="Team and workspace administration are not connected in this deployment. No organization, member, role, permission, invitation, activity, or management result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Team management is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen exposed a sign-in gate, New action, search, settings, and an empty team state, but no verified team, workspace, membership, role, invitation, or authorization contract was connected. This page cannot establish that a team, member, permission, invitation, activity event, or management action exists or succeeded.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><UsersRound aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Workspace governance readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production team management requires tenant isolation, authenticated workspace ownership, membership lifecycle, invitations, role and permission policy, least privilege, object-level authorization, secure recovery, audit logs, member removal and revocation, billing boundaries, data export and deletion, notification, rate limits, and explicit success and failure states. None of those controls are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <UsersRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No membership claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No team, workspace, member, owner, email, status, seat, or membership record is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <KeyRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No authorization claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No role, permission, policy, admin privilege, access decision, or revocation result is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <MailPlus aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No invitation claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No invite, email delivery, acceptance, expiration, removal, notification, or activity event is simulated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/team-workspace"><Button size="lg" className="bg-primary hover:bg-primary/90">View workspace status</Button></Link>
              <Link href="/access-control"><Button size="lg" variant="outline">View access-control status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about team access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="team-state-heading">
          <h2 id="team-state-heading" className="mb-4 text-xl font-semibold">Current team-management evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {teamStates.map(({ label, value, icon: Icon }) => (
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
              Do not enter team member personal data, credentials, access tokens, seed phrases, private keys, or billing information here. An unavailable team state is not proof that a member has access, a role is enforced, or an invitation was delivered.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Identity, authorization, billing, notifications, audit, and workspace services remain separate integrations. This screen does not replace any of them.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
