import { AlertTriangle, Crown, Download, Eye, FileLock2, LockKeyhole, Shield, UploadCloud } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const vaultStates = [
  { label: "Vault inventory and asset ownership", value: "Unavailable", icon: FileLock2 },
  { label: "Access tiers and entitlements", value: "Not verified", icon: Crown },
  { label: "Views, downloads, and delivery", value: "Not reported", icon: Download },
  { label: "Storage, privacy, and deletion", value: "Not configured", icon: Shield },
];

export default function ContentVault() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Content Vault"
        description="Protected-content services are not connected in this deployment. No asset, owner, entitlement, view, download, subscription, storage, or privacy result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Content Vault is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen rendered static private photos, videos, audio, collections, access tiers, unlock counts, view counts, dates, View and Unlock actions, and a subscription-upgrade prompt. Those items and entitlements were not sourced from a verified vault, storage, subscription, or access-control service, so the inventory and actions were removed.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><FileLock2 aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Protected-content readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  A production content vault requires authenticated ownership, asset provenance, encrypted storage, object-level authorization, subscription and entitlement records, payment reconciliation, signed delivery URLs, watermarking and download controls, view and access audit, retention and deletion, privacy and consent, moderation, abuse prevention, and reliable success, failure, and expired-access states. None of those controls are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileLock2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No inventory claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No file, collection, owner, content type, size, date, thumbnail, item count, or asset availability is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Crown aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No entitlement claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No tier, subscription, unlock, purchase, payment, entitlement, renewal, or access decision is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Eye aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No delivery claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No view, download, stream, signed URL, watermark, delivery, privacy, or deletion outcome is simulated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/content-upload"><Button size="lg" className="bg-primary hover:bg-primary/90">View upload status</Button></Link>
              <Link href="/subscriptions"><Button size="lg" variant="outline">View subscription status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about vault access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="vault-state-heading">
          <h2 id="vault-state-heading" className="mb-4 text-xl font-semibold">Current vault evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {vaultStates.map(({ label, value, icon: Icon }) => (
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
              Do not enter private media, identity documents, payment credentials, seed phrases, or private keys here. An unavailable vault state is not proof that content exists, is private, is deleted, or is accessible.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <UploadCloud aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Upload, storage, subscription, entitlement, delivery, and deletion remain separate integrations. This screen does not replace any of them.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
