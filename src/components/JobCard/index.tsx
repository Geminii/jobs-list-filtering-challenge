import Badge from '../Badge'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as StarEmptyIcon } from '@/assets/icon-star-empty.svg'
import { ReactComponent as StarFilledIcon } from '@/assets/icon-star-filled.svg'
import { addFavoriteJob, removeFavoriteJob, favoriteJobsStore } from './jobReducer'

export type Job = {
  id: number
  company: string
  logo: string
  new: boolean
  featured: boolean
  position: string
  role: string
  level: string
  postedAt: string
  contract: string
  location: string
  languages: string[]
  tools: string[]
}

type JobCardProps = {
  job: Job
  addTag: (tag: string) => void
}

function JobCard({ job, addTag }: JobCardProps) {
  const favoriteJobs = useSelector(favoriteJobsStore)
  const dispatch = useDispatch()
  const isFavorite = favoriteJobs.includes(job.id)

  return (
    <div className="job">
      <img src={job.logo} alt={job.company} className="job-logo" />

      <div className="job-content">
        <div className="job-content-favorite">
          {isFavorite && (
            <button type="button" onClick={() => dispatch(removeFavoriteJob(job.id))}>
              <StarFilledIcon className="filled" />
            </button>
          )}
          {!isFavorite && (
            <button type="button" onClick={() => dispatch(addFavoriteJob(job.id))}>
              <StarEmptyIcon />
            </button>
          )}
        </div>

        <div className="job-content-details">
          <div className="job-detail-company">
            <span className="job-detail-company-name">{job.company}</span>
            <div className="job-detail-company-tags">
              {job.new && <Badge name="New !" />}
              {job.featured && <Badge name="Featured" variant="secondary" />}
            </div>
          </div>

          <h1 className="job-content-details-title">{job.position}</h1>

          <div className="job-content-details-info">
            <span>{job.postedAt}</span>
            <span>{job.contract}</span>
            <span>{job.location}</span>
          </div>
        </div>

        <div className="job-tags">
          {job.languages.map(language => (
            <button key={language} type="button" className="tag" onClick={() => addTag(language)}>
              {language}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JobCard
