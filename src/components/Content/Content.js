import './Content.scss';
import React from 'react';
import Results from '../Results.js';
import { If, Then, Else, Switch, Case, Default } from 'react-if';

class Content extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Case condition={this.props.search}>
            <div className="results">
              <p className="search">{this.props.search}</p>
              <div className="results-output">
                <Results resultHeaders={this.props.headers} searchResults={this.props.results} />
              </div>
            </div>
          </Case>
          <Case condition={this.props.searchHistory}>
            <div className="results">
              <p className="search">
                {this.props.searchHistory && this.props.searchHistory.map(value =>
                  <p>{value.search}</p>)}
              </p>
              <div className="results-output">
                <p></p>
              </div>
            </div>
          </Case>
          <Default>
            <div className="results">
              <p className="search"></p>
              <div className="results-output">
                <p></p>
              </div>
            </div>
          </Default>
        </Switch>
      </div>
    )
  }
}

export default Content;