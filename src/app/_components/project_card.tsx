import React from 'react'

export interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  link: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
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
          <p className="text-sm">
            <span className="relative inline-block before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:-z-10 before:bg-white before:blur-[0.5em] before:content-['']">
              {description}
            </span>
          </p>
          <div className="mt-2 flex flex-row flex-wrap gap-3">
            {tech.map((techItem, index) => (
              <p key={index}>
                <span className="relative inline-block font-bold before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:-z-10 before:bg-white before:blur-[0.3em] before:content-['']">
                  {techItem}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </a>
    <div className="bg-svg2 transition-top absolute top-2 left-2 -z-10 h-full w-full rounded-md duration-300 peer-hover:top-0 peer-hover:left-0" />
  </div>
)

export default ProjectCard
