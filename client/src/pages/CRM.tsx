import { AlertTriangle, BarChart3, Building2, FileText, LockKeyhole, Target, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const crmStates = [
  { label: "Contacts and account records", value: "Unavailable", icon: UsersRound },
  { label: "Pipeline, deals, and revenue", value: "Not reported", icon: Target },
  { label: "Lead scoring and conversion analytics", value: "Not verified", icon: BarChart3 },
  { label: "Activity, tasks, and CRM mutations", value: "Disabled", icon: FileText },
];

export default function CRM() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="CRM Hub"
        description="Customer, contact, pipeline, analytics, and activity services are not connected in this deployment. No business record or CRM result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">CRM services are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen contained static contact names, companies, email addresses, deal stages, pipeline values, lead scores, revenue charts, win rate, contact counts, activity records, and an Add Contact affordance. No matching CRM contracts were found for the page, so those business records, metrics, and actions were not verified and have been removed.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Building2 aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">CRM readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production CRM requires tenant and role authorization, contact and company ownership, consent and privacy controls, validated data entry, deduplication, immutable activity history, pipeline and deal semantics, revenue source reconciliation, lead-score methodology, analytics freshness, retention and export rules, communication permissions, audit trails, and safe mutation workflows. None of those controls are available through this screen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <UsersRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No contact claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No contact, company, email, phone, tag, owner, consent, relationship, or account record is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Target aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No pipeline claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No lead, deal, stage, value, closed-won amount, forecast, conversion rate, or revenue result is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No activity claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No call, email, meeting, message, task, score, analytics point, or customer interaction is simulated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/team-workspace"><Button size="lg" className="bg-primary hover:bg-primary/90">View workspace status</Button></Link>
              <Link href="/analytics-products"><Button size="lg" variant="outline">View analytics status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about CRM access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="crm-state-heading">
          <h2 id="crm-state-heading" className="mb-4 text-xl font-semibold">Current CRM evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {crmStates.map(({ label, value, icon: Icon }) => (
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
              Do not enter customer personal data, financial records, credentials, or communication content here until a verified, authorized CRM workflow is connected. An unavailable state is not evidence that a lead, deal, contact, or activity does not exist.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
