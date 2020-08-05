import React from 'react'

import { GlobalStyle } from './GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories/index'
import { PhotoCard } from './components/PhotoCard/index'

export const App = () => (
  <>
    <GlobalStyle />
    <ListOfCategories />
    <PhotoCard />
  </>
)
