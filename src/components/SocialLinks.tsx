import type { SVGProps } from "react";
import { site } from "@/lib/site";

type IconProps = SVGProps<SVGSVGElement>;

function InstagramIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".9" fill="currentColor" stroke="none" /></svg>;
}

function FacebookIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.2v2.2H7.5V13h2.7v8h3.3Z" /></svg>;
}

function TikTokIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}><path d="M15.7 3c.2 2 1.4 3.3 3.3 3.5v2.8a7.7 7.7 0 0 1-3.3-.9v6.4a6 6 0 1 1-6-6h.8v3a3 3 0 1 0 2.2 2.9V3h3Z" /></svg>;
}

const profiles = [
  { name: "Instagram", href: site.socials.instagram, Icon: InstagramIcon },
  { name: "Facebook", href: site.socials.facebook, Icon: FacebookIcon },
  { name: "TikTok", href: site.socials.tiktok, Icon: TikTokIcon },
];

export function SocialLinks() {
  return <div className="footer-social" aria-label="Soziale Netzwerke"><span className="social-label">{profiles.some((profile) => profile.href) ? "FOLGEN SIE UNS" : "PROFILE FOLGEN"}</span>{profiles.map(({ name, href, Icon }) => href ? <a className="social-icon" key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name} in neuem Tab öffnen`}><Icon /></a> : <span className="social-icon social-icon-pending" key={name} role="img" aria-label={`${name}-Profil folgt`} title={`${name}-Profil folgt`}><Icon /></span>)}</div>;
}
