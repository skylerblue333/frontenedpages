import { AlertTriangle, BookOpenCheck, FileWarning, GraduationCap, LockKeyhole, ShieldCheck, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const classroomStates = [
  { label: "Educators, students, classes, and enrollment", value: "Unavailable", icon: UsersRound },
  { label: "Assignments, attendance, grades, and progress", value: "Not configured", icon: BookOpenCheck },
  { label: "Course access, credentials, and communications", value: "Disabled", icon: GraduationCap },
  { label: "Child privacy, permissions, retention, and audit", value: "Not available", icon: ShieldCheck },
];

export default function ClassroomManagement() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader icon={GraduationCap} title="Classroom Management" subtitle="Classroom-management services are not connected in this deployment. No educator, student, class, enrollment, attendance, grade, assignment, progress, credential, or audit result is being reported or created." />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Classroom management is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified educator identity, roster, classroom, enrollment, assignment, attendance, gradebook, learning-progress, credential, communication, child-privacy, retention, or audit contract was connected. Those controls were removed because this route cannot establish that an education record exists or that an action is authorized.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><GraduationCap aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Classroom readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production classroom management requires verified educator and learner roles, school or organization authority, enrollment and consent, course and assignment schemas, attendance and grading semantics, accessibility, messaging controls, child and student privacy, retention, export, safeguarding, and auditable mutations. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><UsersRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No roster claim</h3><p className="mt-1 text-sm text-muted-foreground">No educator, learner, class, enrollment, school, identity, guardian, role, or membership record is displayed or changed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><BookOpenCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No learning claim</h3><p className="mt-1 text-sm text-muted-foreground">No assignment, attendance, grade, assessment, progress, completion, certificate, ranking, or recommendation is calculated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No student-data action</h3><p className="mt-1 text-sm text-muted-foreground">No message, invitation, notification, export, enrollment, grade change, access grant, or audit event is created or sent.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/school"><Button size="lg" className="bg-primary hover:bg-primary/90">View school status</Button></Link><Link href="/privacy"><Button size="lg" variant="outline">View privacy status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about classroom access</Button></Link></div></div></Card>

        <section aria-labelledby="classroom-state-heading"><h2 id="classroom-state-heading" className="mb-4 text-xl font-semibold">Current classroom evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{classroomStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, student identifiers, child data, grades, health information, guardian information, or sensitive personal information here. An unavailable classroom page is not evidence that a student, class, assignment, attendance record, grade, credential, or communication exists.</p></div></Card>
      </main>
    </div>
  );
}
