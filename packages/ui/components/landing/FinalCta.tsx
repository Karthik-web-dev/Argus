import Link from "next/link";
import { landingCopy } from "@/lib/landing-content";
export function FinalCta() { const c=landingCopy.cta; return <section className="final-cta" id="start"><h2>{c.title}<br/>{c.titleLineTwo}</h2><p>{c.description}</p><div><Link className="button button-cream" href="/dashboard">{landingCopy.hero.scan} <span>→</span></Link><Link className="button button-outline" href="#benchmark">{landingCopy.hero.benchmark}</Link></div></section>; }
