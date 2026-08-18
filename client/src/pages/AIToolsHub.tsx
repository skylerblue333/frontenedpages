import { AlertTriangle, Bot, Code2, Eye, FileWarning, Globe, LockKeyhole, MessageCircle, Search, ShieldCheck, Sparkles, TrendingUp, Wand2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const toolStates = [
  { label: "AI Code Studio", value: "Unavailable", description: "No verified code model, execution sandbox, compiler, repository permission, or generated output.", icon: Code2 },
  { label: "AI Copy Studio", value: "Unavailable", description: "No verified content model, translation, quality evaluation, history, or publication workflow.", icon: Wand2 },
  { label: "HopeAI and AI Brain", value: "Unavailable", description: "No verified chat model, history, emotional inference, model fleet, or performance evidence.", icon: Bot },
  { label: "Market, moderation, search, and media tools", value: "Not configured", description: "No verified market data, moderation model, search source, authenticity detector, or file analysis service.", icon: ShieldCheck },
];

export default function AIToolsHub() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="AI Tools Hub"
        description="AI tools are not connected in this deployment. No tool is being reported as live, beta, production-ready, secure, accurate, or capable of taking an external action."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">AI Tools Hub is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous catalog labeled unsupported tools as LIVE, BETA, or GREY and advertised code generation, copy creation, personal AI support, multi-model switching, market analysis, 44 agents, OSINT, deepfake detection, cipher tools, social-engineering simulation, network recon, and moderation. Those labels and tool-opening links were removed because model contracts, data sources, authorization, safety controls, and evidence were not verified.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Sparkles aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Tooling readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  A production AI-tools directory requires an owned inventory, verified provider and model versions, capability and data-source evidence, authorization boundaries, safe file handling, tool permission scopes, abuse controls, evaluation results, dependency and license review, rate and cost controls, monitoring, and explicit availability, failure, and retirement states. A catalog entry is not proof that a tool exists or works.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {toolStates.map(({ label, value, description, icon: Icon }) => (
                <Card key={label} className="border border-border/50 bg-background/80 p-5">
                  <div className="flex items-start gap-3"><Icon aria-hidden="true" className="mt-0.5 h-6 w-6 shrink-0 text-primary" /><div><h3 className="font-semibold">{label}</h3><p className="mt-1 text-xs font-medium text-muted-foreground">{value}</p><p className="mt-2 text-sm text-muted-foreground">{description}</p></div></div>
                </Card>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Search aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No discovery claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No tool count, catalog coverage, live status, beta status, integration, or external link is treated as proof of availability.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No safety claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No security, privacy, ethical-use, moderation, authenticity, OSINT, cryptographic, or network-scanning guarantee is represented.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Globe aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No data claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No market feed, search result, media analysis, user data, file, external API, or real-time information is retrieved by this page.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/ai-brain"><Button size="lg" className="bg-primary hover:bg-primary/90">View AI Brain status</Button></Link>
              <Link href="/ai-control-center"><Button size="lg" variant="outline">View AI controls</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about tool access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="tool-state-heading">
          <h2 id="tool-state-heading" className="mb-4 text-xl font-semibold">Current tool evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {toolStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential files, or sensitive personal information here. Do not use an unverified tool for financial, security, legal, medical, or production decisions.</p></div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Model access, files, search, code execution, moderation, market data, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div>
        </Card>

        <div className="sr-only"><MessageCircle aria-hidden="true" /><Eye aria-hidden="true" /><TrendingUp aria-hidden="true" /></div>
      </main>
    </div>
  );
}
