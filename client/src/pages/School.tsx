import { AlertTriangle, BookOpen, FileWarning, GraduationCap, LockKeyhole, Search, ShieldCheck, Target, Users, WalletCards } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const schoolStates = [
  { label: "Course catalog and learning tracks", value: "Unavailable", icon: BookOpen },
  { label: "Student, instructor, rating, and review data", value: "Not verified", icon: Users },
  { label: "Pricing, enrollment, access, and rewards", value: "Disabled", icon: WalletCards },
  { label: "Progress, certificates, and credentials", value: "Not configured", icon: GraduationCap },
];

export default function School() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Sky School"
        description="School services are not connected in this deployment. No course catalog, student count, instructor, rating, price, enrollment, learning track, progress, certificate, or SKY444 reward is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Sky School is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous page rendered a hard-coded course marketplace with named instructors, student and review counts, ratings, prices, popularity badges, “Earn While You Learn” and on-chain certificate claims, SKY444 totals, learning tracks, and enrollment prompts. Those claims and route links were removed because no verified catalog, learner, payment, reward, credential, or content contracts were established.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><GraduationCap aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">School readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production school requires verified course and instructor provenance, curriculum versioning, accessibility, search semantics, learner ownership, progress persistence, assessment and certificate rules, payment and entitlement controls, reward accounting, privacy, moderation, and clear loading, empty, error, and retry states. None of those controls are available through this page.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><BookOpen aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No catalog claim</h3><p className="mt-1 text-sm text-muted-foreground">No course, track, lesson, instructor, level, duration, category, rating, review, student count, or availability is fabricated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><WalletCards aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No commerce claim</h3><p className="mt-1 text-sm text-muted-foreground">No price, free offer, enrollment, payment, entitlement, refund, SKY444 reward, donation, or wallet transaction is initiated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No credential claim</h3><p className="mt-1 text-sm text-muted-foreground">No progress, certificate, badge, credential, on-chain record, learner outcome, or recommendation is issued or displayed.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/skyschool"><Button size="lg" className="bg-primary hover:bg-primary/90">View SkySchool status</Button></Link><Link href="/course-catalog"><Button size="lg" variant="outline">View catalog status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about school access</Button></Link></div></div></Card>

        <section aria-labelledby="school-state-heading"><h2 id="school-state-heading" className="mb-4 text-xl font-semibold">Current school evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{schoolStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, payment details, confidential course materials, learner records, or sensitive personal information here. An unavailable school page is not evidence of course availability, enrollment, payment, progress, certificate issuance, or reward settlement.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Courses, content, instructors, learners, payments, rewards, certificates, wallets, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Search aria-hidden="true" /><Target aria-hidden="true" /></div>
      </main>
    </div>
  );
}
