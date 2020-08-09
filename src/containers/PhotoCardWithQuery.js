import React from 'react'
import { PhotoCard } from '../components/PhotoCard/index'

import { getPhotoId } from '../hoc/getPhotoId'
import { useQuery } from '@apollo/client';
import { Query } from 'react-apollo'

export const PhotoCardWithQuery = id => {
  const { loading, error, data } = useQuery(getPhotoId, { variables: {id}});

  if (loading) return ''
  console.log(data);
  return <PhotoCard {...data} />
}

// export const PhotoCardWithQuery = id => (

//   <Query query={getPhotoId} variables={{id}}>
//     {
//       ({ loading, error, data = {} }) => {
//         const { photo = {} } = data
//         //if (loading) return null
//         return <PhotoCard {...photo} />
//       }
//     }
//   </Query>

// )