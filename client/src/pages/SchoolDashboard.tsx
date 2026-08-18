import { AlertTriangle, Award, BookOpen, FileWarning, GraduationCap, LockKeyhole, ShieldCheck, Target } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const dashboardStates = [
  { label: "Learner account and enrolled courses", value: "Unavailable", icon: BookOpen },
  { label: "Progress, lessons, grades, and XP", value: "Not verified", icon: Target },
  { label: "Certificates and on-chain credentials", value: "Not configured", icon: Award },
  { label: "Course catalog and learner records", value: "Disabled", icon: GraduationCap },
];

export default function SchoolDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="School Dashboard"
        description="Learner-dashboard services are not connected in this deployment. No enrollment, course progress, lesson completion, grade, XP, certificate, credential, or learner statistic is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">School Dashboard is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen displayed fabricated course progress, learner totals, XP, certificates, course names, and “Minted on-chain” credentials without verified learner, course, assessment, or blockchain records. Those claims and links were removed rather than presenting a false learning history.</p></div></div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><GraduationCap aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Learner-dashboard readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production education dashboard requires authenticated learner ownership, course and lesson records, progress persistence, assessment and grade integrity, instructor/content provenance, accessibility, certificate issuance policy, on-chain credential verification when applicable, privacy and retention controls, and honest empty, loading, error, and retry states. None of those controls are available here.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><BookOpen aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No progress claim</h3><p className="mt-1 text-sm text-muted-foreground">No enrolled course, lesson progress, completion percentage, streak, grade, or learner total is fabricated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Award aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No credential claim</h3><p className="mt-1 text-sm text-muted-foreground">No certificate, badge, XP, credential, mint, blockchain transaction, or on-chain ownership is issued or displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No record claim</h3><p className="mt-1 text-sm text-muted-foreground">No learner profile, course record, assessment, instructor record, or private academic data is read or stored by this page.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/skyschool"><Button size="lg" className="bg-primary hover:bg-primary/90">View SkySchool status</Button></Link><Link href="/school"><Button size="lg" variant="outline">View school status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about learner access</Button></Link></div></div></Card>

        <section aria-labelledby="school-state-heading"><h2 id="school-state-heading" className="mb-4 text-xl font-semibold">Current dashboard evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{dashboardStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, health details, confidential student records, or sensitive personal information here. An unavailable dashboard is not evidence of enrollment, progress, grading, certificate issuance, or blockchain minting.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Courses, learner records, progress, assessments, certificates, credentials, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
      </main>
    </div>
  );
}
