import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { CategorySkeleton } from '../CategorySkeleton'


import { List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server-maur.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  },[showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? [1,2,3,4,5,6,7,8].map(category => <Item key={category}><CategorySkeleton /></Item>)
          : categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`}/></Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}