import { AlertTriangle, BarChart3, Bot, FileText, Heart, LockKeyhole, MessageCircle, ShieldCheck, TrendingUp, UserRound, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const socialStates = [
  { label: "Feed posts, creators, and media", value: "Unavailable", icon: FileText },
  { label: "Likes, comments, reposts, and follows", value: "Not verified", icon: Heart },
  { label: "Trending tags and user statistics", value: "Not reported", icon: TrendingUp },
  { label: "Publishing, recommendations, and AI curation", value: "Disabled", icon: Bot },
];

export default function SocialMedia() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Social Media"
        description="Social-feed and creator services are not connected in this deployment. No post, profile, follower count, trend, engagement metric, recommendation, or social mutation is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Social media services are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen called unverified social queries for feeds, trends, user statistics, comments, and post creation; displayed static trending counts and suggested creators; claimed AI curation and live feed-signal interpretation; and exposed post, like, comment, repost, share, bookmark, follow, media upload, and privacy controls. Those contracts and data sources were not verified, so the records, claims, and mutations were removed.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><UsersRound aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Social-platform readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production social media requires authenticated authorship, privacy and audience settings, content and media ownership, moderation, provider authorization, interaction ledgers, follower and creator graph integrity, trend methodology, analytics provenance, rate limits, abuse controls, notification semantics, search authorization, deletion and retention, AI transparency, and reliable failure and mutation states. None of those controls are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileText aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No content claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No post, creator, profile, media, timestamp, visibility, ownership, or feed record is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Heart aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No interaction claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No like, comment, repost, share, bookmark, follower, following, privacy, or engagement result is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Bot aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No AI claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No live feed reading, engagement inference, recommendation, curation, or AI-generated social decision is simulated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/social-feed-v2"><Button size="lg" className="bg-primary hover:bg-primary/90">View feed status</Button></Link>
              <Link href="/profile"><Button size="lg" variant="outline">View profile status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about social access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="social-state-heading">
          <h2 id="social-state-heading" className="mb-4 text-xl font-semibold">Current social-media evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {socialStates.map(({ label, value, icon: Icon }) => (
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
              Do not enter private posts, personal data, access tokens, wallet credentials, seed phrases, private keys, or unpublished media here. An unavailable social state is not proof that a creator, post, follower relationship, trend, or engagement metric exists.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Feed, profile, media, notifications, search, moderation, analytics, and AI recommendations remain separate integrations. This screen does not replace any of them.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
