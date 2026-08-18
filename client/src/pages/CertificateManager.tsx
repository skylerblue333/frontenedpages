import { AlertTriangle, Award, FileCheck2, FileWarning, LockKeyhole, Search, ShieldCheck, WalletCards } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const credentialStates = [
  { label: "Certificate issuance and learner records", value: "Unavailable", icon: Award },
  { label: "Verification, signatures, and revocation", value: "Not configured", icon: FileCheck2 },
  { label: "Blockchain minting and ownership", value: "Not verified", icon: WalletCards },
  { label: "Search, administration, and retention", value: "Disabled", icon: Search },
];

export default function CertificateManager() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Certificate Manager"
        description="Certificate services are not connected in this deployment. No credential, certificate, badge, signature, verification result, revocation state, blockchain mint, or learner record is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Certificate Manager is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified certificate or credential contract was connected. Those controls were removed because the screen cannot establish that a certificate was earned, issued, signed, minted, owned, valid, revoked, or persisted.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Award aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Credential readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production credential system requires verified learner and issuer identity, achievement criteria, assessment evidence, immutable issuance records, cryptographic signatures, verification and revocation semantics, privacy and retention controls, export and accessibility support, and blockchain network, transaction, and ownership verification when on-chain credentials are used. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Award aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No issuance claim</h3><p className="mt-1 text-sm text-muted-foreground">No certificate, badge, degree, completion record, credential, or achievement is created or displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><FileCheck2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No verification claim</h3><p className="mt-1 text-sm text-muted-foreground">No issuer, signature, verification result, expiration, revocation, accreditation, or authenticity claim is made.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><WalletCards aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No blockchain claim</h3><p className="mt-1 text-sm text-muted-foreground">No mint, token ID, wallet ownership, network, transaction hash, or on-chain settlement is initiated or reported.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/school"><Button size="lg" className="bg-primary hover:bg-primary/90">View school status</Button></Link><Link href="/skyschool"><Button size="lg" variant="outline">View SkySchool status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about credentials</Button></Link></div></div></Card>

        <section aria-labelledby="credential-state-heading"><h2 id="credential-state-heading" className="mb-4 text-xl font-semibold">Current credential evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{credentialStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, wallet addresses, confidential student records, or sensitive personal information here. An unavailable certificate manager is not evidence of a credential, certificate, signature, or blockchain transaction.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Learners, issuers, assessments, credentials, signatures, revocation, wallets, blockchain networks, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
      </main>
    </div>
  );
}
