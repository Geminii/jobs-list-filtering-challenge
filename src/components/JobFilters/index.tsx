import JobFilterTag from '../JobFilterTag'
import './style.css'

function JobFilters() {
  return (
    <div className="job-filters">
      <div className="job-filters-tags">
        <JobFilterTag tag="Frontend" />
        <JobFilterTag tag="Css" />
        <JobFilterTag tag="JavaScript" />
      </div>
      <button type="button" className="job-filters-btn">
        Clear
      </button>
    </div>
  )
}

export default JobFilters
