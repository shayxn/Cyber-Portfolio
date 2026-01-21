import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Minimize2, Maximize2, X } from "lucide-react";

interface CommandHistory {
  type: 'input' | 'output';
  content: React.ReactNode;
}

export function InteractiveTerminal() {
  const [input, setInput] = useState("");
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
        output = "Hopefully an employer looking to hire.";
        break;
      case "projects":
        output = (
          <div className="space-y-2">
            <div><span className="text-accent font-bold">Network Intrusion System</span> - Python, Snort, Networking</div>
            <div><span className="text-accent font-bold">Vulnerability Scanner</span> - Bash, Linux Security</div>
            <div><span className="text-accent font-bold">Secure Chat App</span> - React, Node.js, Cryptography</div>
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
                <li>Penetration Testing</li>
                <li>Metasploit</li>
                <li>Burp Suite</li>
              </ul>
            </div>
            <div>
              <div className="text-accent mb-1">Defensive</div>
              <ul className="list-disc list-inside text-primary/80">
                <li>Network Monitoring</li>
                <li>Firewall Config</li>
                <li>Incident Response</li>
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
            <div>Email: <a href="mailto:contact@example.com" className="underline hover:text-accent">contact@example.com</a></div>
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

  return (
    <div className="w-full max-w-4xl mx-auto my-12 font-mono text-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-lg overflow-hidden border border-primary/20 bg-black/90 backdrop-blur">
      {/* Terminal Title Bar */}
      <div className="bg-muted/50 px-4 py-2 flex items-center justify-between border-b border-primary/10 select-none">
        <div className="flex items-center gap-2 text-muted-foreground">
          <TerminalIcon className="w-4 h-4" />
          <span>guest@portfolio: ~</span>
        </div>
        <div className="flex gap-2">
          <Minimize2 className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
          <Maximize2 className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
          <X className="w-4 h-4 text-muted-foreground hover:text-destructive cursor-pointer" />
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        className="p-4 h-[400px] overflow-y-auto custom-scrollbar cursor-text terminal-container"
        onClick={focusInput}
      >
        <div className="space-y-2 text-foreground/90">
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
    </div>
  );
}
