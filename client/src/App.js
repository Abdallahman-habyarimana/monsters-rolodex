import React from 'react'

import "./App.css"
import jobs from "../src/utils/data.json" 

const App = () => {
  return (
    <div className="container">
      <div className="jobs__container">
        <div className="job__item">
          <div className="job__item-details">
            <img className="job__image" src="../assets/images/myhome.svg" alt="true" />
            <div className="job__description">
              <div className="job__description-top">
                <span>Photosnap</span>
                <ul className="job__description-list">
                  <li className="job__description-item">NEW!</li>
                  <li className="job__description-item">FEATURED</li>
                </ul>
              </div>

              <span className="job__titles">Junior frontend developer</span>
              <ul className="job__description-ul">
                <li className="job__description-li">1d ago</li>
                <li className="job__description-li">Full time</li>
                <li className="job__description-li">USA only</li>
              </ul>
            </div>
          </div>
          <ul className="job__item-list">
            <li className="job__item-list_item">Frontend</li>
            <li className="job__item-list_item">Senior</li>
            <li className="job__item-list_item">HTML</li>
            <li className="job__item-list_item">CSS</li>
            <li className="job__item-list_item">Javascript</li>
          </ul>
        </div>
      </div>  
    </div>
  )
}

export default App