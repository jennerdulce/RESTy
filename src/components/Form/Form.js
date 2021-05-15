import './Form.css';
import React from 'react';

class Form extends React.Component {

  state = {
    urlInput: '',
    method: '',
    output: ''
  }

  handleGO = (e) => {
    e.preventDefault()
    this.setState(
      { ...this.state, output: `${this.state.method} ${this.state.urlInput}`}
    )
  }

  
    handleChangeMethod = (e) => {
    this.setState(
      { ...this.state.formValues, [e.target.name]: e.target.value }
    )
    console.log(e)
  }

  // handleChangeMethod = (e) => {
  //   this.setState(
  //     { ...this.state, method: e.target.value }
  //   )
  //   console.log(e)
  // }

  // Dynamic
  handleChange = (e) => {
    this.setState(
      { ...this.state, [e.target.name]: e.target.value }
    )
  }

  render() {
    return (
      <form onSubmit={this.handleGO}>
        <div>
          URL: <input onChange={this.handleChange} type="text" name="urlInput"/>
          <button>GO!</button>
        </div>
        <div className="radio">
          <label>
            <input onChange={this.handleChange} type="radio" name="method" value="get" />
            GET
          </label>
          <label>
            <input onChange={this.handleChange} type="radio" name="method" value="post" />
            POST
          </label>
          <label>
            <input onChange={this.handleChange} type="radio" name="method" value="put" />
            PUT
          </label>
          <label>
            <input onChange={this.handleChange} type="radio" name="method" value="delete" />
            DELETE
          </label>
        </div>
        <div className="results">
          <p>{this.state.output}</p>
        </div>
      </form>
    )
  }
}

export default Form
