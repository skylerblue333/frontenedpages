import { AlertTriangle, ArchiveRestore, CheckCircle2, CloudCog, DatabaseBackup, FileWarning, HardDrive, LockKeyhole, RefreshCw, ShieldCheck, TimerReset } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const backupStates = [
  { label: "Backup jobs, sources, schedules, and ownership", value: "Unavailable", icon: DatabaseBackup },
  { label: "Storage location, encryption, integrity, and retention", value: "Not configured", icon: ShieldCheck },
  { label: "Restore points, recovery tests, and RPO/RTO", value: "Not measured", icon: ArchiveRestore },
  { label: "Access controls, alerts, logs, and audit", value: "Disabled", icon: CheckCircle2 },
];

export default function BackupManagement() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Backup Management"
        description="Backup and recovery services are not connected in this deployment. No backup job, source, schedule, storage location, encryption state, retention policy, restore point, recovery test, RPO, RTO, or integrity result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Backup Management is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen claimed fully functional live data and real-time updates, exposed generic feature cards and action buttons, and rendered fabricated active-user, transaction, success-rate, and response-time metrics. Those claims and actions were removed because no verified backup provider, source inventory, schedule, encryption, integrity, retention, restore, recovery-test, alert, or audit contract was connected.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><HardDrive aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Backup-and-recovery readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production backup management requires authoritative source inventory, schedules, isolated storage, encryption and key ownership, immutable retention, integrity verification, restore-point semantics, recovery testing, RPO/RTO definitions, least-privilege access, alerting, incident linkage, privacy filtering, audit, and clear queued, running, completed, failed, stale, and retry states. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><DatabaseBackup aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No backup claim</h3><p className="mt-1 text-sm text-muted-foreground">No database, file, wallet, media, configuration, or project source is scheduled, copied, encrypted, verified, or retained.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ArchiveRestore aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No restore claim</h3><p className="mt-1 text-sm text-muted-foreground">No restore point, recovery test, rollback, disaster-recovery action, RPO, RTO, or data-integrity conclusion is available.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><CloudCog aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No provider claim</h3><p className="mt-1 text-sm text-muted-foreground">No cloud storage, backup provider, credential, encryption key, notification, alert, export, or external system action is configured.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/disaster-recovery"><Button size="lg" className="bg-primary hover:bg-primary/90">View recovery status</Button></Link><Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link><Link href="/audit-logs"><Button size="lg" variant="outline">View audit status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about backups</Button></Link></div></div></Card>

        <section aria-labelledby="backup-state-heading"><h2 id="backup-state-heading" className="mb-4 text-xl font-semibold">Current backup evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{backupStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, encryption keys, provider credentials, confidential backups, or sensitive personal information here. An unavailable backup page is not evidence that data is copied, durable, encrypted, restorable, or recoverable.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Storage, databases, files, keys, providers, recovery, alerts, privacy, permissions, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><RefreshCw aria-hidden="true" /><TimerReset aria-hidden="true" /></div>
      </main>
    </div>
  );
}
