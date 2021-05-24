import './Help.scss';
import React from 'react';

class Help extends React.Component {
  render() {
    return (
      <div className="helpbg">
        <h2>How to use RESTy</h2>
        <div className="help">
          <h3>GET</h3>
          <img src="./images/get.png" alt="get example" width="1000" />
          <p>Start by entering a URL into the URL textbox, select the 'GET' method, and hit 'Go'. This will display viable response information from the API you requested from</p>
        </div>
        <div className="help">
          <h3>POST</h3>
          <img src="./images/post1.png" alt="post example"></img>
          <img src="./images/post2.png" alt="post example"></img>
          <p>Start by entering a URL into the URL textbox, select the 'POST' method. From here you will need to enter a specific object in the box area 'Type Here', as required by the API you are communicatiing with. Lastly, hit 'Go'. If successful, this should display the newly created object.</p>
        </div>
        <div className="help">
          <h3>PUT</h3>
          <img src="./images/put.png" alt="put example"></img>
          <p>Start by entering a URL into the URL textbox with a interger that will represent the ID number of the item that you would like to alter as attatched as a query parameter. Select the 'PUT' method. From here you will need to enter a specific object box area 'Type Here', as required by the API you are communicatiing with. Lastly, hit 'Go'. If successful, this should display the modified.</p>
        </div>
        <div className="help">
          <h3>DELETE</h3>
          <img src="./images/delete.png" alt="delete example"></img>
          <p>Start by entering a URL into the URL textbox with a interger that will represent the ID number of the item that you would like to alter as attatched as a query parameter. Hit 'Go'. If successful, this should display the deleted object.</p>
        </div>
      </div>
    )
  }
}

export default Help;