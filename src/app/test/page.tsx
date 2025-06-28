import ProjectCard from '../_components/project_card'

export default function TestProject() {
  return (
    <div className="p-8">
      <ProjectCard
        title="Test Project"
        description="This is a test description"
        link="https://example.com"
      />
    </div>
  )
}
