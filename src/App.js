import React from 'react'

import { GlobalStyle } from './GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories/index'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/index'

export const App = () => (
  <>
    <GlobalStyle />
    <ListOfCategories />
    <ListOfPhotoCards />
  </>
)
