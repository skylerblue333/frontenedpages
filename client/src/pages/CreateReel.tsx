import { useRef, useState } from "react";
import { Hash, ShieldAlert, Upload, Video, X } from "lucide-react";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageHeader } from "@/components/PageHeader";
import { Textarea } from "@/components/ui/textarea";

export default function CreateReel() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [caption, setCaption] = useState("");
  const [hashtagInput, setHashtagInput] = useState("");
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [videoName, setVideoName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !file.type.startsWith("video/")) return;
    setVideoName(file.name);
    setVideoPreview(URL.createObjectURL(file));
  };
  const addHashtag = () => {
    const tag = hashtagInput.replace(/^#/, "").trim().toLowerCase();
    if (tag && !hashtags.includes(tag) && hashtags.length < 10) { setHashtags((current) => [...current, tag]); setHashtagInput(""); }
  };

  return <div className="min-h-screen bg-background"><PageHeader backHref="/reels" icon={Video} title="Create Reel" subtitle="Local video preview only; no upload, storage, processing, publication, audience access, moderation, or monetization integration is connected in this deployment." /><main className="mx-auto max-w-3xl space-y-6 px-4 py-8"><Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><ShieldAlert aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Reel publication is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen could upload to an API and publish through a mutation, exposed unverified audio tracks, used a client-selected duration and effects without processing, and offered a premium subscriber toggle. Those controls were removed because no verified media, ownership, moderation, access, or publication contract was connected.</p></div></div></Card><div className="flex items-center gap-3"><Link href="/reels"><Button variant="ghost" size="sm"><X className="mr-1 h-4 w-4" />Back</Button></Link><Badge variant="outline">Local preview session</Badge></div><Card className="p-6"><Label className="mb-3 block text-sm font-medium">Local video preview</Label>{videoPreview ? <div className="relative overflow-hidden rounded-xl bg-black"><video src={videoPreview} className="max-h-96 w-full object-contain" controls muted /><button onClick={() => { setVideoPreview(null); setVideoName(""); }} aria-label="Remove local video preview" className="absolute right-2 top-2 rounded-full bg-black/70 p-2 text-white"><X className="h-4 w-4" /></button></div> : <button onClick={() => fileRef.current?.click()} className="w-full rounded-xl border-2 border-dashed border-border p-12 text-center hover:border-primary/50"><Upload className="mx-auto mb-3 h-8 w-8 text-muted-foreground" /><p className="text-sm text-muted-foreground"><span className="font-medium text-primary">Choose a local video</span>; it is not uploaded or stored.</p></button>}<input ref={fileRef} type="file" accept="video/*" className="hidden" onChange={handleFileChange} />{videoName && <p className="mt-3 text-xs text-muted-foreground">Local file: {videoName}</p>}</Card><Card className="p-6"><Label className="mb-2 block text-sm font-medium">Local caption</Label><Textarea value={caption} onChange={(event) => setCaption(event.target.value)} placeholder="Draft a caption locally; it will not be published." className="min-h-24 resize-none" maxLength={500} /><p className="mt-1 text-right text-xs text-muted-foreground">{caption.length}/500</p></Card><Card className="p-6"><Label className="mb-3 flex items-center gap-2 text-sm font-medium"><Hash className="h-4 w-4" />Local hashtags</Label><div className="flex gap-2"><Input value={hashtagInput} onChange={(event) => setHashtagInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") { event.preventDefault(); addHashtag(); } }} placeholder="#topic" /><Button variant="outline" onClick={addHashtag}>Add</Button></div><div className="mt-3 flex flex-wrap gap-1.5">{hashtags.map((tag) => <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => setHashtags((current) => current.filter((item) => item !== tag))}>#{tag} <X className="ml-1 h-3 w-3" /></Badge>)}</div></Card><Card className="border border-border/50 p-6"><p className="text-sm leading-6 text-muted-foreground">No upload, duration, effect, audio-track, premium, subscriber, publish, processing, moderation, API request, database write, notification, account mutation, public URL, audience count, play count, payment, or monetization action is performed. A local video preview does not prove that the file exists in platform storage, is licensed, is safe, or was published.</p></Card></main></div>;
}
