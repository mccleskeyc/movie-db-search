import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchMovie from "./components/SearchMovie";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


class Main extends React.Component {
  render() {
    return (
      <Router>
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <Switch>
          <Route exact path="/" component={SearchMovie} />
          {/* add error route */}
        </Switch>
        
      </div>
      </Router>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));