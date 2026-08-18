import { AlertTriangle, BarChart3, Camera, FileText, LockKeyhole, Shield, UserRound, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const profileStates = [
  { label: "Identity and profile record", value: "Unavailable", icon: UserRound },
  { label: "Posts, media, follows, and achievements", value: "Not verified", icon: UsersRound },
  { label: "Creator analytics and earnings", value: "Not reported", icon: BarChart3 },
  { label: "Profile edits and media uploads", value: "Disabled", icon: Camera },
];

export default function Profile() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Profile"
        description="Profile and social identity services are not connected in this deployment. No personal record, social metric, achievement, creator statistic, or update result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Profile data is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen claimed profile records, posts, likes, comments, followers, following, XP, reputation levels, verified and creator badges, achievements, media, creator earnings, views, subscribers, engagement, follows, profile edits, and avatar or banner uploads. The referenced user, feed, and gamefi routers are generic feature routers, so those records and mutations were not verified and have been removed.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><UserRound aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Identity-data readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  A production profile requires authenticated ownership and object authorization, privacy and visibility settings, validated fields, safe media-upload handling, content moderation, social graph integrity, count reconciliation, achievement provenance, creator analytics and payout sources, audit records, deletion and export workflows, abuse controls, and clear treatment of public versus private data. None of those controls are available through this screen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileText aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No identity claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No name, handle, avatar, banner, bio, location, links, role, verification, or account date is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <UsersRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No social claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No post, media, like, comment, follower, following, XP, reputation, achievement, follow, or social-graph result is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No creator claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No earnings, views, subscribers, engagement, payout, analytics, or monetization result is displayed.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/profile-edit"><Button size="lg" className="bg-primary hover:bg-primary/90">View profile-edit status</Button></Link>
              <Link href="/settings"><Button size="lg" variant="outline">View settings status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about profile access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="profile-state-heading">
          <h2 id="profile-state-heading" className="mb-4 text-xl font-semibold">Current profile evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {profileStates.map(({ label, value, icon: Icon }) => (
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
              Do not upload personal media or rely on an unavailable profile state as proof of identity, verification, ownership, social status, creator performance, or account history.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
