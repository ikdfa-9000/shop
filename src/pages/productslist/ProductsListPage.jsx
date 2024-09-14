import React, { useEffect, useState } from 'react'
import classes from "./ProductsPage.module.css"
import ProductNav from '../../components/ProductsListNav/ProductNav'
import ProductsList from '../../components/ProductsList/ProductsList'
import useData from '../../../hooks/useData/useData'
import LoadingFullscreen from '../../components/LoadingHandler/LoadingFullscreen'
import PageSwitcher from '../../components/PageSwitcher/PageSwitcher'

const ProductsListPage = ({ name }) => {
  const productsPerPage = 20
  const [currPage, setCurrPage] = useState(1)
  const [productCount, setProductCount] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const category_param = name === "all" ? "" : `category=${name}`
  const url = (`http://localhost:3000/products?${category_param}&_limit=${productsPerPage}&_page=${currPage}`)
  const { result, isLoaded, isError, headers } = useData(url)
  useEffect(() => {
    if (isLoaded && !isError) {
      setProductCount(parseInt(headers.get("X-Total-Count"), 10));
    }
  }, [isLoaded]);
  useEffect(() => {
    setTotalPages(Math.ceil(productCount / productsPerPage))
    console.log("Total pages count: " + Math.ceil(productCount / productsPerPage))
  }, [productCount])
  useEffect(() => {
    console.log("Current page: " + currPage)
  }, [currPage])

  return (
    <div className={classes.productList}>
      <ProductNav pageName={name}></ProductNav>
      {isLoaded && !isError ? (
        <div>
          <ProductsList goodielist={result}></ProductsList>
          <PageSwitcher currPage={currPage} totalCount={totalPages} setCurrPage={setCurrPage}></PageSwitcher>
        </div>
        
      ) : (
        <LoadingFullscreen hasError={isError} />
      )}
    </div>
  )
}

export default ProductsListPage
