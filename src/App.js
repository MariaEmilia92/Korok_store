import './App.css';
import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import GrassIcon from '@mui/icons-material/Grass';
import Carousel from 'nuka-carousel';



const Login = lazy(() => import("./pages/login/login"));
const Register = lazy(() => import("./pages/register/register"));
const Catalog = lazy(() => import("./pages/catalog/catalog"));
const Cart = lazy(() => import("./pages/cart/cart"));
const Checkout = lazy(() => import("./pages/checkout/checkout"));
const Product = lazy(() => import("./pages/product/product"));
const Footer = lazy(() => import("./pages/footer/footer"));
const NotFound = lazy(() => import("./pages/not-found/not-found"));



function App() {

  useEffect(() => {
  }, [])

  return (
    <Router>
      <AppBar position={"static"}>
        <Toolbar
          style={{
            backgroundColor: "green",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" component="h2">
            <Link to="/catalog">Korok<GrassIcon style={{color:"#fff"}}/>Store</Link> 
          </Typography>

          <div>
            <IconButton edge="end">
              <Link to="/cart">
                <ShoppingCartIcon
                  style={{
                    color: "#fff",
                  }}
                />
              </Link>
            </IconButton>
            <IconButton
              edge="end"
              style={{
                marginLeft: 16,
              }}
            >
              <Link to="/login">
                <LogoutIcon
                  style={{
                    color: "#fff",
                  }}
                />
              </Link>
            </IconButton>
          </div>
        </Toolbar>

        <div style={{ width: "100%", margin: "auto", color:"green"}}>
<Carousel>
<img alt= "" style={{ width: "100%"}} src="../img/carousel/carou_3.png" />
<img alt= "" style={{ width: "100%"}} src="../img/carousel/carou_2.png" />
<img alt= "" style={{ width: "100%"}} src="../img/carousel/carou_1.png" />
</Carousel>
</div>


      </AppBar>
      <Suspense fallback={"Carregando..."}>
        <Routes>
          <Route exact path="/" element={<Catalog />} />
          <Route exact path="/catalog" element={<Catalog />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<Product />} />
          <Route exact path="/footer" element={<Footer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
