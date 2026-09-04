import { CommandDemo } from "@/components/command-demo";
import { MobileNav } from "@/components/mobile-nav";
import { ArrowRight, ArrowUpRight, Blocks, Brain, Bug, Check, Code, FileEdit, GitBranch, Globe, ShieldCheck, Sparkles, Terminal } from "@/components/icons";

const capabilities = [
  { icon: Code, title: "Code", text: "Understand codebases, write features, and make focused changes across files." },
  { icon: FileEdit, title: "Files", text: "Create, edit, organize, and reason about the files in your project." },
  { icon: Terminal, title: "Terminal", text: "Run commands and use real development tools directly from your shell." },
  { icon: GitBranch, title: "Git", text: "Inspect history, review diffs, and help move work safely through version control." },
  { icon: Bug, title: "Debug & test", text: "Trace failures, form hypotheses, apply fixes, then run the checks that matter." },
  { icon: Globe, title: "Web & MCP", text: "Reach external tools and connected services when the task needs more context." },
];

const examples = [
  ["01", "Build", "Fix this project until it builds successfully."],
  ["02", "Set up", "Install this GitHub project and get it running."],
  ["03", "Debug", "Find out why this API is failing and fix it."],
  ["04", "Learn", "Explain this repository to me like I am a beginner."],
  ["05", "Delegate", "Use multiple agents to investigate and fix this bug."],
];

