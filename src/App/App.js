import React, { Component } from 'react';
import styles from './App.scss';
import Footer from './ui//Footer/Footer';
import City from './ui/City/City';
import Header from './ui/containers/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <City />
          <Footer />
      </div>
    );
  }
}

export default App;
