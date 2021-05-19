import './Form.css';
import React from 'react';
import Results from '../Results.js';

class Form extends React.Component {

  render() {
    return (
      <form data-testid="formTest" onSubmit={this.props.handleGO}>
        <div>
          URL: <input data-testid="urlTest" onChange={this.props.handleChange} type="text" name="urlInput" />
          <button>GO!</button>
        </div>
        <div className="radio">
          <label>
            <input data-testid="radioTest" onChange={this.props.handleChange} type="radio" name="method" value="get" />
            GET
          </label>
          <label>
            <input onChange={this.props.handleChange} type="radio" name="method" value="post" />
            POST
          </label>
          <label>
            <input onChange={this.props.handleChange} type="radio" name="method" value="put" />
            PUT
          </label>
          <label>
            <input onChange={this.props.handleChange} type="radio" name="method" value="delete" />
            DELETE
          </label>
        </div>
        <div className="results">
          <p className="search">{this.props.search}</p>
          <div className="results-output">
            <Results resultHeaders={this.props.headers} searchResults={this.props.results}/>
          </div>
        </div>
      </form>
    )
  }
}

export default Form
