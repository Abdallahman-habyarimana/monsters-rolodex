
import React from 'react'

const Job = ({ job }) => {
    const { languages, tools } = job
    return(
      <>
        <div className="job__item">
            <div className="job__item-details">
              <img className="job__image" src={job.logo} alt="true" />
              <div className="job__description">
                <div className="job__description-top">
                  <span className="job__description-title">{job.company}</span>
                  <ul className="job__description-list">
                    {
                      job.new && <li className="job__description-item">NEW!</li>
                      
                    }
                    {
                      job.featured && <li className="job__description-item">NEW!</li>
                      
                    }
                    
                  </ul>
                </div>
  
                <span className="job__titles">{job.position}</span>
                <ul className="job__description-ul">
                  <li className="job__description-li">1d ago</li>
                  <li className="job__description-li">Full time</li>
                  <li className="job__description-li">USA only</li>
                </ul>
              </div>
            </div>
            <ul className="job__item-list">
              <li className="job__item-list_item">{job.role}</li>
              <li className="job__item-list_item">{job.level}</li>
              {
                languages.map(lang => <li className="job__item-list_item">{lang}</li>)
              }
              {
                tools.map(tool => <li className="job__item-list_item">{tool}</li>)
              }
            </ul>
          </div>
      </>
    )
  }

export default Job