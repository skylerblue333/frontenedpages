import { useState } from "react";
import { AlertTriangle, ArrowRight, CheckCircle, FileText, Lock, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export default function AgeGate() {
  const [, navigate] = useLocation();
  const [continued, setContinued] = useState(false);

  const handleContinue = () => {
    sessionStorage.setItem("adult_content_self_attestation", "true");
    setContinued(true);
    window.setTimeout(() => navigate("/nsfw-feed"), 900);
  };

  if (continued) {
    return <div className="min-h-screen bg-[#050308] flex items-center justify-center p-4"><div className="max-w-md text-center"><CheckCircle aria-hidden="true" className="w-16 h-16 text-green-400 mx-auto mb-4" /><h2 className="text-xl font-black text-white mb-2">Self-attestation recorded locally</h2><p className="text-slate-400 text-sm">Continuing without claiming identity verification, age verification, or jurisdictional compliance.</p></div></div>;
  }

  return <div className="min-h-screen bg-[#050308] flex items-center justify-center p-4"><div className="relative max-w-md w-full"><div className="bg-slate-900 border border-red-500/30 rounded-2xl overflow-hidden"><div className="bg-red-900/20 border-b border-red-500/20 px-6 py-4 flex items-center gap-3"><AlertTriangle aria-hidden="true" className="w-5 h-5 text-red-400" /><span className="text-sm font-bold text-red-300">Adult-content boundary</span></div><div className="p-8 text-center"><div className="w-20 h-20 bg-red-600/10 border border-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6"><Lock aria-hidden="true" className="w-10 h-10 text-red-400" /></div><h1 className="text-2xl font-black text-white mb-3">Adults only</h1><p className="text-slate-400 text-sm leading-relaxed mb-6">This route is intended for adults aged <strong className="text-white">18 years or older</strong>. Continuing is a self-attestation only. It is not identity verification, document verification, biometric verification, legal advice, or proof that access is lawful in your jurisdiction.</p><div className="bg-slate-800/50 rounded-xl p-4 mb-6 text-left"><div className="flex items-start gap-2"><ShieldAlert aria-hidden="true" className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" /><p className="text-xs text-slate-400 leading-relaxed">No age-verification provider, jurisdiction check, consent record, content-custodian record, or statutory compliance certification is connected to this screen. Do not rely on it as evidence of compliance or performer age.</p></div></div><div className="space-y-3"><Button onClick={handleContinue} className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-3.5 text-base"><CheckCircle aria-hidden="true" className="w-5 h-5 mr-2" />I am 18 or older — continue<ArrowRight aria-hidden="true" className="w-5 h-5 ml-2" /></Button><Link href="/"><Button variant="outline" className="w-full border-slate-700 text-slate-400 hover:text-white hover:border-slate-600 py-3">I am under 18 — exit</Button></Link></div><div className="mt-5 flex justify-center gap-4 text-[11px]"><Link href="/terms"><span className="text-slate-500 underline">Terms</span></Link><Link href="/content-policy"><span className="text-slate-500 underline">Content Policy</span></Link></div><p className="text-[11px] text-slate-600 mt-3 flex items-center justify-center gap-1"><FileText aria-hidden="true" className="h-3 w-3" />Review these documents before continuing.</p></div></div></div></div>;
}
