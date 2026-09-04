import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24", "aria-hidden": true };

export function ArrowUpRight(props: IconProps) { return <svg {...base} {...props}><path d="M7 17 17 7M7 7h10v10" /></svg>; }
export function ArrowRight(props: IconProps) { return <svg {...base} {...props}><path d="M5 12h14M14 7l5 5-5 5" /></svg>; }
export function Terminal(props: IconProps) { return <svg {...base} {...props}><path d="m5 7 5 5-5 5M13 17h6" /></svg>; }
export function Code(props: IconProps) { return <svg {...base} {...props}><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" /></svg>; }
export function FileEdit(props: IconProps) { return <svg {...base} {...props}><path d="M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M13 3v5h5M13 3l5 5M10 16l1.5-4.5L18 5l1 1-6.5 6.5L10 16Z" /></svg>; }
export function GitBranch(props: IconProps) { return <svg {...base} {...props}><circle cx="6" cy="5" r="2" /><circle cx="18" cy="7" r="2" /><circle cx="6" cy="19" r="2" /><path d="M6 7v10M8 7h8M12 7v3c0 3-2 4-4 4H6" /></svg>; }
export function Bug(props: IconProps) { return <svg {...base} {...props}><path d="M8 7h8M9 3l1 2M15 3l-1 2M6 13h12M12 7c3.3 0 5 2.2 5 5v3a5 5 0 0 1-10 0v-3c0-2.8 1.7-5 5-5ZM3 9l3 2M21 9l-3 2M3 17l3-1M21 17l-3-1" /></svg>; }
export function Globe(props: IconProps) { return <svg {...base} {...props}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z" /></svg>; }
export function Blocks(props: IconProps) { return <svg {...base} {...props}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><path d="M17.5 14v7M14 17.5h7" /></svg>; }
export function ShieldCheck(props: IconProps) { return <svg {...base} {...props}><path d="M12 3 5 6v5c0 4.6 2.8 8.2 7 10 4.2-1.8 7-5.4 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></svg>; }
export function Brain(props: IconProps) { return <svg {...base} {...props}><path d="M9 5a3 3 0 0 0-5 2c0 1 .4 1.8 1 2.4A3.5 3.5 0 0 0 6 16v1a3 3 0 0 0 6 0V7a3 3 0 0 0-3-2ZM15 5a3 3 0 0 1 5 2c0 1-.4 1.8-1 2.4a3.5 3.5 0 0 1-1 6.6v1a3 3 0 0 1-6 0V7a3 3 0 0 1 3-2Z" /><path d="M8 10h4M16 10h-4M8 15h4M16 15h-4" /></svg>; }
export function Sparkles(props: IconProps) { return <svg {...base} {...props}><path d="m12 3 1.2 3.8L17 8l-3.8 1.2L12 13l-1.2-3.8L7 8l3.8-1.2L12 3ZM18 14l.7 2.3L21 17l-2.3.7L18 20l-.7-2.3L15 17l2.3-.7L18 14ZM5 13l.7 2.3L8 16l-2.3.7L5 19l-.7-2.3L2 16l2.3-.7L5 13Z" /></svg>; }
export function Menu(props: IconProps) { return <svg {...base} {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>; }
export function Check(props: IconProps) { return <svg {...base} {...props}><path d="m5 12 4 4L19 6" /></svg>; }
