import React, { useEffect, useRef, useState } from 'react'

import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0 }) => {
  
  const key= `like-${id}`
  const ref = useRef(null)
  const [ show, setShow ] = useState(false) 
  const [ liked, setLiked ] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return JSON.parse(like)
    } catch (error) {
      console.log(`error: ${error}`)
    }
  }) 

  useEffect(() => {
    Promise.resolve( typeof window.IntersectionObserver !== 'undefined' 
      ? window.IntersectionObserver
      : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver( function(entries){
        const { isIntersecting } = entries[0]
        if( isIntersecting ){
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(ref.current)
    })
  }, [ref])

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  const setLocalStorage = value => {
    try{
      window.localStorage.setItem(key, value)
      setLiked(value)
    }
    catch(e){
      console.error('Error: '+ e);
    }
  }

  return (
    <Article ref={ref}>
      {
        show && 
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src}/>
              </ImgWrapper>
            </a>
            <Button onClick={() => setLocalStorage(!liked)}>
              <Icon size="30"/> {likes}
            </Button>
          </>
      }
    </Article>
  )

}