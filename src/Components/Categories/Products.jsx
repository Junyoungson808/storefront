import { connect } from 'react-redux';

const List = (props) => {
  console.log(props);

  const products = props.list.products.filter(product => product.category === props.list.activeCategory);

  return (
    <>
    <h1>DOES THIS WORK</h1>
      <div>
        {
          products.map((products, index) => (
            <div key={`products-${index}`}>


            </div>
          ))
        }
      </div>
    </>
  )
}

// adds redux state to the component prop chain
const mapStateToProps = ({ productReducer }) => {
  return {
    list: productReducer,
  }
};

// adds dispatch actions to the component prop chain
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
// export default Catagories;