import { AlertTriangle, Bell, Heart, LockKeyhole, ShoppingCart, Target, TrendingUp, Vote, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const notificationStates = [
  { label: "Notification ledger and unread count", value: "Unavailable", icon: Bell },
  { label: "Trading and market alerts", value: "Not connected", icon: TrendingUp },
  { label: "Marketplace and social alerts", value: "Not configured", icon: ShoppingCart },
  { label: "Delivery, dismissal, and activity state", value: "Disabled", icon: Zap },
];

export default function NotificationsHub() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Notifications Hub"
        description="Notification delivery is not connected in this deployment. No unread count, notification, alert, sender, timestamp, delivery state, or action result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Notifications are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen claimed notification records, unread counts, real-time activity, trading signals, confidence percentages, prices and targets, marketplace alerts, social alerts, timestamps, profiles, and a trade action. No matching notification contracts were found for the frontend calls, so those claims and controls were removed. This page does not send, dismiss, mark, trade, purchase, or notify.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Bell aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Notification readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production notifications require an authoritative event ledger, recipient authorization, type and priority taxonomy, delivery channels, retries and deduplication, read and dismissal mutations, timestamp and timezone semantics, preference and consent controls, sender and object access checks, alert methodology, financial-data freshness, rate limits, abuse prevention, audit evidence, and failure observability. None of those controls are available through this screen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Bell aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No notification claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No title, message, sender, recipient, unread count, timestamp, delivery state, or activity event is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <TrendingUp aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No trading claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No signal, symbol, buy or sell action, confidence, price, target, market state, or trade execution is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Heart aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No social or marketplace claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No follower, seller, item, profile, purchase, charity, governance, or marketplace event is asserted.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/settings"><Button size="lg" className="bg-primary hover:bg-primary/90">View settings status</Button></Link>
              <Link href="/api-monitoring"><Button size="lg" variant="outline">View monitoring status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about notifications</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="notification-state-heading">
          <h2 id="notification-state-heading" className="mb-4 text-xl font-semibold">Current notification evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {notificationStates.map(({ label, value, icon: Icon }) => (
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
              Do not trade, purchase, transfer assets, follow an account, or make a financial decision based on an alert or notification that has not been delivered through a verified source.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
