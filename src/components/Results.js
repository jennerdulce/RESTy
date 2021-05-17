import React from 'react';
import JSONPretty from 'react-json-prettify';

function Results({resultHeaders, searchResults}) {
  return (
    <>
    <h3>Headers</h3>
    <JSONPretty json={resultHeaders} />
    <h3>Results</h3>
    <JSONPretty json={searchResults} />
    </>
  )
}

export default Results