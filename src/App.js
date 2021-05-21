import React from 'react';
import axios from 'axios';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      urlInput: '',
      method: '',
      search: '',
      headers: '',
      results: '',
      searchHistory: [
        [{ search: 'Dummy Data', urlInput: 'someUrl INput', headers: 'Some Header Json Data', results: 'Some big JSON' }]
      ]
    }
  }
  handleGO = async (e) => {
    e.preventDefault()
    console.log('in handleGo', this.state.method, this.state.urlInput)
    if (this.state.method === 'get' && this.state.urlInput) {

      this.setState(
        { ...this.state, search: `${this.state.method} ${this.state.urlInput}` }
      )
      await axios.get(this.state.urlInput)
        .then(res => {
          this.setState(
            {
              ...this.state,
              headers: res.headers,
              results: res.data.results,
              searchHistory: [...this.state.searchHistory, {
                urlInput: this.state.urlInput,
                search: this.state.search,
                headers: this.state.headers,
                results: this.state.headers
              }]
            }
          );
        })
    }
  }

  // Dynamic
  handleChange = (e) => {
    // console.log(e.target.name , e.target.value)
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
      <Router>
        <div className="App">
          <Header />
          <Navbar />
          <Form
            handleChange={this.handleChange}
            handleGO={this.handleGO}
            search={this.state.search}
            results={this.state.results}
            headers={this.state.headers}
          />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
