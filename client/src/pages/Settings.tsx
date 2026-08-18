import { AlertTriangle, Bell, FileText, LockKeyhole, Shield, UserRound, WalletCards } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const settingStates = [
  { label: "Profile and account record", value: "Unavailable", icon: UserRound },
  { label: "Notifications and privacy preferences", value: "Not configured", icon: Bell },
  { label: "MFA, sessions, and login history", value: "Not verified", icon: Shield },
  { label: "Wallet and transaction preferences", value: "Disabled", icon: WalletCards },
];

export default function Settings() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Settings"
        description="Account, privacy, notification, security, and wallet settings are not connected in this deployment. No preference, upload, session, or deletion result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Settings services are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen claimed profile loading and saving, avatar upload, notification preferences, privacy controls, account deletion, 2FA activation, active sessions, login history, wallet addresses, auto-staking, and transaction notifications. The referenced user and security routes are not verified for these operations, so the controls and success states were removed. This page does not persist account, security, wallet, or privacy changes.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Shield aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Settings readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production settings require authenticated ownership, field validation, optimistic-concurrency protection, durable preference storage, privacy and consent records, secure file-upload handling, MFA enrollment and recovery, session and login-event evidence, confirmed destructive workflows, wallet provider boundaries, transaction preference semantics, audit logging, and clear success or failure feedback. None of those controls are available through this screen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <UserRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No profile claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No name, email, bio, avatar, account statistic, profile update, or upload result is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Bell aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No preference claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No notification, privacy, online-status, direct-message, consent, or deletion preference is presented as saved.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <WalletCards aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No wallet claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No wallet address, auto-stake setting, transaction notification, balance, custody, or signing state is asserted.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/profile"><Button size="lg" className="bg-primary hover:bg-primary/90">View profile status</Button></Link>
              <Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about settings access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="settings-state-heading">
          <h2 id="settings-state-heading" className="mb-4 text-xl font-semibold">Current settings evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {settingStates.map(({ label, value, icon: Icon }) => (
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
              Do not upload identity documents, profile media, wallet credentials, seed phrases, or private keys here. Do not treat an unavailable settings state as proof that a preference, security control, deletion, or wallet action succeeded.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <FileText aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              This screen preserves navigation only. It does not replace an authenticated account-management, privacy, security, or wallet service.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
