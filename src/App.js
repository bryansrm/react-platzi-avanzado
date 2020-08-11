import React from 'react'
import { Router } from '@reach/router'

import { GlobalStyle } from './GlobalStyles'
import { Logo } from './components/Logo/index'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { Favorites } from './pages/Favorites'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { NavBar} from './components/NavBar/index'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

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
          <>
          <Router>
            <Home path="/" />
            <Home path="/pet/:id" />
          </Router>
          <UserLogged>
          {
            ({ isAuth }) => isAuth
            ? 
              <Router>
                <Favorites path="/favs" />
                <User path="/user" />
              </Router>
            : 
            <Router>
              <NotRegisteredUser path="/favs" />
              <NotRegisteredUser path="/user" />
            </Router>
          }
          </UserLogged>
          </>
          
      }
      <NavBar />
      
    </>
  )
}
