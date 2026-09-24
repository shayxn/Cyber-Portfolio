import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Minimize2, Maximize2, X } from "lucide-react";

interface CommandHistory {
  type: 'input' | 'output';
  content: React.ReactNode;
}

export function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [history, setHistory] = useState<CommandHistory[]>([
    { type: 'output', content: "Welcome to the interactive terminal v1.0.0" },
    { type: 'output', content: "Type 'help' to view a list of available commands." }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      const terminalContainer = bottomRef.current.closest('.terminal-container') as HTMLElement;
      if (terminalContainer) {
        terminalContainer.scrollTop = terminalContainer.scrollHeight;
      }
    }
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: 'input' as const, content: cmd }];

    let output: React.ReactNode = "";

    switch (trimmedCmd) {
      case "help":
        output = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-primary/80">
            <div><span className="text-accent">help</span>       - View this menu</div>
            <div><span className="text-accent">whoami</span>     - About the user</div>
            <div><span className="text-accent">projects</span>   - List projects</div>
            <div><span className="text-accent">skills</span>     - List technical skills</div>
            <div><span className="text-accent">socials</span>    - Display social links</div>
            <div><span className="text-accent">neofetch</span>   - System information</div>
            <div><span className="text-accent">clear</span>      - Clear terminal</div>
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "whoami":
        output = (
          <div className="space-y-1">
            <div><span className="text-accent">Name</span>: Shayan Ali</div>
            <div><span className="text-accent">Role</span>: Cybersecurity Analyst</div>
            <div><span className="text-accent">Location</span>: United Arab Emirates</div>
            <div><span className="text-accent">Focus</span>: Red Teaming, SOC Operations</div>
          </div>
        );
        break;
      case "projects":
        output = (
          <div className="space-y-2">
            <div><span className="text-accent font-bold">Insider Lab</span> - Endpoint Forensics, Execution, Credential Access</div>
            <div><span className="text-accent font-bold">AI Risk Assessment</span> - GRC, AI Governance, Risk Management</div>
            <div><span className="text-accent font-bold">Malware Exploit Investigation</span> - Forensics, Kibana, Wireshark</div>
            <div><span className="text-accent font-bold">HackTheBox</span> - Expressway & Planning</div>
            <div className="text-muted-foreground mt-2">Type 'help' for more commands.</div>
          </div>
        );
        break;
      case "skills":
        output = (
          <div className="grid grid-cols-2 gap-4 max-w-md">
            <div>
              <div className="text-accent mb-1">Offensive</div>
              <ul className="list-disc list-inside text-primary/80">
                <li>Vulnerability Assessment</li>
                <li>Metasploit & Nmap</li>
                <li>Burp Suite</li>
              </ul>
            </div>
            <div>
              <div className="text-accent mb-1">Defensive & GRC</div>
              <ul className="list-disc list-inside text-primary/80">
                <li>Splunk & Sentinel SIEM</li>
                <li>Security Onion & Wireshark</li>
                <li>Digital Forensics & Malware Analysis</li>
                <li>Active Directory & ISO 27001</li>
              </ul>
            </div>
          </div>
        );
        break;
      case "socials":
        output = (
          <div className="space-y-1">
            <div>GitHub: <a href="https://github.com/shayxn" target="_blank" className="underline hover:text-accent">github.com/shayxn</a></div>
            <div>LinkedIn: <a href="https://www.linkedin.com/in/shayan89/" target="_blank" className="underline hover:text-accent">linkedin.com/in/shayan89</a></div>
            <div>Email: <a href="mailto:syedshayan03@protonmail.com" className="underline hover:text-accent">syedshayan03@protonmail.com</a></div>
          </div>
        );
        break;
      case "neofetch":
        output = (
          <div className="flex flex-col sm:flex-row gap-6 font-mono text-sm my-2">
            <div className="text-primary hidden sm:block whitespace-pre select-none leading-none">
{`
       .---.
      /     \\
      | (_) |
      \\     /
       '---'
     _|___|_
    (_______)
`}
            </div>
            <div className="space-y-1">
              <div><span className="text-accent">Host</span>: browser-client</div>
              <div><span className="text-accent">OS</span>: {navigator.platform}</div>
              <div><span className="text-accent">Browser</span>: {navigator.userAgent.split(' ')[0]}</div>
              <div><span className="text-accent">Resolution</span>: {window.screen.width}x{window.screen.height}</div>
              <div><span className="text-accent">Time</span>: {new Date().toLocaleTimeString()}</div>
              <div><span className="text-accent">Date</span>: {new Date().toLocaleDateString()}</div>
              <div className="mt-2 flex gap-1">
                <div className="w-3 h-3 bg-black"></div>
                <div className="w-3 h-3 bg-red-500"></div>
                <div className="w-3 h-3 bg-green-500"></div>
                <div className="w-3 h-3 bg-yellow-500"></div>
                <div className="w-3 h-3 bg-blue-500"></div>
                <div className="w-3 h-3 bg-purple-500"></div>
                <div className="w-3 h-3 bg-cyan-500"></div>
                <div className="w-3 h-3 bg-white"></div>
              </div>
            </div>
          </div>
        );
        break;
      case "":
        break;
      default:
        output = (
          <span>
            Command not found: <span className="text-destructive">{cmd}</span>. Type <span className="text-accent">'help'</span> for list of commands.
          </span>
        );
    }

    if (trimmedCmd) {
        setHistory([...newHistory, { type: 'output', content: output }]);
    } else {
        setHistory(newHistory);
    }
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  if (isClosed) {
    return (
      <div className="terminal-restore">
        <span className="terminal-restore-dot" />
        <span>Terminal session paused</span>
        <button type="button" onClick={() => setIsClosed(false)}>Reopen terminal</button>
      </div>
    );
  }

  return (
    <div className={`terminal-window ${isExpanded ? "terminal-expanded" : ""} ${isMinimized ? "terminal-minimized" : ""}`}>
      {/* Terminal Title Bar */}
      <div className="terminal-titlebar">
        <div className="flex items-center gap-2 text-muted-foreground">
          <TerminalIcon className="w-4 h-4" />
          <span>shayan@portfolio: ~</span>
        </div>
        <div className="terminal-controls">
          <button type="button" aria-label={isMinimized ? "Restore terminal" : "Minimize terminal"} onClick={() => setIsMinimized(!isMinimized)}>
            <Minimize2 size={14} />
          </button>
          <button type="button" aria-label={isExpanded ? "Restore terminal size" : "Expand terminal"} onClick={() => setIsExpanded(!isExpanded)}>
            <Maximize2 size={14} />
          </button>
          <button type="button" aria-label="Close terminal" onClick={() => setIsClosed(true)}>
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Terminal Content */}
      {!isMinimized && (
        <div
          className="terminal-content terminal-container"
          onClick={focusInput}
        >
          <div className="terminal-output">
            {history.map((entry, i) => (
              <div key={i} className="break-words">
                {entry.type === 'input' ? (
                  <div className="flex items-center gap-2 text-primary">
                    <span className="select-none font-bold">[guest@portfolio ~]$</span>
                    <span>{entry.content}</span>
                  </div>
                ) : (
                  <div className="pl-0">{entry.content}</div>
                )}
              </div>
            ))}

            <div className="flex items-center gap-2 text-primary">
              <span className="select-none font-bold">[guest@portfolio ~]$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none flex-1 text-foreground focus:ring-0 p-0"
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
              <span className="animate-pulse w-2 h-4 bg-primary block -ml-2"></span>
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      )}
    </div>
  );
}
