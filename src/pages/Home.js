import React from 'react'

import { ListOfCategories } from '../components/ListOfCategories/index'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards/index'

export const Home = ({id}) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  );
}