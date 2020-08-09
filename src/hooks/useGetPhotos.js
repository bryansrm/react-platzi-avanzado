import { getPhotos } from '../hoc/getPhotos'
import { useQuery } from '@apollo/client';

export const useGetPhotos = categoryId => {
  
  const { loading, error, data } = useQuery(getPhotos, { variables: {categoryId}});

  return { loading, error, data }

}