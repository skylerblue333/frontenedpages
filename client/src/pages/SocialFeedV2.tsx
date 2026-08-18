import { AlertTriangle, BarChart3, FileText, Heart, LockKeyhole, MessageCircle, Search, Share2, ShieldCheck, TrendingUp, UserRound, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const feedStates = [
  { label: "Posts, authors, and media", value: "Unavailable", icon: FileText },
  { label: "Likes, comments, shares, and saves", value: "Not verified", icon: Heart },
  { label: "Trends, ranking, and creator suggestions", value: "Not reported", icon: TrendingUp },
  { label: "Create, follow, search, and moderation actions", value: "Disabled", icon: UsersRound },
];

export default function SocialFeedV2() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Social Feed"
        description="Social-feed services are not connected in this deployment. No post, author, verification badge, media item, social count, trend, recommendation, or feed mutation is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Social feed is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen contained static posts, creator identities, verification badges, media, timestamps, likes, comments, shares, trends, post volumes, suggested creators, follower counts, post creation, like, bookmark, comment, share, and follow controls. The registered social and feed routers are generic, so those records, counts, identities, and mutations were not verified and have been removed.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><UsersRound aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Social-data readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production social features require authenticated authorship, post and media ownership, content moderation, privacy and audience controls, verified identity semantics, immutable interaction ledgers, anti-abuse and rate-limit controls, feed ranking methodology, trend freshness, notification integration, search authorization, deletion and retention, reporting and appeals, audit evidence, and reliable mutation and failure states. None of those controls are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileText aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No post claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No post, author, username, verification, media, timestamp, ownership, visibility, or content record is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Heart aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No interaction claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No like, comment, share, bookmark, reaction, follower, or social-count result is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No ranking claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No trend, post volume, recommendation, creator ranking, reach, or engagement result is simulated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/profile"><Button size="lg" className="bg-primary hover:bg-primary/90">View profile status</Button></Link>
              <Link href="/notifications-hub"><Button size="lg" variant="outline">View notification status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about social access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="feed-state-heading">
          <h2 id="feed-state-heading" className="mb-4 text-xl font-semibold">Current social-feed evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {feedStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not enter private posts, personal data, access tokens, wallet credentials, seed phrases, or private keys here. An unavailable feed state is not proof that a post, identity, interaction, trend, or follow relationship exists.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Search, ranking, moderation, notifications, profile data, and social-graph mutations remain separate integrations. This screen does not replace any of them.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
