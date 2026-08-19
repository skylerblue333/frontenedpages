import { AlertTriangle, BrainCircuit, FileWarning, LockKeyhole, ShieldCheck, UsersRound, Workflow } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const predictionStates = [
  { label: "Customer records, consent, and identity", value: "Unavailable", icon: UsersRound },
  { label: "Feature definitions, labels, and model version", value: "Not configured", icon: BrainCircuit },
  { label: "Risk scores, confidence, and recommendations", value: "Not calculated", icon: Workflow },
  { label: "Permissions, privacy, explainability, and audit", value: "Not available", icon: ShieldCheck },
];

export default function ChurnPrediction() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader icon={BrainCircuit} title="Churn Prediction" subtitle="Predictive churn services are not connected in this deployment. No customer record, risk score, probability, model output, recommendation, or retention result is being reported or created." />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Churn prediction is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified customer-data source, consent boundary, outcome labels, feature contract, model registry, calibration policy, explainability, retention workflow, or audit contract was connected. Those controls were removed because this route cannot establish that a prediction is valid, current, fair, or appropriate to act on.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><BrainCircuit aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Predictive-analytics readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production churn model requires lawful and consented data collection, defined population and outcome windows, feature provenance, model versioning, calibration, bias and drift monitoring, confidence semantics, explainability, human review, intervention authorization, privacy, retention, and audit. None of those controls are available through this route. This page does not provide a customer-risk assessment or business recommendation.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><UsersRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No customer claim</h3><p className="mt-1 text-sm text-muted-foreground">No person, account, segment, activity, subscription, consent choice, identity graph, or customer statistic is displayed or inferred.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><BrainCircuit aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No model claim</h3><p className="mt-1 text-sm text-muted-foreground">No training set, feature, model version, probability, score, confidence interval, explanation, validation, or drift result is calculated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No intervention claim</h3><p className="mt-1 text-sm text-muted-foreground">No retention recommendation, message, offer, suppression, notification, workflow, external action, or audit event is created or sent.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/analytics"><Button size="lg" className="bg-primary hover:bg-primary/90">View analytics status</Button></Link><Link href="/privacy"><Button size="lg" variant="outline">View privacy status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about data access</Button></Link></div></div></Card>

        <section aria-labelledby="prediction-state-heading"><h2 id="prediction-state-heading" className="mb-4 text-xl font-semibold">Current prediction evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{predictionStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, customer identifiers, health information, financial information, or sensitive personal information here. An unavailable churn page is not evidence that a customer is at risk, will leave, or should receive an intervention.</p></div></Card>
      </main>
    </div>
  );
}
