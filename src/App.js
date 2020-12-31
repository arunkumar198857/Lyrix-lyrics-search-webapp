import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';
import Footer from './components/layout/Footer'
import {Provider} from './context';
import './App.css';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index}></Route>
              <Route exact path="/lyrics/tracks/:id" component={Lyrics}></Route>
            </Switch>
          </div>
          <Footer />
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
