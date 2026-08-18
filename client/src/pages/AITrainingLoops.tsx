import { AlertTriangle, Activity, Brain, Database, FileWarning, GitBranch, LockKeyhole, RefreshCw, ShieldCheck, TrendingUp, WalletCards } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const trainingStates = [
  { label: "Model inventory and training runs", value: "Unavailable", icon: Brain },
  { label: "Datasets, labels, and evaluation metrics", value: "Not measured", icon: Database },
  { label: "Continuous pipeline and deployment status", value: "Not configured", icon: GitBranch },
  { label: "Data-consent, retention, and reward economy", value: "Disabled", icon: WalletCards },
];

export default function AITrainingLoops() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="AI Training Loops"
        description="AI training and feedback services are not connected in this deployment. No model, dataset, training run, accuracy, deployment, user contribution, token reward, or continuous-learning state is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">AI Training Loops are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen displayed five active training loops with fabricated accuracy, sample counts, training times, improvement trends, aggregate samples, average accuracy, and cycle counts. It also promised SKY rewards for interactions, ratings, flags, and transactions and claimed that every interaction improves the system through an active collect-label-train-validate-deploy pipeline. No such evidence or consent/reward contract was verified, so those claims were removed.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><RefreshCw aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Training-system readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production model training requires dataset provenance, consent and lawful-use controls, PII minimization, retention and deletion, labeling quality, reproducible runs, evaluation sets, drift monitoring, model/version lineage, rollback, deployment approvals, security review, incident response, and truthful metrics. A user reward economy also requires clear terms, eligibility, accounting, anti-fraud controls, and verified settlement. None of those controls are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Activity aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No metric claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No accuracy, samples, trend, training time, cycle count, throughput, drift, quality, or deployment metric is invented.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Database aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No data claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No user interaction, label, dataset, feedback, evaluation result, model update, or training run is collected or reported.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <WalletCards aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No reward claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No SKY reward, balance, eligibility, contribution credit, verified transaction, or settlement is promised or displayed.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/ai-governance"><Button size="lg" className="bg-primary hover:bg-primary/90">View AI governance status</Button></Link>
              <Link href="/ai-brain"><Button size="lg" variant="outline">View AI Brain status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about training access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="training-state-heading">
          <h2 id="training-state-heading" className="mb-4 text-xl font-semibold">Current training evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {trainingStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential files, health details, or sensitive personal information here. Interaction data must not be used for training or tied to rewards without clear consent, terms, controls, and verified accounting.</p></div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3"><ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Model registry, datasets, labeling, evaluation, deployment, consent, rewards, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div>
        </Card>

        <div className="sr-only"><TrendingUp aria-hidden="true" /><LockKeyhole aria-hidden="true" /></div>
      </main>
    </div>
  );
}
