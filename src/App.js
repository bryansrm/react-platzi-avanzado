import React from 'react'
import { Router } from '@reach/router'

import { GlobalStyle } from './GlobalStyles'
import { Logo } from './components/Logo/index'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { NavBar} from './components/NavBar/index'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  console.log(urlParams)
  const detailId = urlParams.get('detail')
  // const detailId = 3;
  console.log(detailId)
  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId 
        ? <PhotoCardWithQuery id={detailId}/>
        : 
          <Router>
            <Home path="/" />
            <Home path="/pet/:id" />
          </Router>
          
      }
      <NavBar />
      
    </>
  )
}
