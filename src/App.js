import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import FlashCards from "./components/FlashCards";
import Navbar from './components/Navbar';
import { Container, } from "semantic-ui-react"; 
import NoMatch from './components/NoMatch';


const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={FlashCards} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)


export default App;
