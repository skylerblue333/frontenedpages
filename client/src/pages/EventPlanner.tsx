import { useCallback, useEffect, useRef, useState } from "react";
import { AlertTriangle, Calendar, CheckCircle2, FileCheck2, MapPin, Plus, Save, ShieldAlert, Trash2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";
import { Link } from "wouter";

type TableItem = { id: string; x: number; y: number; label: string; seats: number; color: string };
const colors = ["bg-blue-500", "bg-emerald-500", "bg-amber-500", "bg-rose-500", "bg-purple-500", "bg-cyan-500"];
const initialTables: TableItem[] = [
  { id: "sample-1", x: 80, y: 90, label: "Sample table 1", seats: 8, color: colors[0] },
  { id: "sample-2", x: 270, y: 90, label: "Sample table 2", seats: 6, color: colors[1] },
  { id: "sample-3", x: 175, y: 210, label: "Sample table 3", seats: 10, color: colors[2] },
];

export default function EventPlanner() {
  const [tables, setTables] = useState<TableItem[]>(initialTables);
  const [dragging, setDragging] = useState<string | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [saved, setSaved] = useState(false);
  const canvasRef = useRef<HTMLDivElement>(null);
  const totalSeats = tables.reduce((sum, table) => sum + table.seats, 0);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("skycoin4444-local-event-layout");
      if (stored) setTables(JSON.parse(stored) as TableItem[]);
    } catch {
      // Local draft recovery is best effort; no server state is claimed.
    }
  }, []);

  const addTable = () => setTables((current) => [...current, { id: `local-${Date.now()}`, x: 50, y: 50, label: `Local table ${current.length + 1}`, seats: 6, color: colors[current.length % colors.length] }]);
  const removeTable = (id: string) => setTables((current) => current.filter((table) => table.id !== id));
  const startDrag = (event: React.MouseEvent<HTMLDivElement>, id: string) => {
    event.preventDefault();
    const table = tables.find((item) => item.id === id);
    if (!table) return;
    setDragging(id);
    setOffset({ x: event.clientX - table.x, y: event.clientY - table.y });
  };
  const moveTable = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) return;
    setTables((current) => current.map((table) => table.id === dragging ? { ...table, x: Math.max(0, event.clientX - offset.x), y: Math.max(0, event.clientY - offset.y) } : table));
  }, [dragging, offset]);
  const saveLocalDraft = () => {
    window.localStorage.setItem("skycoin4444-local-event-layout", JSON.stringify(tables));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  };

  return <div className="min-h-screen bg-background"><PageHeader icon={Calendar} title="Event Planner" subtitle="Local floor-layout draft only; no event, venue, attendee, capacity, online sync, calendar integration, or production plan is connected." /><main className="mx-auto max-w-6xl space-y-8 px-4 py-8"><Card className="border border-amber-400/30 bg-amber-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" /><div><h2 className="font-semibold text-amber-100">Planner scope is local and unverified</h2><p className="mt-1 text-sm leading-6 text-amber-100/80">This editor can arrange a sample table layout in the current browser and optionally store that draft in local storage. It does not create an event, reserve a venue, publish a schedule, invite attendees, calculate real capacity, synchronize online, write to a backend, or establish a safety, accessibility, ticketing, or attendance plan.</p></div></div></Card><Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Calendar aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-2xl font-bold">Local layout workspace</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">The derived table and seat counts below describe only this local draft. They are not venue capacity, attendee counts, reservations, seating assignments, or event analytics.</p></div></div><div className="mt-6 flex flex-wrap gap-3"><Button type="button" onClick={addTable}><Plus aria-hidden="true" className="mr-2 h-4 w-4" />Add local table</Button><Button type="button" variant="outline" onClick={saveLocalDraft}><Save aria-hidden="true" className="mr-2 h-4 w-4" />{saved ? "Saved locally" : "Save local draft"}</Button></div></Card><section aria-labelledby="local-layout-heading"><div className="mb-4 flex items-center justify-between gap-4"><h2 id="local-layout-heading" className="text-xl font-semibold">Sample floor layout</h2><span className="rounded-full border border-border/60 px-2 py-1 text-xs text-muted-foreground">Local draft only</span></div><div className="grid gap-6 lg:grid-cols-[220px_1fr]"><Card className="border border-border/50 bg-card p-5"><div className="space-y-4"><div><p className="text-xs text-muted-foreground">Local tables</p><p className="text-2xl font-bold">{tables.length}</p></div><div><p className="text-xs text-muted-foreground">Draft seats</p><p className="text-2xl font-bold">{totalSeats}</p></div><p className="text-xs leading-5 text-muted-foreground">These values are derived from the editable sample objects, not from a venue, event, attendee list, or external system.</p><div className="space-y-2">{tables.map((table) => <div key={table.id} className="flex items-center justify-between gap-2"><span className="flex items-center gap-2 text-xs"><span className={`h-3 w-3 rounded-full ${table.color}`} />{table.label}</span><button type="button" aria-label={`Remove ${table.label}`} onClick={() => removeTable(table.id)} className="text-muted-foreground hover:text-destructive"><Trash2 aria-hidden="true" className="h-3 w-3" /></button></div>)}</div></div></Card><div ref={canvasRef} onMouseMove={moveTable} onMouseUp={() => setDragging(null)} onMouseLeave={() => setDragging(null)} className="relative min-h-[420px] overflow-hidden rounded-2xl border border-border/60 bg-card select-none" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--muted-foreground) / .22) 1px, transparent 1px)", backgroundSize: "32px 32px" }}><div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-lg border border-border/60 bg-muted/60 px-12 py-3 text-xs font-semibold tracking-widest text-muted-foreground">SAMPLE STAGE</div>{tables.map((table) => <div key={table.id} role="button" tabIndex={0} onMouseDown={(event) => startDrag(event, table.id)} onKeyDown={(event) => { if (event.key === "Delete") removeTable(table.id); }} aria-label={`${table.label}, ${table.seats} draft seats`} className={`absolute min-w-[100px] cursor-grab rounded-xl border-2 border-white/10 bg-background/90 p-3 text-center shadow-lg ${dragging === table.id ? "scale-105 shadow-2xl" : ""}`} style={{ left: table.x, top: table.y }}><div className={`mx-auto mb-1 h-2 w-2 rounded-full ${table.color}`} /><div className="text-xs font-bold">{table.label}</div><div className="text-xs text-muted-foreground">{table.seats} draft seats</div></div>)}<p className="absolute bottom-3 right-3 text-xs text-muted-foreground">Drag locally; no online sync</p></div></div></section><section aria-labelledby="planner-boundaries-heading"><h2 id="planner-boundaries-heading" className="mb-4 text-xl font-semibold">Production boundaries</h2><div className="grid gap-4 md:grid-cols-2"><Card className="border border-border/50 bg-card p-6"><FileCheck2 aria-hidden="true" className="mb-4 h-7 w-7 text-primary" /><h3 className="text-lg font-semibold">No event-operation claim</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">No organizer, event, venue, location, attendee, capacity, seating assignment, reservation, staff plan, budget, ticket, payment, reminder, calendar, notification, or publishing record is read, calculated, displayed, exported, or simulated.</p></Card><Card className="border border-border/50 bg-card p-6"><AlertTriangle aria-hidden="true" className="mb-4 h-7 w-7 text-primary" /><h3 className="text-lg font-semibold">Scheduling, privacy, safety, accessibility, and finance warn-and-proceed</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">A production event plan requires organizer authority, venue confirmation, accurate capacity, accessibility and safety review, privacy and consent, moderation, ticketing and financial controls, and a documented publishing workflow. Verify those independently before acting on this local draft.</p></Card></div></section><div className="flex flex-wrap gap-3"><Link href="/event-calendar"><Button variant="outline"><Calendar aria-hidden="true" className="mr-2 h-4 w-4" />Review calendar status</Button></Link><Link href="/event-creation"><Button variant="outline"><Plus aria-hidden="true" className="mr-2 h-4 w-4" />Review creation status</Button></Link><Link href="/security-center"><Button variant="outline"><ShieldAlert aria-hidden="true" className="mr-2 h-4 w-4" />Review security status</Button></Link><Link href="/contact-us-form"><Button variant="outline"><MapPin aria-hidden="true" className="mr-2 h-4 w-4" />Ask about planning availability</Button></Link></div><Card className="border border-border/50 bg-card p-6"><div className="flex items-start gap-3"><CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">No authentication, event creation, venue lookup, calendar synchronization, online status, IndexedDB claim, real-time sync, attendee lookup, capacity validation, ticketing, payment, API request, database read or write, notification, publishing action, or personal-data operation is performed. Only the explicitly labeled local layout draft is editable and optionally stored in this browser.</p></div></Card></main></div>;
}
