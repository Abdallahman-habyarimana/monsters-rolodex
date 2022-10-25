import React from 'react'

import "./App.css"
import jobs from "../src/utils/data.json"
import Job from './components/Job'



const App = () => {
  return (
    <div className="container">
      <div className="jobs__container">
        {
          jobs.map(job => <Job job={job} key={job.id} />)
        }
      </div>  
    </div>
  )
}

export default App