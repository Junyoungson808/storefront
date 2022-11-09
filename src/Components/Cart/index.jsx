import { connect } from 'react-redux';


const Cart = (props) => {

  return(
    <>
      <ul>
        {
          props.cart.map((product, index) => (
            <li key={index}>
              {product.name}
            </li>
          ))
        }       
      </ul>
    </>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})


export default connect(mapStateToProps)(Cart);