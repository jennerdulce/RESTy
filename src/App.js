import React from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      urlInput: '',
      method: '',
      search: '',
      headers: '',
      results: '',
      body: '',
      searchHistory: []
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
          console.log(res)
          this.setState(
            {
              ...this.state,
              headers: res.headers,
              results: res.data.results || res.data,
              searchHistory: [...this.state.searchHistory, {
                id: uuidv4(),
                urlInput: this.state.urlInput,
                search: this.state.search,
                headers: res.headers,
                results: res.data.results || res.data,
              }]
            }
          );
        })
      if (this.state.method && this.state.urlInput) {
        let stringifiedObjects = JSON.stringify(this.state.searchHistory)
        localStorage.setItem('storedResults', stringifiedObjects);
      }
    } else if (this.state.method === 'post' && this.state.urlInput && this.state.body) {
      await axios({
        method: 'post',
        url: this.state.urlInput,
        data: JSON.parse(this.state.body)
      })
        .then(res => {
          console.log(res)
          this.setState(
            {
              ...this.state,
              headers: res.headers,
              results: res.data.results || res.data,
              searchHistory: [...this.state.searchHistory, {
                id: uuidv4(),
                urlInput: this.state.urlInput,
                search: this.state.search,
                headers: res.headers,
                results: res.data.results || res.data,
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

  handleSearch = (e) => {
    let splitValue = e.target.innerText.split(' ')[1]
    this.setState(
      { ...this.state, urlInput: splitValue }
    )
  }

  handleRetrieve = (e) => {
    let [historyDisplay] = this.state.searchHistory.filter(value => {
      console.log(value.id)
      console.log(e.target.value)
      return value.id === e.target.value
    })

    console.log(historyDisplay)
    this.setState(
      { ...this.state, headers: historyDisplay.headers, results: historyDisplay.results }
    )
    console.log('Hello World')
  }

  componentDidMount() {
    const retrievedData = localStorage.getItem('storedResults');
    if (retrievedData) {
      const parsedRetrievedData = JSON.parse(retrievedData);
      this.setState(
        { ...this.state, searchHistory: parsedRetrievedData }
      )
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Navbar />
          <Route exact path="/">
            <Form
              handleGO={this.handleGO}
              handleClick={this.handleSearch}
              handleChange={this.handleChange}
              searchHistory={this.state.searchHistory}
              search={this.state.search}
              results={this.state.results}
              headers={this.state.headers}
              urlInput={this.state.urlInput}
            />
          </Route>
          <Route exact path="/history">
            <Content
              handleClick={this.handleRetrieve}
              searchHistory={this.state.searchHistory}
              headers={this.state.headers}
              results={this.state.results}
            />
          </Route>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
