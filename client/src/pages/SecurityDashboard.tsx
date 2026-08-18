import { Activity, AlertTriangle, BarChart3, CheckCircle, Clock3, Eye, Globe, LockKeyhole, Server, Shield } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const securityStates = [
  { label: "Security score and recommendations", value: "Unavailable", icon: BarChart3 },
  { label: "TLS, WAF, 2FA, and uptime evidence", value: "Not verified", icon: Shield },
  { label: "Security events and account activity", value: "Unavailable", icon: Activity },
  { label: "Session and connected-app controls", value: "Not configured", icon: Server },
];

export default function SecurityDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Security Dashboard"
        description="Security monitoring is not connected in this deployment. No score, scan, control state, event, session, uptime, or security guarantee is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Security evidence is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen claimed a security score, a completed scan, SSL/TLS grade, WAF state, 2FA state, uptime, recommendations, connected apps, moderation statistics, audit activity, security events, and an active session. The registered security and audit routes are generic feature routers, so those claims and scan behavior were not verified and have been removed.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Shield aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Security readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production security reporting requires a defined measurement methodology, authenticated telemetry, infrastructure and dependency scope, certificate and WAF sources, identity and MFA state, session and device inventory, connected-app permissions, event provenance and freshness, alerting, incident ownership, response evidence, privacy-safe retention, and independent verification. None of those sources are available through this screen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No score claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No score, recommendation, scan result, control grade, protection state, or risk conclusion is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Eye aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No event claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No login, device, session, connected app, moderation, audit, alert, incident, or activity event is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <CheckCircle aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No guarantee claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No TLS, WAF, MFA, uptime, monitoring coverage, compromise absence, or security certification is guaranteed.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/security"><Button size="lg" className="bg-primary hover:bg-primary/90">View security status</Button></Link>
              <Link href="/audit-logs"><Button size="lg" variant="outline">View audit status</Button></Link>
              <Link href="/access-control"><Button size="lg" variant="ghost">View access status</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="security-state-heading">
          <h2 id="security-state-heading" className="mb-4 text-xl font-semibold">Current security evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {securityStates.map(({ label, value, icon: Icon }) => (
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
              Do not treat this page as a security assessment or proof that an account, service, session, endpoint, or infrastructure component is secure. Use independently verified controls and incident evidence before making security decisions.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
