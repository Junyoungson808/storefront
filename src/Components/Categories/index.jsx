import { connect } from 'react-redux';
import { selectCategory } from '../../Store/actions';
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { Box } from '@mui/material';

const Categories = (props) => {

  return (
    <>
      <h3>Categories</h3>
      <ul>
        {props.categories.map((category, index) => (
          // <Box sx={{display: 'flex', flexDirection: 'row', textAlign: 'center', margin: '25px'}}>
          <li
            key={`category-${index}`}
            onClick={() => selectCategory(category.name)}
          >
            {category.displayName}
          </li>
          // </Box>
        ))}
      </ul>
    </>
  )
};


const mapStateToProps = ({categoryReducer}) => {
  return {
    categories: categoryReducer.categories,
  }
};

const mapDispatchToProps = {
  selectCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
// export default Categories;