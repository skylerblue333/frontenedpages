import { AlertTriangle, Cable, CheckCircle2, LockKeyhole, RefreshCw } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const integrationStates = [
  { label: "Configured providers", value: "None reported", icon: Cable },
  { label: "Credential exchange", value: "Unavailable", icon: LockKeyhole },
  { label: "Connectivity checks", value: "Not run", icon: CheckCircle2 },
  { label: "Synchronization state", value: "Unavailable", icon: RefreshCw },
];

export default function APIIntegration() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="API Integration"
        description="Third-party API integrations are not connected in this deployment. No provider, credential, connection, synchronization, or write result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Integration management is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page is not connected to a provider registry, server-side credential broker, outbound request policy, health check, webhook receiver, retry queue, synchronization job, or integration audit trail. It cannot verify that an external service is connected or that data was sent, received, synchronized, or persisted.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Cable aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Integration readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  A production integration needs an allowlisted provider and endpoint, server-side secret handling, scoped credentials, request and response schemas, validation, timeouts, retries with idempotency, rate limits, webhook authentication, replay protection, error classification, data minimization, monitoring, reconciliation, and a documented ownership and incident process. None of those external-service results are available through this frontend-only surface.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">Credential boundary</h3>
                <p className="mt-1 text-sm text-muted-foreground">No API keys, tokens, OAuth grants, connection strings, or provider secrets are collected or exposed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <CheckCircle2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">Evidence boundary</h3>
                <p className="mt-1 text-sm text-muted-foreground">No health check, latency, response, webhook, sync freshness, or delivery status is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <RefreshCw aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">Mutation boundary</h3>
                <p className="mt-1 text-sm text-muted-foreground">No provider is added, configured, tested, synchronized, disconnected, or updated from this screen.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/api-documentation"><Button size="lg" className="bg-primary hover:bg-primary/90">View API documentation</Button></Link>
              <Link href="/api-status"><Button size="lg" variant="outline">View API status</Button></Link>
              <Link href="/api-keys"><Button size="lg" variant="ghost">View credential status</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="integration-state-heading">
          <h2 id="integration-state-heading" className="mb-4 text-xl font-semibold">Current integration state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {integrationStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            Do not paste secrets into this page or treat a rendered status as proof that an external API is healthy. Integrations should be enabled only after server-side controls and independently verified request, response, webhook, and failure paths are in place.
          </p>
        </Card>
      </main>
    </div>
  );
}
