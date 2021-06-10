import React from 'react'
import {Link, Image} from './styles'
const DEFAULT_iMAGE= 'https://i.imgur.com/dJa0Hpl.jpg'
export const Category = ({cover=DEFAULT_iMAGE,path='#',emoji='?'}) => {
    return (
        <Link to={path}>
            <Image src={cover} />
            {emoji}
        </Link>
    )
}
