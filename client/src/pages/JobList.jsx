
import React, { useState } from 'react';
import jobs from "../../src/utils/data.json";
import Job from "../components/Job"

const JobList = () => {
  const [jobList, setJobList] = useState(jobs)
const [filter, setFilter] = useState(false);
const [filterArray, setFilterArray] = useState([]);
const [prevList, setPrevList] = useState([])

const handleFilterArray = (item) => {
  setPrevList(jobList)
  const newArray = 
    jobList.filter(job => 
      job.languages.includes(item) || 
      job.role === item ||
      job.level === item ||
      job.tools.includes(item));
  setJobList(newArray)
}

console.log(jobList.length)

const handleAddToArray = (item) => {
  setFilter(true)
  const checkExisting = filterArray.find(exist => exist === item)
  if (checkExisting) return;
  handleFilterArray(item)
  const newArray = [...filterArray, item];
  setFilterArray(newArray)
  
}

const handleRemoveToArray = (item) => {
  const newArray = filterArray.filter(value => value !== item)
    if(newArray.length === 0) handleClear();
    setJobList(prevList)
  setFilterArray(newArray);
}

const handleClear = () => {
  setFilter(false)
  setFilterArray([]);
  setPrevList([])
  setJobList(jobs);
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
        jobList.map(job => <Job job={job} key={job.id} onFilter={handleAddToArray} />)
      }
    </div>  
  </div>
)
}

export default JobList