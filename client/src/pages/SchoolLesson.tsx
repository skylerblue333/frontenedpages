import { AlertTriangle, BookOpen, FileWarning, LockKeyhole, MessageSquare, Play, ShieldCheck, Video } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const lessonStates = [
  { label: "Lesson content and video playback", value: "Unavailable", icon: Video },
  { label: "Progress, completion, grading, and XP", value: "Not measured", icon: ShieldCheck },
  { label: "Notes, resources, downloads, and bookmarks", value: "Not configured", icon: BookOpen },
  { label: "Discussion, comments, and reactions", value: "Disabled", icon: MessageSquare },
];

export default function SchoolLesson() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="School Lesson"
        description="Lesson services are not connected in this deployment. No lesson content, video, progress, completion, grade, XP, note, resource, comment, or reaction is being reported or stored."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Lesson is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous route hard-coded a course outline with completed lessons and progress, simulated video playback, XP rewards, account-saved notes, downloadable resources, discussion posts, likes, comments, and completion actions. Those claims and mutations were removed because no verified lesson, learner, media, storage, community, grading, or reward contracts were established.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><BookOpen aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Lesson-system readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production lesson experience requires verified course and learner ownership, authorized content delivery, media licensing and availability, progress event persistence, assessment rules, notes and file storage, discussion moderation, privacy and retention, accessibility, and clear playback, save, completion, error, and retry states. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Video aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No content claim</h3><p className="mt-1 text-sm text-muted-foreground">No lesson, video, duration, transcript, file, download, slide, code example, quiz, or media availability is fabricated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No progress claim</h3><p className="mt-1 text-sm text-muted-foreground">No course percentage, completed lesson, timestamp, grade, XP, reward, certificate, or learner result is created.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><MessageSquare aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No community claim</h3><p className="mt-1 text-sm text-muted-foreground">No discussion post, user, comment, like, bookmark, note, reaction, moderation result, or stored message is displayed or submitted.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/school/course/blockchain-fundamentals"><Button size="lg" className="bg-primary hover:bg-primary/90">View course status</Button></Link><Link href="/skyschool"><Button size="lg" variant="outline">View SkySchool status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about lesson access</Button></Link></div></div></Card>

        <section aria-labelledby="lesson-state-heading"><h2 id="lesson-state-heading" className="mb-4 text-xl font-semibold">Current lesson evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{lessonStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, payment details, confidential course materials, learner records, private notes, or sensitive personal information here. An unavailable lesson is not evidence of access, progress, completion, grading, storage, or credential issuance.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Courses, media, learners, progress, notes, resources, discussions, moderation, certificates, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
      </main>
    </div>
  );
}
