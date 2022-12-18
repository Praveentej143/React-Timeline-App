// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props

  const renderTimeline = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <>
      <div className="bg-container">
        <div className="app-container">
          <div className="header-container">
            <h1 className="main-page-heading">MY JOURNEY OF</h1>
            <h1 className="heading">CCBP 4.0</h1>
          </div>
          <div>
            <Chrono
              items={timelineItemsList}
              mode="VERTICAL_ALTERNATING"
              theme={{
                secondary: 'white',
              }}
            >
              {timelineItemsList.map(eachItem => renderTimeline(eachItem))}
            </Chrono>
          </div>
        </div>
      </div>
    </>
  )
}

export default TimeLineView
