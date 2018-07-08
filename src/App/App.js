import React, { Component } from 'react';
import styles from './App.scss';
import Footer from './ui//Footer/Footer';
import City from './ui/City/City';

class App extends Component {
  render() {
    return (
      <div>
          <City />
          <Footer />
      </div>
    );
  }
}

export default App;
