import React from 'react'
import Directory from "../../components/directory/directory.component";
import { categories } from "../../utils/category";

export default function Home() {
  return (
    <Directory categories={categories} />
  )
}
