import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ArrowUpRight(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M5 19 19 5M7 5h12v12" /></svg>;
}

export function ArrowRight(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M4 12h16m-7-7 7 7-7 7" /></svg>;
}

export function Sparkle(props: IconProps) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true" {...props}><path d="M16 2c1.7 9 5 12.3 14 14-9 1.7-12.3 5-14 14C14.3 21 11 17.7 2 16 11 14.3 14.3 11 16 2Z" /></svg>;
}

export function Check(props: IconProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m4 12 5 5L20 6" /></svg>;
}
