import { AlertTriangle, GitBranch, History, ShieldCheck, Waypoints } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const versionStates = [
  { label: "Published API versions", value: "Not reported", icon: GitBranch },
  { label: "Compatibility evidence", value: "Unavailable", icon: ShieldCheck },
  { label: "Deprecation schedule", value: "Unavailable", icon: History },
  { label: "Migration and rollout state", value: "Not configured", icon: Waypoints },
];

export default function APIVersioning() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="API Versioning"
        description="API contract versioning is not connected in this deployment. No version, compatibility, deprecation, migration, or rollout result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Version management is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page is not connected to an API contract registry, schema repository, compatibility test suite, gateway routing policy, deprecation owner, migration tracker, or release source of truth. It cannot prove which API versions exist, whether clients remain compatible, or whether a migration or rollout completed.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Contract governance readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                Production API versioning requires immutable contract artifacts, explicit compatibility rules, schema and behavior tests, routing and negotiation semantics, client and dependency inventory, deprecation and sunset communication, migration guides, rollback plans, telemetry by version, ownership, and release evidence. None of those contract controls are available through this screen.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <GitBranch aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No version claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No current, preview, legacy, default, or supported API version is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No compatibility claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No schema, behavior, client, gateway, or dependency compatibility result is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <History aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No lifecycle claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No deprecation, sunset, migration, rollout, rollback, or support deadline is inferred.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/api-documentation"><Button size="lg" className="bg-primary hover:bg-primary/90">View API documentation</Button></Link>
              <Link href="/api-testing"><Button size="lg" variant="outline">View test status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about contracts</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="version-state-heading">
          <h2 id="version-state-heading" className="mb-4 text-xl font-semibold">Current version evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {versionStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            Do not change client routing, gateway negotiation, or production consumers based on this page. Version transitions should be approved, tested against real contracts, observable by version, and reversible before release.
          </p>
        </Card>
      </main>
    </div>
  );
}
