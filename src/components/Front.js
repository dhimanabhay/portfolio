import "./Front.css";

import React from 'react'
import { Link } from "react-router-dom";


const Front = () => {
  return (
    <div className="front">
        <div className="mask">
            <div className="content">
                <p>
                    Meet me,
                </p>
                <h1>
                    Abhay Dhiman
                </h1>
                <div>
                    <Link to="/project" className="btn">PROJECTS</Link>
                    <Link to="/about" className="btn">About</Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Front