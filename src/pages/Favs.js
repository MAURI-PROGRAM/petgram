import React from 'react'
import {ListOfFavs} from '../components/ListOfFavs'
import {Layout} from '../components/Layout'

export default () => (
  <Layout title='Lista de favoritos' subtitle='Lista de mascota favoritos'>
    <h1>Favs</h1>

     <ListOfFavs />
  </Layout>
) 