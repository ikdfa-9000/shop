import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductsListPage from "./pages/productslist/ProductsListPage"
import ProductPage from "./pages/productpage/ProductPage"
import WelcomePage from "./pages/welcome/WelcomePage"
import ErrorPage from "./pages/error/ErrorPage"
import LoginPage from "./pages/login/LoginPage"
import RegisterPage from "./pages/register/RegisterPage"
import React, { useState } from "react"

export const SignInContext = React.createContext(null)

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  return (
    <SignInContext.Provider value={[isSignedIn, setIsSignedIn]}>
      <BrowserRouter>
        <Routes>
          <Route path="view/:id" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<WelcomePage />} />
          <Route path="products/tshirts" element={<ProductsListPage name="t-shirts" />} />
          <Route path="products/hoodies" element={<ProductsListPage name="hoodies" />} />
          <Route path="products/hats" element={<ProductsListPage name="hats" />} />
          <Route path="products/all" element={<ProductsListPage name="all" />} />
          <Route path="/error" element={<ErrorPage></ErrorPage>} />
          <Route path="/error/product" element={<ErrorPage text="Product you are looking for doesn't exist. It's possible that it was deleted."></ErrorPage>} />
          <Route path="*" element={<ErrorPage></ErrorPage>} />
        </Routes>
      </BrowserRouter>
    </SignInContext.Provider>
  )
}

export default App
