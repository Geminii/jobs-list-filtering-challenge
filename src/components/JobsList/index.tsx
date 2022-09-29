import JobCard, { Job } from '../JobCard'
import './style.css'

type JobsListProps = {
  jobs: Job[]
  addTag: (tag: string) => void
}

function JobsList({ jobs, addTag }: JobsListProps) {
  return (
    <div className="jobs-list">
      {jobs.map((job: Job) => (
        <JobCard key={job.id} job={job} addTag={addTag} />
      ))}
    </div>
  )
}

export default JobsList
