import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
// import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return(
      <ul>
        <li><Link data-testid="testHomePage" to='/'>Home</Link></li>
        <li data-testid="testHistoryPage"><Link to='/history'>History</Link></li>
        <li data-testid="testHelpPage"><Link to='/help'>Help</Link></li>
      </ul>
    )
  }
}

export default Navbar