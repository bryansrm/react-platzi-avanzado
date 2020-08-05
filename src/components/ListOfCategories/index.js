import React from 'react'

import { Catergory, Category } from '../category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  return (
    <List>
      {
        [1,2,3].map(category => <Item key={category}> <Category /> </Item>)
      }
    </List>
  )
}