import React from 'react'

import { PhotoCard } from '../PhotoCard/index'
import { useGetPhotos } from '../../hooks/useGetPhotos'

export const ListOfPhotoCards = ( {categoryId} ) => {
  const { loading, error, data } = useGetPhotos(categoryId)

  if (loading) return ''
  return (
    <ul>
      {
        data.photos.map(
          photo => <PhotoCard key={photo.id} {...photo}/>
        )
      }
    </ul>
  )
}