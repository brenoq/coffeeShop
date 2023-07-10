import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartQuantity } = useCart()

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <nav>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Campina Grande, PB</span>
        </div>
        <NavLink to="/cart">
          <ShoppingCart size={22} weight="fill" />
          {cartQuantity >= 1 && <span>{cartQuantity}</span>}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
