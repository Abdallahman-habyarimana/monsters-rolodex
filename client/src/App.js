import React, { useState } from 'react'

import "./App.css"
import jobs from "../src/utils/data.json"
import Job from './components/Job'



const App = () => {
  const [filter, setFilter] = useState(false);
  const [filterArray, setFilterArray] = useState([]);

  const handleAddToArray = (item) => {
    setFilter(true)
    const newArray = [...filterArray, item];
    setFilterArray(newArray)
  }

  const handleRemoveToArray = (item) => {
    const newArray = filterArray.filter(value => value !== item)
      if(newArray.length === 0) handleClear()
    setFilterArray(newArray)
  }

  const handleClear = () => {
    setFilter(false)
    setFilterArray([])
  }
  return (
    <div className="container">
      <div className="jobs__container">
        {
          filter && <div className="jobs__filter">
            {
              filterArray.map(item => (
                <div className="jobs__filter-item" key={item}>
                  <span>{item}</span>
                  <span className="jobs__filter-action" onClick={() => handleRemoveToArray(item)}>x</span>
                </div>
              ))
            }
            <span className="jobs__filter-clear" onClick={handleClear}>Clear</span>
            </div>
          }     

            


        {
          jobs.map(job => <Job job={job} key={job.id} onFilter={handleAddToArray} />)
        }
      </div>  
    </div>
  )
}

export default App