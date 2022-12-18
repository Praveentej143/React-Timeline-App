// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
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
      <div>
        <img src={imageUrl} className="project-img" alt="project" />
      </div>
      <div className="head-container">
        <h1 className="title">{projectTitle}</h1>
        <div className="timer-container">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p className="desc">{description}</p>
      <a href={projectUrl} className="project-link">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
