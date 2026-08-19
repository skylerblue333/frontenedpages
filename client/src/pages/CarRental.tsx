import { AlertTriangle, Car, CreditCard, FileWarning, Gauge, IdCard, LockKeyhole, MapPin, Search, ShieldCheck, TicketCheck, WalletCards } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const rentalStates = [
  { label: "Vehicles, locations, inventory, and availability", value: "Unavailable", icon: Car },
  { label: "Rates, taxes, deposits, insurance, and driver eligibility", value: "Not configured", icon: WalletCards },
  { label: "Reservations, pickup, returns, cancellations, and payments", value: "Disabled", icon: TicketCheck },
  { label: "Identity, privacy, permissions, and audit", value: "Not available", icon: ShieldCheck },
];

export default function CarRental() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Car Rental"
        description="Vehicle-rental services are not connected in this deployment. No vehicle, location, inventory, availability, rate, deposit, insurance, driver, reservation, pickup, return, cancellation, payment, or audit result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Car Rental is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified fleet provider, location and availability source, rate and tax engine, driver verification, insurance and deposit policy, reservation system, payment provider, cancellation rules, pickup and return workflow, privacy boundary, or audit contract was connected. Those controls were removed because the screen cannot establish that a vehicle is available, a price is current, or a booking will be honored.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Car aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Rental-booking readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production rental booking requires authoritative fleet and location data, real-time availability, rate and tax semantics, driver and age verification, insurance and deposit rules, reservation idempotency, payment authorization, cancellation and no-show handling, pickup and return evidence, damage and support workflows, privacy, retention, and audit. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><MapPin aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No inventory claim</h3><p className="mt-1 text-sm text-muted-foreground">No vehicle, class, location, date, availability, mileage, condition, rate, tax, fee, or deposit is displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><IdCard aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No eligibility claim</h3><p className="mt-1 text-sm text-muted-foreground">No driver, license, age, identity, insurance, deposit, authorization, or support decision is collected or inferred.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><CreditCard aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No booking claim</h3><p className="mt-1 text-sm text-muted-foreground">No reservation, payment, confirmation, pickup, return, cancellation, charge, refund, notification, or external provider action is initiated.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/marketplace"><Button size="lg" className="bg-primary hover:bg-primary/90">View marketplace status</Button></Link><Link href="/payments"><Button size="lg" variant="outline">View payment status</Button></Link><Link href="/privacy"><Button size="lg" variant="outline">View privacy status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about vehicle rental</Button></Link></div></div></Card>

        <section aria-labelledby="rental-state-heading"><h2 id="rental-state-heading" className="mb-4 text-xl font-semibold">Current rental evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{rentalStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, driver-license numbers, payment-card data, insurance documents, or sensitive personal information here. An unavailable car-rental page is not evidence that a vehicle, price, reservation, insurance policy, payment, pickup, return, or refund exists.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Fleet, locations, identity, insurance, payments, reservations, providers, privacy, support, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Gauge aria-hidden="true" /><Search aria-hidden="true" /></div>
      </main>
    </div>
  );
}
