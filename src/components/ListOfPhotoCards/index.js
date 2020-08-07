import React from 'react'

import { PhotoCard } from '../PhotoCard/index'
import { List, Item } from './styles'
import { categories } from '../../../api/db.json'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {
        [1, 2, 3, 4, 5, 6, 7, 8].map(
          id => <PhotoCard key={id} id={id}/>
        )
      }
    </ul>
  )
}