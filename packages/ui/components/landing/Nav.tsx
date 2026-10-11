import Image from "next/image";
import Link from "next/link";
import { landingCopy, navigationLinks } from "@/lib/landing-content";
export function Nav() {
  return <nav className="nav wrap" aria-label="Main navigation"><Link href="#top" className="brand" aria-label={landingCopy.nav.home}><Image src="/logo/argus-wordmark.svg" alt="Argus" width={104} height={20} priority /></Link><div className="nav-links">{navigationLinks.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}<span className="nav-divider" /><Link href="#signin">{landingCopy.nav.signIn}</Link><Link href="#start" className="button button-cream button-small">{landingCopy.nav.getStarted}</Link></div><Link href="#start" className="button button-cream button-small mobile-start">{landingCopy.nav.getStarted}</Link></nav>;
}
