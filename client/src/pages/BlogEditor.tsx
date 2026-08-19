import { AlertTriangle, BookOpenText, FileWarning, ImagePlus, LockKeyhole, PenLine, Search, ShieldCheck, UserRound, Workflow } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const editorialStates = [
  { label: "Drafts, posts, authors, and ownership", value: "Unavailable", icon: PenLine },
  { label: "Rich text, media, versions, and autosave", value: "Not configured", icon: BookOpenText },
  { label: "Review, moderation, scheduling, and publishing", value: "Disabled", icon: Workflow },
  { label: "Permissions, privacy, retention, and audit", value: "Not available", icon: ShieldCheck },
];

export default function BlogEditor() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Blog Editor"
        description="Editorial services are not connected in this deployment. No draft, post, author, content body, media asset, version, autosave, review, moderation, schedule, publication, or audit result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Blog Editor is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified content registry, author identity, editor state, media storage, autosave, version history, moderation workflow, scheduler, publication service, or audit contract was connected. Those controls were removed because the screen cannot establish that content exists, is owned by an author, has been reviewed, or is published.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><BookOpenText aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Editorial-workflow readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production editorial tooling requires authenticated authorship, draft and version semantics, safe rich-text handling, media validation, autosave and conflict resolution, review and moderation permissions, scheduling and publication state, accessibility checks, privacy and rights controls, retention, audit, and clear draft, review, scheduled, published, rejected, failed, and retry states. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><PenLine aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No draft claim</h3><p className="mt-1 text-sm text-muted-foreground">No article, title, body, author, editor, category, tag, version, autosave, or content status is displayed or changed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ImagePlus aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No media claim</h3><p className="mt-1 text-sm text-muted-foreground">No image, video, audio, upload, crop, derivative, license, alt text, caption, or media reference is created or delivered.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No publication claim</h3><p className="mt-1 text-sm text-muted-foreground">No review, moderation decision, schedule, publication, notification, engagement, social share, or public URL is generated.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/blog-publisher"><Button size="lg" className="bg-primary hover:bg-primary/90">View publishing status</Button></Link><Link href="/content-vault"><Button size="lg" variant="outline">View content status</Button></Link><Link href="/media-gallery"><Button size="lg" variant="outline">View media status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about editorial tools</Button></Link></div></div></Card>

        <section aria-labelledby="blog-editor-state-heading"><h2 id="blog-editor-state-heading" className="mb-4 text-xl font-semibold">Current editorial evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{editorialStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential drafts, unreleased media, proprietary editorial content, or sensitive personal information here. An unavailable editor is not evidence that content was saved, reviewed, published, licensed, or delivered.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Content, identity, media, moderation, publishing, privacy, permissions, notifications, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Search aria-hidden="true" /><UserRound aria-hidden="true" /></div>
      </main>
    </div>
  );
}
