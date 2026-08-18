import { AlertTriangle, FileCheck2, FileUp, LockKeyhole, ScanSearch, ShieldCheck, UploadCloud } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const uploadStates = [
  { label: "Upload endpoint and object storage", value: "Unavailable", icon: UploadCloud },
  { label: "Validation, scanning, and moderation", value: "Not configured", icon: ScanSearch },
  { label: "Processing and publishing", value: "Not verified", icon: FileCheck2 },
  { label: "Asset ownership and access control", value: "Disabled", icon: ShieldCheck },
];

export default function ContentUpload() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Content Upload"
        description="Content ingestion is not connected in this deployment. No file, upload, storage object, processing job, moderation result, publication, or access grant is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Content upload is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page is not connected to an authenticated upload endpoint, object storage, file-type and size validation, malware or content scanning, moderation, transcoding, metadata extraction, publishing, access control, retention, or deletion workflow. It cannot establish that a file was accepted, stored, safe, processed, published, or accessible.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><FileUp aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Ingestion readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production content ingestion requires authenticated ownership, signed upload URLs, strict type and size limits, malware and content scanning, image and video processing isolation, metadata and privacy handling, moderation and policy decisions, object-level authorization, immutable audit records, lifecycle and deletion rules, retry and resumability, quota enforcement, and clear success, failure, and quarantine states. None of those controls are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <UploadCloud aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No upload claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No file picker, upload progress, object key, URL, storage location, quota, or acceptance result is exposed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ScanSearch aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No safety claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No file type, malware, content, copyright, moderation, privacy, or policy decision is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileCheck2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No publishing claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No processing, transcoding, thumbnail, publication, visibility, sharing, or access outcome is simulated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/content-vault"><Button size="lg" className="bg-primary hover:bg-primary/90">View content status</Button></Link>
              <Link href="/settings"><Button size="lg" variant="outline">View privacy status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about upload access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="upload-state-heading">
          <h2 id="upload-state-heading" className="mb-4 text-xl font-semibold">Current upload evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {uploadStates.map(({ label, value, icon: Icon }) => (
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
              Do not upload identity documents, private media, credentials, seed phrases, private keys, or sensitive personal data here. An unavailable state is not proof that a file was stored, deleted, scanned, or kept private.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
