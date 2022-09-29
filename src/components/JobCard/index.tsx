import Badge from '../Badge'
import './style.css'

function JobCard() {
  return (
    <div className="job">
      <img src="/logos/photosnap.svg" alt="Photosnap" className="job-logo" />

      <div className="job-content">
        <div className="job-content-details">
          <div className="job-detail-company">
            <span className="job-detail-company-name">Photosnap</span>
            <div className="job-detail-company-tags">
              <Badge name="New !" />
              <Badge name="Featured" variant="secondary" />
            </div>
          </div>

          <h1 className="job-content-details-title">Senior Frontend Developer</h1>

          <div className="job-content-details-info">
            <span>1d ago</span>
            <span>Full Time</span>
            <span>USA only</span>
          </div>
        </div>

        <div className="job-tags">
          <button type="button" className="tag">
            Frontend
          </button>
          <button type="button" className="tag">
            Senior
          </button>
          <button type="button" className="tag">
            Html
          </button>
          <button type="button" className="tag">
            Css
          </button>
          <button type="button" className="tag">
            JavaScript
          </button>
        </div>
      </div>
    </div>
  )
}

export default JobCard
