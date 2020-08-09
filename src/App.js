import React from 'react'

import { GlobalStyle } from './GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories/index'
import { ListOfPhotoCards } from './components/ListOfPhotoCards/index'
import { Logo } from './components/Logo/index'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'

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
          <ListOfCategories />
          <ListOfPhotoCards categoryId={2} />
        </>
      }
      
    </>
  )
}
