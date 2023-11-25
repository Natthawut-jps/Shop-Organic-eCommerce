import { Route, Routes } from "react-router-dom"
import { HomePageContext } from "./pages/Homepage"
import { CategoriesContext } from "./pages/Categories"
import { NoPage } from "./pages/unities/NoPage"
import { ProductsDetailsDescriptionContext } from "./pages/ProductsDetailsDescription"


function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePageContext />} />
        <Route path="/product">
          <Route path=":categoriesParam" element={<CategoriesContext />} />
          <Route path=":categoriesP/:productList" element={<ProductsDetailsDescriptionContext />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  )
};

export default App
