import React, { Fragment } from 'react'
import { Article, ImgWrapper, Img, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useMuationToogleLike } from '../../hooks/useMuationToogleLike'
import {FavButton} from '../FavButton'
import {Link} from '@reach/router'
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
import PropTypes from 'prop-types'

export const PhotoCard = ({ id, liked,likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const { mutation, mutationLoading, mutationError } = useMuationToogleLike()

  const handleFavClick = () => {
    mutation({
      variables: {
        input: { id }
      }
    })
  }
  // console.log('{ mutation, mutationLoading, mutationError }', { mutation, mutationLoading, mutationError })

  return (
    <Article ref={element}>
      {
        show && <Fragment>
           <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <FavButton
            liked={liked} likes={likes}
            onClick={handleFavClick} />
        </Fragment>
      }
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}