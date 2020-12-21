import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Navigation from '../../components/dashboard/Navigation'
import './Connect.scss'

function Connect() {
    return (
        <div>
          <Navigation />
          <div className="container">
              <h1><span className="shadow">C</span>onnect page</h1>
              <form id="search-form">
                  <label htmlFor="location" hidden>Location</label>
                  <input type="search" id="location" placeholder="Enter Location" />
              </form>
          </div>
        
        </div>
    )
}

export default Connect
