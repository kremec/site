import React from 'react'
import ProjectCard from './project_card'
import { PROJECTS, Project } from '../constants/projects'

const ProjectList: React.FC = () => (
  <div className="not-prose text-black">
    <ul className="flex flex-col items-start gap-y-5">
      {PROJECTS.map((project: Project) => (
        <li className="w-full" key={project.title}>
          <ProjectCard {...project} />
        </li>
      ))}
    </ul>
  </div>
)

export default ProjectList
