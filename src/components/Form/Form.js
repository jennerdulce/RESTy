import './Form.scss';
import React from 'react';
import Content from '../Content/Content';

class Form extends React.Component {

  render() {
    return (
      <div>
        <form data-testid="formTest" onSubmit={this.props.handleGO}>
          <div>
            URL: <input data-testid="urlTest" onChange={this.props.handleChange} type="text" name="urlInput" value={this.props.urlInput}/>
            <button>GO!</button>
          </div>
          <div className="radio">
            <label>
              <input data-testid="radioTestGet" onChange={this.props.handleChange} type="radio" name="method" value="get" checked={this.props.method === 'get'}/>
            GET
          </label>
            <label>
              <input data-testid="radioTestPost" onChange={this.props.handleChange} type="radio" name="method" value="post" checked={this.props.method === 'post'} />
            POST
          </label>
            <label>
              <input data-testid="radioTestPut" onChange={this.props.handleChange} type="radio" name="method" value="put" checked={this.props.method === 'put'}/>
            PUT
          </label>
            <label>
              <input data-testid="radioTestDelete" onChange={this.props.handleChange} type="radio" name="method" value="delete" checked={this.props.method === 'delete'}/>
            DELETE
          </label>
          </div>
          <textarea data-testid="inputBody" onChange={this.props.handleChange} name="body" cols="40" rows="10" placeholder="Type here..."></textarea>
        </form>
        <Content
          search={this.props.search}
          results={this.props.results}
          headers={this.props.headers}
          searchHistory={this.props.searchHistory}
          handleClick={this.props.handleClick} 
          loading={this.props.loading}
          />
      </div>
    )
  }
}

export default Form
