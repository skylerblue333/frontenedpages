import { AlertTriangle, Brain, FileWarning, LockKeyhole, Settings2, ShieldCheck, SlidersHorizontal, Target, UserRound } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const personalizationStates = [
  { label: "Preference, behavior, and consent signals", value: "Unavailable", icon: UserRound },
  { label: "Models, training, evaluations, and accuracy", value: "Not configured", icon: Brain },
  { label: "Feed ranking and recommendation outcomes", value: "Not measured", icon: Target },
  { label: "Preference storage, deletion, and privacy controls", value: "Disabled", icon: ShieldCheck },
];

export default function AdaptivePersonalization() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Adaptive Personalization"
        description="Personalization services are not connected in this deployment. No behavioral signal, preference, model, recommendation, accuracy, relevance lift, profile, or saved setting is being collected or reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Adaptive personalization is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous page presented a live-learning badge, fabricated signal weights, collected-signal and accuracy totals, relevance improvement, model training timestamps, model accuracy percentages, and a Save Preferences action without a verified consent, model, storage, evaluation, or recommendation contract. Those claims and controls were removed because the screen cannot safely infer or persist user behavior.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Brain aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Personalization readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production personalization system requires explicit consent and purpose limitation, transparent signal definitions, user controls, data minimization, retention and deletion, profile access boundaries, model and evaluation provenance, bias and safety review, recommendation explanations, opt-out behavior, security, and clear update, failure, stale-data, and retry states. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><UserRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No signal claim</h3><p className="mt-1 text-sm text-muted-foreground">No scroll, click, follow, like, tip, time, topic, creator, session, behavioral, or inferred-preference data is collected or displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Target aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No model claim</h3><p className="mt-1 text-sm text-muted-foreground">No ranker, recommender, matcher, classifier, predictor, training run, accuracy score, or relevance improvement is presented.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Settings2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No mutation claim</h3><p className="mt-1 text-sm text-muted-foreground">No preference slider, profile, feed setting, recommendation, model state, or personalization record is saved or changed.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/ai-governance"><Button size="lg" className="bg-primary hover:bg-primary/90">View AI governance status</Button></Link><Link href="/privacy"><Button size="lg" variant="outline">View privacy status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about personalization</Button></Link></div></div></Card>

        <section aria-labelledby="personalization-state-heading"><h2 id="personalization-state-heading" className="mb-4 text-xl font-semibold">Current personalization evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{personalizationStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, sensitive profile data, confidential prompts, or personal information here. An unavailable personalization page is not evidence that behavior is collected, a model is learning, or a recommendation was generated.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Profiles, signals, consent, models, recommendations, storage, privacy, governance, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><SlidersHorizontal aria-hidden="true" /></div>
      </main>
    </div>
  );
}
