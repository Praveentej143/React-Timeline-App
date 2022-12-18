// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, tagsList, duration} = courseDetails
  return (
    <div className="course-timeline">
      <div className="head-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="timer-container">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <div>
        <p className="desc">{description}</p>
      </div>
      <ul className="tags-container">
        {tagsList.map(each => (
          <li className="each-tag" key={each.id}>
            <p className="tag">{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
