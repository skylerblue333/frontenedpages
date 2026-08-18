import { AlertTriangle, BarChart3, Code2, FileWarning, Gauge, KeyRound, LockKeyhole, Network, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const apiStates = [
  { label: "API catalog, schemas, and endpoint ownership", value: "Unavailable", icon: Code2 },
  { label: "Keys, credentials, scopes, and authorization", value: "Not configured", icon: KeyRound },
  { label: "Requests, responses, errors, and latency", value: "Not measured", icon: Gauge },
  { label: "Integrations, automation, and observability", value: "Disabled", icon: Network },
];

export default function APIManagement() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="API Management"
        description="API-management services are not connected in this deployment. No endpoint, schema, credential, request, response, integration, automation, performance metric, or operational result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">API Management is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen claimed fully functional live data and real-time updates, exposed generic feature cards and action buttons, and rendered fabricated active-user, transaction, success-rate, and response-time metrics. Those claims and actions were removed because no verified API registry, credential store, integration, request pipeline, or observability contract was established.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Network aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">API-management readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production API management requires a typed contract registry, versioning and deprecation policy, server-side secret handling, least-privilege scopes, input and output validation, rate limits, retries, idempotency, error semantics, audit logs, provider allowlists, data protection, monitoring, ownership, and clear unavailable, stale, failed, and retry states. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Code2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No API claim</h3><p className="mt-1 text-sm text-muted-foreground">No endpoint, schema, provider, integration, authentication method, automation capability, live update, or documentation status is fabricated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No credential claim</h3><p className="mt-1 text-sm text-muted-foreground">No API key, token, secret, scope, account, permission, request, response, or external write is accepted or stored.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No metric claim</h3><p className="mt-1 text-sm text-muted-foreground">No active-user count, transaction total, success rate, latency, uptime, throughput, cost, or analytics result is reported.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/api-status"><Button size="lg" className="bg-primary hover:bg-primary/90">View API status</Button></Link><Link href="/api-keys"><Button size="lg" variant="outline">View credential status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about API access</Button></Link></div></div></Card>

        <section aria-labelledby="api-management-state-heading"><h2 id="api-management-state-heading" className="mb-4 text-xl font-semibold">Current API evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{apiStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, API secrets, confidential schemas, or sensitive personal information here. An unavailable API page is not evidence of an integration, request success, performance level, uptime, or security posture.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Providers, contracts, credentials, permissions, requests, billing, privacy, monitoring, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
      </main>
    </div>
  );
}
