import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

export function ProjectCard({ title, description, tags, link, github, image }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      className="project-card paper-panel lift"
    >
      {image && (
        <div className="project-image">
          <img src={image} alt="" loading="lazy" />
          <span className="project-image-label">CASE FILE</span>
        </div>
      )}
      <div className="project-card-content">
        <div className="project-card-topline">
          <span className="section-kicker">Research / practice</span>
          <span className="project-number">PROJECT</span>
        </div>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag) => <span className="project-tag" key={tag}>{tag}</span>)}
        </div>
        {(github || link) && (
          <div className="project-actions">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-link">
                <Github size={15} /> Repository <ArrowUpRight size={14} />
              </a>
            )}
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-link">
                View case <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}