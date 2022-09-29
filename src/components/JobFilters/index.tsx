import JobFilterTag from '../JobFilterTag'
import './style.css'

type JobFiltersProps = {
  tags: string[]
  removeTag: (tag: string) => void
  clear: VoidFunction
}

function JobFilters({ tags, removeTag, clear }: JobFiltersProps) {
  return (
    <div className="job-filters">
      <div className="job-filters-tags">
        {tags.map(tag => (
          <JobFilterTag key={tag} tag={tag} removeTag={removeTag} />
        ))}
      </div>
      <button type="button" className="job-filters-btn" onClick={clear}>
        Clear
      </button>
    </div>
  )
}

export default JobFilters
