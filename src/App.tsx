import React from 'react'
import { Switch, Route, useParams } from 'react-router-dom'
import './App.css'

import { RanksProvider } from './context/ranks.context'

import Main from './pages/Main/Main'
import Combat from './pages/Combat/Combat'
import Biotic from './pages/Biotic/Biotic'
import Tech from './pages/Tech/Tech'

function App(): JSX.Element {
  return (
    <RanksProvider>
      <div className="App">
        <Switch>
          <Route path="/combat/:skillId?" component={Combat} />
          <Route path="/biotic/:skillId?" component={Biotic} />
          <Route path="/tech/:skillId?" component={Tech} />
          <Route path="/:urlString?" component={Main} />
        </Switch>
      </div>
    </RanksProvider>
  )
}

export default App
