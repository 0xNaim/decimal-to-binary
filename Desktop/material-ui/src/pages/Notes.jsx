import { Container, Grid, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";
import NoteCard from "../components/NoteCard";
import fakeData from "../data/data";

const useStyles = makeStyles({
  btn: {
    marginTop: 20,
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

const Notes = () => {
  const classes = useStyles();
  const [data, setData] = useState(fakeData);

  const handleDelete = (id) => {
    const newData = data.filter(data => data.id !== id);
    setData(newData);
  }

  return (
    <Container>
      <Grid container spacing={3}>
        {data.map((data) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={data.id}>
            <NoteCard data={data} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>

      <Link className={classes.btn} to="/">
        Home
      </Link>
    </Container>
  );
};

export default Notes;
