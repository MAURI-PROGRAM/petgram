import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Image,Link ,Grid} from './styles'

const GET_FAVORITES = gql`
query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`;

export const ListOfFavs = () => {
    const { loading, error, data } = useQuery(GET_FAVORITES, { fetchPolicy: 'cache-and-network' })
    console.log(loading, error, data)
    
    if (loading) return <p>loading</p>
    if (error) return <p>Hay error</p>
    const {favs}  = data
    return <Grid> {favs.map((fav) => 
            <Link key ={fav.id} to={`/detail/${fav.id}`}>
                <Image src={fav.src}/>
            </Link>) }</Grid>
    
  
    
  }
