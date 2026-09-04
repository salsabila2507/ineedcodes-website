"use client";

import { useEffect, useState } from "react";

const commands = [
  "Fix this project until it builds successfully.",
  "Find out why this API is failing and fix it.",
  "Explain this repository to me like I am a beginner.",
  "Use multiple agents to investigate and fix this bug.",
];

export function CommandDemo() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % commands.length), 4400);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <div className="hero-terminal reveal-delay-2">
      <div className="terminal-bar">
        <div className="terminal-dots" aria-hidden="true"><i /><i /><i /></div>
        <span>ineedcodes / agent session</span><span className="terminal-status"><i /> working</span>
      </div>
      <div className="terminal-body">
        <div className="linux-prompt"><span>user@ineedcodes</span><i>:</i><b>~/project</b><strong>$</strong></div>
        <div className="command-line"><span className="prompt">›</span><span className="command">ineedcodes <span className="command-quote">&quot;{commands[active]}&quot;</span></span><span className="cursor" /></div>
        <div className="terminal-activity" aria-label="Live Linux terminal activity">
          <p><i className="activity-dot" /> agent loop started <span>PID 1842</span></p>
          <p><b>$</b> <span>git status --short</span><em>scanning</em></p>
          <p><b>$</b> <span>npm run test -- --watch=false</span><em>queued</em></p>
        </div>
        <div className="agent-output" key={active}>
          <p><span className="agent-mark">◆</span> I&apos;ll inspect the project and work through this.</p>
          <div className="agent-step"><span>01</span><b>Understand</b><em>Reading context and project structure</em><i>done</i></div>
          <div className="agent-step active"><span>02</span><b>Act</b><em>Using the right tools for the task</em><i>now</i></div>
          <div className="agent-step"><span>03</span><b>Verify</b><em>Checking the result independently</em><i>queued</i></div>
        </div>
      </div>
      <div className="terminal-foot"><span>natural language in</span><span>verified work out</span></div>
    </div>
  );
}
