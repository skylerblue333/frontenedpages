import { AlertTriangle, BookOpen, FileWarning, LockKeyhole, Search, Settings2, ShieldCheck, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const catalogStates = [
  { label: "Course catalog and publication records", value: "Unavailable", icon: BookOpen },
  { label: "Search, filters, and availability", value: "Not configured", icon: Search },
  { label: "Enrollment, ownership, and access rules", value: "Not verified", icon: Users },
  { label: "Course settings and content governance", value: "Disabled", icon: Settings2 },
];

export default function CourseCatalog() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Course Catalog"
        description="Course-catalog services are not connected in this deployment. No course, instructor, lesson count, duration, price, enrollment, availability, rating, or completion record is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Course Catalog is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified catalog contract was connected. Those controls were removed because the screen cannot establish that courses, instructors, content, availability, enrollment, or ownership exist or are persisted.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><BookOpen aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Catalog readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production course catalog requires verified content and instructor provenance, publication workflow, versioning, accessibility, search and filter semantics, pricing and entitlement rules, enrollment ownership, content access controls, ratings evidence, privacy, and clear loading, empty, error, and retry states. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><BookOpen aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No course claim</h3><p className="mt-1 text-sm text-muted-foreground">No course title, instructor, lesson count, duration, level, category, price, rating, student count, or availability is fabricated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Users aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No access claim</h3><p className="mt-1 text-sm text-muted-foreground">No enrollment, entitlement, payment, ownership, subscription, learner record, or content-access decision is created.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No quality claim</h3><p className="mt-1 text-sm text-muted-foreground">No instructor verification, accreditation, rating, outcome, certificate, or curriculum-quality claim is presented.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/skyschool"><Button size="lg" className="bg-primary hover:bg-primary/90">View SkySchool status</Button></Link><Link href="/learning-path"><Button size="lg" variant="outline">View learning-path status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about course access</Button></Link></div></div></Card>

        <section aria-labelledby="catalog-state-heading"><h2 id="catalog-state-heading" className="mb-4 text-xl font-semibold">Current catalog evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{catalogStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, payment details, confidential course materials, or sensitive personal information here. An unavailable catalog is not evidence of course availability, enrollment, payment, or access.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Courses, content, instructors, enrollment, payments, entitlements, certificates, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
      </main>
    </div>
  );
}
