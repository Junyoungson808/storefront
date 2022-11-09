import { connect } from 'react-redux';
import { selectCategory } from '../../Store/actions';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Categories = (props) => {
  // console.log(props);

  return (
    <>
      <Container align='left' sx={{ mt: 2, ml: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          Browse Our Categories
        </Typography>
        <ButtonGroup
          variant="text"
          aria-label="text"
        >
          {props.categories.map((category, index) => (
            <Button
              key={`category-${index}`}
              onClick={() => props.selectCategory(category.name)}
            >
              {category.displayName}
            </Button>
          ))}
        </ButtonGroup>
      </Container>
    </>
  )
};


const mapStateToProps = (props) => {
  console.log(props);
  return {
    categories: props.categories.categories,
  }
};

const mapDispatchToProps = {
  selectCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
// export default Categories;