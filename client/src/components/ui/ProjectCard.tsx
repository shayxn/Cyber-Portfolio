import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Lock } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export function ProjectCard({ title, description, tags, link, github }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="cyber-border bg-card/50 backdrop-blur-sm h-full flex flex-col"
    >
      <Card className="border-0 bg-transparent shadow-none h-full flex flex-col">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl font-mono text-primary truncate">{title}</CardTitle>
            <Lock className="w-4 h-4 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground text-sm font-sans mb-4 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="border-primary/30 text-primary/80 font-mono text-xs hover:bg-primary/10"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-4 border-t border-primary/10 pt-4 mt-auto">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm font-mono"
            >
              <Github className="w-4 h-4" /> REPO
            </a>
          )}
          {link && (
            <a 
              href={link} 
              target="_blank" 
              className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-2 text-sm font-mono"
            >
              <ExternalLink className="w-4 h-4" /> DEMO
            </a>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
