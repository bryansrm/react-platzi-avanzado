import React, { useState, useEffect } from 'react'

import { Catergory, Category } from '../category'
import { List, Item } from './styles'
//import { categories as mockCategories } from '../../../api/db.json'

export const ListOfCategories = () => {

  const [ categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://petgram-server-bryansrm.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  return (
    <List>
      {
        categories.map(
          category => <Item key={category.id}> <Category {...category}/> </Item>
        )
      }
    </List>
  )
}