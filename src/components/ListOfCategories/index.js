import React, { useState, useEffect } from 'react'

import { Catergory, Category } from '../category'
import { List, Item } from './styles'
//import { categories as mockCategories } from '../../../api/db.json'

export const ListOfCategories = () => {

  const [ categories, setCategories] = useState([])
  const [ showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    fetch('https://petgram-server-bryansrm.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.addEventListener('scroll', onScroll)

  })

  const renderList = ( fixed ) => (
    <List className={ fixed ? 'fixed' : ''}>
      {
        categories.map(
          category => <Item key={category.id}> <Category {...category}/> </Item>
        )
      }
    </List>
  )

  return (
    <>
      { renderList() }
      { showFixed && renderList(true) }
    </>
  )
}