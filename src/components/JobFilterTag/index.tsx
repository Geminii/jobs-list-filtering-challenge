import { ReactComponent as RemoveIcon } from '@/assets/icon-remove.svg'
import './style.css'

type JobFilterTagType = {
  tag: string
}

function JobFilterTag({ tag }: JobFilterTagType) {
  return (
    <div className="job-filter-tag">
      <span className="job-filter-tag-name">{tag}</span>
      <button type="button" className="job-filter-tag-btn">
        <RemoveIcon />
      </button>
    </div>
  )
}

export default JobFilterTag
