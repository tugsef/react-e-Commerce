import { createRef } from "react";
import { Grid, Sticky } from "semantic-ui-react";
import Navi from "./Navi";
import { Route, Routes } from "react-router-dom";
import ProductList from "../pages/ProductList";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ProductAdd from "../pages/ProductAdd";
import CartDetail from "../pages/CartDetail";
import { ToastContainer } from "react-toastify";
import ProductCategoryList from "../pages/ProductCategoryList";

export default function Dashboard() {
  const contextRef = createRef();
  
  return (
    <div ref={contextRef}>
      <ToastContainer position="bottom-right" />

      <Grid stackable>
        <Grid.Row>
          <Grid.Column>
            <Sticky context={contextRef}>
              <Navi />
            </Sticky>
          </Grid.Column>
        </Grid.Row>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route index path="product/:id" element={<ProductDetails />} />

          {/*Önemli parametreleri : nokta ile gösteriyoruz */}
          <Route path="/cart" element={<CartDetail />} />
          <Route path="/product/add" element={<ProductAdd />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/category/:id"  element={<ProductCategoryList/>}/>
        </Routes>
      </Grid>
    </div>
  );
}
