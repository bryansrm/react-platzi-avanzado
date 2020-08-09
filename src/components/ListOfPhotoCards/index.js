import React from 'react'

import { PhotoCard } from '../PhotoCard/index'

import { gql, useQuery } from '@apollo/client';

const getPhotos = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListOfPhotoCards = () => {

  const { loading, error, data } = useQuery(getPhotos);

  console.log(data);

  return (
    <ul>
      {
        [1, 2, 3, 4, 5, 6, 7, 8].map(
          id => <PhotoCard key={id} id={id}/>
        )
      }
    </ul>
  )
}