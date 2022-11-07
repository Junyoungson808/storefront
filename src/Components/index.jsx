// import { connect } from 'react-redux';
// import { } from '../../Store/';

const Products = (props) => {
  console.log(props);
  // const { } = props;
  return (
    <>
    <h1>Products</h1>
    {/* {
      product.map((product, index) => (
        <div key={`candidate-${index}`}>
          <h5>{product.name} has {product.votes}</h5>
          <button onClick={() => incrementVote(product)}>Vote + 1</button>
          <button onClick={() => decrementVote(product)}>Vote - 1</button>
        </div>
      ))
    }
    <button onClick={reset}>Reset</button>
     */}
    </>
  )
}

//adds redux state to the component prop chain
// const mapStateToProps = ({ votes }) => {
//   return {
//     totalVotes: votes.totalVotes,
//     candidates: votes.candidates,
//   }
// };

//adds dispatch actions to the component prop chain
// const mapDispatchToProps = {
//   incrementVote,
//   decrementVote,
//   reset,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Products);
export default Products;