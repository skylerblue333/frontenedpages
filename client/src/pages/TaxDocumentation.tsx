import { AlertTriangle, BookOpenCheck, FileText, Globe2, LockKeyhole, UserRoundCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const documentationStates = [
  { label: "Authoritative tax sources", value: "Unavailable", icon: Globe2 },
  { label: "Jurisdiction and tax-year coverage", value: "Not configured", icon: FileText },
  { label: "Reviewed guidance", value: "Not verified", icon: BookOpenCheck },
  { label: "Personalized filing advice", value: "Not provided", icon: UserRoundCheck },
];

export default function TaxDocumentation() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Tax Documentation"
        description="Tax documentation is not connected in this deployment. No official source, jurisdiction, tax year, filing form, deadline, or personalized tax guidance is being presented."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Tax documentation is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page is not connected to current official tax authorities, jurisdictional rules, tax-year revisions, reviewed forms, filing systems, or qualified professional oversight. It cannot establish which rules apply, identify a deadline, recommend a form, calculate an amount, or confirm a filing requirement.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><BookOpenCheck aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Documentation readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Responsible tax documentation requires authoritative source links, publication and effective dates, jurisdiction and residency scope, tax-year coverage, version control, translation and accessibility review, plain-language explanations, official form references, change monitoring, citations, privacy safeguards, and clear separation between general information, tax advice, and filing services. None of those sources are connected here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Globe2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No source claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No official authority, publication date, effective date, jurisdiction, or tax-year source is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileText aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No filing claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No form, deadline, filing obligation, calculation, deduction, eligibility, or submission instruction is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <UserRoundCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No advice claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No personalized tax, legal, accounting, investment, or financial advice is provided.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/tax-reports"><Button size="lg" className="bg-primary hover:bg-primary/90">View tax reports status</Button></Link>
              <Link href="/tax-planning"><Button size="lg" variant="outline">View tax planning status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about documentation</Button></Link>
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
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              This screen is not tax, legal, accounting, or financial advice. Consult current official authorities and a qualified professional before filing, reporting, transferring assets, or making a tax decision.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
