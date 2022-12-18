// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props

  const renderTimeline = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} courseDetails={item} />
    }

    return <ProjectTimelineCard key={item.id} projectDetails={item} />
  }

  return (
    <>
      <div className="bg-container">
        <div className="app-container">
          <div className="header-container">
            <h1 className="main-page-heading">MY JOURNEY OF CCBP 4.0</h1>
          </div>
          <div style={{width: '100%', height: '95vh'}}>
            <Chrono
              theme={{
                secondary: 'white',
              }}
              items={timelineItemsList}
              mode="VERTICAL_ALTERNATING"
              cardWidth={500}
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
