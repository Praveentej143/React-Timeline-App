// Write your code here
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-timeline">
      <h1>{projectTitle}</h1>
    </div>
  )
}
export default ProjectTimelineCard
