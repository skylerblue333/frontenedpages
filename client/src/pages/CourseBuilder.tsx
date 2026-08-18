import { AlertTriangle, BookOpen, FileWarning, GitBranch, LockKeyhole, PenLine, Search, ShieldCheck, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const authoringStates = [
  { label: "Course authoring and draft records", value: "Unavailable", icon: PenLine },
  { label: "Lessons, assessments, and content versions", value: "Not configured", icon: BookOpen },
  { label: "Publication, learner access, and pricing", value: "Not verified", icon: Users },
  { label: "Review, governance, and revision history", value: "Disabled", icon: GitBranch },
];

export default function CourseBuilder() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Course Builder"
        description="Course-authoring services are not connected in this deployment. No draft, lesson, assessment, publication, learner access, price, or revision is being created or reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Course Builder is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified authoring contract was connected. Those controls were removed because the screen cannot establish that course drafts, lessons, assessments, publications, pricing, or learner access exist or are persisted.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><PenLine aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Authoring readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production course-authoring system requires authenticated author and organization ownership, draft isolation, content and media validation, versioning, accessibility, assessment integrity, review and approval workflow, publication rollback, entitlement and pricing rules, learner privacy, and clear save, failure, conflict, and retry states. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><BookOpen aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No content claim</h3><p className="mt-1 text-sm text-muted-foreground">No course, lesson, quiz, media asset, instructor, syllabus, assessment, duration, or curriculum is created or displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No publication claim</h3><p className="mt-1 text-sm text-muted-foreground">No review, approval, publication, revision, learner access, price, subscription, enrollment, or entitlement is changed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Users aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No ownership claim</h3><p className="mt-1 text-sm text-muted-foreground">No author, school, organization, learner, instructor, or private content record is read or stored by this page.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/school"><Button size="lg" className="bg-primary hover:bg-primary/90">View school status</Button></Link><Link href="/course-catalog"><Button size="lg" variant="outline">View catalog status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about authoring access</Button></Link></div></div></Card>

        <section aria-labelledby="authoring-state-heading"><h2 id="authoring-state-heading" className="mb-4 text-xl font-semibold">Current authoring evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{authoringStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, payment details, confidential course materials, learner records, or sensitive personal information here. An unavailable authoring page is not evidence of a saved draft, publication, enrollment, or content ownership.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Authors, courses, content, media, assessments, review, publication, payments, entitlements, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
      </main>
    </div>
  );
}
