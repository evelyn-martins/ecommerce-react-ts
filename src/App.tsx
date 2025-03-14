import Footer from "./components/Footer"
import Header from "./components/Header"
import Promotion from "./components/Promotion"
//import Home from "./pages/Home"
//import Listing from "./pages/Listing"
import Product from "./pages/Product"

function App() {
  
  return (
    <>
      <Promotion/>
      <Header />
      <Product inStock={true} />
      <Footer />
    </>
  )
}

export default App
