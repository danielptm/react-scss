import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router-dom';
import Footer from './ui//Footer/Footer';
import City from './ui/City/City';
import Header from './ui/containers/Header/Header';
import About from "./routes/About/About";
import Experience from "./routes/Experience/Experience";
import Projects from "./routes/Projects/Projects";
import ImageSlideShow from "./routes/ImageSlideShow/ImageSlideShow";

class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
              <div>
                  <Header />
                  <Switch>
                      <Route path="/" exact component={City} />
                      <Route path="/about" exact component={About} />
                      <Route path="/experience" exact component={Experience} />
                      <Route path="/projects" exact component={Projects} />
                      <Route path="/slideshow" exact component={ImageSlideShow} />
                      <Route path="/*" exact component={City} />
                  </Switch>
              </div>
          </BrowserRouter>
          <Footer />
      </div>
    );
  }
}

export default App;
