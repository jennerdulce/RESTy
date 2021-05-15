import React from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Footer />
      </div>
    )
  }
}

export default App;
