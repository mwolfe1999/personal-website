"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import type { Project } from "@/data/projects";

// Category-themed gradient placeholders
const categoryGradients: Record<string, string> = {
  "Built for Fellow MBA Students": "from-blue-100 to-sky-50",
  "Built for Family & Friends": "from-rose-100 to-pink-50",
  "Built for Personal Productivity": "from-violet-100 to-indigo-50",
  "Built for Fun": "from-emerald-100 to-green-50",
};

function MediaPreview({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [imageError, setImageError] = useState(false);

  const gradient = categoryGradients[project.category] || "from-gray-100 to-gray-50";

  if (project.video) {
    return (
      <video
        ref={videoRef}
        src={project.video}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-48 object-cover"
        onMouseEnter={() => videoRef.current?.play()}
        onMouseLeave={() => {
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }}
      />
    );
  }

  if (project.image && !imageError) {
    return (
      <Image
        src={project.image}
        alt={project.name}
        width={600}
        height={300}
        className="w-full h-48 object-cover"
        onError={() => setImageError(true)}
      />
    );
  }

  // Gradient placeholder with initials
  const initials = project.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className={`w-full h-48 bg-gradient-to-br ${gradient} flex items-center justify-center`}
    >
      <span className="text-4xl font-heading text-text-muted/50">{initials}</span>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();
  const isClickable = project.hasDetailPage;

  return (
    <div
      className={`group bg-surface rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
        isClickable ? "cursor-pointer" : ""
      }`}
      onClick={
        isClickable
          ? () => router.push(`/projects/${project.id}`)
          : undefined
      }
    >
      <MediaPreview project={project} />

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-heading text-xl text-text-primary">{project.name}</h3>
          {project.isWip && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-wip/10 text-wip">
              Coming Soon
            </span>
          )}
        </div>

        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {project.blurb}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded-full bg-background text-text-muted border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        {!project.isWip && (
          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
              >
                View Live Site &rarr;
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-sm font-medium text-text-muted hover:text-text-secondary transition-colors"
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
