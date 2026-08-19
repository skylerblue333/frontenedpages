import { AlertTriangle, FileWarning, Gamepad2, LockKeyhole, ShieldCheck, Swords, UsersRound, WalletCards } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const gameStates = [
  { label: "Players, clans, memberships, and permissions", value: "Unavailable", icon: UsersRound },
  { label: "Wars, matchmaking, scores, timers, and results", value: "Not connected", icon: Swords },
  { label: "Rewards, tokens, costs, and wallet settlement", value: "Not configured", icon: WalletCards },
  { label: "Anti-cheat, moderation, privacy, and audit", value: "Not available", icon: ShieldCheck },
];

export default function ClanWars() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader icon={Swords} title="Clan Wars" subtitle="Clan-war services are not connected in this deployment. No player, clan, war, score, ranking, timer, reward, token, wallet, or game result is being reported or created." />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Clan Wars is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed sample clans, active war scores, countdowns, rankings, warrior counts, a create-clan action, join notifications, and a claimed 500 SKY444 token creation cost. No verified game backend, player identity, clan store, matchmaking, scoring, timer, anti-cheat, moderation, wallet, token ledger, or audit contract was connected. Those claims and controls were removed because this route cannot establish that a game state or transaction exists.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Gamepad2 aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Clan-war readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production clan-war game requires authenticated players, clan ownership and membership, matchmaking, deterministic combat rules, authoritative scores and timers, reconnect handling, anti-cheat, moderation, rewards policy, wallet and token separation, payment controls, privacy, accessibility, and auditable game events. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><UsersRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No player claim</h3><p className="mt-1 text-sm text-muted-foreground">No player, clan, member, rank, win, loss, power, warrior, identity, application, or permission is displayed or changed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Swords aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No war claim</h3><p className="mt-1 text-sm text-muted-foreground">No war, opponent, score, timer, leader, match, combat event, ranking, victory, defeat, or result is calculated or asserted.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No reward claim</h3><p className="mt-1 text-sm text-muted-foreground">No token, cost, reward, wallet balance, payout, purchase, clan creation, join request, notification, or external action is executed.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/gamefi"><Button size="lg" className="bg-primary hover:bg-primary/90">View game status</Button></Link><Link href="/chain-explorer"><Button size="lg" variant="outline">View blockchain status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about game access</Button></Link></div></div></Card>

        <section aria-labelledby="clan-war-state-heading"><h2 id="clan-war-state-heading" className="mb-4 text-xl font-semibold">Current clan-war evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{gameStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, wallet addresses, payment credentials, or sensitive personal information here. An unavailable clan-war page is not evidence that a clan, match, score, timer, reward, token cost, or game result exists.</p></div></Card>
      </main>
    </div>
  );
}
