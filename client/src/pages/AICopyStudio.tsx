import { AlertTriangle, BarChart3, FileText, FileWarning, Languages, LockKeyhole, MessageSquare, ShieldCheck, Sparkles, Wand2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const copyStates = [
  { label: "Copy model, provider, and version", value: "Unavailable", icon: Sparkles },
  { label: "Generation, improvement, and translation", value: "Disabled", icon: Wand2 },
  { label: "Quality, engagement, SEO, and conversion scores", value: "Not measured", icon: BarChart3 },
  { label: "Templates, history, and retention", value: "Not configured", icon: FileText },
];

export default function AICopyStudio() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="AI Copy Studio"
        description="AI copy services are not connected in this deployment. No copy, translation, optimization, quality score, conversion claim, template, or history record is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">AI Copy Studio is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen offered generation, improvement, analysis, translation, templates, and history mutations, including claims such as high-converting copy, high-open-rate subject lines, keyword optimization, completed analysis scores, and generated word counts. The service contract and evidence for those claims were not verified, so the interactive surface was removed rather than presenting fabricated output.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><MessageSquare aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Content-assistant readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  A production content assistant requires an authorized model gateway, explicit provider and version metadata, input and output validation, brand and factual safeguards, copyright and policy review, prompt-injection protection, privacy and retention controls, language-quality evaluation, transparent limits, rate and cost controls, and honest success, failure, timeout, and retry states. No such integration is available through this screen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Sparkles aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No copy claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No social post, ad, product, email, SEO, blog, press, tagline, or CTA content is generated or presented as ready to publish.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No performance claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No conversion, engagement, open-rate, SEO, persuasion, quality, word-count, or A/B performance metric is invented.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No publication claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No content is scheduled, translated, stored, exported, published, shared, or guaranteed accurate by this page.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/ai-brain"><Button size="lg" className="bg-primary hover:bg-primary/90">View AI Brain status</Button></Link>
              <Link href="/ai-control-center"><Button size="lg" variant="outline">View AI controls</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about content-assistant access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="copy-state-heading">
          <h2 id="copy-state-heading" className="mb-4 text-xl font-semibold">Current copy-studio evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {copyStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not enter passwords, access tokens, seed phrases, private keys, confidential business information, unpublished campaigns, or sensitive personal data here. AI-generated content requires independent factual, legal, accessibility, brand, and policy review before use.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Model access, templates, history, translation, publication, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.
            </p>
          </div>
        </Card>

        <div className="sr-only" aria-live="polite">AI Copy Studio is currently unavailable.</div>
        <Languages aria-hidden="true" className="hidden" />
      </main>
    </div>
  );
}
