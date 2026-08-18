import { AlertTriangle, Award, BadgeCheck, FileWarning, LockKeyhole, Medal, ShieldCheck, Star, Trophy, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const achievementStates = [
  { label: "Achievement definitions, rules, and ownership", value: "Unavailable", icon: Award },
  { label: "User progress, events, streaks, and unlocks", value: "Not configured", icon: Trophy },
  { label: "Rewards, rankings, and social recognition", value: "Not measured", icon: Star },
  { label: "Credentials, issuance, and verification", value: "Disabled", icon: BadgeCheck },
];

export default function Achievements() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Achievements"
        description="Achievement services are not connected in this deployment. No badge, progress, streak, unlock, reward, ranking, certificate, credential, or social recognition result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Achievements are unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified achievement catalog, progress event source, unlock evaluator, rewards ledger, ranking system, credential issuer, or verification contract was connected. Those controls were removed because the screen cannot establish that an achievement exists or has been earned.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Trophy aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Achievement readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production achievement system requires versioned definitions, authenticated subject identity, event provenance, anti-cheat controls, deterministic unlock rules, progress and streak semantics, reward authorization, ranking privacy, credential issuance, revocation and verification, audit, and clear pending, earned, revoked, failed, and retry states. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Trophy aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No progress claim</h3><p className="mt-1 text-sm text-muted-foreground">No user, event, score, streak, badge, level, unlock, completion, or leaderboard position is displayed or changed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Medal aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No reward claim</h3><p className="mt-1 text-sm text-muted-foreground">No points, token, currency, prize, entitlement, discount, payout, or financial reward is calculated or issued.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><BadgeCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No credential claim</h3><p className="mt-1 text-sm text-muted-foreground">No certificate, badge credential, blockchain record, verification link, social share, or public recognition is created.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/school-dashboard"><Button size="lg" className="bg-primary hover:bg-primary/90">View education status</Button></Link><Link href="/profile"><Button size="lg" variant="outline">View profile status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about achievements</Button></Link></div></div></Card>

        <section aria-labelledby="achievement-state-heading"><h2 id="achievement-state-heading" className="mb-4 text-xl font-semibold">Current achievement evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{achievementStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential learning records, or sensitive personal information here. An unavailable achievement page is not evidence of progress, reward, certification, ownership, or earned status.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Identity, events, education, rewards, credentials, rankings, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Users aria-hidden="true" /></div>
      </main>
    </div>
  );
}
