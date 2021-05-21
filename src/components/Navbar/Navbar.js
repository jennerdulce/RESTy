import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
// import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return(
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/history'>History</Link></li>
      </ul>
    )
  }
}

export default Navbar