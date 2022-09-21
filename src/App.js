import React from 'react'
import './App.css';
import Home from './pages/Home'
import Banquet from './pages/Banquet'
import SingleBanquet from './pages/SingleBanquet';
import Menu from './pages/Menu'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Error from './pages/Error';
import Navbar from './components/Navbar'

import { Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <>
    
    <Navbar/>
    <Switch>
      
        <Route exact path="/" component={Home} />
        <Route exact path="/banquet/" component={Banquet} />
        <Route exact path="/banquet/:slug" component={SingleBanquet} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
   </>
  )
}
{/*/55:39 */}
export default App