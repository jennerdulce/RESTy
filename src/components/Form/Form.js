import './Form.css';
import React from 'react';
import Content from '../Content/Content';

class Form extends React.Component {

  render() {
    return (
      <div>
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
        </form>
        <Content
          search={this.props.search}
          results={this.props.results}
          headers={this.props.headers} />
      </div>
    )
  }
}

export default Form
