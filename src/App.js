import React from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      urlInput: '',
      method: '',
      search: '',
      headers: '',
      results: ''
    }
  }

  handleGO = async (e) => {
    e.preventDefault()
    if (this.state.method === 'get' && this.state.urlInput) {
      this.setState(
        { ...this.state, search: `${this.state.method} ${this.state.urlInput}` }
      )
      await axios.get(this.state.urlInput)
        .then(res => {
          this.setState(
            { ...this.state, headers: res.headers, results: res.data.results }
          );
        })
    }
  }


  // Dynamic
  handleChange = (e) => {
    this.setState(
      { ...this.state, [e.target.name]: e.target.value }
    )
  }

  // handleChangeMethod = (e) => {
  //   this.setState(
  //     { ...this.state, [e.target.name]: e.target.value }
  //   )
  //   console.log(e)
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Form
          handleChange={this.handleChange}
          handleGO={this.handleGO}
          search={this.state.search}
          results={this.state.results}
          headers={this.state.headers}
        />
        <Footer />
      </div>
    )
  }
}

export default App;
