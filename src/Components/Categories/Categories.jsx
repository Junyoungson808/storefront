import Button from '@mui/material/Button';

import { filterCategory } from '../../Store/Reducers/reducer';
import { connect } from 'react-redux';

const Categories = (props) => {

  const { filterCategory } = props;

  return (
    <>
        <h1>
        Browse our Categories
        </h1>
        <div>
        <Button onClick={() => filterCategory('food')}>Food</Button>
        <Button onClick={() => filterCategory('clothing')}>Clothing</Button>
        <Button onClick={() => filterCategory('electronics')}>Electronics</Button>
        </div>
    </>
  )
}

// adds redux state to the component prop chain
const mapStateToProps = ({ productReducer }) => {
  return {
    list: productReducer,
    categories: productReducer.categories,
  }
};

// adds dispatch actions to the component prop chain
const mapDispatchToProps = {
  filterCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
// export default Catagories;