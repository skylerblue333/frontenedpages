import { AlertTriangle, CheckSquare, FileWarning, GitBranch, LockKeyhole, Search, ShieldCheck, Target, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const quizStates = [
  { label: "Quiz authoring and question records", value: "Unavailable", icon: CheckSquare },
  { label: "Attempts, grading, and answer integrity", value: "Not configured", icon: Target },
  { label: "Course association and learner access", value: "Not verified", icon: Users },
  { label: "Versioning, review, and result retention", value: "Disabled", icon: GitBranch },
];

export default function QuizBuilder() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Quiz Builder"
        description="Assessment services are not connected in this deployment. No quiz, question, attempt, answer, grade, score, course association, or learner result is being created or reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Quiz Builder is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified assessment contract was connected. Those controls were removed because the screen cannot establish that quizzes, questions, answers, grading, attempts, or learner results exist or are persisted.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><CheckSquare aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Assessment readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production assessment system requires author and learner authorization, question provenance, answer secrecy, deterministic grading rules, attempt limits, accommodation support, anti-cheating controls, versioned course relationships, review workflow, result integrity, privacy, retention, and clear save, submit, grade, failure, and retry states. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><CheckSquare aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No quiz claim</h3><p className="mt-1 text-sm text-muted-foreground">No quiz, question, answer, option, time limit, difficulty, score, grade, or completion record is created or displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No grading claim</h3><p className="mt-1 text-sm text-muted-foreground">No attempt, answer submission, correctness decision, assessment result, certificate, or learner ranking is computed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Users aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No access claim</h3><p className="mt-1 text-sm text-muted-foreground">No author, course, learner, instructor, question bank, or private assessment record is read or stored by this page.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/course-builder"><Button size="lg" className="bg-primary hover:bg-primary/90">View authoring status</Button></Link><Link href="/school"><Button size="lg" variant="outline">View school status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about assessment access</Button></Link></div></div></Card>

        <section aria-labelledby="quiz-state-heading"><h2 id="quiz-state-heading" className="mb-4 text-xl font-semibold">Current assessment evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{quizStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, payment details, answer keys, confidential course materials, learner records, or sensitive personal information here. An unavailable assessment page is not evidence of a grade, score, attempt, completion, or credential.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Authors, question banks, courses, learners, attempts, grading, certificates, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
      </main>
    </div>
  );
}
