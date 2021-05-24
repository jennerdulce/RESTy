import './Content.scss';
import React from 'react';
import Results from '../Results.js';
import Loading from '../Loading/Loading';

class Content extends React.Component {
  render() {
    return (
      <>
        {
          this.props.results
            ? <div>
              <div className="results">
                <div className="search">
                  <ul>
                    {
                      this.props.searchHistory.map((value, idx) =>
                        <li  key={idx}>
                          {/* SAME PROP NAME DIFFERENT VALUES PASS IN PROPS */}
                          <button aria-label="testHistory" onClick={this.props.handleClick} value={value.id}>{value.search}</button>
                        </li>
                      )
                    }
                  </ul>
                </div>
                <div className="results-output">
                  <Results resultHeaders={this.props.headers} searchResults={this.props.results} />
                </div>
              </div>
            </div>
            : this.props.loading
              ? <Loading />
              : <div>
                <div className="results">
                  <div className="search">
                    <ul>
                      {
                        this.props.searchHistory.map((value, idx) =>
                          <li key={idx}>
                            {/* SAME PROP NAME DIFFERENT VALUES PASS IN PROPS */}
                            <button onClick={this.props.handleClick} value={value.id}>{value.search}</button>
                          </li>
                        )
                      }
                    </ul>
                  </div>
                  <div className="results-output">
                    <Results resultHeaders={this.props.headers} searchResults={this.props.results} />
                  </div>
                </div>
              </div>
        }
      </>
    )

  }
}

export default Content;
