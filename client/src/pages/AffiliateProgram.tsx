import { AlertTriangle, BarChart3, FileWarning, Gift, Gauge, Link2, LockKeyhole, ShieldCheck, Users, WalletCards } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const affiliateStates = [
  { label: "Referral links, attribution, and invite records", value: "Unavailable", icon: Link2 },
  { label: "Clicks, conversions, users, and eligibility", value: "Not measured", icon: Users },
  { label: "Commissions, payouts, tax, and balances", value: "Not configured", icon: WalletCards },
  { label: "Fraud controls, reporting, and reconciliation", value: "Disabled", icon: ShieldCheck },
];

export default function AffiliateProgram() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Affiliate Program"
        description="Affiliate services are not connected in this deployment. No referral link, click, conversion, commission, payout, balance, user, tax, fraud, or reconciliation result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Affiliate Program is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen claimed fully functional live data and real-time updates, exposed generic feature cards and action buttons, and rendered fabricated active-user, transaction, success-rate, and response-time metrics. Those claims and actions were removed because no verified referral, attribution, commission, payment, tax, fraud, or reconciliation contract was established.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Gift aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Affiliate readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production affiliate system requires explicit program terms, authenticated partner identity, immutable referral attribution, consent and disclosure, conversion definitions, eligibility, commission calculation, currency and tax rules, payout authorization, fraud and self-referral prevention, reconciliation, disputes, privacy, audit, and clear pending, rejected, paid, failed, and retry states. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Link2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No referral claim</h3><p className="mt-1 text-sm text-muted-foreground">No partner, link, code, click, impression, invite, conversion, attribution, customer, or eligibility record is created or displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><WalletCards aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No payout claim</h3><p className="mt-1 text-sm text-muted-foreground">No commission, rate, balance, payout, tax record, wallet transaction, payment, refund, or financial outcome is calculated or initiated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No metric claim</h3><p className="mt-1 text-sm text-muted-foreground">No active-user count, transaction total, success rate, latency, revenue, conversion rate, or affiliate performance is reported.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/affiliate-dashboard"><Button size="lg" className="bg-primary hover:bg-primary/90">View affiliate status</Button></Link><Link href="/payments"><Button size="lg" variant="outline">View payment status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about affiliate access</Button></Link></div></div></Card>

        <section aria-labelledby="affiliate-state-heading"><h2 id="affiliate-state-heading" className="mb-4 text-xl font-semibold">Current affiliate evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{affiliateStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, payment details, tax identifiers, confidential partner records, or sensitive personal information here. An unavailable affiliate page is not evidence of a referral, commission, payout, balance, tax result, or successful conversion.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Partners, referrals, attribution, payments, payouts, tax, fraud, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
      </main>
    </div>
  );
}
