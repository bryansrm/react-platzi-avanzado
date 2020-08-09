import React from 'react'

import { PhotoCard } from '../PhotoCard/index'

import { gql, useQuery } from '@apollo/client';

const getPhotos = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListOfPhotoCards = ( {categoryId} ) => {

  const { loading, error, data } = useQuery(getPhotos, { variables: {categoryId}});

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