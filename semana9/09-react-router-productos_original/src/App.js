import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header';
import Productos from './pages/Productos';

export const App = () => {
  return (
    <Router>
    <div className="d-flex">
      <Header/>
      <main className="container-fluid">
      <Switch>
        <Route path="/productos" component={Productos}/>
      </Switch>
      </main>
    </div>
    </Router>
  )
}
export default App;