import React from 'react'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1452857297128-d9c29adba80b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0 }) => {
  
  const key= `like-${id}`
  const [ liked, setLiked ] = useLocalStorage(key, false)
  const [ show, ref ] = useNearScreen(key, false)

  const Icon = liked ? MdFavorite : MdFavoriteBorder  

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
            <Button onClick={() => setLiked(!liked)}>
              <Icon size="30"/> {likes}
            </Button>
          </>
      }
    </Article>
  )

}