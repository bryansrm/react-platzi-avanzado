import React from 'react'

import { Catergory, Category } from '../category'
import { List, Item } from './styles'
import { categories } from '../../../api/db.json'

export const ListOfCategories = () => {
  return (
    <List>
      {
        categories.map(
          category => <Item key={category}> <Category {...category}/> </Item>
        )
      }
    </List>
  )
}