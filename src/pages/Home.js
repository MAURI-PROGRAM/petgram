import React, { Fragment, useContext } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import {Layout} from '../components/Layout'
export const Home = ({ categoryId }) => {
  return (
    <Layout title='Tu app de fotos de mascota' subtitle='Con Petgram puedes encontrar fotos de animales domésticos'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
} 