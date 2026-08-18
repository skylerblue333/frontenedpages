import { AlertTriangle, Blocks, Database, FileSearch, LockKeyhole, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const addressStates = [
  { label: "Chain and address-format rules", value: "Not configured", icon: Blocks },
  { label: "Address and ownership verification", value: "Unavailable", icon: FileSearch },
  { label: "Balances and transaction history", value: "Unavailable", icon: Database },
  { label: "Network and settlement state", value: "Disabled", icon: ShieldAlert },
];

export default function AddressLookup() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Address Lookup"
        description="Address lookup is not enabled in this deployment. No address validity, ownership, balance, transaction, or network result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Address lookup is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not connect to a chain allowlist, address parser, indexer, wallet provider, ownership proof, balance source, or transaction monitor. It cannot validate an address, identify an owner, read a balance, retrieve a transaction, or confirm settlement. No blockchain or financial result should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">Address-data readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production address lookup requires an explicit chain and address-format allowlist, checksum and network validation, canonical node or indexer sources, pagination and reorganization handling, privacy controls, ownership-proof semantics, balance freshness, transaction decoding, and independent verification of confirmation and finality. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Blocks aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Network boundary</h3>
                  <p className="text-sm text-muted-foreground">No chain, network, address format, checksum, contract type, node, or indexer is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <FileSearch aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Lookup boundary</h3>
                  <p className="text-sm text-muted-foreground">No address validity, owner, contract, token, balance, nonce, transaction, or activity data is displayed.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Verification boundary</h3>
                  <p className="text-sm text-muted-foreground">No ownership proof, confirmation, finality, reorganization handling, or settlement evidence is available.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/chain-explorer">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View chain status</Button>
              </Link>
              <Link href="/wallet-integration">
                <Button size="lg" variant="outline">View wallet status</Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="ghost">View documentation</Button>
              </Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="address-state-heading">
          <h2 id="address-state-heading" className="mb-4 text-xl font-semibold">Current address state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {addressStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <div className="flex items-center gap-2">
                    <Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" />
                    <p className="text-lg font-semibold">{value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not enter private keys, seed phrases, or sensitive wallet information into this deployment. Do not treat this page as evidence that an address is valid, controlled, funded, active, or settled. Verify chain, address, ownership, balance, and transaction state through independently trusted sources.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
