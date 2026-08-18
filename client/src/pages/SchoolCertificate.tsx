import { AlertTriangle, Award, FileCheck2, FileWarning, LockKeyhole, ShieldCheck, WalletCards } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

export default function SchoolCertificate() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="School Certificate"
        description="Certificate verification is not connected in this deployment. No certificate, learner identity, completion result, grade, signature, hash, blockchain record, or credential ownership is being reported."
      />

      <main className="mx-auto max-w-5xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Certificate is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous route rendered a certificate for a named learner and course with a fabricated score, date, instructor, platform executive, hash, “permanently recorded on-chain” claim, explorer action, social sharing, XP, time spent, and recommended courses. Those claims and mutations were removed because no issuer, learner, assessment, credential, blockchain network, transaction, or verification contract was established.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Award aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Credential verification readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production certificate requires verified issuer and learner identity, achievement criteria, assessment evidence, signature and verification rules, revocation and expiration semantics, privacy controls, accessible export, and a specific blockchain network, transaction hash, token or credential identifier, and ownership proof when on-chain issuance is used. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><FileCheck2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No certificate claim</h3><p className="mt-1 text-sm text-muted-foreground">No learner, course, score, completion date, instructor, grade, achievement, certificate, or credential is rendered.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><WalletCards aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No chain claim</h3><p className="mt-1 text-sm text-muted-foreground">No hash, token ID, wallet, network, explorer link, mint, transaction, permanent record, or ownership proof is fabricated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No sharing claim</h3><p className="mt-1 text-sm text-muted-foreground">No credential link, social post, employer verification, copy action, or external sharing workflow is initiated.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/school"><Button size="lg" className="bg-primary hover:bg-primary/90">View school status</Button></Link><Link href="/certificate-manager"><Button size="lg" variant="outline">View certificate manager status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about verification</Button></Link></div></div></Card>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, wallet addresses, confidential student records, or sensitive personal information here. An unavailable certificate page is not evidence of a credential, grade, course completion, blockchain transaction, or ownership.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Learners, issuers, assessments, certificates, signatures, revocation, wallets, blockchain networks, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
      </main>
    </div>
  );
}
