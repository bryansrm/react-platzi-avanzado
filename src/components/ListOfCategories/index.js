import React, { useState, useEffect } from 'react'

import { Catergory, Category } from '../category'
import { List, Item } from './styles'
//import { categories as mockCategories } from '../../../api/db.json'

function useCategoriesData(){
  const [ categories, setCategories] = useState([])
  const [ loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://petgram-server-bryansrm.vercel.app/categories')
    .then(res => res.json())
    .then(response => {
      setCategories(response)
      setLoading(false)
    })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {

  const { categories, loading } = useCategoriesData()
  const [ showFixed, setShowFixed] = useState(false)

  

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.addEventListener('scroll', onScroll)

  })

  const renderList = ( fixed ) => (
    <List fixed={fixed}>
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