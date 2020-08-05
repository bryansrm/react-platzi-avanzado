import React from 'react'

import { PhotoCard } from '../PhotoCard/index'
import { List, Item } from './styles'
import { categories } from '../../../api/db.json'

export const ListOfPhotoCards = () => {
  return (
    <ul>
      {
        [1, 2, 3].map(
          id => <PhotoCard key={id}/>
        )
      }
    </ul>
  )
}