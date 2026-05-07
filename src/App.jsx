import './App.css'
import Header from './components/Header/Header'
import SearchProduct from './components/SearchProduct/SearchProduct'
import ProductList from './components/ProductList/ProductList'
import Footer from './components/Footer/Footer'
import { useState } from 'react'

function App() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  return (
    <>
      <Header/>

      <SearchProduct
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
      />
      <ProductList
        search={search}
        category={category}
        priceFilter={priceFilter}
      />
      <Footer/>
    </>
  )
}

export default App
