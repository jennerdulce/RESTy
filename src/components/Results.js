import React from 'react';
// import JSONPretty from 'react-json-prettify';
import { When } from 'react-if';
import ReactJson from 'react-json-view'

function Results({ resultHeaders, searchResults }) {
  return (
    <>
      <When condition={resultHeaders}>
        <h3 aria-label="testHeader">Headers</h3>
        <ReactJson src={resultHeaders} theme="ashes" />
        <h3 aria-label="testHeader">Results</h3>
        <ReactJson src={searchResults} theme="ashes" />
      </When>
    </>
  )
}

export default Results