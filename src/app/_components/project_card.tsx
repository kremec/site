import React from 'react'

export interface ProjectCardProps {
  title: string
  description: string
  link: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
}) => (
  <div className="relative">
    <a href={link} target="_blank" rel="noopener noreferrer" className="peer">
      <div className="relative overflow-hidden rounded-md border-2 border-black">
        <div className="bg-svg1 relative z-10 flex h-full w-full flex-col items-start bg-white p-3">
          <h4 className="text-lg font-bold text-wrap">
            <span className="relative inline-block before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:-z-10 before:bg-white before:blur-[0.5em] before:content-['']">
              {title}
            </span>
          </h4>
          <div className="py-1"></div>
          <p className="text-sm">
            <span className="relative inline-block before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:-z-10 before:bg-white before:blur-[0.5em] before:content-['']">
              {description}
            </span>
          </p>
        </div>
      </div>
    </a>
    <div className="bg-svg2 transition-top absolute top-2 left-2 -z-10 h-full w-full rounded-md duration-300 peer-hover:top-0 peer-hover:left-0" />
  </div>
)

export default ProjectCard
