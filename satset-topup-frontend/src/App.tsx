import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import TransactionCheckPage from "./pages/TransactionCheckPage"
import CheckoutPage from "./pages/CheckoutPage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/checkout" element={<CheckoutPage/>} />
      <Route path="/transaction-check" element={<TransactionCheckPage/>} />
    </Routes>
  )
}

export default App
