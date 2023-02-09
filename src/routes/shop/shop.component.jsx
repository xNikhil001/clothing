import React from 'react'
import CategoriesPreview from '../../components/categories-preview/categories-preview.component'
import {Routes,Route} from 'react-router-dom'
import Category from '../category/category.component'

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path={':category'} element={<Category />} />
    </Routes>
  )
}
