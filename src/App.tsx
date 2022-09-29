import { useEffect, useState } from 'react'
import './App.css'
import { Job } from './components/JobCard'
import JobFilters from './components/JobFilters'
import JobsList from './components/JobsList'

import data from './data/data.json'

function App() {
  const [tags, setTags] = useState<string[]>([])
  const [jobs, setJobs] = useState<Job[]>([])

  const filteredJobs =
    tags.length > 0 ? jobs.filter(job => tags.some(tag => job.languages.includes(tag))) : jobs

  const addTag = (tag: string) => {
    if (tags.includes(tag)) return

    const newTags = [...tags]
    newTags.push(tag)

    setTags(newTags)
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag: string) => tag.toLowerCase() !== tagToRemove.toLowerCase()))
  }

  const clearFilters = () => setTags([])

  useEffect(() => setJobs(data), [])

  return (
    <>
      <header />

      <div className="container">
        <div className="wrapper">
          {tags.length > 0 && (
            <JobFilters tags={tags} removeTag={tag => removeTag(tag)} clear={clearFilters} />
          )}

          <JobsList jobs={filteredJobs} addTag={addTag} />
        </div>
      </div>
    </>
  )
}

export default App
