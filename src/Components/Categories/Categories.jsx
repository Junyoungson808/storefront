import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import { filterCategory } from '../../Store/Reducers/reducer';
import { connect } from 'react-redux';

const Categories = (props) => {

  const { filterCategory } = props;

  return (
    <>
      <Typography gutterBottom variant="h5" component="div">
        Browse our Categories
      </Typography>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={() => filterCategory('food')}>Food</Button>
        <Button onClick={() => filterCategory('clothing')}>Clothing</Button>
        <Button onClick={() => filterCategory('electronics')}>Electronics</Button>
      </ButtonGroup>
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