import { AlertTriangle, BookOpen, FileCode2, LockKeyhole, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const documentationStates = [
  { label: "Published endpoint inventory", value: "Unavailable", icon: FileCode2 },
  { label: "Schemas and examples", value: "Not verified", icon: BookOpen },
  { label: "Authentication contract", value: "Unavailable", icon: LockKeyhole },
  { label: "Support and error policy", value: "Not reported", icon: ShieldCheck },
];

export default function APIDocumentation() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="API Documentation"
        description="Published API documentation is not connected in this deployment. No endpoint, schema, authentication, example, version, or support claim is being made."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Authoritative API documentation is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page is not connected to a published contract registry, OpenAPI or equivalent schema source, endpoint inventory, authentication policy, example validator, changelog, version policy, or support commitment. It intentionally does not present guessed routes, payloads, credentials, response codes, examples, or production-readiness claims.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><BookOpen aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Documentation readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production API documentation requires versioned contracts, route ownership, authentication and authorization requirements, request and response schemas, validation constraints, status and error semantics, idempotency and pagination behavior, rate limits, data classification, security warnings, runnable examples against safe environments, change history, deprecation policy, and a process that keeps published material synchronized with deployed code. Those evidence sources are not connected here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileCode2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No endpoint claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No route, method, host, version, operation, parameter, or response contract is published.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No auth claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No token, scope, role, permission, signing, or credential requirement is inferred.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No support claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No uptime, compatibility, error handling, SLA, security, or support commitment is asserted.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/api-status"><Button size="lg" className="bg-primary hover:bg-primary/90">View API status</Button></Link>
              <Link href="/api-versioning"><Button size="lg" variant="outline">View version status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about API access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="documentation-state-heading">
          <h2 id="documentation-state-heading" className="mb-4 text-xl font-semibold">Current documentation evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {documentationStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            Do not integrate against routes or examples based on this page. Treat only versioned documentation produced from the deployed contract and independently validated in a safe environment as authoritative.
          </p>
        </Card>
      </main>
    </div>
  );
}
