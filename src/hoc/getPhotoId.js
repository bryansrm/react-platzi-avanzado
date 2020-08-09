import { gql } from '@apollo/client';

export const getPhotoId = gql`
query getSinglePhoto($id: ID!) {
  photo(id: $id) {
		id
  	categoryId
    src
    likes
    liked
    userId
	}
}
`;