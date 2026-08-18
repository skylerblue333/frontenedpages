import { AlertTriangle, CheckCheck, FlaskConical, LockKeyhole, Network } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const testStates = [
  { label: "Test collections", value: "Not configured", icon: FlaskConical },
  { label: "Target environments", value: "Unavailable", icon: Network },
  { label: "Request execution", value: "Disabled", icon: CheckCheck },
  { label: "Credential handling", value: "Unavailable", icon: LockKeyhole },
];

export default function APITesting() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="API Testing"
        description="API test execution is not connected in this deployment. No request, response, assertion, environment, credential, or test result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">API test execution is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page is not connected to a test runner, target allowlist, environment store, secret manager, request executor, assertion engine, result ledger, or CI pipeline. It does not send requests, run mutations, expose credentials, or claim that a test passed or failed.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Test execution readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                Safe API testing requires an explicit target allowlist, environment separation, secret injection outside source control, request and response schemas, non-production safeguards, data-isolation rules, timeout and retry behavior, deterministic assertions, rate limits, mutation approvals, sensitive-data redaction, artifact retention, and independently reproducible CI evidence. Those controls are not available through this screen.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Network aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No target claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No endpoint, environment, deployment, region, or dependency is selected or contacted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No secret handling</h3>
                <p className="mt-1 text-sm text-muted-foreground">No token, cookie, API key, signing key, or private credential is collected or rendered.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <CheckCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No result claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No status code, payload, assertion, mutation, timing, or pass/fail result is fabricated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/api-documentation"><Button size="lg" className="bg-primary hover:bg-primary/90">View API documentation</Button></Link>
              <Link href="/api-status"><Button size="lg" variant="outline">View API status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about test access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="test-state-heading">
          <h2 id="test-state-heading" className="mb-4 text-xl font-semibold">Current test state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {testStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            Do not use this page to test production endpoints or paste credentials into a client-side form. Until a reviewed test runner and isolated environment are connected, perform testing through controlled infrastructure with independently retained results.
          </p>
        </Card>
      </main>
    </div>
  );
}
