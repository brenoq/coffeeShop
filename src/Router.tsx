import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'

import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Order } from './pages/Order'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
      </Route>
    </Routes>
  )
}
