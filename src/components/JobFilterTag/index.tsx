import { ReactComponent as RemoveIcon } from '@/assets/icon-remove.svg'
import './style.css'

type JobFilterTagType = {
  tag: string
  removeTag: (tag: string) => void
}

function JobFilterTag({ tag, removeTag }: JobFilterTagType) {
  return (
    <div className="job-filter-tag">
      <span className="job-filter-tag-name">{tag}</span>
      <button type="button" className="job-filter-tag-btn" onClick={() => removeTag(tag)}>
        <RemoveIcon />
      </button>
    </div>
  )
}

export default JobFilterTag
