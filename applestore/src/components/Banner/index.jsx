import { Container, Typography, Button, Grid } from "@material-ui/core";
import "./style.css";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} className="bannerdiv">
            <Typography className="title" variant="h1">
              Welcome to the Apple Store
            </Typography>
            <Button className="shopping-button" href="#products">
              Go to Shop
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;