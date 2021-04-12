import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  textField: {
    marginBottom: 20,
    display: "block",
  },
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

const Create = () => {
  const classes = useStyles();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [language, setLanguage] = useState("male");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    if (details === "") {
      setDetailsError(true);
    } else {
      setDetailsError(false);
    }

    if (title && details) {
      console.log(title, details, language);
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title, details, language }),
      })
        .then(() => history.push("/"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <Container>
      <Typography
        variant="h5"
        component="h4"
        color="primary"
        align="left"
        gutterBottom
      >
        Create a new Note.
      </Typography>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.textField}
          label="Note"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.textField}
          label="Note Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={5}
          fullWidth
          required
          error={detailsError}
        />

        <FormControl className={classes.textField}>
          <FormLabel>Programming Languages:</FormLabel>
          <RadioGroup
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <FormControlLabel
              value="javascript"
              control={<Radio />}
              label="JavaScript"
            />
            <FormControlLabel value="react" control={<Radio />} label="React" />
            <FormControlLabel value="node" control={<Radio />} label="Node" />
            <FormControlLabel
              value="python"
              control={<Radio />}
              label="Python"
            />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          disableElevation
          endIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </form>

      <Link className={classes.btn} to="/">
        Home
      </Link>
    </Container>
  );
};

export default Create;
