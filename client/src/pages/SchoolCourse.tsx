import { AlertTriangle, BookOpen, FileWarning, FileText, LockKeyhole, ShieldCheck, Star, Users, WalletCards } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const courseStates = [
  { label: "Course identity, curriculum, and lesson records", value: "Unavailable", icon: BookOpen },
  { label: "Instructor, ratings, reviews, and student counts", value: "Not verified", icon: Users },
  { label: "Pricing, enrollment, entitlement, and access", value: "Disabled", icon: WalletCards },
  { label: "Progress, certificates, and completion rewards", value: "Not configured", icon: ShieldCheck },
];

export default function SchoolCourse() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="School Course"
        description="Course-detail services are not connected in this deployment. No course, instructor, curriculum, review, price, enrollment, lesson access, certificate, or reward is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Course detail is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous route rendered hard-coded courses, instructor biographies, ratings, review counts, student counts, prices in SKY444, lesson availability, free and locked states, a money-back guarantee, enrollment actions, certificate promises, rewards, reviews, and lesson links. Those claims and actions were removed because no verified course, payment, learner, content, credential, or review contracts were established.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><BookOpen aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Course-detail readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production course detail requires a verified course identifier, versioned curriculum, content provenance, instructor identity, review authenticity, pricing currency and tax rules, payment and entitlement controls, preview and access enforcement, progress persistence, certificate policy, refund semantics, privacy, and clear success, failure, loading, empty, and retry states. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><FileText aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No content claim</h3><p className="mt-1 text-sm text-muted-foreground">No title, syllabus, lesson count, duration, video, resource, quiz, preview, level, skill, or curriculum is fabricated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Star aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No quality claim</h3><p className="mt-1 text-sm text-muted-foreground">No instructor biography, rating, review, student count, accreditation, outcome, or testimonial is presented.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><WalletCards aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No commerce claim</h3><p className="mt-1 text-sm text-muted-foreground">No price, free offer, payment, refund promise, enrollment, access entitlement, certificate, reward, or wallet transaction is initiated.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/course-catalog"><Button size="lg" className="bg-primary hover:bg-primary/90">View catalog status</Button></Link><Link href="/school"><Button size="lg" variant="outline">View school status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about course access</Button></Link></div></div></Card>

        <section aria-labelledby="course-state-heading"><h2 id="course-state-heading" className="mb-4 text-xl font-semibold">Current course evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{courseStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, payment details, confidential course materials, learner records, or sensitive personal information here. An unavailable course page is not evidence of content access, enrollment, payment, refund eligibility, completion, or certification.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Courses, instructors, content, reviews, payments, entitlements, learners, certificates, wallets, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
      </main>
    </div>
  );
}
