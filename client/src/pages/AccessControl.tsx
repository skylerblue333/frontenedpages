import { AlertTriangle, KeyRound, LockKeyhole, ShieldCheck, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const controlStates = [
  { label: "Identity provider", value: "Not connected", icon: UsersRound },
  { label: "Policy evaluation", value: "Unavailable", icon: ShieldCheck },
  { label: "Role and permission writes", value: "Disabled", icon: KeyRound },
  { label: "Administrative audit trail", value: "Unavailable", icon: LockKeyhole },
];

export default function AccessControl() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Access Control"
        description="Authorization management is not connected in this deployment. No role, permission, policy, or access decision is being reported or changed."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Authorization controls are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page is not connected to an identity provider, policy decision point, role store, permission enforcement middleware, approval workflow, or administrative audit trail. It cannot determine whether a user or service is authorized, and it does not claim that a policy change succeeded.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Authorization readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                Production access control requires a trusted identity source, deny-by-default policy evaluation, server-side enforcement on every protected route and object, tenant and resource boundaries, separation of duties, privileged-action confirmation, revocation and session invalidation, least-privilege scopes, conflict handling, and tamper-evident administrative records. Those integrations are not available through this screen.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <UsersRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">Identity boundary</h3>
                <p className="mt-1 text-sm text-muted-foreground">No user, service, tenant, session, group, role, or authentication context is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">Enforcement boundary</h3>
                <p className="mt-1 text-sm text-muted-foreground">No allow or deny decision is evaluated here, and no frontend state is treated as authorization.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">Change boundary</h3>
                <p className="mt-1 text-sm text-muted-foreground">No role assignment, permission grant, policy edit, approval, or revocation is simulated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/security">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View security status</Button>
              </Link>
              <Link href="/audit-logs">
                <Button size="lg" variant="outline">View audit status</Button>
              </Link>
              <Link href="/contact-us-form">
                <Button size="lg" variant="ghost">Ask about authorization</Button>
              </Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="access-state-heading">
          <h2 id="access-state-heading" className="mb-4 text-xl font-semibold">Current access-control state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {controlStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2">
                  <Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" />
                  <p className="font-semibold">{value}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            Do not rely on this client screen to protect an endpoint, account, wallet, asset, or administrative action. Authorization must be enforced and independently tested on the server before privileged functionality is exposed.
          </p>
        </Card>
      </main>
    </div>
  );
}
