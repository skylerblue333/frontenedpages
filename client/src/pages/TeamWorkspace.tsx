import { AlertTriangle, BarChart3, CheckSquare, FileLock2, FolderOpen, Hash, KeyRound, LockKeyhole, MessageSquare, ShieldCheck, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const workspaceStates = [
  { label: "Channels, messages, and unread state", value: "Unavailable", icon: MessageSquare },
  { label: "Tasks, projects, and assignments", value: "Not verified", icon: CheckSquare },
  { label: "Members, presence, and permissions", value: "Not configured", icon: UsersRound },
  { label: "Files, activity, and analytics", value: "Not reported", icon: BarChart3 },
];

export default function TeamWorkspace() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Team Workspace"
        description="Workspace collaboration is not connected in this deployment. No channel, message, task, member, file, presence, permission, activity, or analytics result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Workspace collaboration is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen rendered demo channels, unread counts, member counts and presence, messages, tasks, assignees, due dates, files, file metadata, activity bars, collaboration analytics, and send, invite, and new-task controls. No verified workspace, messaging, task, file, membership, or analytics contracts were connected, so those records, counts, and mutations were removed.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><UsersRound aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Workspace readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production collaboration requires tenant isolation, workspace authorization, channel and message ownership, delivery and read semantics, task and project integrity, assignment permissions, file storage and scanning, presence accuracy, member revocation, notification controls, activity audit, analytics provenance, retention and deletion, provider security, rate limits, and explicit success and failure states. None of those controls are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <MessageSquare aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No collaboration claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No channel, message, sender, recipient, unread count, voice state, read receipt, or delivery event is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <CheckSquare aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No project claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No task, project, assignee, priority, status, due date, completion, or assignment mutation is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileLock2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No file or analytics claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No file, owner, size, update time, share, action count, completion metric, or activity trend is simulated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/team-management"><Button size="lg" className="bg-primary hover:bg-primary/90">View team status</Button></Link>
              <Link href="/messages"><Button size="lg" variant="outline">View messaging status</Button></Link>
              <Link href="/content-vault"><Button size="lg" variant="outline">View file-storage status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about workspace access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="workspace-state-heading">
          <h2 id="workspace-state-heading" className="mb-4 text-xl font-semibold">Current workspace evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {workspaceStates.map(({ label, value, icon: Icon }) => (
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
              Do not enter private team messages, customer data, credentials, access tokens, seed phrases, private keys, or unpublished files here. An unavailable workspace state is not proof that a message was sent, a task assigned, a file shared, or a member authorized.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Identity, team, messaging, task, file, notification, analytics, and audit services remain separate integrations. This screen does not replace any of them.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
