import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Promotion from "./components/Promotion"
import Home from "./pages/Home"
import Listing from "./pages/Listing"
import Product from "./pages/Product"

function App() {
  
  return (
    <Router>
      <Promotion />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="listing" element={<Listing />} />
        <Route path="product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
