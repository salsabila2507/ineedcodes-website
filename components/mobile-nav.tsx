"use client";

import { useState } from "react";
import { Menu } from "./icons";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-nav">
      <button className="icon-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu"><Menu /></button>
      {open && <div className="mobile-menu">
        <a href="#capabilities" onClick={() => setOpen(false)}>Capabilities</a>
        <a href="#workflow" onClick={() => setOpen(false)}>Workflow</a>
        <a href="#install" onClick={() => setOpen(false)}>Install</a>
        <span>Docs: Coming soon</span>
      </div>}
    </div>
  );
}
