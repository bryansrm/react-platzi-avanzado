import React, { useEffect, useRef, useState } from 'react'

import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0 }) => {
  
  const ref = useRef(null)
  const [ show, setShow ] = useState(false) 

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
            <Button>
              <MdFavoriteBorder size="30"/> {likes}
            </Button>
          </>
      }
    </Article>
  )

}