import { Container, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  btn: {
    marginTop: 20,
    marginRight: 20,
    backgroundColor: "#FF5722",
    color: "white",
    textDecoration: "none",
    textTransform: "uppercase",
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    borderRadius: 5,
    display: "inline-block",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography gutterBottom variant="h4">
        This is Home Component
      </Typography>

      <Link className={classes.btn} to="/notes">
        Notes
      </Link>

      <Link className={classes.btn} to="/create">
        Create
      </Link>
    </Container>
  );
};

export default Home;
