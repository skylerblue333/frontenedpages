import { AlertTriangle, BadgeCheck, FileWarning, Fingerprint, LockKeyhole, ShieldCheck, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const passportStates = [
  { label: "Identity, citizenship, and passport record", value: "Unavailable", icon: Fingerprint },
  { label: "Trust, reputation, learning, and community scores", value: "Not calculated", icon: BadgeCheck },
  { label: "Verification, issuer, governance, and permissions", value: "Not configured", icon: ShieldCheck },
  { label: "Wallet, staking, rewards, and audit evidence", value: "Not available", icon: LockKeyhole },
];

export default function CitizenPassport() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader icon={Fingerprint} title="Citizen Passport" subtitle="Citizen identity and reputation services are not connected in this deployment. No passport, citizen identity, verification badge, trust score, reputation result, governance right, wallet, or reward is being reported or created." />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Citizen passport is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an Anonymous Citizen passport with a generated passport number, a VERIFIED badge, a trust score, reputation dimensions, governance rights, staking rewards, and citizenship progression. No verified identity provider, issuer, consent boundary, reputation ledger, governance authorization, wallet, rewards system, or audit contract was connected. Those claims were removed because this route cannot establish identity, citizenship, verification, eligibility, ownership, or reward entitlement.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Fingerprint aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Credential and reputation readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production citizen credential requires verified identity, issuer authority, consent and purpose limitation, credential status, cryptographic signatures, revocation, reputation evidence and policy, governance authorization, wallet ownership, rewards accounting, privacy, accessibility, and audit. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><UsersRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No identity claim</h3><p className="mt-1 text-sm text-muted-foreground">No citizen, passport number, legal identity, location, issuer, profile, age, membership, or verification status is displayed or inferred.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><BadgeCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No score claim</h3><p className="mt-1 text-sm text-muted-foreground">No trust, learning, building, teaching, community, reputation, progression, rank, eligibility, or governance score is calculated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No rights or rewards claim</h3><p className="mt-1 text-sm text-muted-foreground">No vote, proposal, council, premium access, staking reward, wallet balance, payout, mentorship, or entitlement is granted or reported.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/certificate-manager"><Button size="lg" className="bg-primary hover:bg-primary/90">View credential status</Button></Link><Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about identity access</Button></Link></div></div></Card>

        <section aria-labelledby="passport-state-heading"><h2 id="passport-state-heading" className="mb-4 text-xl font-semibold">Current passport evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{passportStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, government identifiers, identity documents, wallet addresses, financial information, or sensitive personal information here. An unavailable citizen passport is not proof of identity, citizenship, verification, trust, governance access, wallet ownership, staking, or rewards.</p></div></Card>
      </main>
    </div>
  );
}
