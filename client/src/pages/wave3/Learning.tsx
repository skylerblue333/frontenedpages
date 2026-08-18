import { AlertTriangle, Award, BookOpen, FileWarning, LockKeyhole, Search, ShieldCheck, Users, WalletCards } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const learningStates = [
  { label: "Course catalog and lesson records", value: "Unavailable", icon: BookOpen },
  { label: "Enrollment and learner progress", value: "Not verified", icon: Users },
  { label: "Completion and certificate issuance", value: "Disabled", icon: Award },
  { label: "Pricing, entitlements, and reward accounting", value: "Not configured", icon: WalletCards },
];

export default function Learning() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Learning Hub"
        description="Wave 3 learning services are not connected in this deployment. No course, enrollment, progress, completion, certificate, learner record, price, entitlement, or reward is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Learning Hub is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen referenced an undefined authentication variable, unverified course, enrollment, and certificate procedures, and any-typed records with enrollment and certificate mutations. Those calls were removed because no verified Wave 3 learning contract, authorization, persistence, or credential workflow was established.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><BookOpen aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Learning integration readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production learning hub requires typed course and lesson contracts, authenticated learner ownership, enrollment and entitlement rules, progress persistence, assessment and certificate semantics, content provenance, accessibility, privacy, retention, rate and cost controls, and clear loading, empty, error, success, and retry states. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><BookOpen aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No course claim</h3><p className="mt-1 text-sm text-muted-foreground">No title, description, lesson count, content, instructor, enrollment total, or course availability is fabricated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No learner claim</h3><p className="mt-1 text-sm text-muted-foreground">No learner identity, course ownership, progress percentage, completion, grade, certificate, or personal record is read or stored.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><WalletCards aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No transaction claim</h3><p className="mt-1 text-sm text-muted-foreground">No enrollment, payment, entitlement, issuance, reward, wallet balance, or blockchain transaction is initiated.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/skyschool"><Button size="lg" className="bg-primary hover:bg-primary/90">View SkySchool status</Button></Link><Link href="/school"><Button size="lg" variant="outline">View school status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about learning access</Button></Link></div></div></Card>

        <section aria-labelledby="wave3-learning-state-heading"><h2 id="wave3-learning-state-heading" className="mb-4 text-xl font-semibold">Current learning evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{learningStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, payment details, confidential course materials, learner records, or sensitive personal information here. An unavailable learning hub is not evidence of enrollment, completion, certificate issuance, or reward settlement.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Courses, learners, content, enrollment, progress, certificates, payments, rewards, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Search aria-hidden="true" /></div>
      </main>
    </div>
  );
}
