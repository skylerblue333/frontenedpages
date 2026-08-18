import { AlertTriangle, KeyRound, LockKeyhole, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const APIKeys = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="API Keys"
        description="Credential management is not connected in this deployment. No API key is created, displayed, stored, rotated, or revoked from this page."
      />

      <main className="mx-auto max-w-5xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">API key management is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This interface is not connected to a server-side secret store, key-generation service, permission model, usage monitor, rotation workflow, or revocation endpoint. It intentionally exposes no credential values and does not imply that a key exists or that an action succeeded.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3">
                <KeyRound aria-hidden="true" className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Credential safety boundary</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production API-key management must keep secret material server-side, show a secret only at controlled creation time, hash or otherwise protect stored credentials, scope permissions, record ownership, enforce expiration and rotation, support revocation, rate-limit use, redact logs, and provide clear failure states. Those controls are not available through this frontend-only screen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No secret exposure</h3>
                <p className="mt-1 text-sm text-muted-foreground">No key values, prefixes, hashes, or masked credentials are rendered.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No pretend lifecycle</h3>
                <p className="mt-1 text-sm text-muted-foreground">Create, rotate, copy, reveal, and revoke actions are not simulated.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <KeyRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No usage claims</h3>
                <p className="mt-1 text-sm text-muted-foreground">Requests, quotas, last-used times, scopes, and provider access are not reported.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/security">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View security status</Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="outline">Read integration documentation</Button>
              </Link>
              <Link href="/contact-us-form">
                <Button size="lg" variant="ghost">Ask about API access</Button>
              </Link>
            </div>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            Never paste a private API key, wallet seed phrase, access token, or other secret into this page or a client-side bundle. Until a reviewed backend integration is available, use the provider&apos;s official secret-management workflow directly.
          </p>
        </Card>
      </main>
    </div>
  );
};

export default APIKeys;
