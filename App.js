import React, { useEffect, useContext } from 'react';
import { Route, useHistory, Switch } from 'react-router-dom'

//import logo from './logo.svg';
import './styles/common.css'
import './styles/app.scss'
import {
  Agent,
  Dashboard,
  Htlp,
  MyCruise
} from './pages'
import {
  HistoryList,
  Navigation,
  Footer,
  Header
} from './components'


const initRoutes = [
    {id:1, name: 'DASHBOARD', url: '/dashboard', icon:'dashboard'},
    {id:2, name: 'AGENT', url: '/agent', icon: 'relation'},
    {id:3, name: 'MY CRUISE', url: '/my-cruise', icon: 'boat'},
    {id:4, name: 'HTLP', url: '/htlp', icon: 'help'},
]




export function App(){
  let history = useHistory()


  useEffect(()=>{
    if(history.location.pathname === '/'){
      history.push('/agent')
    }
  })

  return (
    <div className="main-container" id="main-container">
      <Header/>
      <div className="content-w max-width">
        <div className="side-a">
          <Navigation routes={initRoutes}/>
          <HistoryList />
        </div>
        <div className="side-a1"></div>
        <div className="main">
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/agent" component={Agent} />
            <Route path="/htlp" component={Htlp} />
            <Route path="/my-cruise" component={MyCruise} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  )
}
