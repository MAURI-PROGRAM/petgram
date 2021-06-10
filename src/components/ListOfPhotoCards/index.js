import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

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
`


export const ListOfPhotoCards = ({categoryId}) => {
  const { loading, error, data } = useQuery(getPhotos, { variables: { categoryId } })

  if (loading) return <p>loading</p>
  if (error) return <p>Error</p>

  return (
    <ul>
      {data.photos.map((photoCard, id) => (
        <PhotoCard key={id} {...photoCard} />
      ))}
    </ul>
  )
}