import './App.css'
import JobFilters from './components/JobFilters'
import JobsList from './components/JobsList'

function App() {
  return (
    <>
      <header />
      <div className="container">
        <div className="wrapper">
          <JobFilters />
          <JobsList />
        </div>
      </div>
    </>
  )
}

export default App
