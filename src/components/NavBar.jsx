export const NavBar = ({ subtotal }) => {
  return (
    <div className="cart-total">
      <h3>Cart: ${subtotal.toFixed(2)}</h3>
    </div>
  )
}