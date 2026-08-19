import { AlertTriangle, BookOpenCheck, CalendarClock, ClipboardList, FileWarning, GraduationCap, LockKeyhole, Search, ShieldCheck, Upload } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const assignmentStates = [
  { label: "Courses, assignments, learners, and ownership", value: "Unavailable", icon: ClipboardList },
  { label: "Deadlines, submissions, grading, and feedback", value: "Not configured", icon: CalendarClock },
  { label: "Progress, completion, and certification", value: "Disabled", icon: GraduationCap },
  { label: "Files, permissions, retention, and audit", value: "Not available", icon: ShieldCheck },
];

export default function AssignmentTracker() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Assignment Tracker"
        description="Assignment-tracking services are not connected in this deployment. No course, assignment, learner, deadline, submission, grade, feedback, progress, completion, certificate, file, or audit result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Assignment Tracker is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified course roster, assignment schema, deadline policy, submission storage, grading workflow, feedback model, certification issuer, file provider, or audit contract was connected. Those controls were removed because the screen cannot establish that an assignment exists, is due, was submitted, or was graded.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><BookOpenCheck aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Assignment-workflow readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production assignment tracker requires authoritative course and learner identity, versioned assignment definitions, timezone-aware deadlines, submission immutability, file validation, grading and feedback permissions, late-policy semantics, progress aggregation, academic privacy, retention and deletion, credential issuance, notifications, audit, and clear draft, submitted, graded, returned, failed, and retry states. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><ClipboardList aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No assignment claim</h3><p className="mt-1 text-sm text-muted-foreground">No course, assignment, learner, due date, status, rubric, score, feedback, or completion record is displayed or changed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Upload aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No submission claim</h3><p className="mt-1 text-sm text-muted-foreground">No file, answer, upload, timestamp, late state, grade, return, notification, or instructor action is created or delivered.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><GraduationCap aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No credential claim</h3><p className="mt-1 text-sm text-muted-foreground">No progress, completion, certificate, badge, transcript, ranking, reward, or learning outcome is calculated or issued.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/school-dashboard"><Button size="lg" className="bg-primary hover:bg-primary/90">View education status</Button></Link><Link href="/student-progress"><Button size="lg" variant="outline">View progress status</Button></Link><Link href="/privacy"><Button size="lg" variant="outline">View privacy status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about assignments</Button></Link></div></div></Card>

        <section aria-labelledby="assignment-state-heading"><h2 id="assignment-state-heading" className="mb-4 text-xl font-semibold">Current assignment evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{assignmentStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential learner records, graded work, or sensitive personal information here. An unavailable assignment page is not evidence that work was assigned, submitted, graded, retained, or certified.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Courses, identity, files, grading, credentials, notifications, privacy, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Search aria-hidden="true" /></div>
      </main>
    </div>
  );
}