export default function Home() {
  return <main>
    <nav className="nav-shell" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="iNeedCodes home"><span className="brand-mark"><span>&gt;_</span></span><span>iNeedCodes</span></a>
      <div className="nav-links"><a href="#capabilities">Capabilities</a><a href="#workflow">Workflow</a><a href="#install">Install</a><span className="muted-link" title="Documentation is coming soon">Docs <small>soon</small></span></div>
      <a className="nav-cta" href="#install">Get started <ArrowRight /></a><MobileNav />
    </nav>

    <section id="top" className="hero section-shell">
      <div className="hero-copy">
        <div className="eyebrow reveal"><span /> Autonomous CLI AI agent</div>
        <h1 className="reveal-delay-1">Say what you need.<br /><span>It handles the how.</span></h1>
        <p className="hero-lede reveal-delay-2">iNeedCodes turns simple instructions into completed technical work: planning, coding, running tools, and verifying the result from your terminal.</p>
        <div className="hero-actions reveal-delay-2"><a className="button button-primary" href="#install">Get started <ArrowRight /></a><a className="button button-secondary" href="#examples">See what it can do</a></div>
        <div className="hero-note reveal-delay-2"><ShieldCheck /> You stay in control. iNeedCodes shows its work.</div>
      </div>
      <CommandDemo />
    </section>

    <div className="signal-strip" aria-label="Core functions"><span>PLAN</span><i /><span>CODE</span><i /><span>RUN</span><i /><span>DEBUG</span><i /><span>VERIFY</span><i /><span>EXPLAIN</span></div>

    <section className="section-shell overview section-pad">
      <div className="section-kicker">01 / The agent</div>
      <div className="overview-grid"><h2>Not a chatbot.<br />An agent that does the work.</h2><div className="overview-copy"><p>Most AI waits for the next prompt. iNeedCodes keeps working toward the outcome you asked for.</p><p>It reads the situation, chooses tools, takes action, checks what happened, and adjusts. It is an autonomous loop designed for real technical tasks.</p></div></div>
      <div className="loop-grid">
        {[["01", "Understand", "Turn your request into a clear working objective."], ["02", "Plan", "Choose an approach and the tools needed to execute it."], ["03", "Act", "Edit files, run commands, search, test, and collaborate."], ["04", "Verify", "Inspect the outcome and keep going until it is actually done."]].map(([number, title, text], index) => <article className="loop-card" key={title}><span>{number}</span><div className="loop-icon"><i>{index === 3 ? "✓" : "→"}</i></div><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>

    <section id="examples" className="examples section-pad"><div className="section-shell">
      <div className="split-heading"><div><div className="section-kicker light">02 / Just ask</div><h2>One prompt can be<br />the whole workflow.</h2></div><p>You don&apos;t need to memorize flags, chain commands, or know where to start. Describe the result in plain language.</p></div>
      <div className="example-list">{examples.map(([number, label, quote]) => <div className="example-row" key={number}><span>{number}</span><b>{label}</b><p>&ldquo;{quote}&rdquo;</p><ArrowUpRight /></div>)}</div>
    </div></section>

    <section id="capabilities" className="section-shell section-pad capabilities">
      <div className="section-kicker">03 / Capabilities</div>
      <div className="split-heading dark-heading"><h2>Built to operate,<br />not just answer.</h2><p>A practical toolset for doing end-to-end work in real projects.</p></div>
      <div className="capability-grid">{capabilities.map(({ icon: Icon, title, text }) => <article className="capability-card" key={title}><Icon className="cap-icon" /><h3>{title}</h3><p>{text}</p><span className="card-corner">+</span></article>)}</div>
    </section>

    <section className="orchestration section-pad"><div className="section-shell orchestration-grid">
      <div className="orchestration-copy"><div className="section-kicker light">04 / Multi-agent orchestration</div><h2>Hard problems deserve more than one point of view.</h2><p>iNeedCodes can split complex work across multiple focused agents. They investigate in parallel, challenge assumptions, and bring their findings back into one coordinated result.</p><ul><li><Check /> Parallel investigation</li><li><Check /> Specialized subtasks</li><li><Check /> Independent verification</li><li><Check /> One coordinated outcome</li></ul></div>
      <div className="agent-map" aria-label="Diagram of five coordinated agents"><div className="map-grid" /><div className="agent-node node-main"><span>iNC</span><b>Orchestrator</b><small>coordinating</small></div><div className="agent-node node-a"><span>A1</span><b>Research</b><small>done</small></div><div className="agent-node node-b"><span>A2</span><b>Implement</b><small>working</small></div><div className="agent-node node-c"><span>A3</span><b>Verify</b><small>checking</small></div><div className="agent-node node-d"><span>A4</span><b>Review</b><small>queued</small></div><svg className="map-lines" viewBox="0 0 600 440" preserveAspectRatio="none" aria-hidden="true"><path d="M300 220 C220 220 230 95 140 95" /><path d="M300 220 C390 220 365 95 465 95" /><path d="M300 220 C220 220 230 355 140 355" /><path d="M300 220 C390 220 365 355 465 355" /></svg><div className="map-label label-a">task: inspect</div><div className="map-label label-b">task: build</div><div className="map-label label-c">task: test</div><div className="map-label label-d">task: review</div></div>
    </div></section>

    <section className="section-shell section-pad systems">
      <div className="system-card memory-card"><div className="system-copy"><div className="integration-logo"><Brain /><span>ICM</span></div><div className="section-kicker">05 / Persistent memory</div><h2>Every session can start smarter.</h2><p>Project knowledge doesn&apos;t have to disappear when the terminal closes. With ICM, iNeedCodes can retain useful context, decisions, preferences, and solved problems across sessions.</p><a href="https://github.com/rtk-ai/icm" target="_blank" rel="noreferrer">Explore ICM on GitHub <ArrowUpRight /></a></div><div className="memory-visual"><div className="memory-head"><span>PROJECT MEMORY</span><span>● ACTIVE</span></div><div className="memory-line"><i>decision</i><p>Use the existing auth boundary</p><b>high</b></div><div className="memory-line"><i>resolved</i><p>Build failed on Node version</p><b>high</b></div><div className="memory-line"><i>preference</i><p>Explain unfamiliar commands first</p><b>critical</b></div><div className="memory-foot"><span>context indexed</span><span>ready for recall</span></div></div></div>

      <div className="system-card skills-card"><div className="skills-top"><div><div className="section-kicker">06 / Skills system</div><h2>Extend how the agent thinks and works.</h2></div><Sparkles /></div><p>Skills give iNeedCodes focused methods for specialized work, from deeper reasoning to clearer documentation.</p><div className="skill-list"><a href="https://github.com/ervareza/boost-skill" target="_blank" rel="noreferrer"><span className="skill-glyph">B+</span><div><b>Boost Skill</b><small>Multi-agent reasoning & independent verification</small></div><ArrowUpRight /></a><a href="https://github.com/blader/humanizer" target="_blank" rel="noreferrer"><span className="skill-glyph">H.</span><div><b>Humanizer</b><small>Clearer prose, documentation & README files</small></div><ArrowUpRight /></a><div className="skill-more"><Blocks /><span><b>More skills</b><small>Adapt the agent to the work</small></span><em>extensible</em></div></div></div>
    </section>

    <section className="for-everyone section-pad"><div className="section-shell"><div className="section-kicker light">07 / For every skill level</div><h2>Start simple.<br /><span>Go as deep as you want.</span></h2><div className="audience-grid">
      <article><span className="audience-number">01</span><div className="audience-icon"><span>?</span></div><h3>New to the terminal?</h3><p>Ask in everyday language. iNeedCodes can explain the repository, the commands it uses, and what changed without assuming you already know the jargon.</p><div className="dialog-preview"><span>YOU</span><p>Explain what you&apos;re doing as you go.</p><span>AGENT</span><p>I&apos;ll keep each step clear and explain why it matters.</p></div></article>
      <article><span className="audience-number">02</span><div className="audience-icon"><Terminal /></div><h3>Already shipping?</h3><p>Delegate substantial workflows: repository analysis, targeted implementation, Git-aware changes, testing, debugging, and parallel investigation.</p><div className="code-preview"><span><i>01</i> inspect repository context</span><span><i>02</i> trace failing request path</span><span><i>03</i> implement focused fix</span><span><i>04</i> run tests + review diff</span></div></article>
    </div></div></section>

    <section id="workflow" className="section-shell section-pad workflow"><div className="section-kicker">08 / The workflow</div><div className="split-heading dark-heading"><h2>From request<br />to verified result.</h2><p>One continuous loop, with the context and tools to keep moving.</p></div><div className="workflow-terminal"><div className="terminal-bar"><div className="terminal-dots"><i /><i /><i /></div><span>~/projects/your-app</span><span>bash</span></div><div className="workflow-body"><p className="wf-command"><b>$</b> ineedcodes <span>&quot;fix the build errors in this project&quot;</span></p><div className="wf-block"><b>◆ Inspecting project</b><p>Found a Next.js application. Reading package scripts and compiler config.</p></div><div className="wf-tools"><span><Check /> Read files</span><span><Check /> Run build</span><span><Check /> Trace errors</span></div><div className="wf-change"><span>EDIT</span><p>src/components/ProjectCard.tsx</p><em>added 8, removed 3</em></div><div className="wf-change"><span>EDIT</span><p>src/lib/formatDate.ts</p><em>added 4, removed 2</em></div><div className="wf-success"><Check /><div><b>Build passes successfully</b><p>Fixed two type errors and verified the production build.</p></div><span>DONE</span></div></div></div></section>

    <section id="install" className="install-section section-pad"><div className="section-shell install-inner"><div className="install-copy"><div className="section-kicker light">09 / Get started</div><h2>Your next task is<br />one sentence away.</h2><p>iNeedCodes is being prepared for release. Installation instructions and project links will appear here when they&apos;re available.</p></div><div className="placeholder-grid"><div className="placeholder-card"><span className="placeholder-label">INSTALLATION</span><Terminal /><h3>Install from your terminal</h3><p>Official installation command</p><span className="coming-soon">COMING SOON</span></div><div className="placeholder-card"><span className="placeholder-label">DOCUMENTATION</span><FileEdit /><h3>Read the docs</h3><p>Guides, concepts, and reference</p><span className="coming-soon">COMING SOON</span></div><div className="placeholder-card"><span className="placeholder-label">SOURCE</span><GitBranch /><h3>View on GitHub</h3><p>Official repository link</p><span className="coming-soon">COMING SOON</span></div></div></div></section>

    <footer><div className="section-shell footer-top"><div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark"><span>&gt;_</span></span><span>iNeedCodes</span></a><p>Tell it what you want.<br />It figures out how to do it.</p></div><div className="footer-links"><div><b>Product</b><a href="#capabilities">Capabilities</a><a href="#workflow">Workflow</a><a href="#examples">Examples</a></div><div><b>Resources</b><span>Documentation <small>soon</small></span><span>GitHub <small>soon</small></span><a href="https://github.com/rtk-ai/icm" target="_blank" rel="noreferrer">ICM <ArrowUpRight /></a></div></div></div><div className="section-shell footer-bottom"><span>© {new Date().getFullYear()} iNeedCodes</span><span>Built for the terminal.</span></div></footer>
  </main>;
}
