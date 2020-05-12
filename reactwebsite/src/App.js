import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
//import { Dropdown } from './Dropdown';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
       <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/Dropdown" component={Dropdown} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
       </Layout>
      </React.Fragment>
    );
  }
}

export default App;
